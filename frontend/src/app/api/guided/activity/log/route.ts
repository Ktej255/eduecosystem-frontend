import { NextRequest, NextResponse } from 'next/server';

const BACKEND = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get('access_token')?.value || req.headers.get('authorization') || '';
    const body = await req.json();
    const res = await fetch(`${BACKEND}/api/v1/guided/activity/log`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    // Non-critical — silently accept
    return NextResponse.json({ status: 'accepted' });
  }
}
