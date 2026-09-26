import { db } from '@/lib/db';
import Link from 'next/link';
import { revalidatePath } from 'next/cache';

export default async function LeadsManagement() {
  let leads: any[] = [];
  let dbAvailable = true;

  try {
    leads = await db.lead.findMany({
      orderBy: { createdAt: 'desc' },
    });
  } catch {
    dbAvailable = false;
  }

  // Fetch reply counts for all leads
  const replyCounts: Record<string, number> = {};
  if (dbAvailable && leads.length > 0) {
    await Promise.all(
      leads.map(async (lead) => {
        try {
          replyCounts[lead.id] = await db.adminReply.countByLeadId(lead.id);
        } catch {
          replyCounts[lead.id] = 0;
        }
      })
    );
  }

  async function updateLeadStatus(formData: FormData) {
    'use server';
    const id = formData.get('id') as string;
    const status = formData.get('status') as string;
    if (id && status) {
      try {
        await db.lead.update({ where: { id }, data: { status } });
        revalidatePath('/admin/leads');
      } catch { /* DB unavailable */ }
    }
  }

  const statusColors: Record<string, { bg: string; color: string }> = {
    NEW:       { bg: 'rgba(232, 93, 4, 0.1)',   color: '#e85d04' },
    CONTACTED: { bg: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' },
    CONVERTED: { bg: 'rgba(34, 197, 94, 0.1)',  color: '#22c55e' },
    LOST:      { bg: 'rgba(107, 114, 128, 0.1)',color: '#6b7280' },
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <h1 className="admin-page-title" style={{ margin: 0 }}>Inquiries</h1>
        <span style={{ fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>
          {leads.length} total · {leads.filter(l => l.status === 'NEW').length} new
        </span>
      </div>

      {!dbAvailable && (
        <div style={{
          background: 'rgba(232, 93, 4, 0.08)', border: '1px solid rgba(232, 93, 4, 0.3)',
          borderRadius: '8px', padding: '1rem 1.25rem', marginBottom: '1.5rem',
          color: 'var(--color-accent)', fontSize: '0.875rem'
        }}>
          ⚠️ Database not connected. Add a PostgreSQL database in Render to store leads.
        </div>
      )}

      <div className="admin-card">
        {leads.length === 0 ? (
          <p style={{ color: 'var(--color-gray-500)', padding: '1rem 0' }}>
            {dbAvailable
              ? 'No inquiries yet. When clients submit forms they will appear here.'
              : 'No database connected.'}
          </p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-gray-200)' }}>
                  {['Date', 'Client', 'Service / Location', 'Status', 'Replies', 'Action'].map(h => (
                    <th key={h} style={{ padding: '0.75rem 1rem', color: 'var(--color-gray-500)', fontWeight: '600', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map((lead: any) => {
                  const sc = statusColors[lead.status] ?? statusColors.NEW;
                  const replyCount = replyCounts[lead.id] ?? 0;

                  return (
                    <tr
                      key={lead.id}
                      style={{ borderBottom: '1px solid var(--color-gray-100)', verticalAlign: 'middle' }}
                      className="leads-table__row"
                    >
                      {/* Date */}
                      <td style={{ padding: '1rem', fontSize: '0.8rem', color: 'var(--color-gray-500)', whiteSpace: 'nowrap' }}>
                        {new Date(lead.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                        <br />
                        <span style={{ fontSize: '0.7rem', color: 'var(--color-gray-400)' }}>
                          {new Date(lead.createdAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </td>

                      {/* Client */}
                      <td style={{ padding: '1rem' }}>
                        <div style={{ fontWeight: '600', color: 'var(--color-gray-800)', marginBottom: '0.15rem' }}>{lead.name}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-gray-500)' }}>{lead.phone}</div>
                        {lead.email && (
                          <div style={{ fontSize: '0.75rem', color: 'var(--color-gray-400)' }}>{lead.email}</div>
                        )}
                      </td>

                      {/* Service / Location */}
                      <td style={{ padding: '1rem', fontSize: '0.875rem' }}>
                        <div style={{ fontWeight: '500', color: 'var(--color-gray-700)' }}>{lead.service || '—'}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-gray-400)' }}>{lead.location || '—'}</div>
                      </td>

                      {/* Status badge */}
                      <td style={{ padding: '1rem' }}>
                        <span style={{
                          display: 'inline-block', padding: '0.3rem 0.7rem', borderRadius: '9999px',
                          fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.03em',
                          background: sc.bg, color: sc.color,
                        }}>
                          {lead.status}
                        </span>
                      </td>

                      {/* Reply count */}
                      <td style={{ padding: '1rem', textAlign: 'center' }}>
                        <span style={{
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                          width: '28px', height: '28px', borderRadius: '50%', fontSize: '0.8rem', fontWeight: '700',
                          background: replyCount > 0 ? 'rgba(59,130,246,0.1)' : 'var(--color-gray-100)',
                          color: replyCount > 0 ? '#3b82f6' : 'var(--color-gray-400)',
                        }}>
                          {replyCount}
                        </span>
                      </td>

                      {/* Action */}
                      <td style={{ padding: '1rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                          <Link
                            href={`/admin/leads/${lead.id}`}
                            style={{
                              padding: '0.4rem 0.85rem', background: 'var(--color-primary)', color: 'white',
                              borderRadius: '6px', fontSize: '0.75rem', fontWeight: '600', textDecoration: 'none',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            View & Reply
                          </Link>
                          <form action={updateLeadStatus} style={{ display: 'flex', gap: '0.35rem' }}>
                            <input type="hidden" name="id" value={lead.id} />
                            <select
                              name="status"
                              defaultValue={lead.status}
                              style={{ padding: '0.4rem 0.5rem', borderRadius: '6px', border: '1px solid var(--color-gray-200)', fontSize: '0.75rem', background: 'white', color: 'var(--color-gray-700)' }}
                            >
                              <option value="NEW">New</option>
                              <option value="CONTACTED">Contacted</option>
                              <option value="CONVERTED">Converted</option>
                              <option value="LOST">Lost</option>
                            </select>
                            <button
                              type="submit"
                              style={{ padding: '0.4rem 0.6rem', background: 'var(--color-gray-100)', border: '1px solid var(--color-gray-200)', borderRadius: '6px', fontSize: '0.7rem', cursor: 'pointer', color: 'var(--color-gray-600)', fontWeight: '600' }}
                            >
                              ✓
                            </button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
