import { NextRequest, NextResponse } from 'next/server';

const BACKEND = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function GET(
  req: NextRequest,
  { params }: { params: { clipId: string } }
) {
  try {
    const token = req.cookies.get('access_token')?.value || req.headers.get('authorization') || '';
    const res = await fetch(`${BACKEND}/api/v1/guided/clip/${params.clipId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ error: 'Backend unavailable' }, { status: 503 });
  }
}
