import { NextRequest, NextResponse } from 'next/server';
const B = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000';

export async function POST(req: NextRequest) {
  const token = req.cookies.get('access_token')?.value;
  const body = await req.json();
  const r = await fetch(`${B}/api/v1/tagging/mcq-attempt`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return NextResponse.json(await r.json(), { status: r.status });
}
