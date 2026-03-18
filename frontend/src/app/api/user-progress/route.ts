import { NextResponse } from 'next/server';

/**
 * Next.js API Route: /api/user-progress
 * 
 * Proxies geography progress requests to the FastAPI backend.
 * Handles authentication by forwarding the Bearer token from the client.
 */

const BACKEND_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://eduecosystem-backend-503001969959.us-central1.run.app';
const API_URL = BACKEND_BASE.replace(/\/$/, '').endsWith('/api/v1')
    ? BACKEND_BASE.replace(/\/$/, '')
    : `${BACKEND_BASE.replace(/\/$/, '')}/api/v1`;

function getAuthHeader(req: Request): Record<string, string> {
    const authHeader = req.headers.get('Authorization');
    if (authHeader) {
        return { Authorization: authHeader };
    }
    return {};
}

export async function GET(req: Request) {
    try {
        const res = await fetch(`${API_URL}/progress/geography/mastered`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...getAuthHeader(req),
            },
        });

        if (!res.ok) {
            // If user has no progress yet (404), return empty array
            if (res.status === 404) {
                return NextResponse.json({ masteredIds: [], count: 0 });
            }
            const errorText = await res.text();
            console.error('Backend GET error:', res.status, errorText);
            return NextResponse.json(
                { error: 'Failed to fetch progress', detail: errorText },
                { status: res.status }
            );
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('GET /api/user-progress error:', error);
        return NextResponse.json(
            { error: 'Failed to fetch progress' },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const res = await fetch(`${API_URL}/progress/geography/mastered`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...getAuthHeader(req),
            },
            body: JSON.stringify(body),
        });

        if (!res.ok) {
            const errorText = await res.text();
            console.error('Backend POST error:', res.status, errorText);
            return NextResponse.json(
                { error: 'Failed to update progress', detail: errorText },
                { status: res.status }
            );
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('POST /api/user-progress error:', error);
        return NextResponse.json(
            { error: 'Failed to update progress' },
            { status: 500 }
        );
    }
}

