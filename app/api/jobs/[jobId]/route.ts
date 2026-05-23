import { NextResponse } from 'next/server';

export async function GET(_: Request, { params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = await params;
  return NextResponse.json({ job: { id: jobId } });
}