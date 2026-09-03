import { NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/db';

const leadSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email().optional().or(z.literal('')),
  service: z.string().optional(),
  location: z.string().optional(),
  message: z.string().optional(),
  source: z.string().default('website'),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = leadSchema.parse(body);

    const lead = await db.lead.create({
      name: validatedData.name,
      phone: validatedData.phone,
      email: validatedData.email || null,
      service: validatedData.service || null,
      location: validatedData.location || null,
      message: validatedData.message || null,
      source: validatedData.source,
      status: 'NEW',
    });

    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (error) {
    console.error('Lead submission error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.issues }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
