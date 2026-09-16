# Latest: service pages and motion refinement

- Nine dedicated service pages at /services/{id}, each with tailored overview, audience, deliverables, process, and enquiry form. Entire service cards and Learn More links navigate there; menu and footer links updated.
- Expanding service cards adapt the supplied width-expansion example. Home retains Services immediately after the circular gallery, now with a View All Projects button beneath it and larger process captions.
- Compact capsule radio choices replace large booking tiles. Visible date/time fields are removed and submit buttons are compact and centered. The new /api/enquiries endpoint stores validated unscheduled enquiries in SQLite with awaiting-scheduling status. No email is sent automatically; follow-up scheduling remains manual. Existing timed-booking API and commerce code remain preserved.
- Name-only black/orange preloader, first-viewport text reveals, arrow-fill button hover, scroll-responsive footer and oversized wordmark, and project-specific Recent Work hover/focus previews.
- Home hero service labels centered. At mobile widths, the portrait occupies a separate upper area and text sits below it on a dark background.
- From idea to delivery moved to the end of About; its cards use code, repair, and growth icons.

## Supplied reference discrepancy
Arrow Fill Button (Hover).txt, Expanding Cards (Services).txt, and Motion Footer.txt all contain the same Skiper52 / HoverExpand_001 expanding-image example. The card interaction is adapted into existing JSX and Motion. Button and footer effects are original implementations matching the requested behavior, not claimed copies of missing code.

## Validation
Production build and seven Node tests pass, including unscheduled enquiry persistence, validation, HTTP submission, and existing appointment behavior. Browser visual/interaction QA was not performed. Project previews remain illustrative concepts. No hosting or deployment performed.

---

# Latest refinement

- Gallery spans the viewport with responsive repeated cards, mouse/touch drag, keyboard arrow navigation, hover/focus expansion, and first-tap descriptions on touch. No visible gallery buttons. Hover/focus pauses automatic motion; reduced-motion preference uses native horizontal scrolling.
- Marquee playback button removed; hover/focus pause retained.
- Nine services: UI/UX and Designing are combined. All CMS platforms remain. Compact three-column megamenu has no internal scrolling; short viewports receive a condensed menu or mobile drawer.
- Home and Services now include the shared appointment form alongside Contact. Service selection uses keyboard-accessible radio tiles, with selection styling. Shared backend catalogue remains consistent.
- Production build and all five booking/API tests pass. Browser interaction/visual QA was not performed.

---

# Developer portfolio update

## Included
- `src/lib/features.js` hides commerce and pricing independently. Set either flag to true to restore its UI. Existing package data, drawer, storage, and backend price validation remain intact. With commerce disabled, appointment forms receive no selected package.
- Services is a real page link with a hover/keyboard menu positioned under its trigger, clamped to the viewport. Mobile navigation continues to link directly to pages.
- Home About teaser now follows the hero/technology strip.
- Shared developer service catalogue covers Web, App, SEO, SMM, AI/ML, Python, Data Science, UI/UX, Designing, and CMS platforms. Backend validation uses this same catalogue.
- Four process stages, post-launch support, engagement sections, patterned cards, and aligned responsive footer columns.
- Continuous technology marquee with more items, pause control, hover pause, and reduced-motion fallback.
- Circular gallery with frame-rate-independent autoplay, eased dragging, circular wrapping, arc rotation, previous/next controls, keyboard focus, pause, offscreen skipping, and cleanup.
- Layered hero parallax across main pages and project details, with independent image and content movement. Word-by-word section-description reveals complement the existing GSAP title entrance.

## Reference adaptation
The supplied Circular Gallery 2.txt uses OGL and TypeScript and has no automatic target drift. This implementation adapts its arc geometry, interpolation, and wrapping into accessible JSX/DOM links using existing dependencies. It adds time-based automatic motion. It does not claim to install OGL or reproduce its shader.
The supplied Parallax Scrolling.txt uses GSAP/ScrollTrigger and legacy Lenis. The update applies its different-layer-speed principle through the already-installed Motion scroll values, avoiding a second global scrolling controller. Existing GSAP entrances and Three ambience remain.

## Images and typography
No actual owner project screenshots or URLs were supplied. New local SVG interface previews are explicitly illustrative development studies, not real client work. Replace src/lib/data.js project images and copy with approved actual projects. No third-party work is presented as the owner's portfolio. Existing portrait is retained. Exact reference font identity cannot be established from the screenshot; the existing Arial/Helvetica stack remains.

## Validation
Production build and five Node booking/HTTP tests pass. A new test checks every developer service can book without a package. Browser visual/interaction QA was not performed; responsive breakpoints and interaction code were reviewed in source. Nothing was hosted.

## Run locally
Node 22.13+ (Node 24 recommended): `npm ci`, `npm run dev`.
Production: `npm run build`, then `npm start` (local server only).
Existing pnpm manifest and lockfile are also retained; package-lock.json records this update's successful npm install.
