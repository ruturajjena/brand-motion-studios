-- Brand Motion Studios — entitlements schema.
-- Applied via the Supabase MCP once the dedicated project exists
-- (see lib/entitlements.ts and app/api/webhooks/stripe/route.ts).

create table if not exists public.entitlements (
  user_id uuid primary key references auth.users(id) on delete cascade,
  plan text not null check (plan in ('monthly', 'yearly', 'lifetime')),
  status text not null check (status in ('active', 'canceled', 'past_due')),
  stripe_customer_id text,
  stripe_subscription_id text,
  updated_at timestamptz not null default now()
);

alter table public.entitlements enable row level security;

-- Members can read their own entitlement row.
create policy "Users can read their own entitlement"
  on public.entitlements for select
  using (auth.uid() = user_id);

-- No insert/update/delete policy for regular users — only the service-role
-- key (used exclusively by the Stripe webhook) can write to this table,
-- which bypasses RLS entirely.
