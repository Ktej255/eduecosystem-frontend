# Accessibility Audit Checklist (WCAG 2.1 Level AA)

## ♿ Perceivable

### Text Alternatives (1.1)
- [ ] All images have meaningful alt text
- [ ] Decorative images use empty alt="" attribute
- [ ] Icons have aria-label or title
- [ ] Charts/graphs have text descriptions
- [ ] Form inputs have associated labels

### Time-Based Media (1.2)
- [ ] Videos have captions
- [ ] Audio content has transcripts
- [ ] Video descriptions provided where needed

### Adaptable (1.3)
- [ ] Semantic HTML used (header, nav, main, footer)
- [ ] Headings follow logical hierarchy (h1 → h2 → h3)
- [ ] Lists use ul/ol/dl appropriately
- [ ] Tables have proper headers
- [ ] Form labels programmatically associated
- [ ] Reading order is logical without CSS

### Distinguishable (1.4)
- [ ] Color contrast ratio ≥ 4.5:1 for normal text
- [ ] Color contrast ratio ≥ 3:1 for large text (18pt/14pt bold)
- [ ] Color not sole means of conveying information
- [ ] Text resizable up to 200% without loss of functionality
- [ ] Images of text avoided (use actual text)
- [ ] Focus indicators visible (2px outline minimum)

## ⌨️ Operable

### Keyboard Accessible (2.1)
- [ ] All functionality available via keyboard
- [ ] No keyboard traps
- [ ] Tab order is logical
- [ ] Keyboard shortcuts don't conflict
- [ ] Skip navigation links provided

### Enough Time (2.2)
- [ ] Auto-advancing content can be paused
- [ ] Session timeouts have warnings
- [ ] Users can extend time limits
- [ ] Real-time updates don't cause disruption

### Seizures (2.3)
- [ ] No content flashes more than 3 times per second
- [ ] Animations can be paused or disabled
- [ ] Motion reduced for users who prefer it

### Navigable (2.4)
- [ ] Skip to main content link present
- [ ] Page titles are descriptive
- [ ] Focus order is logical
- [ ] Link purposes clear from text or context
- [ ] Multiple ways to find pages (search, sitemap, nav)
- [ ] Headings and labels are descriptive
- [ ] Current focus is visible

## 🧠 Understandable

### Readable (3.1)
- [ ] Page language declared (lang="en")
- [ ] Language changes marked (lang attribute)
- [ ] Technical terms explained
- [ ] Abbreviations expanded on first use

### Predictable (3.2)
- [ ] Navigation consistent across pages
- [ ] Components behave consistently
- [ ] No changes on focus alone
- [ ] No changes on input alone (without warning)

### Input Assistance (3.3)
- [ ] Error messages are clear and specific
- [ ] Labels or instructions provided for inputs
- [ ] Error prevention for critical actions
- [ ] Suggestions provided for fixing errors
- [ ] Confirmation for data submission

## 🔧 Robust

### Compatible (4.1)
- [ ] Valid HTML (no parsing errors)
- [ ] Elements have complete start/end tags
- [ ] No duplicate IDs
- [ ] ARIA roles/states/properties valid
- [ ] Status messages use role="status" or aria-live

---

## 🎨 Component-Specific Checks

### Forms
- [ ] Required fields indicated
- [ ] Error messages associated with fields (aria-describedby)
- [ ] Fieldsets group related inputs
- [ ] Legends describe field groups
- [ ] Autocomplete attributes used appropriately

### Modals/Dialogs
- [ ] Focus trapped within modal
- [ ] Escape key closes modal
- [ ] Focus returns to trigger on close
- [ ] role="dialog" or role="alertdialog"
- [ ] aria-labelledby references heading
- [ ] aria-modal="true" set

### Interactive Components
- [ ] Buttons have accessible names
- [ ] Links have discernible text
- [ ] Tooltips accessible via keyboard
- [ ] Dropdowns keyboard navigable
- [ ] Tabs use appropriate ARIA roles

### Dynamic Content
- [ ] Loading states announced (aria-live)
- [ ] Success/error toasts announced
- [ ] Infinite scroll doesn't trap focus
- [ ] Dynamic updates don't disrupt users

---

## 🛠️ Testing Tools

### Automated Testing
- [ ] axe DevTools (browser extension)
- [ ] WAVE (browser extension)
- [ ] Lighthouse accessibility audit
- [ ] Pa11y CI in automated tests
- [ ] jest-axe for component tests

### Manual Testing
- [ ] Keyboard-only navigation
- [ ] Screen reader testing (NVDA/JAWS/VoiceOver)
- [ ] Zoom to 200%
- [ ] High contrast mode
- [ ] Color blindness simulation

### Screen Readers to Test
- [ ] NVDA (Windows - free)
- [ ] JAWS (Windows - paid)
- [ ] VoiceOver (macOS/iOS - built-in)
- [ ] TalkBack (Android - built-in)

---

## 📋 Priority Fixes

### Critical (Must Fix)
1. Missing alt text on images
2. Form inputs without labels
3. Insufficient color contrast
4. Keyboard traps
5. Missing skip navigation

### High (Should Fix)
1. Non-semantic HTML
2. Missing focus indicators
3. Poor heading hierarchy
4. Unclear error messages
5. Missing ARIA labels

### Medium (Nice to Fix)
1. Redundant alt text
2. Generic link text ("click here")
3. Missing lang attributes
4. Inconsistent navigation
5. Auto-playing content

---

## ✅ Testing Checklist

### Every Page Should Have:
- [ ] Unique, descriptive title
- [ ] Main landmark
- [ ] Skip to content link
- [ ] Logical heading structure
- [ ] Valid HTML
- [ ] Keyboard accessible

### Every Form Should Have:
- [ ] Labels for all inputs
- [ ] Error messages
- [ ] Required field indicators
- [ ] Fieldset grouping
- [ ] Submit button

### Every Image Should Have:
- [ ] Alt attribute
- [ ] Meaningful or empty alt text
- [ ] Good color contrast if text overlay

---

**Compliance Level:** WCAG 2.1 Level AA  
**Last Audit:** 2024-11-25  
**Next Audit:** 2024-12-25
