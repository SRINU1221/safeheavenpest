import { NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/db';

const newsletterSchema = z.object({
  email: z.string().email(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = newsletterSchema.parse(body);

    const subscriber = await db.newsletterSubscriber.create({
      data: { email },
    });

    return NextResponse.json({ success: true, subscriber }, { status: 201 });
  } catch (error) {
    // If it's a unique constraint error (user already subscribed)
    if (error && typeof error === 'object' && 'code' in error && error.code === 'P2002') {
      return NextResponse.json({ success: true, message: 'Already subscribed' }, { status: 200 });
    }
    
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.issues }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
