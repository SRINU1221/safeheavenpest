import { db } from '@/lib/db';

export default async function AdminDashboard() {
  let totalLeads = 0;
  let newLeads = 0;
  let recentLeads: any[] = [];
  let dbAvailable = true;

  try {
    totalLeads = await db.lead.count();
    newLeads = await db.lead.count({ where: { status: 'NEW' } });
    recentLeads = await db.lead.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
    });
  } catch {
    dbAvailable = false;
  }

  return (
    <div>
      <h1 className="admin-page-title">Dashboard Overview</h1>

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
          ⚠️ Database is not connected. Leads submitted through the website are being stored temporarily. Configure a persistent database to retain data across deployments.
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="admin-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <h3 style={{ color: 'var(--color-gray-500)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Total Leads</h3>
          <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-gray-800)' }}>{totalLeads}</span>
        </div>
        
        <div className="admin-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', borderLeft: '4px solid var(--color-accent)' }}>
          <h3 style={{ color: 'var(--color-gray-500)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>New Leads</h3>
          <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-accent)' }}>{newLeads}</span>
        </div>
      </div>

      <div className="admin-card">
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Recent Inquiries</h2>
        
        {recentLeads.length === 0 ? (
          <p style={{ color: 'var(--color-gray-500)' }}>
            {dbAvailable ? 'No leads found yet.' : 'Connect a database to view leads here.'}
          </p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--color-gray-200)' }}>
                  <th style={{ padding: '0.75rem', color: 'var(--color-gray-500)', fontWeight: '600', fontSize: '0.875rem' }}>Date</th>
                  <th style={{ padding: '0.75rem', color: 'var(--color-gray-500)', fontWeight: '600', fontSize: '0.875rem' }}>Name</th>
                  <th style={{ padding: '0.75rem', color: 'var(--color-gray-500)', fontWeight: '600', fontSize: '0.875rem' }}>Service</th>
                  <th style={{ padding: '0.75rem', color: 'var(--color-gray-500)', fontWeight: '600', fontSize: '0.875rem' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentLeads.map((lead: any) => (
                  <tr key={lead.id} style={{ borderBottom: '1px solid var(--color-gray-100)' }}>
                    <td style={{ padding: '1rem 0.75rem', fontSize: '0.875rem' }}>
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                    <td style={{ padding: '1rem 0.75rem', fontWeight: '500' }}>
                      {lead.name}
                    </td>
                    <td style={{ padding: '1rem 0.75rem', fontSize: '0.875rem', color: 'var(--color-gray-600)' }}>
                      {lead.service || '-'}
                    </td>
                    <td style={{ padding: '1rem 0.75rem' }}>
                      <span style={{ 
                        display: 'inline-block', 
                        padding: '0.25rem 0.5rem', 
                        borderRadius: '9999px', 
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        backgroundColor: lead.status === 'NEW' ? 'rgba(232, 93, 4, 0.1)' : 'rgba(34, 197, 94, 0.1)',
                        color: lead.status === 'NEW' ? 'var(--color-accent)' : 'var(--color-success)'
                      }}>
                        {lead.status}
                      </span>
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
