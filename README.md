# Latest update

Developer portfolio revision: commerce and pricing are hidden, with code preserved. See [update notes](docs/UPDATE-NOTES.md) for changes, image limitations, motion controls, and validation. Use `npm ci` then `npm run dev` to run locally.

# Folioblox

A complete local creative portfolio and service-booking project inspired by the supplied Folioblox references. Written in **React JSX**, Tailwind CSS, Motion (Framer Motion), GSAP, and Three.js. No TSX application files. Nothing has been hosted.

## Open the included build immediately

With Node 22.13+ installed, the included compiled build runs without installing any frontend dependencies:

```sh
node server/index.mjs
```

Open `http://127.0.0.1:3001`. This is a local server, not a deployment. The source-development workflow follows below.

## Run

Requires Node **22.13+** (Node 24 recommended) and pnpm. Use the pnpm version declared in package.json; Corepack can select it automatically.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:5173`. The dev command starts Vite and the local booking API together. Stop both with Ctrl+C. If port 5173 is occupied, Vite prints its selected address.

For a local production build:

```sh
pnpm build
pnpm start
```

Open `http://127.0.0.1:3001`. The Node server serves both the compiled site and its booking API. Deep links work when served by this server; do not open `dist/index.html` directly as a file.

```sh
pnpm test
```

## Included

- Home, About, Services, Projects and Contact pages, plus four individual project pages and a 404 page.
- Reference-inspired orange portrait hero, dark editorial layout, monochrome project row, rounded photography, glass header and centered hover mega menu with no dropdown chevrons.
- Mobile off-canvas navigation with focus trapping, Escape handling, overlay dismissal and focus restoration via Radix Dialog.
- Category filters, service cards, case studies, animated FAQs, three service packages, selected-package drawer and consultation checkout.
- Appointment form with server-side validation, UTC weekday times, a 90-day booking window, duplicate-slot rejection and a downloadable tentative calendar event.
- Motion page transitions, scroll-linked imagery and project ribbon, subtle hover feedback, a scoped GSAP entrance, reduced-motion support and a lazy desktop-only Three.js atmospheric layer.
- Responsive rules for phone, tablet, desktop and wide screens, visible focus styles, semantic navigation, labels and reserved image aspect ratios.
- Wordmark and SVG favicon.

## Booking behavior and data

The Node backend stores real appointment **requests** in a local SQLite database under `server/data/bookings.sqlite`. This folder is excluded from the archive and version control. There is no public endpoint exposing personal booking details. Slot reservation is atomic through a unique database constraint. Package prices are taken from the server, not trusted from the browser. Nothing is emailed, charged or calendar-synced automatically. An `.ics` download creates only a tentative calendar item.

The contact confirmation accurately says that the request is saved, not that a meeting is confirmed. Connect an email/calendar provider and a payment provider before operating a live business; no such credentials or accounts were supplied. The service package flow is consultation checkout, not card checkout or a physical-product shop.

`server/index.mjs` binds to loopback by default. The `.env.example` lists optional runtime settings. To use a private environment file, run `node --env-file=.env server/index.mjs` after copying the example. To reset local test data, stop the server and remove `server/data` deliberately. Back up the SQLite database before upgrading a live installation.

## Customization

- `src/lib/data.js`: studio profile, concept work, descriptions, service content, FAQs and displayed package details.
- `server/booking.mjs`: canonical package prices, accepted services and time slots. Keep these aligned with the display data.
- `src/styles.css`: design tokens and responsive styling.
- `src/pages/Pages.jsx`: the five page compositions and project details.
- `src/components/BookingForm.jsx`: booking and calendar interaction.
- `docs/INTEGRATIONS.md`: the four requested sources, dependency overlap, real access limitations and next integration steps.
- `docs/ASSETS.md`: image sources and reference fidelity notes.

The brand/profile and portfolio projects are demonstration content because no separate business/content site URL was provided. Replace them with your real work, name, prices and business details before publishing. No fabricated client testimonials or awards are included.

## Validation and limits

The production bundle and four automated booking/HTTP tests were checked in this workspace using available cached dependencies. All 14 declared dependency versions match the installed packages. A fresh offline dependency-install verification could not complete because the package policy metadata was unavailable; this is recorded in the validation report. Browser visual QA was not run; responsiveness is implemented in CSS but not certified by device screenshots. The Unsplash images are remote and need internet access. The bundled reference-derived hero acts as an image fallback on network failures.

The screenshot's composition is recreated, but this is **not a pixel-identical clone**: the original high-resolution portrait, project imagery and fonts were not provided as standalone assets. The hero was reconstructed from the supplied screenshot; Unsplash photos substitute the project images. The requested library sources were reviewed but their actual component source integration remains pending where access/downloads were unavailable. See the integration report; no paid components are represented as installed.
