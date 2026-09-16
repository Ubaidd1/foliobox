# Component sources and dependency review

Reviewed the public references supplied with this task. No paid source, license key, or production account was supplied. The application runs with original JSX components; it does not pretend those components were installed from an inaccessible registry.

| Source | Evidence and delivery model | Workspace integration | Status |
| --- | --- | --- | --- |
| Animmaster Lib | https://animmasterlib.dev/ — FAQ describes a purchased Google Drive source folder with HTML/CSS/JS, React and Next.js components. No public npm package or peer manifest was available. | `src/components/integrations/animmaster/` reserves page-level hero, scroll storytelling and immersive transitions. Original Motion/GSAP hero and lazy Three.js effect provide the working implementation. | Official source integration pending licensed source ZIP. |
| Skiper UI | https://skiper-ui.com/docs/quick-start — shadcn registry, free and licensed components; documented dependencies include React, framer-motion, clsx, Tailwind, Lucide, tailwind-merge; some components use GSAP or react-use-measure. | `components.json` configures `@skiper-ui`; JSX mode is enabled. `src/components/integrations/skiper/` is reserved for functional cards and wrappers. | Public docs reviewed; source registry retrieval unavailable in this environment. No official component claimed installed. |
| Vengeance UI | https://www.vengenceui.com/docs/cli and https://www.vengenceui.com/components/mega-menu-navbar — shadcn source registry and component-level installs. | `components.json` configures `@vengeanceui`; navigation, cards and interactions stay in the UI layer. | Docs reviewed; raw source download unavailable in this environment. Original mega menu and accordion are used. |
| 21st.dev | https://21st.dev/ — a source-component collection using React, Tailwind and shadcn conventions, rather than a single runtime package. | `src/components/integrations/21st/` reserves individually selected layout blocks. No blanket package installed. | Catalog reviewed. No specific licensed layout source could be retrieved. Original editorial sections are used. |

## Shared dependency decisions

- React and React DOM are pinned together at **19.2.6**.
- Tailwind and its PostCSS adapter both use **4.2.1**. A single stylesheet (`src/styles.css`) owns tokens and preflight; don't paste an upstream component's global reset or theme.
- Motion **13.2.0**, imported from `motion/react`, is the shared Framer Motion successor API. Its transitive `framer-motion` implementation is resolved by the lockfile. Do not install an unrelated second version for a copied snippet. Normalize snippet imports to `motion/react` after checking compatibility.
- GSAP **3.15.0** handles the page-level hero entrance only, within a scoped context that reverts on unmount. Motion handles scroll transforms and UI transitions. The two engines do not animate the same transform on the same element.
- Three.js **0.185.1** is dynamically imported for the desktop hero ambient effect. It is not loaded on small screens or with reduced motion. Rendering pauses outside the viewport or in hidden tabs. No React Three Fiber dependency is needed.
- Radix UI **1.6.7** provides accessible modal and drawer behavior; `clsx` **2.1.1**, `tailwind-merge` **3.6.0**, and Lucide **1.31.0** are shared utilities.
- Libraries without fetched manifests do **not** have verified peer compatibility. Treat the above as a compatible base, not a certification of every catalog component. Read the selected registry JSON before adding new dependencies.

## Installing actual source later

1. Place purchased Animmaster files outside the source tree first and inspect their license, imports and effects. Convert eligible components to JSX. Route them through the Animmaster page-level integration entry, never through functional controls.
2. With normal network access, the documented registry CLI can retrieve a selected free component, e.g. `pnpm dlx shadcn@latest add @skiper-ui/skiper40`. Inspect its actual role before using it in this site's UI. Retain required Skiper free-tier attribution.
3. Vengeance's documented mega-menu registry URL is `https://raw.githubusercontent.com/Ashutoshx7/VengeanceUI/main/public/r/mega-menu-navbar.json`. Inspect and adapt the source, keeping its license/credits and replacing Next.js-only imports where needed.
4. Choose a specific 21st.dev block, inspect its source and author license, then place the adapted JSX in the 21st integration directory. Do not install arbitrary community snippets blindly.
5. Keep paid credentials in a private local environment file. No credentials belong in the browser bundle or committed configuration.
6. Run `pnpm build` and `pnpm test` after source integration. Verify keyboard interactions and all responsive layouts when browser testing is available.

There is no automatic purchase, login, deployment or third-party source-code claim in this deliverable.
