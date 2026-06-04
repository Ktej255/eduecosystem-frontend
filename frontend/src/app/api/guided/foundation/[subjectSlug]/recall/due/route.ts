import { NextRequest, NextResponse } from 'next/server';

const BACKEND = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function GET(req: NextRequest, { params }: { params: Promise<{  subjectSlug: string  }> }) {
  try {
    const token = req.cookies.get('access_token')?.value || req.headers.get('authorization') || '';
    const res = await fetch(`${BACKEND}/api/v1/guided/foundation/recall/due?subject_slug=${(await params).subjectSlug}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return NextResponse.json(await res.json(), { status: res.status });
  } catch {
    return NextResponse.json([], { status: 503 });
  }
}
