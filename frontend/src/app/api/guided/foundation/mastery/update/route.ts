import { NextRequest, NextResponse } from 'next/server';

const BACKEND = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get('access_token')?.value || req.headers.get('authorization') || '';
    const body = await req.json();
    const res = await fetch(`${BACKEND}/api/v1/guided/foundation/mastery/update`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}` 
      },
      body: JSON.stringify(body),
    });
    return NextResponse.json(await res.json(), { status: res.status });
  } catch {
    return NextResponse.json({ error: 'Service Unavailable' }, { status: 503 });
  }
}
