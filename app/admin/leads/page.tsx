import { db } from '@/lib/db';
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

  return (
    <div>
      <h1 className="admin-page-title">Leads Management</h1>

      {!dbAvailable && (
        <div style={{
          background: 'rgba(232, 93, 4, 0.08)',
          border: '1px solid rgba(232, 93, 4, 0.3)',
          borderRadius: '8px',
          padding: '1rem 1.25rem',
          marginBottom: '1.5rem',
          color: 'var(--color-accent)',
          fontSize: '0.875rem'
        }}>
          ⚠️ Database is not connected. Add a PostgreSQL database in Render to store and view leads permanently.
        </div>
      )}

      <div className="admin-card">
        {leads.length === 0 ? (
          <p style={{ color: 'var(--color-gray-500)' }}>
            {dbAvailable ? 'No leads found yet. Leads submitted via the website will appear here.' : 'No database connected. Leads cannot be displayed.'}
          </p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                  <th style={{ padding: '0.75rem', color: 'var(--color-gray-500)', fontWeight: '600', fontSize: '0.875rem' }}>Date</th>
                  <th style={{ padding: '0.75rem', color: 'var(--color-gray-500)', fontWeight: '600', fontSize: '0.875rem' }}>Contact Info</th>
                  <th style={{ padding: '0.75rem', color: 'var(--color-gray-500)', fontWeight: '600', fontSize: '0.875rem' }}>Details</th>
                  <th style={{ padding: '0.75rem', color: 'var(--color-gray-500)', fontWeight: '600', fontSize: '0.875rem' }}>Status / Action</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead: any) => (
                  <tr key={lead.id} style={{ borderBottom: '1px solid var(--color-gray-100)', verticalAlign: 'top' }}>
                    <td style={{ padding: '1rem 0.75rem', fontSize: '0.875rem' }}>
                      {new Date(lead.createdAt).toLocaleDateString()}
                      <br/>
                      <span style={{ color: 'var(--color-gray-400)', fontSize: '0.75rem' }}>
                        {new Date(lead.createdAt).toLocaleTimeString()}
                      </span>
                    </td>
                    <td style={{ padding: '1rem 0.75rem' }}>
                      <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{lead.name}</div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)' }}>{lead.phone}</div>
                      {lead.email && <div style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)' }}>{lead.email}</div>}
                    </td>
                    <td style={{ padding: '1rem 0.75rem' }}>
                      <div style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>
                        Service: {lead.service || 'Not specified'}
                      </div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)', marginBottom: '0.25rem' }}>
                        Location: {lead.location || 'Not specified'}
                      </div>
                      {lead.message && (
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-gray-500)', background: 'var(--color-off-white)', padding: '0.5rem', borderRadius: '4px', marginTop: '0.5rem', maxWidth: '300px' }}>
                          {lead.message}
                        </div>
                      )}
                    </td>
                    <td style={{ padding: '1rem 0.75rem' }}>
                      <form action={updateLeadStatus} style={{ display: 'flex', gap: '0.5rem' }}>
                        <input type="hidden" name="id" value={lead.id} />
                        <select 
                          name="status" 
                          defaultValue={lead.status}
                          style={{ padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid var(--color-gray-200)', fontSize: '0.875rem', background: 'white' }}
                        >
                          <option value="NEW">New</option>
                          <option value="CONTACTED">Contacted</option>
                          <option value="CONVERTED">Converted</option>
                          <option value="LOST">Lost</option>
                        </select>
                        <button 
                          type="submit"
                          style={{ padding: '0.25rem 0.5rem', background: 'var(--color-gray-100)', border: '1px solid var(--color-gray-200)', borderRadius: '4px', fontSize: '0.75rem', cursor: 'pointer' }}
                        >
                          Update
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
