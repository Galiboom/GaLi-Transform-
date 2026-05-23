import { NextResponse } from 'next/server';
import { jobs } from '@/lib/jobs';

export function GET() {
  return NextResponse.json({ jobs });
}