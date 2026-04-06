import { NextRequest, NextResponse } from 'next/server';
const B = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000';

export async function POST(req: NextRequest) {
  const token = req.cookies.get('access_token')?.value;
  const r = await fetch(`${B}/api/v1/tagging/auto-tag-clips`, {
    method: 'POST', headers: { Authorization: `Bearer ${token}` },
  });
  return NextResponse.json(await r.json(), { status: r.status });
}
