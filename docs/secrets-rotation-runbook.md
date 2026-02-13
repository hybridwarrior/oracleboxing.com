# Secrets Rotation Runbook

## Storage Rules
- Never commit secrets, tokens, or local runtime logs/PID files.
- Keep local credentials in `.env.local` (or other ignored `.env*` files) only.
- Use deployment platform secret stores for production credentials.

## Rotation Cadence
- High-risk service credentials: every 30 days.
- Standard API keys: every 60 days.
- OAuth client secrets/tokens: every 90 days or immediately after exposure.
- Rotate immediately after accidental commit or suspected leak.

## Provider Checklist
- Vercel project secrets/environment variables.
- Stripe, Supabase, SendGrid, and any other API providers used by the app.
- Revoke exposed keys/tokens and issue replacements.

## Post-Rotation Validation
- Run `npm run check`.
- Validate key checkout/authentication flows in a smoke test.
- Confirm CI and local secret scan pass.

## Incident Workflow
- Revoke exposed credential immediately.
- Replace in local/deployed secret storage.
- Verify app behavior and logs.
- Document date, owner, and impacted systems in ops notes.
