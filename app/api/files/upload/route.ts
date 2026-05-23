import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({
    ok: true,
    fileId: 'file_' + Math.random().toString(36).slice(2, 10),
    received: body,
  });
}