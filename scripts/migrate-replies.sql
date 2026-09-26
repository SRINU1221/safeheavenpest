-- Migration: Add admin_replies table
-- Run this on your existing PostgreSQL database (safe to run multiple times)

CREATE TABLE IF NOT EXISTS admin_replies (
  id         TEXT PRIMARY KEY DEFAULT gen_random_uuid()::TEXT,
  lead_id    TEXT NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  message    TEXT NOT NULL,
  sent_by    TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
