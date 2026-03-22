import { chromium } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = 'https://eduecosystem-frontend-503001969959.us-central1.run.app';
const MAP_FILE = '../route_map.txt';
const OUTPUT_FILE = '../phase2_results.json';

async function runAudit() {
  console.log('Reading route map...');
  const mapContent = fs.readFileSync(MAP_FILE, 'utf-8');
  const urls = [];
  
  const lines = mapContent.split('\n');
  for (const line of lines) {
    if (line.startsWith('PAGE: ')) {
      urls.push(line.replace('PAGE: ', '').trim());
    }
  }
  
  console.log(`Found ${urls.length} URLs to test.`);
  
  // Try to use a persistent context if we can, or just standard.
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // 1. We must login!
  console.log('Registering/Logging in test user...');
  
  const testEmail = `audit_test_${Date.now()}@example.com`;
  const testPassword = 'Password123!';
  
  try {
    // Try to register
    await page.goto(`${BASE_URL}/register`);
    await page.waitForLoadState('networkidle');
    
    // Fill out registration if it exists
    const nameInput = page.locator('input[name="name"], input[placeholder*="Name"], input[id="name"]');
    if (await nameInput.count() > 0) await nameInput.fill('Test Auditor');
    
    const emailInput = page.locator('input[type="email"], input[name="email"]');
    if (await emailInput.count() > 0) await emailInput.fill(testEmail);
    
    const passInput = page.locator('input[type="password"], input[name="password"]').first();
    if (await passInput.count() > 0) await passInput.fill(testPassword);
    
    const passConfirm = page.locator('input[name="confirmPassword"], input[placeholder*="Confirm"]');
    if (await passConfirm.count() > 0) await passConfirm.fill(testPassword);
    
    const submitBtn = page.locator('button[type="submit"], button:has-text("Register"), button:has-text("Sign Up")');
    if (await submitBtn.count() > 0) {
      await submitBtn.click();
      await page.waitForTimeout(3000); // wait for completion
    }
  } catch (e) {
    console.log('Registration flow issue, trying to proceed anyway...', e.message);
  }

  // Attempt login just in case
  try {
    await page.goto(`${BASE_URL}/login`);
    await page.waitForLoadState('networkidle');
    const emailInput = page.locator('input[type="email"], input[name="email"]');
    if (await emailInput.count() > 0) Object.assign(emailInput, {fill: () => emailInput.fill(testEmail)});
    if (await emailInput.count() > 0) await emailInput.fill(testEmail);
    
    const passInput = page.locator('input[type="password"], input[name="password"]');
    if (await passInput.count() > 0) await passInput.fill(testPassword);
    
    const submitBtn = page.locator('button[type="submit"], button:has-text("Sign In"), button:has-text("Login")');
    if (await submitBtn.count() > 0) {
      await submitBtn.click();
      await page.waitForTimeout(3000); // wait for redirect
    }
  } catch (e) {
    console.log('Login flow issue...', e.message);
  }

  console.log('Starting Phase 2 Checks...');
  const results = [];
  
  // Check a subset first to test the script, or all if we have time.
  // Actually, checking 239 pages takes a while. We'll set a timeout for each.
  
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const fullUrl = `${BASE_URL}${url}`;
    let status = '⚠️ PARTIAL';
    let issues = 'None';
    
    console.log(`[${i+1}/${urls.length}] Testing ${url}...`);
    
    try {
      const response = await page.goto(fullUrl, { waitUntil: 'load', timeout: 8000 });
      const statusCode = response ? response.status() : 0;
      
      const pageText = await page.evaluate(() => document.body ? document.body.innerText : "");
      const isBlank = pageText.trim().length === 0;
      const hasErrorText = pageText.toLowerCase().includes('application error') || 
                           pageText.toLowerCase().includes('server error') ||
                           pageText.includes('500') ||
                           pageText.includes('Unhandled Runtime Error');
                           
      if (statusCode === 404 || pageText.includes('404') || pageText.toLowerCase().includes('not found')) {
        status = '❌ 404';
        issues = 'Route does not exist or returned 404 status';
      } else if (statusCode >= 500 || hasErrorText) {
        status = '❌ 500';
        issues = 'Server error or crash boundary triggered';
      } else if (isBlank) {
        status = '❌ BLANK';
        issues = 'Page rendered empty body';
      } else {
        // Did it redirect to login?
        if (page.url().includes('/login') && !url.includes('login')) {
             status = '⚠️ PARTIAL';
             issues = 'Redirected to /login (Auth required/Failed)';
        } else {
             status = '✅ OPENS';
        }
      }
    } catch (e) {
      if (e.message.includes('Timeout')) {
        status = '❌ BROKEN';
        issues = 'Navigation timeout (8s)';
      } else {
        status = '❌ BROKEN';
        issues = `Playwright Exception: ${e.message.split('\n')[0]}`;
      }
    }
    
    results.push({
      page: url,
      status,
      issues
    });
  }
  
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2));
  console.log(`Audit complete. Results written to ${OUTPUT_FILE}`);
  await browser.close();
}

runAudit().catch(console.error);
