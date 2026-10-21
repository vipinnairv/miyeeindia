# Miyee app switcher (`<miyee-app-switcher>`)

A zero-dependency web component (Shadow DOM, so no style clashes) that adds the
9-dot Miyee Tech Labs app launcher to any page. The single source file is
`miyee-switcher.js` at the root of this repo, published with the hub site at:

    https://miyeetechlabs.miyee-india.workers.dev/miyee-switcher.js

Every app loads that one file, so editing it updates all apps within about five
minutes (it is served with a 5-minute cache, see `_headers`).

## Add it to an app (2 lines)

In the page `<head>`:

```html
<script src="https://miyeetechlabs.miyee-india.workers.dev/miyee-switcher.js" defer></script>
```

In the navbar, where the button should appear:

| App | Tag |
| --- | --- |
| Miyee Books | `<miyee-app-switcher current-app="books"></miyee-app-switcher>` |
| Miyee CFO | `<miyee-app-switcher current-app="cfo"></miyee-app-switcher>` |
| Miyee Task | `<miyee-app-switcher current-app="task"></miyee-app-switcher>` |
| Miyee PDF Pro | `<miyee-app-switcher current-app="pdf"></miyee-app-switcher>` |
| Hub site | `<miyee-app-switcher current-app="hub"></miyee-app-switcher>` |

`current-app` is optional: without it the component works out the current app
from the page URL.

## Attributes

| Attribute | Values | Default |
| --- | --- | --- |
| `current-app` | `hub`, `books`, `cfo`, `task`, `pdf` | detected from URL |
| `theme` | `auto`, `light`, `dark` | `auto` (reads `html.dark`, `data-theme`, `data-bs-theme` or `data-color-scheme`, then the OS setting) |
| `variant` | `bar` adds a slim 40px top bar with the suite name | button only |
| `align` | `left` opens the menu to the right of the button | opens to the left |
| `cmd-k` | present = Ctrl/Cmd + K also toggles the menu | off |
| `custom-domain` | `true` / `false` forces the URL set | script default |

Keyboard: Alt + M toggles, Esc closes, arrow keys move between apps.
Click outside closes. Ctrl/Cmd + click, or the small arrow icon, opens an app in a new tab.

Events: `miyee-switcher-open` and `miyee-switcher-close` bubble from the element.

## Switching to miyeetechlabs.com

The hub is live at `https://miyeetechlabs.com/` (marked `live: true`), so every
copy of the switcher links to it there. The apps keep their current
`workers.dev` / `pages.dev` addresses until each one moves to its subdomain
(`books.`, `cfo.`, `task.`, `pdf.`).

Moving an app changes its browser origin, and data its users saved in the
browser (localStorage, IndexedDB) at the old address does not follow. Before
moving an app, give users a backup/restore path, then:

1. Attach the subdomain to the app's Worker (Settings > Domains & Routes).
2. Add `live: true` to that app in `APPS` in `miyee-switcher.js`.
3. Update OAuth origins, payment webhooks and CSP entries that name the old address.

`USE_CUSTOM_DOMAIN = true` (or `custom-domain="true"`) switches every app at once.

## React

Use `integrations/react/MiyeeAppSwitcher.jsx`:

```jsx
import MiyeeAppSwitcher from "./MiyeeAppSwitcher";
<MiyeeAppSwitcher currentApp="books" />
```

TypeScript projects can declare the element once:

```ts
declare namespace JSX {
  interface IntrinsicElements {
    "miyee-app-switcher": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      "current-app"?: string; theme?: string; variant?: string; align?: string; "cmd-k"?: string; "custom-domain"?: string;
    };
  }
}
```

## Content Security Policy

If an app sends a CSP header, add the hub origin to `script-src`, for example
`script-src 'self' https://miyeetechlabs.miyee-india.workers.dev`.
