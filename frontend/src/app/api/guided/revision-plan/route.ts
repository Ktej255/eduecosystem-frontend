import { NextRequest, NextResponse } from 'next/server';

const BACKEND = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000';

export async function GET(req: NextRequest) {
  const token = req.cookies.get('access_token')?.value;
  const { searchParams } = new URL(req.url);
  const subject_slug = searchParams.get('subject_slug') ?? 'environment';

  const res = await fetch(
    `${BACKEND}/api/v1/guided/revision-plan?subject_slug=${subject_slug}`,
    { headers: { Authorization: `Bearer ${token}` }, cache: 'no-store' }
  );
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
