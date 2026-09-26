import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { db } from '@/lib/db';
import { sendReplyEmail } from '@/lib/email';
import { z } from 'zod';

const replySchema = z.object({
  message: z.string().min(1, 'Reply message is required'),
});

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // 🔒 Admin-only: verify session
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  const { id: leadId } = await params;

  try {
    const body = await req.json();
    const { message } = replySchema.parse(body);

    // Fetch lead details
    const lead = await db.lead.findUnique({ where: { id: leadId } });
    if (!lead) {
      return NextResponse.json({ success: false, message: 'Lead not found' }, { status: 404 });
    }

    // Save reply to database
    const reply = await db.adminReply.create({
      leadId,
      message,
      sentBy: (session.user as any).name || 'admin',
    });

    // Update lead status to CONTACTED if still NEW
    if (lead.status === 'NEW') {
      await db.lead.update({ where: { id: leadId }, data: { status: 'CONTACTED' } });
    }

    // Send email to client (only if they provided an email)
    let emailSent = false;
    if (lead.email) {
      const emailResult = await sendReplyEmail({
        toEmail: lead.email,
        toName: lead.name,
        adminMessage: message,
        leadService: lead.service,
      });
      emailSent = emailResult.success;
    }

    return NextResponse.json(
      { success: true, reply, emailSent, leadEmail: lead.email },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.issues }, { status: 400 });
    }
    console.error('Reply API error:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
