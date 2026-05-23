import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({
    kind: 'decode',
    text: body.text ?? 'https://example.com',
    format: 'QR_CODE',
  });
}