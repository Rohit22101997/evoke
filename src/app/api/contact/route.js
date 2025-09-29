import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { createContact } from '@/controllers/contactController';

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const savedContact = await createContact(body);

    return NextResponse.json(
      { success: true, data: savedContact },
      { status: 201 }
    );
  } catch (err) {
    console.error('Contact creation error:', err);
    return NextResponse.json(
      { error: err.message || 'Server error' },
      { status: 400 }
    );
  }
}
