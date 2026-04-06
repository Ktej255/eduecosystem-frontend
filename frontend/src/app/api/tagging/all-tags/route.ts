import { NextRequest, NextResponse } from 'next/server';
const B = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000';

export async function GET(req: NextRequest) {
  const token = req.cookies.get('access_token')?.value;
  const { searchParams } = new URL(req.url);
  const ct = searchParams.get('content_type') ?? '';
  const url = `${B}/api/v1/tagging/admin/all-tags${ct ? `?content_type=${ct}` : ''}`;
  const r = await fetch(url, { headers: { Authorization: `Bearer ${token}` }, cache: 'no-store' });
  return NextResponse.json(await r.json(), { status: r.status });
}
