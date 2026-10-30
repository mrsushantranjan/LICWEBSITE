# Security Policy & Hardening Guide

## Project: LIC Insurance Advisor Website
**Advisor:** SUDIP KUMAR PATHAK (GUDDU BABA)  
**Security Level:** Production-Hardened Static Web Application  
**Version:** 1.0.0  

---

## 1. Vulnerability Reporting Policy
If you discover a security vulnerability in this project:
1. **Do not create public GitHub issues** containing exploit details or proof-of-concepts.
2. Email the advisor directly at: `sudip.licadvisor@gmail.com` with:
   - Description of the vulnerability
   - Reproduction steps
   - Potential impact
3. Allow reasonable time for remediation before any public disclosure.

---

## 2. Security Architecture & Threat Model

### A. Zero-Database & Zero-Server-Storage Privacy
- This application operates purely on the client side without storing personal customer information in databases, `localStorage`, or `sessionStorage`.
- All enquiries submitted through the Customer Enquiry form are formatted client-side and transferred directly to official WhatsApp (`wa.me/919801764651`) on the user's device.
- No third-party data tracking, advertising pixels, or analytics trackers are installed.

### B. WhatsApp & Calling Security Hardening
- **Strict Destination Lock**: The destination number (`919801764651`) is hardcoded and validated in `src/utils/security.js`. User inputs cannot alter the recipient phone number or hijack the destination domain.
- **URI Protocol Protection**: Telephone links strictly use `tel:+919801764651`. Arbitrary protocols (`javascript:`, `data:`, `file:`) are strictly forbidden.
- **Input Sanitization**: All form inputs (Name, Mobile, Category, Notes) are sanitized via `sanitizeText()` to strip HTML tags, control characters, and parameter injection vectors.
- **Strict Indian Mobile Validation**: Customer mobile numbers are validated using `/^[6-9]\d{9}$/` ensuring exactly 10 digits starting with 6, 7, 8, or 9.
- **Reverse Tabnabbing Protection**: Every external link with `target="_blank"` strictly enforces `rel="noopener noreferrer"`. Form windows explicitly clear `window.opener = null`.

### C. Anti-Spam & Abuse Protection
- **Honeypot Trap**: An invisible form field (`honeypotField`) silently drops submissions from automated spam scrapers and bots.
- **Client-Side Cooldown / Rate Limiting**: Submissions are restricted to a minimum interval of 4 seconds to prevent repeated rapid clicks.
- **Character Length Enforcement**: Maximum character limits are strictly enforced on Name (100 chars), Mobile (14 chars), and Message (500 chars).

### D. Content Security Policy & HTTP Headers
The application includes pre-configured security headers for deployment platforms:
- **`public/_headers`**: For Cloudflare Pages & Netlify.
- **`vercel.json`**: For Vercel deployments.
- **`index.html`**: Defensive meta tags (`X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`).

```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self' https:; frame-ancestors 'none';
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

---

## 3. Secret Management & Git Hygiene
- **Never commit `.env` files**: All local environment files are ignored in `.gitignore`.
- **Public vs. Private Variables**: Any variable prefixed with `VITE_` is baked into the public JavaScript bundle by Vite. Never store private API secret keys, database connection strings, or backend passwords in `VITE_` variables.
- Use [`.env.example`](file:///Users/sushantpathak/Desktop/LIC%20WORK/.env.example) as the template for environment variables.

---

## 4. Admin Authentication Architecture Notice
- **Current State**: The website is currently an ultra-fast static web app.
- **Security Rule**: In accordance with enterprise security standards, **no fake client-side authentication** (such as hardcoded passwords or `localStorage` tokens) is implemented.
- **Future Backend Requirements**: If a dynamic CMS/Admin dashboard is added in the future, it must be supported by an authenticated backend server enforcing:
  - Argon2id / bcrypt password hashing with unique salt
  - HTTP-only, Secure, SameSite cookies
  - Server-side authorization middleware on all routes
  - CSRF tokens and login brute-force rate limiting

---

## 5. Dependency Audit & Maintenance
- Regularly audit installed packages:
  ```bash
  npm audit --registry=https://registry.npmjs.org
  ```
- Keep Vite, React, and build tools updated safely:
  ```bash
  npm outdated
  npm update
  ```
- Re-run `npm run build` after updates to verify that production bundles compile cleanly.

---

## 6. Secure Deployment Checklist
- [x] Ensure `.gitignore` excludes `.env`, `node_modules`, and `.DS_Store`.
- [x] Verify `public/_headers` and `vercel.json` are present in the build root.
- [x] Enforce HTTPS / SSL redirection on your domain provider.
- [x] Verify that production source maps are disabled (`sourcemap: false` in `vite.config.js`).
- [x] Run `npm audit --registry=https://registry.npmjs.org` to confirm 0 vulnerabilities.
- [x] Confirm that all WhatsApp buttons point strictly to `919801764651` with URL encoding.
- [x] Test that the honeypot and client-side validation prevent malformed enquiries.
