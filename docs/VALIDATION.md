# Validation record

- Production build: passed with Vite 8.0.13.
- Application source: JSX and JavaScript; no TSX or TypeScript source files.
- Declared dependency check: all 14 exact versions match the locally available installed packages used to build.
- Booking tests: all 4 passed. They cover durable SQLite persistence; server-trusted pricing; duplicate-slot protection; invalid input and consent handling; invalid dates and weekend availability; six page URLs; compiled image delivery; malformed JSON; and end-to-end HTTP booking/availability behavior.
- Tests use temporary databases and delete them afterward. No user booking data is included.
- Three.js is emitted into a separate dynamically imported chunk. Desktop/reduced-motion checks guard the import.
- Phone/tablet styles, keyboard tabs, focus states and Radix modal behavior are implemented. Browser visual QA was not performed; no claims of screenshot-verified pixel equivalence or measured Core Web Vitals are made.
- The build reports chunks above its 500 kB uncompressed advisory: main bundle approximately 505 kB (167 kB gzip); deferred Three.js approximately 515 kB (129 kB gzip). These are not build failures. The Three.js chunk is omitted on small screens and for reduced-motion users.
- A clean install could not be verified offline: the pnpm policy check lacked cached registry metadata. Checks were not disabled or bypassed. Existing readable installed dependencies were reused for the successful build. The lockfile retains exact imported package versions and upstream integrity records. A normal fresh install requires network access and the destination environment's own package policy approval.
- Registry source retrieval was unavailable for some requested component sources; Animmaster requires purchased files. The delivered implementation uses original fallback components. See INTEGRATIONS.md.
- Nothing was hosted or deployed.

## Revision 2

- Fixed the Services hero collision: `hero-services` was both a page variant and the absolutely positioned home service-links row. Page variants now consistently use `hero-page-*`; the service-links selector cannot position the page hero.
- Desktop mega menu now opens only from Services, is centered at 590px maximum width, and shows all six services in a taller single-column layout. Hover departure is delayed, other navigation items close it, click toggles it, Arrow Down enters it, and Escape/outside click dismiss it.
- Service entries navigate to actual service-card anchors, including when changing routes or navigating within the Services page.
- Stronger scroll reveals, blur-to-clear entrance transitions, card image zoom, package lift, button press feedback and new recent-work interactions. Reduced-motion settings remain respected.
- Added the reference's recent-work list to Home and Projects and its image/list recognition-style composition to About. The latter uses creative highlights rather than fabricated awards.
- Font: still Arial/Helvetica fallback. A screenshot cannot establish the original typeface conclusively; exact matching requires its font name or licensed font files. No claim of an exact font match.
- Browser visual QA remains unperformed; checks are the compiled build, targeted source regression assertions and existing booking/HTTP tests.
