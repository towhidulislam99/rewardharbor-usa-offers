# RewardHarbor Implementation Plan

## Product scope
RewardHarbor is a USA-focused CPA offer directory. The homepage presents exactly 32 curated, active-looking USA-compatible popular offer cards. Each card has an image-style visual at the top and a colored information panel below, with title, reward/eligibility context, terms note, and a clear outbound CTA. Visitors click through to the advertiser/CPA destination; the site does not claim to issue prizes itself. The landing page also includes honest trust signals, plain-language advertiser disclosure, and professional Privacy Policy, Terms of Use, and Advertiser Disclosure summaries.

## Design direction
- **Design movement:** Modern American rewards editorial: premium retail polish with concise, conversion-focused offer browsing.
- **Core principles:** trustworthy, scan-friendly, energetic but restrained, mobile-first.
- **Color philosophy:** Deep Navy communicates trust; Reward Gold signals value; Electric Blue drives action; Mint indicates positive/verified states; category accents make the directory easy to scan.
- **Layout paradigm:** A compact editorial landing page that moves from a short trust-building intro into a dense offer shelf, broken by clearly labeled advertising, followed by a full directory and utility content.
- **Signature elements:** image-top/color-panel cards, gold reward chip, and compact USA/terms metadata row.
- **Interaction philosophy:** One obvious next action per card, clear advertiser disclosure before outbound navigation, lightweight filtering, no dark patterns.
- **Animation:** 180–240ms hover lift and image scale on pointer devices only; focus-visible states; no fake countdowns, flashing, or auto-rotating content.
- **Typography:** Plus Jakarta Sans for headings and Inter for body/UI, with strong numeric emphasis for reward values.
- **Brand essence:** A trusted USA destination for discovering reward and promotional opportunities; **clear, energetic, dependable**.
- **Brand voice:** concise, transparent, benefit-led. Example lines: “Explore popular offers available to eligible participants in the USA.” and “Review the advertiser’s terms before continuing.”
- **Wordmark/logo:** RewardHarbor wordmark with a simple harbor arch/ticket mark and a small gold spark.
- **Signature brand color:** Reward Gold `#F5B942`.

## Implementation structure
- `index.html`: semantic app shell and metadata.
- `src/main.js`: offer dataset, rendering, filtering, navigation, and outbound tracking attributes.
- `src/styles.css`: responsive visual system, cards, ad slots, content sections, and accessibility states.
- `public/manus-routes.json`: declared public routes for the web runtime.
- `app.config.ts`: project logo metadata before checkpoint.
- `package.json`: pinned Vite development/build commands.

## Content and compliance choices
The initial 32 popular cards prioritize familiar USA-compatible retail, cash, food, survey, and sample categories. UK-only, unclear, or likely inactive offers are kept out of the homepage. All outbound links use `sponsored nofollow noopener` and open the advertiser destination in a new tab. Copy uses “offer,” “potential value,” and “terms apply” language; it does not make guaranteed-prize, fake urgency, fake winner, or fake social-proof claims. Adsterra slots are clearly marked as advertisements and are visually separate from offer cards. A compact five-slide featured image carousel sits directly below the hero and before the top banner, so the Popular Offers section is not pushed behind the advertising block. It auto-rotates every 4.8 seconds, pauses on hover/focus, supports arrow/dot controls, and respects reduced-motion preferences. Clicking the RewardHarbor brand resets filters, hides the full directory, and returns to the home state.

## Serving
This is a static Vite frontend with no server/database required for the first version. Future click/conversion ranking can replace the local dataset with a managed data source without changing the card contract. SEO metadata is kept in the initial HTML: USA-intent title/description, keywords, robots, Open Graph/Twitter fields, and a lightweight WebSite JSON-LD block. No temporary preview hostname is emitted as a permanent canonical URL; that should be set when the production domain is configured. The performance pass keeps font loading non-blocking, lets mobile browsers defer below-the-fold sections, and limits hover filters to pointer devices. `src/analytics.js` loads GA4 and Meta Pixel asynchronously only when real IDs are configured in `window.REWARDHARBOR_TRACKING`, and records offer-click and browse-all events. Offer CTAs use a stable 50/25/25 visitor-level experiment across “Get This Offer,” “Check Eligibility,” and “View Offer Details.” Desktop exit intent is a one-time dismissible modal; mobile uses a one-time 62%-scroll bottom sheet; a stale `#offers` hash is normalized back to the home state so the full directory never opens by default.
