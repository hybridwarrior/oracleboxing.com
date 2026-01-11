-- Waitlist Table
-- Run this SQL in Supabase SQL Editor to create the waitlist table

CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date TIMESTAMPTZ NOT NULL,
  session_id TEXT,
  event_id TEXT,
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  country TEXT,
  referrer TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_waitlist_date ON waitlist(date);
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy for service role (allows server-side inserts)
CREATE POLICY "Allow service role full access to waitlist" ON waitlist FOR ALL USING (true);
