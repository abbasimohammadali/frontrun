# FrontRun ⚡

Build faster. Design better.

FrontRun v0.3 is an open-source library of 104 UI components with live previews,
search, header category navigation, technology filters, dark/light themes, and copyable HTML,
CSS, JavaScript, and Tailwind CSS snippets. It has no backend.

The home page shows one featured item from each of the 13 categories. The full
library, every category, and every component have dedicated hash-based routes
that work on static hosts such as GitHub Pages.

## Quick start

Node.js 18 or newer is required.

```sh
npm install
npm run dev
```

Create a production build with:

```sh
npm run build
```

Deploy the generated `dist` directory to GitHub Pages or another static host.

## Routes

```text
#/                          Home page
#/components                Full searchable library
#/category/buttons          A category page
#/component/glow-button     A component detail and code page
```

## Project structure

```text
src/
├── app/
│   └── App.jsx                  # Route resolution and app composition
├── components/
│   ├── layout/                  # Navbar, animated hero, and footer
│   └── library/                 # Gallery, grids, and cards
├── data/
│   ├── components/              # Components and expandable component packs
│   └── componentCatalog.js      # The combined component collection
├── hooks/
│   ├── useClipboard.js          # Reusable clipboard behavior
│   └── useHashRoute.js          # Static-host-friendly routing
├── pages/                       # Home, library, category, and detail pages
├── styles/
│   ├── tokens.css               # Theme colors and design tokens
│   ├── base.css                 # Global defaults
│   ├── layout.css               # Page layout and home animations
│   ├── components.css           # Reusable UI styles
│   └── responsive.css           # Responsive and reduced-motion rules
├── utils/                       # Preview, code, and route helpers
└── main.jsx
```

## Add a component

Add one object to the matching file inside `src/data/components/`. Categories,
technology filters, category pages, and component detail pages are generated
automatically from the collection.

```js
{
  id: 'unique-component-id',
  name: 'Component name',
  category: 'Category',
  technology: 'HTML & CSS',
  html: '<button class="example">Example</button>',
  css: `.example { /* component styles */ }`,
}
```

For JavaScript components, add a `javascript` field. Tailwind components can
provide copyable utility-class markup in `html` and an offline `preview`
object for their live gallery preview.

## Change the theme

Edit the design tokens in `src/styles/tokens.css`. Dark and light theme colors
are kept together there, so other style files should use variables instead of
hard-coded page colors.

The isolated preview background is configured in
`src/utils/createPreviewDocument.js`. Component-specific colors belong to
their entries in `src/data/components/`.

## License

MIT — see `LICENSE`.
# frontrun
# frontrun
