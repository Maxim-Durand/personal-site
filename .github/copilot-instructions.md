# Copilot Instructions for Personal Website

## Architecture Overview

This is a React-based JAMStack personal portfolio site built with Create React App. The architecture follows a data-driven approach where content lives in JavaScript/Markdown files (`src/data/`) and is consumed by presentational components.

**Key architectural patterns:**
- **Page-Layout-Component hierarchy**: Pages (`src/pages/`) wrap layout (`src/layouts/Main.js`) which provides Navigation, SideBar, Analytics, and SEO via react-helmet-async
- **Data-driven content**: All personal content (resume, projects, contact info) lives in `src/data/` as plain JS exports, making updates straightforward without touching components
- **Lazy loading**: All routes in `src/App.js` use React.lazy() for code splitting - check bundle sizes with `npm run analyze`
- **Static pre-rendering**: Uses react-snap during `npm run predeploy` to generate static HTML for all routes for SEO and performance

## Development Workflow

**Starting development:**
```bash
npm start  # Starts dev server at localhost:3000
```

**Code quality checks:**
```bash
npm run lint      # ESLint with Airbnb config - runs with --fix
npm test          # Jest tests - components in src/__tests__/
```

**Building and deploying:**
```bash
npm run build     # Creates optimized production build in build/
npm run predeploy # Build + react-snap for static generation
```

Deployment happens automatically via GitHub Actions (`.github/workflows/github-pages.yml`) on push to `main`. The workflow uses Node version from `.nvmrc` and sets `REACT_APP_GA_TRACKING_ID` for analytics.

## Project-Specific Conventions

**Component style:**
- Use **arrow function components** (enforced by ESLint rule `react/function-component-definition`)
- Always define PropTypes for type safety (see `src/layouts/Main.js` for examples)
- Prefer functional components over class components
- Components keep their own state; props are not over-utilized

**Data file patterns:**
- Skills (`src/data/resume/skills.js`): Export both `skills` array and `categories` array with colors
- Work experience (`src/data/resume/work.js`): Follow JSON Resume schema with JSDoc typedef
- Projects (`src/data/projects.js`): Array of objects with title, subtitle, image path, date, desc
- Routes (`src/data/routes.js`): Centralized route definitions used by Navigation component

**Styling:**
- SCSS architecture in `src/static/css/` with imports in `main.scss`
- Base styles in `base/`, component styles in `components/`, layout in `layout/`, page-specific in `pages/`
- Max line length: 200 characters (ESLint config)

**Environment variables:**
- `PUBLIC_URL`: Auto-set from `package.json:homepage`, used for asset paths
- `REACT_APP_GA_TRACKING_ID`: Google Analytics (optional, see `sample.env`)
- `NODE_ENV`: Set to `production` in CI/CD for optimizations

## Critical Integration Points

**Resume page structure** (`src/pages/Resume.js`):
- Uses a `sections` object to define render order: Education → Experience → Skills → Courses → References
- Each section is a component receiving data from `src/data/resume/`
- Adding new section: 1) Create component in `src/components/Resume/`, 2) Add data file, 3) Add to sections object

**About page Markdown loading** (`src/pages/About.js`):
- Dynamically imports `src/data/about.md` using dynamic import() + fetch()
- Renders with `markdown-to-jsx` library
- Word count calculated client-side from markdown content

**Analytics integration** (`src/components/Template/Analytics.js`):
- Only initializes if `NODE_ENV === 'production'` AND `REACT_APP_GA_TRACKING_ID` is set
- Remove/disable if not using Google Analytics

## Common Tasks

**Adding a new page:**
1. Create component in `src/pages/NewPage.js`
2. Add lazy import in `src/App.js`
3. Add route to `src/data/routes.js` for navigation
4. Add `<Route path="/newpage" element={<NewPage />} />` in App.js

**Updating personal info:**
- Sidebar: `src/components/Template/SideBar.js` (name, email, image path)
- Contact icons: `src/data/contact.js` (FontAwesome icons)
- Work history: `src/data/resume/work.js` (follow JSON Resume schema)
- Skills: `src/data/resume/skills.js` (adjust colors array if adding categories)

**Customizing for a new user** (see `docs/adapting-guide.md`):
1. Update `package.json:homepage` to match hosting path (affects PUBLIC_URL)
2. Copy `sample.env` to `.env` and configure
3. Replace `public/images/me.png` with your photo (~256x256px)
4. Update all data files in `src/data/`
5. Search codebase for hardcoded names and replace

## Testing & Linting

Tests use Jest with Babel for JSX transformation. Module name mapper in `jest.config.js` handles CSS/SCSS and Markdown imports. Current test coverage is minimal (`src/__tests__/App.test.js`).

ESLint extends Airbnb config with custom rules:
- Linebreak style adapts to OS (Windows CRLF vs Unix LF)
- React components must be arrow functions
- Max line length: 200
- Console warnings/errors allowed, logs disallowed
