import { Pool } from 'pg';

// Singleton PostgreSQL connection pool
let pool: Pool | null = null;

function getPool(): Pool {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.DATABASE_URL?.includes('render.com') || process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false,
    });
  }
  return pool;
}

export const db = {
  // Run any raw SQL query
  query: async (text: string, params?: any[]) => {
    const client = getPool();
    return client.query(text, params);
  },

  // ----------- LEADS -----------
  lead: {
    create: async (data: {
      name: string; phone: string; email?: string | null;
      location?: string | null; service?: string | null;
      message?: string | null; source?: string; status?: string;
    }) => {
      const result = await getPool().query(
        `INSERT INTO leads (name, phone, email, location, service, message, source, status)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
         RETURNING *`,
        [data.name, data.phone, data.email ?? null, data.location ?? null,
         data.service ?? null, data.message ?? null,
         data.source ?? 'website', data.status ?? 'NEW']
      );
      return result.rows[0];
    },
    findMany: async (opts?: { orderBy?: any; take?: number; where?: any }) => {
      let query = 'SELECT * FROM leads';
      const params: any[] = [];
      if (opts?.where?.status) {
        params.push(opts.where.status);
        query += ` WHERE status = $${params.length}`;
      }
      query += ' ORDER BY created_at DESC';
      if (opts?.take) {
        params.push(opts.take);
        query += ` LIMIT $${params.length}`;
      }
      const result = await getPool().query(query, params);
      return result.rows.map(rowToLead);
    },
    count: async (opts?: { where?: { status?: string } }) => {
      let query = 'SELECT COUNT(*) FROM leads';
      const params: any[] = [];
      if (opts?.where?.status) {
        params.push(opts.where.status);
        query += ` WHERE status = $${params.length}`;
      }
      const result = await getPool().query(query, params);
      return parseInt(result.rows[0].count, 10);
    },
    update: async (args: { where: { id: string }; data: { status: string } }) => {
      const result = await getPool().query(
        `UPDATE leads SET status = $1, updated_at = NOW() WHERE id = $2 RETURNING *`,
        [args.data.status, args.where.id]
      );
      return result.rows[0];
    },
  },

  // ----------- USERS -----------
  user: {
    findUnique: async (args: { where: { email: string } }) => {
      const result = await getPool().query(
        'SELECT * FROM users WHERE email = $1',
        [args.where.email]
      );
      return result.rows[0] ?? null;
    },
    create: async (data: {
      name: string; email: string; passwordHash: string; role?: string;
    }) => {
      const result = await getPool().query(
        `INSERT INTO users (name, email, password_hash, role)
         VALUES ($1, $2, $3, $4) RETURNING *`,
        [data.name, data.email, data.passwordHash, data.role ?? 'admin']
      );
      return result.rows[0];
    },
  },

  // ----------- NEWSLETTER -----------
  newsletterSubscriber: {
    create: async (data: { email: string }) => {
      const result = await getPool().query(
        `INSERT INTO newsletter_subscribers (email)
         VALUES ($1) ON CONFLICT (email) DO NOTHING RETURNING *`,
        [data.email]
      );
      return result.rows[0];
    },
  },
};

// Map snake_case DB columns to camelCase objects
function rowToLead(row: any) {
  return {
    id: row.id,
    name: row.name,
    phone: row.phone,
    email: row.email,
    location: row.location,
    service: row.service,
    message: row.message,
    status: row.status,
    source: row.source,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}
