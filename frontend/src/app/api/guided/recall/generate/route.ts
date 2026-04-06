import { NextRequest, NextResponse } from 'next/server';

const BACKEND = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get('access_token')?.value || req.headers.get('authorization') || '';
    const { searchParams } = new URL(req.url);
    const module_id = searchParams.get('module_id');
    const res = await fetch(`${BACKEND}/api/v1/guided/recall/generate?module_id=${module_id}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ questions: [], message: 'Backend unavailable' }, { status: 503 });
  }
}
