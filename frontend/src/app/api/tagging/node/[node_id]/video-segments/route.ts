/**
 * /api/tagging/node/[node_id]/video-segments
 * Proxy → backend /api/v1/tagging/node/{node_id}/video-segments
 * Returns timestamp-mapped video segments for a concept node.
 */
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const BACKEND = process.env.BACKEND_URL ?? 'http://localhost:8000';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{  node_id: string  }> },
) {
  const cookieStore = await cookies();
  const token = cookieStore.get('access_token')?.value;

  const res = await fetch(
    `${BACKEND}/api/v1/tagging/node/${(await params).node_id}/video-segments`,
    {
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      cache: 'no-store',
    },
  );

  const data = await res.json().catch(() => ({ segments: [] }));
  return NextResponse.json(data, { status: res.ok ? 200 : res.status });
}
