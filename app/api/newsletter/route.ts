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

    await db.newsletterSubscriber.create({ email });

    return NextResponse.json({ success: true, message: 'Subscribed successfully' }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.issues }, { status: 400 });
    }
    // Unique constraint — already subscribed
    return NextResponse.json({ success: true, message: 'Already subscribed' }, { status: 200 });
  }
}
