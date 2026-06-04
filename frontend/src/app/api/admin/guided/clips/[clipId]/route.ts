import { NextRequest, NextResponse } from 'next/server';

const BACKEND = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{  clipId: string  }> }
) {
  try {
    const token = req.cookies.get('access_token')?.value || req.headers.get('authorization') || '';
    const body = await req.json();
    const res = await fetch(`${BACKEND}/api/v1/admin/guided/clips/${(await params).clipId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(body),
    });
    return NextResponse.json(await res.json(), { status: res.status });
  } catch {
    return NextResponse.json({ error: 'Backend unavailable' }, { status: 503 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{  clipId: string  }> }
) {
  try {
    const token = req.cookies.get('access_token')?.value || req.headers.get('authorization') || '';
    const res = await fetch(`${BACKEND}/api/v1/admin/guided/clips/${(await params).clipId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    return NextResponse.json(await res.json(), { status: res.status });
  } catch {
    return NextResponse.json({ error: 'Backend unavailable' }, { status: 503 });
  }
}
