const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes('render.com') ? { rejectUnauthorized: false } : false,
});

async function setup() {
  console.log('🔗 Connecting to PostgreSQL...');
  const sql = fs.readFileSync(path.join(__dirname, 'setup-db.sql'), 'utf-8');
  try {
    await pool.query(sql);
    console.log('✅ Database tables created successfully!');
    console.log('👤 Default admin: admin@safehavenpestcontrol.com / admin123');
  } catch (err) {
    console.error('❌ Error:', err.message);
  } finally {
    await pool.end();
  }
}

setup();
