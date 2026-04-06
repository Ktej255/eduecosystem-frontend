import { NextRequest, NextResponse } from 'next/server';

const BACKEND = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('access_token')?.value || req.headers.get('authorization') || '';
    const { searchParams } = new URL(req.url);
    const module_id = searchParams.get('module_id');
    const url = module_id
      ? `${BACKEND}/api/v1/admin/guided/clips?module_id=${module_id}`
      : `${BACKEND}/api/v1/admin/guided/clips`;
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    return NextResponse.json(await res.json(), { status: res.status });
  } catch {
    return NextResponse.json([], { status: 503 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get('access_token')?.value || req.headers.get('authorization') || '';
    const body = await req.json();
    const res = await fetch(`${BACKEND}/api/v1/admin/guided/clips`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(body),
    });
    return NextResponse.json(await res.json(), { status: res.status });
  } catch {
    return NextResponse.json({ error: 'Backend unavailable' }, { status: 503 });
  }
}
