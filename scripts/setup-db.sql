-- SafeHaven Pest Control - PostgreSQL Schema
-- Run this script once to create all tables in your PostgreSQL database

CREATE TABLE IF NOT EXISTS users (
  id            TEXT PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
  name          TEXT NOT NULL,
  email         TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role          TEXT NOT NULL DEFAULT 'admin',
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS leads (
  id         TEXT PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
  name       TEXT NOT NULL,
  phone      TEXT NOT NULL,
  email      TEXT,
  location   TEXT,
  service    TEXT,
  message    TEXT,
  status     TEXT NOT NULL DEFAULT 'NEW',
  source     TEXT NOT NULL DEFAULT 'website',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS admin_replies (
  id         TEXT PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
  lead_id    TEXT NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  message    TEXT NOT NULL,
  sent_by    TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id         TEXT PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
  email      TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Default admin user (password: admin123)
-- Password hash is bcrypt of 'admin123'
INSERT INTO users (name, email, password_hash, role)
VALUES (
  'SafeHaven Admin',
  'admin@safehavenpestcontrol.com',
  '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2uheWG/igi.',
  'admin'
) ON CONFLICT (email) DO NOTHING;
