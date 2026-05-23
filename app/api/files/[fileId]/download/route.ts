import { NextResponse } from 'next/server';

export async function GET(_: Request, { params }: { params: Promise<{ fileId: string }> }) {
  const { fileId } = await params;
  return NextResponse.json({ fileId, downloadUrl: `/download/${fileId}` });
}