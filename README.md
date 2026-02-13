# Oracle Boxing

E-commerce platform for Oracle Boxing digital products, courses, memberships, and coaching.

**Live**: [oracleboxing.com](https://oracleboxing.com) | **Hosted on**: Vercel

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 15 |
| Language | TypeScript (strict) | 5 |
| Styling | Tailwind CSS | v4 |
| UI Components | Radix UI + shadcn/ui | — |
| Animations | Framer Motion | 12 |
| Payments | Stripe | 20 |
| Database | Supabase | 2.89 |
| Email | SendGrid | 8 |
| Auth | NextAuth | 4 |
| Workflows | Vercel WDK | beta |
| E2E Tests | Playwright | 1.51 |
| Deployment | Vercel | — |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
npm install
npm run dev          # Starts on http://localhost:3000 (Turbopack)
```

### Environment Variables

Create `.env.local` with the following:

| Variable | Scope | Purpose |
|----------|-------|---------|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Client | Stripe.js |
| `STRIPE_SECRET_KEY` | Server | Stripe API |
| `NEXT_PUBLIC_FB_PIXEL_ID` | Client | Facebook Pixel |
| `FB_ACCESS_TOKEN` | Server | Facebook Conversions API |
| `NEXT_PUBLIC_SUPABASE_URL` | Client | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Client | Supabase browser client |
| `SUPABASE_SERVICE_KEY` | Server | Supabase admin operations |
| `NEXTAUTH_SECRET` | Server | NextAuth JWT signing |
| `NEXTAUTH_URL` | Server | NextAuth callback URL |
| `SENDGRID_API_KEY` | Server | Transactional email |
| `SLACK_BOT_TOKEN` | Server | Slack notifications (optional) |
| `OPS_DASHBOARD_BASE_URL` | Server | Workflow proxy target (optional) |

---

## Project Structure

```
oracleboxing.com/
├── app/                    # Next.js App Router
│   ├── (pages)/            # Public pages (homepage, shop, membership, blog, etc.)
│   ├── checkout-v2/        # Two-step checkout flow
│   ├── coaching-checkout/  # Coaching product checkout
│   ├── success/            # Post-purchase success page
│   ├── admin/              # Admin pages (auth-protected)
│   ├── quiz/               # Diagnostic quiz funnel
│   ├── onboarding/         # Multi-step onboarding
│   ├── blog/               # SEO blog articles
│   └── api/                # API routes (see below)
├── components/             # 50+ React components
│   ├── ui/                 # shadcn/ui base components
│   ├── checkout-v2/        # Checkout form + Stripe elements
│   ├── challenge/          # Challenge illustrations
│   └── quiz/               # Quiz components
├── contexts/               # React context providers
│   ├── CartContext.tsx      # Shopping cart (localStorage)
│   └── CurrencyContext.tsx  # Currency detection
├── lib/                    # Utility modules
│   ├── products.ts         # Product catalog & Stripe IDs
│   ├── currency.ts         # Multi-currency pricing
│   ├── tracking-cookies.ts # Attribution cookie system
│   ├── fbpixel.ts          # Facebook Pixel client
│   ├── purchase-tracking.ts# Purchase event tracking
│   ├── webhook-tracking.ts # Supabase event logging
│   ├── workflow-logger.ts  # WDK workflow logging
│   ├── stripe/             # Stripe client & checkout logic
│   ├── supabase.ts         # Supabase client init
│   └── security/           # Request validation, intent tokens
├── content/                # Course page copy (markdown)
├── public/                 # Fonts, images, favicons
└── tests/                  # Playwright e2e tests
```

---

## App Routes

### Public Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage (hero, testimonials, pricing, FAQ) |
| `/shop` | Product catalog |
| `/membership` | Membership details |
| `/checkout-v2` | Two-step checkout flow |
| `/coaching-checkout` | Coaching product checkout |
| `/success` | Post-purchase confirmation |
| `/blog/*` | SEO articles (6 posts) |
| `/quiz/take` | Diagnostic quiz |
| `/quiz/results-diagnostic` | Quiz results |
| `/progress-tracker` | Member progress dashboard |
| `/unlock-course` | Course access page |
| `/onboarding` | Multi-step onboarding |
| `/contact` | Contact form |
| `/feedback` | Feedback form |
| `/testimonial` | Testimonial submission |
| `/terms`, `/privacy`, `/refund` | Legal pages |

### Admin Pages (NextAuth protected)

| Route | Description |
|-------|-------------|
| `/admin/coaching-checkout` | Create coaching sessions |
| `/admin/community-checkout` | Create community sessions |
| `/auth/signin` | Admin sign-in |

### API Routes

**Checkout & Payments**

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/checkout-v2/session` | POST | Create PaymentIntent |
| `/api/checkout-v2/update` | POST | Update amount on add-on change |
| `/api/checkout-v2/update-address` | POST | Update shipping address |
| `/api/checkout-v2/recover` | GET | Recover abandoned checkout |
| `/api/payment-intent` | POST | Create payment intent (legacy) |
| `/api/coaching-checkout/*` | POST | Coaching subscriptions & split payments |
| `/api/upsell/charge` | POST | Process post-purchase upsell |

**Tracking & Analytics**

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/facebook-pageview` | POST | Facebook Pixel page view (CAPI) |
| `/api/facebook-addtocart` | POST | Facebook add-to-cart event |
| `/api/facebook-initiate-checkout` | POST | Facebook checkout init event |
| `/api/facebook-purchase` | POST | Facebook purchase event (CAPI) |

**Quiz**

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/quiz/save-result` | POST | Save quiz answers |
| `/api/quiz/get-result` | GET | Retrieve quiz results |
| `/api/quiz/capture-email` | POST | Capture email from quiz |
| `/api/quiz/join-waitlist` | POST | Join waitlist |

**Workflows (WDK)**

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/workflows/abandoned-cart/trigger` | POST | Start abandoned cart recovery |
| `/api/workflows/split-payment/trigger` | GET | Start split payment flow |
| `/api/workflows/split-payment/approve` | POST | Approve split payment |

**Other**

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/detect-location` | GET | CloudFlare IP geolocation |
| `/api/claim-access` | POST | Claim course access |
| `/api/session` | GET | Session info |
| `/api/admin/*` | POST | Admin session creation |

---

## Core Systems

### Checkout Funnel

The checkout flow (`/checkout-v2`) is a two-step process:

1. **Step 1** — Customer enters name, email, phone (creates PaymentIntent)
2. **Step 2** — Stripe payment with optional order bumps (BFFP, Tracksuit, Vault)

The primary funnel is built around the **21-Day Challenge** ($147 entry), with order bumps displayed alongside payment. Add-on selection triggers a debounced PaymentIntent update (300ms).

Abandoned cart recovery auto-fills customer info via URL params (`?fn=&ln=&email=&phone=`).

### Product Catalog

All products live in `lib/products.ts` with Stripe Price IDs, metadata codes, and pricing info.

**Product types**: `course`, `bundle`, `membership`, `coaching`, `merch`

**Metadata codes** (short identifiers used in Stripe metadata and webhooks):

| Code | Product |
|------|---------|
| `bffp` | Boxing from First Principles |
| `roadmap` | Boxing Roadmap |
| `obm` | Oracle Boxing Bundle |
| `6wc` | 6-Week Challenge |
| `21dc_entry` | 21-Day Challenge |
| `mem_monthly` | Monthly Membership |
| `mema` | Annual Membership |
| `coach1` | 1-on-1 Coaching |
| `vault2025` | 2025 Call Recording Vault |
| `tracksuit` | Tracksuit (merch) |

### Multi-Currency Pricing

Supports **6 currencies**: USD, GBP, EUR, AUD, CAD, AED.

**Detection flow**:
1. Vercel header `x-vercel-ip-country` (production)
2. `ipapi.co` fallback (localhost)
3. Default: USD

Each product maps currency → Stripe Price ID in `lib/currency.ts`. Some products (memberships) are USD-only.

### Cart System

`contexts/CartContext.tsx` — localStorage-persisted cart with:

- Max quantity of 1 per product (no stacking)
- **Auto-swap logic**: adding a higher membership tier removes the lower tier
- Physical item detection (for shipping address collection)
- Variant support for merchandise (size/color)

### Tracking & Attribution

`lib/tracking-cookies.ts` — Cookie-based attribution system (`ob_track` cookie, 30-day expiry):

- **First-touch attribution**: UTM params captured on initial landing, never overwritten
- **Last-touch attribution**: Updated on each new session
- **Facebook identifiers**: `fbclid`, `_fbc`, `_fbp`
- **Session tracking**: `session_id` (UUID), `event_id` (16-digit random)
- All cookie data is packed into Stripe checkout metadata with `cookie_` prefix

Falls back to `sessionStorage` if cookies are blocked.

### Facebook Pixel

Dual tracking for maximum attribution coverage:

- **Client-side** (`lib/fbpixel.ts`): PageView, AddToCart, InitiateCheckout, Purchase
- **Server-side** (`/api/facebook-*`): Facebook Conversions API (CAPI)
- **Deduplication**: Shared `eventID` prevents double-counting between client and server

### Stripe Integration

`lib/stripe/checkout.ts` — Handles checkout session creation with:

- Full metadata packing (customer info, attribution, Facebook IDs, product descriptions)
- Multi-item discount (10% off for 2+ items)
- Payment method support: cards, PayPal, redirect-based methods
- Split payment support for coaching products

### Supabase

`lib/supabase.ts` — Two clients (browser with anon key, server with service role key).

**Tables**:

| Table | Purpose |
|-------|---------|
| `page_views` | Visitor analytics |
| `initiate_checkout` | Funnel tracking |
| `purchases` | Conversion tracking |
| `workflow_activity_log` | WDK workflow execution logs |
| `coaching_split_payments` | Split payment state |

### WDK Workflows

Vercel Workflow DevKit integration for durable long-running processes:

- **Abandoned Cart** — Triggers on checkout initiation, sleeps 1h30m, then sends recovery link with pre-filled customer data. Includes phone cooldown tracking to prevent spam.
- **Split Payment** — Durable coaching payment flow using `createHook()` for human approval of the second payment.

Both log to `workflow_activity_log` in Supabase and send Slack notifications on failure.

### Middleware

`middleware.ts` handles:

- **Domain redirect**: `shop.oracleboxing.com` → `oracleboxing.com` (301)
- **Admin auth**: `/admin/*` and `/api/admin/*` routes require NextAuth JWT with `@oracleboxing.com` email domain

---

## Tracking Pipeline

```
User arrives (UTM params captured)
       │
       ▼
  [tracking-cookies.ts] → ob_track cookie (first-touch + last-touch)
       │
       ▼
  [CurrencyContext] → detect location & currency
       │
       ▼
  User enters info on /checkout-v2 (Step 1)
       │
       ├──▶ POST /api/checkout-v2/session → Stripe PaymentIntent created
       ├──▶ [fbpixel.ts] → client-side InitiateCheckout event
       ├──▶ [webhook-tracking.ts] → Supabase initiate_checkout + Facebook CAPI
       └──▶ [WDK] → abandoned-cart workflow starts (1h30m sleep)
       │
       ▼
  User pays (Step 2)
       │
       ├──▶ Stripe checkout.session.completed webhook
       ├──▶ Make.com → course delivery automation
       └──▶ Redirect to /success
       │
       ▼
  Success page
       │
       ├──▶ [fbpixel.ts] → client-side Purchase event
       ├──▶ [purchase-tracking.ts] → Supabase purchases + Facebook CAPI
       └──▶ [WDK] → abandoned-cart workflow cancelled
```

---

## Scripts

```bash
npm run dev              # Development server (Turbopack, port 3000)
npm run build            # Production build
npm run lint             # ESLint
npm run typecheck        # tsc --noEmit
npm run check            # lint + typecheck combined
npm run test:e2e         # Playwright end-to-end tests
npm run secrets:scan     # Pre-commit secret scanning
```

---

## Deployment

```bash
vercel --prod
```

Deployed to Vercel with custom domain `oracleboxing.com`. The `next.config.mjs` includes UTM short-link redirects (`/yt-bio`, `/ig-bio`, `/tt-bio`) and a Stripe customer portal redirect (`/customer-portal`).

---

## Related Projects

| Project | Path | Purpose |
|---------|------|---------|
| **oracle-boxing-ops** | `oracle-boxing-ops/dashboard` | Internal CEO dashboard + AI agent system |
| **clawd** | `clawd/` | AI-powered ops automation (50+ integrations) |
