import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import { auth } from '@/lib/auth';
import { db } from '@/lib/db';
import ReplyThread from './ReplyThread';
import { revalidatePath } from 'next/cache';

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // 🔒 Admin-only
  const session = await auth();
  if (!session?.user) redirect('/login');

  const { id } = await params;

  let lead: any = null;
  let replies: any[] = [];

  try {
    lead = await db.lead.findUnique({ where: { id } });
    if (!lead) notFound();
    replies = await db.adminReply.findByLeadId(id);
  } catch {
    notFound();
  }

  // Server action: update status
  async function updateStatus(formData: FormData) {
    'use server';
    const status = formData.get('status') as string;
    if (status) {
      try {
        await db.lead.update({ where: { id }, data: { status } });
        revalidatePath(`/admin/leads/${id}`);
        revalidatePath('/admin/leads');
      } catch { /* ignore */ }
    }
  }

  const statusColors: Record<string, { bg: string; color: string }> = {
    NEW:       { bg: 'rgba(232, 93, 4, 0.1)',   color: '#e85d04' },
    CONTACTED: { bg: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' },
    CONVERTED: { bg: 'rgba(34, 197, 94, 0.1)',  color: '#22c55e' },
    LOST:      { bg: 'rgba(107, 114, 128, 0.1)',color: '#6b7280' },
  };
  const sc = statusColors[lead.status] ?? statusColors.NEW;

  return (
    <div>
      {/* Back & Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <Link
          href="/admin/leads"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            color: 'var(--color-gray-500)', textDecoration: 'none', fontSize: '0.875rem',
            padding: '0.4rem 0.75rem', borderRadius: '6px', border: '1px solid var(--color-gray-200)',
            background: 'white', transition: 'all 0.15s',
          }}
        >
          ← Back to Inquiries
        </Link>
        <h1 className="admin-page-title" style={{ margin: 0 }}>Inquiry Detail</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '1.5rem', alignItems: 'start' }}>

        {/* ─── Left: Client Info Card ─── */}
        <div>
          <div className="admin-card" style={{ marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '0.8rem', fontWeight: '700', marginBottom: '1.25rem', color: 'var(--color-gray-700)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Client Information
            </h2>

            <div className="lead-detail__field">
              <span className="lead-detail__label">Name</span>
              <span className="lead-detail__value lead-detail__value--bold">{lead.name}</span>
            </div>
            <div className="lead-detail__field">
              <span className="lead-detail__label">Phone</span>
              <a href={`tel:${lead.phone}`} className="lead-detail__value lead-detail__value--link">
                📞 {lead.phone}
              </a>
            </div>
            {lead.email && (
              <div className="lead-detail__field">
                <span className="lead-detail__label">Email</span>
                <a href={`mailto:${lead.email}`} className="lead-detail__value lead-detail__value--link">
                  ✉️ {lead.email}
                </a>
              </div>
            )}
            <div className="lead-detail__field">
              <span className="lead-detail__label">Service</span>
              <span className="lead-detail__value">{lead.service || '—'}</span>
            </div>
            <div className="lead-detail__field">
              <span className="lead-detail__label">Location</span>
              <span className="lead-detail__value">{lead.location || '—'}</span>
            </div>
            <div className="lead-detail__field">
              <span className="lead-detail__label">Source</span>
              <span className="lead-detail__value" style={{ textTransform: 'capitalize' }}>{lead.source}</span>
            </div>
            <div className="lead-detail__field">
              <span className="lead-detail__label">Received</span>
              <span className="lead-detail__value">
                {new Date(lead.createdAt).toLocaleString('en-IN', {
                  day: '2-digit', month: 'short', year: 'numeric',
                  hour: '2-digit', minute: '2-digit',
                })}
              </span>
            </div>
          </div>

          {/* Status Card */}
          <div className="admin-card">
            <h2 style={{ fontSize: '0.8rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--color-gray-700)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Status
            </h2>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ display: 'inline-block', padding: '0.35rem 0.85rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: '700', background: sc.bg, color: sc.color }}>
                {lead.status}
              </span>
            </div>
            <form action={updateStatus} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <select
                name="status"
                defaultValue={lead.status}
                style={{ flex: 1, padding: '0.5rem', borderRadius: '6px', border: '1px solid var(--color-gray-200)', fontSize: '0.875rem', background: 'white' }}
              >
                <option value="NEW">New</option>
                <option value="CONTACTED">Contacted</option>
                <option value="CONVERTED">Converted</option>
                <option value="LOST">Lost</option>
              </select>
              <button
                type="submit"
                style={{ padding: '0.5rem 1rem', background: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '6px', fontSize: '0.875rem', fontWeight: '600', cursor: 'pointer' }}
              >
                Update
              </button>
            </form>
          </div>
        </div>

        {/* ─── Right: Message + Thread ─── */}
        <div>
          {/* Original Message */}
          {lead.message && (
            <div className="admin-card" style={{ marginBottom: '1.25rem' }}>
              <h2 style={{ fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.75rem', color: 'var(--color-gray-700)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Client&apos;s Message
              </h2>
              <div className="lead-original-message">
                <span className="lead-original-message__icon">💬</span>
                <p className="lead-original-message__text">{lead.message}</p>
              </div>
            </div>
          )}

          {/* Reply Thread (client component) */}
          <div className="admin-card">
            <ReplyThread
              leadId={lead.id}
              leadEmail={lead.email}
              initialReplies={replies}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
