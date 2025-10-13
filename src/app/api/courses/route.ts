import { NextResponse } from 'next/server';
import data from './data.json';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  const course = Array.isArray(data) ? data.find(c => c.id === id) : null;

  if (!course) {
    return NextResponse.json({ error: 'Course not found' }, { status: 404 });
  }

  return NextResponse.json(course);
}
