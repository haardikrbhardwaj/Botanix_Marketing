# BotaniX marketing site

Next.js (App Router) marketing site + Universal Link entry points for the
BotaniX iOS app. Deploys on Vercel.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Pages

| Route                  | Purpose                                              |
| ---------------------- | ---------------------------------------------------- |
| `/`                    | Landing: hero, features, pricing, App Store link     |
| `/subscribe/growth`    | Universal Link target — Growth plan (₹499/mo)        |
| `/subscribe/unlimited` | Universal Link target — Unlimited plan (₹999/3mo)    |
| `/paywall`             | Universal Link target — generic paywall entry        |
| `/privacy`             | Privacy policy (placeholder — needs legal review)    |
| `/support`             | Support / contact (App Store "Support URL")          |

The `/subscribe/*` and `/paywall` pages are plain fallback pages. When opened on
iOS **with the app installed**, iOS intercepts the URL at the OS level and opens
the app before the page renders — no JS redirect needed. Everyone else sees the
"Get BotaniX" fallback with the App Store link.

## Before you ship — fill in real values

Search the repo for `TODO` and replace:

- `APP_STORE_URL` in `app/leaf.js` — the real App Store link.
- `support@example.com` in `app/support/page.js` and `app/privacy/page.js`.
- Privacy policy content — **must be reviewed by a lawyer.**
- The AASA file (see below).

## Universal Links / AASA setup

1. Get your **Apple Developer Team ID**, the app's **bundle identifier**, and
   the **domain** you're pointing here.
2. Copy the template to the real (extension-less) filename and fill in
   `TEAMID.BUNDLEID`:

   ```bash
   cp public/.well-known/apple-app-site-association.template \
      public/.well-known/apple-app-site-association
   # then edit appID to e.g. ABCDE12345.com.botanix.app
   ```

   `appID` = `<TeamID>.<bundleID>`. Leave `paths` as
   `["/paywall", "/subscribe/*"]`.
3. In Xcode, add the **Associated Domains** capability with
   `applinks:yourdomain.com`.

The `Content-Type: application/json` header on this file is set in
`next.config.js` — Apple rejects anything else.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **New Project → import the repo**. Framework auto-detects as
   Next.js; no config needed. Deploy.

### Connect a custom domain

1. Vercel project → **Settings → Domains → Add** your domain.
2. At your DNS provider, add the record Vercel shows:
   - Apex (`botanix.com`): `A` record → `76.76.21.21`, **or**
   - Subdomain (`www`): `CNAME` → `cname.vercel-dns.com`.
3. Wait for Vercel to show the domain as **Valid** (SSL issued automatically).
4. Use the **exact domain** in your `applinks:` entry in Xcode.

## AASA verification checklist (do this before enabling Associated Domains)

- [ ] File exists at `https://yourdomain.com/.well-known/apple-app-site-association`
- [ ] **No file extension** in the URL
- [ ] Returns **HTTP 200** with **no redirect** (test the apex AND `www` — pick
      the one your Xcode `applinks:` uses)
- [ ] `Content-Type: application/json`
- [ ] Body is valid JSON with your real `TEAMID.BUNDLEID`

```bash
# Check headers + status (should be 200, application/json, no 30x)
curl -sSI https://yourdomain.com/.well-known/apple-app-site-association

# Check the JSON body
curl -sS https://yourdomain.com/.well-known/apple-app-site-association

# Cross-check with Apple's CDN validator (may lag a few hours after deploy)
curl -sS "https://app-site-association.cdn-apple.com/a/v1/yourdomain.com"
```

If any box fails, Associated Domains won't activate on device. Re-deploy and
recheck after DNS/SSL fully propagates.
