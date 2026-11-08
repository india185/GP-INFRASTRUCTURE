/*
# Create inquiries table for contact form submissions

1. New Tables
- `inquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the person submitting the inquiry
  - `email` (text, not null) — email to reply to
  - `phone` (text, not null) — phone number
  - `service` (text, not null) — which service they are interested in
  - `message` (text, not null) — the inquiry body
  - `status` (text, default 'new') — tracking status for the inquiry
  - `created_at` (timestamptz, default now()) — when the inquiry was submitted

2. Security
- Enable RLS on `inquiries`.
- Grant INSERT to `anon, authenticated` so visitors can submit inquiries without signing in.
- Grant SELECT/UPDATE/DELETE only to `authenticated` (admin staff) — NOT to anon, so visitors cannot read or modify other people's inquiries.
- INSERT policy allows anyone (the contact form is public); all other verbs require authentication.
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON inquiries TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON inquiries TO authenticated;

DROP POLICY IF EXISTS "anon_insert_inquiry" ON inquiries;
CREATE POLICY "anon_insert_inquiry" ON inquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_select_inquiries" ON inquiries;
CREATE POLICY "authenticated_select_inquiries" ON inquiries FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "authenticated_update_inquiries" ON inquiries;
CREATE POLICY "authenticated_update_inquiries" ON inquiries FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_delete_inquiries" ON inquiries;
CREATE POLICY "authenticated_delete_inquiries" ON inquiries FOR DELETE
  TO authenticated USING (true);
