import { NextRequest, NextResponse } from 'next/server';
const B = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000';

export async function DELETE(req: NextRequest, { params }: { params: { tag_id: string } }) {
  const token = req.cookies.get('access_token')?.value;
  const r = await fetch(`${B}/api/v1/tagging/admin/${params.tag_id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
  return NextResponse.json(await r.json(), { status: r.status });
}
