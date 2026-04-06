import { NextRequest, NextResponse } from 'next/server';
const B = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000';

export async function GET(req: NextRequest) {
  const token = req.cookies.get('access_token')?.value;
  const { searchParams } = new URL(req.url);
  const threshold = searchParams.get('threshold') ?? '60';
  const limit     = searchParams.get('limit')     ?? '10';
  const r = await fetch(
    `${B}/api/v1/tagging/weak-concepts?threshold=${threshold}&limit=${limit}`,
    { headers: { Authorization: `Bearer ${token}` }, cache: 'no-store' }
  );
  return NextResponse.json(await r.json(), { status: r.status });
}
