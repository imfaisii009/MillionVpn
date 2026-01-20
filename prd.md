# Product Requirements Document (PRD)
## MillionVPN - Landing Website

---

## 1. Product Overview

**Product Name:** MillionVPN
**Product Type:** Subscription-based VPN Service Landing Website
**Tech Stack:** Next.js + Tailwind CSS
**Target Audience:** Global (English primary)

### Vision Statement
Create a modern, conversion-optimized landing website for MillionVPN that communicates trust, speed, and value while driving subscription sign-ups through Stripe integration.

---

## 2. Design Specifications

### Color Scheme (ProtonVPN-inspired)
| Element | Color |
|---------|-------|
| Primary Brand | Purple `#6D4AFF` |
| Background | White `#FFFFFF`, Light Gray `#F6F7F9` |
| Accent | Teal `#1F7170`, Light Purple `#E2DBFF` |
| CTA Buttons | Purple `#6D4AFF` with white text |
| Trust/Security | Emerald Green |

### Typography
- **Headlines:** Modern sans-serif (Inter or similar)
- **Body:** Inter font family
- **Style:** Clean, minimalist, professional

### Visual Style
- Light mode dominant
- Subtle gradients and shadows
- Custom SVG icons
- High contrast for readability
- Mobile-first responsive design

---

## 3. Website Structure & Pages

### 3.1 Homepage (Landing Page)

#### Hero Section
- **Headline:** "Million Reasons to Stay Protected" or "Secure Your Digital Life with MillionVPN"
- **Subheadline:** "Fast, Private & Affordable VPN Protection"
- **Key highlights:**
  - 90% OFF on 2-year plan
  - 5 devices simultaneously
  - 30-day money-back guarantee
- **CTA Buttons:** "Get Started" | "Try 7 Days Free"
- **Trust indicator:** Star rating with review count

#### Features Section
Display 6 core features in card/grid layout:

1. **Military-Grade Encryption**
   - AES-256 encryption standard
   - Government-level protection

2. **Strict No-Logs Policy**
   - Zero activity logging
   - Complete privacy

3. **Global Server Network**
   - 100+ countries
   - 1,000+ servers worldwide

4. **Kill Switch**
   - Auto-blocks if VPN drops
   - Always-on protection

5. **Lightning Fast Speeds**
   - 10 Gbps servers
   - Unlimited bandwidth

6. **Easy to Use**
   - One-click connect
   - No technical knowledge needed

#### How It Works Section
3-step visual guide:
1. **Choose Your Plan** - Select monthly, yearly, or 2-year subscription
2. **Download the App** - Available on all your devices
3. **Connect & Browse** - One tap to secure your connection

#### Pricing Section
| Plan | Price | Billing | Discount |
|------|-------|---------|----------|
| Monthly | $4.99/mo | Billed monthly | 67% OFF |
| 1 Year | $3.99/mo | $47.88/year | 73% OFF |
| 2 Years | $1.99/mo | $47.76 total | **90% OFF - BEST VALUE** |

**All plans include:**
- 5 simultaneous devices
- Unlimited bandwidth
- 100+ server locations
- 10 Gbps speed
- Kill switch
- Split tunneling
- Ad blocker
- 24/7 support
- 7-day free trial
- 30-day money-back guarantee

#### Platforms Section
Supported platforms with download links:
- Windows
- macOS
- iOS
- Android
- Linux
- Chrome Extension
- Firefox Extension

#### Testimonials Section
3-4 customer reviews with:
- Star rating (4.5-5 stars)
- Quote
- Customer name/identifier

#### FAQ Section
Expandable accordion with common questions:
- What is a VPN?
- Is MillionVPN safe?
- Can I use on multiple devices?
- How do I cancel?
- What payment methods accepted?
- Is there a free trial?

#### CTA Banner
Final conversion section:
- "Ready to Protect Your Privacy?"
- "Start Your 7-Day Free Trial"
- Get Started button

### 3.2 Pricing Page
- Detailed plan comparison
- Feature checklist per plan
- Stripe checkout integration
- Money-back guarantee badge

### 3.3 Features Page
- Expanded feature descriptions
- Technical specifications
- Use cases (streaming, gaming, privacy, travel)

### 3.4 Help Center
- Setup guides per platform
- FAQs organized by category
- Troubleshooting articles
- Contact support form

### 3.5 Download Page
- Platform detection (auto-suggest)
- Download buttons per OS
- System requirements
- Installation instructions

### 3.6 Legal Pages
- Privacy Policy
- Terms of Service
- Refund Policy

---

## 4. Core Features & USPs

### Primary Selling Points (in order of prominence)

1. **Speed-Focused**
   - 10 Gbps server speeds
   - Unlimited bandwidth
   - Optimized for streaming & gaming

2. **Privacy-First**
   - Strict no-logs policy
   - AES-256 encryption
   - Kill switch protection

3. **Best Value**
   - Starting at $1.99/mo
   - 90% discount on 2-year plan
   - 7-day free trial

4. **Ease of Use**
   - One-click connection
   - Intuitive interface
   - Works on all devices

---

## 5. Technical Requirements

### Frontend
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React or Heroicons
- **Forms:** React Hook Form

### Integrations
- **Payments:** Stripe (subscriptions)
- **Analytics:** Google Analytics / Plausible
- **Email:** Newsletter signup (optional)

### Performance Targets
- Lighthouse score: 90+
- First Contentful Paint: < 1.5s
- Core Web Vitals: Pass all

### SEO Requirements
- Meta tags for all pages
- Open Graph images
- Sitemap.xml
- robots.txt
- Schema markup for pricing

---

## 6. User Flows

### Primary Flow: Free Trial Sign-up
1. User lands on homepage
2. Clicks "Try 7 Days Free"
3. Selects plan
4. Enters email
5. Enters payment (Stripe - charged after trial)
6. Account created
7. Redirected to download page

### Secondary Flow: Direct Purchase
1. User lands on homepage
2. Scrolls to pricing or clicks "Pricing"
3. Selects plan
4. Completes Stripe checkout
5. Account created
6. Redirected to download page

---

## 7. Pages to Build

| Page | Priority | Description |
|------|----------|-------------|
| Homepage | P0 | Main landing page with all sections |
| Pricing | P0 | Detailed pricing with Stripe checkout |
| Download | P0 | Platform downloads |
| Features | P1 | Expanded feature details |
| Help Center | P1 | FAQs and guides |
| Privacy Policy | P1 | Legal requirement |
| Terms of Service | P1 | Legal requirement |
| Refund Policy | P1 | 30-day guarantee details |

---

## 8. Components to Build

### Layout Components
- [ ] Header/Navigation
- [ ] Footer
- [ ] Mobile menu

### Homepage Sections
- [ ] Hero section
- [ ] Features grid
- [ ] How it works
- [ ] Pricing cards
- [ ] Platforms/Downloads
- [ ] Testimonials
- [ ] FAQ accordion
- [ ] CTA banner

### Shared Components
- [ ] Button (primary, secondary, outline)
- [ ] Card
- [ ] Badge/Tag
- [ ] Accordion
- [ ] Modal
- [ ] Form inputs
- [ ] Loading states

---

## 9. Content Requirements

### Copy Needed
- Hero headline and subheadline
- Feature descriptions (6)
- How it works steps (3)
- Pricing plan descriptions
- FAQ questions and answers (8-10)
- Testimonials (3-4)
- Legal pages content

### Assets Needed
- MillionVPN logo (SVG)
- Platform icons (Windows, Mac, iOS, Android, Linux, browsers)
- Feature icons (6)
- Hero illustration/graphic
- Trust badges
- App screenshots (optional)

---

## 10. Success Metrics

- Conversion rate: Landing → Free Trial > 5%
- Conversion rate: Free Trial → Paid > 30%
- Bounce rate: < 40%
- Page load time: < 2 seconds
- Mobile traffic conversion parity with desktop

---

## 11. Implementation Plan

### Phase 1: Foundation
1. Set up Next.js project with Tailwind
2. Configure color scheme and typography
3. Build layout components (Header, Footer)
4. Create reusable UI components

### Phase 2: Homepage
1. Build Hero section
2. Build Features section
3. Build How It Works section
4. Build Pricing section
5. Build Testimonials section
6. Build FAQ section
7. Build CTA section

### Phase 3: Supporting Pages
1. Pricing page with Stripe integration
2. Download page
3. Features page
4. Help Center

### Phase 4: Legal & Polish
1. Privacy Policy, Terms, Refund Policy
2. SEO optimization
3. Performance optimization
4. Mobile responsiveness testing
5. Cross-browser testing

---

## 12. Verification & Testing

### Manual Testing
- [ ] All pages load correctly
- [ ] Responsive design on mobile/tablet/desktop
- [ ] Stripe checkout flow works
- [ ] All links functional
- [ ] Forms validate and submit

### Performance Testing
- [ ] Run Lighthouse audit (target 90+)
- [ ] Test Core Web Vitals
- [ ] Test on slow 3G connection

### Cross-Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

---

## 13. Out of Scope (Phase 2)

- User authentication/dashboard
- Blog section
- Multi-language support
- Affiliate/Referral program
- Live chat support
- App downloads (actual VPN apps)

---

## Appendix: Reference Sites

- **Content Reference:** https://enovavpn.com/
- **Design Reference:** https://protonvpn.com/
