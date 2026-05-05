# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (typically binds to :3000, increments if busy)
npm run build    # production build — runs TypeScript type checking
npm run start    # serve production build
```

No test runner or lint script is configured in `package.json`.

## Architecture

This is a **Next.js 15 headless frontend** for a WordPress-backed studio site. It was originally scaffolded from the Vercel portfolio-blog-starter template, which is why dead MDX code still exists in `app/blog/utils.ts` — ignore those functions (`parseFrontmatter`, `getMDXFiles`, `getBlogPosts`).

### Two source trees — only `app/` is active

| Tree | Status | Notes |
|---|---|---|
| `app/` | **Active** | Pages, components, routing |
| `src/` | **Dead** | Legacy Payload CMS scaffold — not imported anywhere, safe to delete |

All pages live under `app/` using Next.js App Router. The root layout is `app/layout.tsx`.

### WordPress data layer

All CMS data comes from the WordPress REST API hosted at Hostinger:

- **`lib/wordpress.ts`** — low-level HTTP client (`wordPressFetch<T>`), TypeScript interfaces (`WordPressPost`, `WordPressCategory`, `WordPressTag`), and fetch functions. Uses Node's `https` module with `rejectUnauthorized: false` because the Hostinger cert fails Windows Schannel revocation checks. Also strips PHP `WP_DEBUG` warnings that prefix the JSON response before parsing.
- **`lib/wordpress-utils.ts`** — `transformWordPressPost()` maps a `WordPressPost` to the `BlogPost` shape used by the UI.
- **`app/blog/utils.ts`** — `getWordPressPosts()` and `getAllBlogPosts()` call the above; these are the functions pages actually use.

### Environment variables

```
NEXT_PUBLIC_WORDPRESS_URL=   # public WordPress base URL
WORDPRESS_API_URL=           # must be https://<host>/wp-json/wp/v2  (include /wp/)
```

### Styling

Global styles use the **SCSS 7-1 pattern** under `styles/`. Entry point is `styles/main.scss`, imported once in `app/layout.tsx`. Do not import `app/global.css` — it is superseded and can be deleted.

```
styles/
├── abstracts/   # SCSS variables ($color-primary etc.) and mixins
├── base/        # resets, typography, .prose styles
├── components/  # .wp-content blog styles
├── layout/      # header, footer
├── pages/       # per-page styles
├── themes/      # dark mode overrides
└── vendors/     # @import 'tailwindcss'
```

**Violet palette** is defined as SCSS variables in `styles/abstracts/_variables.scss` and applied via Tailwind utility classes (`violet-50` through `violet-700`, `[#2E1065]` for the deep CTA background).

Tailwind v4 (alpha) is in use — config is in `tailwind.config.mjs`. Component classes use Tailwind utilities directly; no CSS modules.

### Static assets

`public/images/` holds static images organised by type:
- `logos/` — brand SVGs (raccoon-soft-logo.svg is the header logo)
- `portfolio/` — project screenshots
- `team/` — staff photos

WordPress media is served directly from Hostinger. The `next.config.js` `remotePatterns` must include the Hostinger hostname for `next/image` to work.

### Known WordPress quirk

The live WordPress instance outputs a PHP warning (`WP_DEBUG` constant defined twice in `wp-config.php`) before every API response. `wordPressFetch` strips this by finding the first `[` or `{` in the response before calling `JSON.parse`. Fix: remove the duplicate `define('WP_DEBUG', ...)` on line 99 of the remote `wp-config.php`.
