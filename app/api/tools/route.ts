import { NextResponse } from 'next/server';
import { tools } from '@/lib/tools';

export function GET() {
  return NextResponse.json({ tools });
}