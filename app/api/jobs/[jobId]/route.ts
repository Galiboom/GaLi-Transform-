import { NextResponse } from 'next/server';
import { getJobById } from '@/lib/jobs';

export async function GET(_: Request, { params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = await params;
  const job = getJobById(jobId);

  if (!job) {
    return NextResponse.json({ job: null, error: 'JOB_NOT_FOUND' }, { status: 404 });
  }

  return NextResponse.json({ job });
}
