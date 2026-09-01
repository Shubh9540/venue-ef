# Lexora Law Firm — Agent Rules & Project Memory

> This file is the single source of truth for how this project works.
> Every agent, developer, or AI must follow these rules strictly. No exceptions.

---

## 1. Tech Stack (FIXED — Do NOT change)

| Tool | Version | Notes |
|---|---|---|
| Next.js | 16.x | App Router |
| React | 19.x | — |
| TypeScript | 5.x | Strict mode |
| Tailwind CSS | **3.4.17** | v3 ONLY — v4 breaks this project |
| PostCSS | Latest | tailwindcss + autoprefixer plugins |
| react-icons | ^5.7.0 | Icon library |

### CRITICAL — Tailwind Version Rule
- ALWAYS use Tailwind CSS v3.4.17 — NEVER upgrade to v4
- Tailwind v4 does NOT work with this project setup
- postcss.config.mjs must use tailwindcss + autoprefixer (NOT @tailwindcss/postcss)
- globals.css must use @tailwind base/components/utilities (NOT @import "tailwindcss")

---

## 2. Folder Structure (STRICT — Do NOT reorganize)

```
lexora law firm/
├── app/                          # Next.js App Router
│   ├── globals.css               # Global styles + Tailwind directives
│   ├── layout.tsx                # Root layout (metadata only)
│   ├── page.tsx                  # Homepage — renders all sections
│   ├── about/page.tsx
│   ├── services/[id]/page.tsx  # Dynamic service pages
│   ├── industries/[id]/page.tsx
│   ├── team/[id]/page.tsx
│   ├── why-choose-us/page.tsx
│   ├── our-approach/page.tsx
│   └── sitemap/page.tsx
│
├── components/
│   ├── common/                   # Used on EVERY page
│   │   ├── TopBar.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Breadcrumb.tsx
│   │
│   ├── sections/                 # Page section components (24 files)
│   │   └── [HeroSlider, AboutUs, Services, Process, Team, Counter,
│   │        Testimonials, Blogs, AboutFirm, AboutMission, AboutApproach,
│   │        AboutWhyChooseUs, WhyChooseUsSection, IndustriesGridSection,
│   │        IndustriesPageContent, IndustryDetailContent, IndustryDetailPageContent,
│   │        ServiceDetailContent, ServiceDetailPageContent, ServiceDetailSidebar,
│   │        ServicesGridSection, TeamDetailContent, TeamDetailPageContent,
│   │        SitemapPageContent].tsx
│   │
│   └── ui/                       # Reusable atomic components
│       └── Button.tsx
│
├── data/
│   └── templates.json            # ALL site data — single source of truth
│
├── types/
│   └── templates.types.ts        # ALL TypeScript interfaces
│
├── public/                       # Static assets
├── tailwind.config.ts
├── postcss.config.mjs
└── AGENTS.md
```

### Folder Rules
- **NEVER use a `src/` directory** — all Next.js folders (`app/`, `components/`, etc.) MUST be at the project root.
- common/ = components on EVERY page (header, footer, topbar, breadcrumb)
- sections/ = page-specific section components
- ui/ = tiny reusable atoms (Button, Badge, Card...)
- DO NOT create new top-level folders
- DO NOT put components directly in components/ root

---

## 3. Data Architecture (STRICT)

### Single JSON File Rule
- ALL data lives in `data/templates.json` — one file, one source of truth
- NEVER hardcode data inside components — props only
- NEVER create separate JSON files for sections
- NEVER use a database or API calls — static data only

### Strict "No Hardcoded Text" Rule
- **ZERO text** should be hardcoded in JSX.
- This includes fallback states like `"Loading..."`, `"Not found"`.
- **BREADCRUMBS:** Breadcrumb data (title, paths, bgImage) MUST come entirely from `data/templates.json` (e.g. `templateData.aboutBreadcrumb`). Do NOT dynamically construct breadcrumbs in the page component with hardcoded values or images.
- If a string is visible to the user, it MUST come from `data/templates.json`.
- Use a `globalUI` object in JSON for reusable UI strings.

### JSON Structure Rule (CRITICAL)
- The JSON structure MUST follow the Template Builder format.
- Root keys are `"common"` and `"categories"`.
- All law firm data goes under `"categories" -> "LawFirm" -> "sections"`.
- Each section has a `variants` object containing the actual data (e.g., `Header.variants.LexoraHeader1`).

### How Data Flows
```
data/templates.json
      ↓
  page.tsx  (reads with fs.readFileSync)
      ↓
  templateData: LexoraTemplateData
  sectionData = templateData.categories.LawFirm.sections
      ↓
  <Component data={sectionData.SectionName.variants.LexoraSectionName1} />
      ↓
  Component renders using props only
```

### Reading Data in Pages — CORRECT Pattern (Server Components)
```tsx
import { LexoraTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { MySectionComponent } from '@/components/sections/MySectionComponent';

export const dynamic = 'force-dynamic';

export default function SomePage() {
  const templateData: LexoraTemplateData = rawData;
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  if (!sectionData) return <div>Loading...</div>;

  return (
    <main className="bg-white">
      <TopBar data={sectionData.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData.header?.variants?.LexoraHeader1} />
      <Breadcrumb data={{
        title: 'Page Title',
        paths: [{ label: 'Home', url: '/' }, { label: 'Page Title' }],
        bgImage: '/banner/ban1.jpg'
      }} />
      <MySectionComponent data={sectionData.mySectionData?.variants?.LexoraMySectionData1} />
      <Footer data={commonData?.Footer} />
    </main>
  );
}
```

### Next.js 15 Dynamic Routing Rule (CRITICAL)
In Next.js 15, `params` and `searchParams` in Page components are **Promises**. You MUST `await` them before using.
```tsx
// CORRECT Next.js 15 dynamic route pattern
export default async function DynamicPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  // ... rest of the code
}
```

### JSON Root Key
- Root key is always "lexora": { ... }
- All sections: topBar, header, hero, aboutUs, services, process, team,
  counter, testimonials, blogs, footer, aboutBreadcrumb, aboutFirm,
  aboutWhyChooseUs, aboutMission, aboutApproach, industries

---

## 4. TypeScript Rules (STRICT)

- ALL interfaces/types → types/templates.types.ts ONLY
- NEVER define types inline in component files
- NEVER use any type
- NEVER use as unknown as X casts
- Every array item MUST have id: string field
- Use descriptive IDs: "step-1", "service-corporate-law", "team-john-doe"
- Use ? for optional fields
- Components handle undefined with early return: if (!data) return null;

### Correct Component Typing
```typescript
// WRONG — inline type
const MyComp = ({ data }: { data: { title: string } }) => { ... }

// CORRECT — import from types file
import { SomeData } from '@/types/templates.types';
const MyComp = ({ data }: { data?: SomeData }) => { ... }
```

---

## 5. Component Rules (STRICT)

### Component Template
```typescript
import React from 'react';
import { SomeData } from '@/types/templates.types';

export const ComponentName = ({ data }: { data?: SomeData }) => {
  if (!data) return null;
  return (
    <section className="tailwind-classes">
      {/* content */}
    </section>
  );
};
```

### Naming Rules
- Files: PascalCase.tsx
- Exports: Named exports ONLY — export const ComponentName
- NEVER use default exports for components

### Icon Rendering Pattern (icons stored as strings in JSON)
```typescript
import { FaClock, FaPhone } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaClock': return <FaClock />;
    case 'FaPhone': return <FaPhone />;
    default: return null;
  }
};
```

---

## 6. Tailwind CSS Rules (STRICT)

### Version — CRITICAL
- Tailwind v3.4.17 ONLY — NEVER upgrade to v4
- v4 breaks CSS generation in this project

### Core Rules
- NO inline style={{}} for colors/spacing Tailwind can handle
- Use style={{}} ONLY for dynamic values: maxWidth, backgroundImage
- NO custom CSS classes in globals.css for component styling
- STRICT INLINE CLASSES: All Tailwind classes MUST be written inline directly on the JSX elements (e.g. `<div className="flex...">`). Do NOT extract classes into variables, objects, or arrays at the top of the file. Keep the JSX the single source of truth for styling, even if it gets long.

### Brand Colors
| Name | Hex | Usage |
|---|---|---|
| Primary (Dark Navy) | #051024 | Backgrounds, text |
| Accent (Gold) | #c49250 | Highlights, borders, CTAs |
| Accent Light | #ddaf6a | Gradient end |
| Text | #4a4a4a | Body text |
| Text Light | #6b7280 | Secondary text |
| BG Light | #ffffff | White backgrounds |
| BG Alt | #fdfaf6 | Subtle warm sections |

### Color Usage
```
CORRECT: className="bg-[#051024] text-[#c49250] border-[#c49250]"
CORRECT: className="bg-[var(--color-primary)] text-[var(--color-accent)]"
WRONG:   className="bg-blue-900 text-yellow-500"
```

### Responsive — Standard Breakpoints ONLY

| Prefix | Min-Width | Typical Use |
|---|---|---|
| (none) | 0px | Mobile base styles (default) |
| `sm:` | 640px | Large mobile / small tablet |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Small desktop |
| `xl:` | 1280px | Desktop |
| `2xl:` | 1536px | Wide desktop |

```
CORRECT: className="hidden lg:flex"        (hidden mobile, flex on desktop)
CORRECT: className="flex lg:hidden"        (flex mobile, hidden desktop)
CORRECT: className="text-2xl lg:text-4xl"  (small text mobile, large desktop)
CORRECT: className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
WRONG:   className="max-[992px]:hidden"    (arbitrary max-width — NEVER use)
WRONG:   className="max-[576px]:text-sm"   (arbitrary max-width — NEVER use)
```

### Mobile-First Rule (MANDATORY)
- Always write **mobile styles first** (no prefix), then override for larger screens
- NEVER write desktop-first styles — always add responsive overrides going UP
- Every component built must be FULLY mobile responsive at the same time

### tailwind.config.ts
- Content paths: ./pages/**, ./components/**, ./app/**, ./data/**
- Theme extensions go in theme.extend only

### postcss.config.mjs — CORRECT FORMAT
```javascript
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
export default config;
// WRONG (v4): plugins: { "@tailwindcss/postcss": {} }
```

### globals.css — CORRECT IMPORT
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
/* WRONG (v4): @import "tailwindcss"; */
```

---

## 7. CSS Variables (defined in globals.css — DO NOT CHANGE)

```css
:root {
  --font-primary: 'Montserrat', sans-serif;
  --font-heading: 'Montserrat', sans-serif;
  --color-primary: #051024;
  --color-accent: #c49250;
  --color-text: #4a4a4a;
  --color-text-light: #6b7280;
  --color-bg-light: #ffffff;
  --color-bg-alt: #fdfaf6;
}
```

---

## 8. Path Aliases — ALWAYS use @/

```typescript
CORRECT: import { TopBar } from '@/components/common/TopBar';
CORRECT: import { LexoraTemplateData } from '@/types/templates.types';
WRONG:   import { TopBar } from '../../components/common/TopBar';
```

---

## 9. STRICTLY FORBIDDEN

| Forbidden | Reason |
|---|---|
| Tailwind v4 | Breaks CSS generation |
| Hardcoded text in components | All data from JSON |
| any TypeScript type | Type safety mandatory |
| Default exports for components | Named exports only |
| Multiple JSON data files | One file: data/templates.json |
| Types in component files | Use types/templates.types.ts |
| Custom CSS for layout | Tailwind utilities only |
| max-[X]: arbitrary responsive | Standard breakpoints only |
| Inline style colors | Tailwind arbitrary values |
| New top-level folders | Keep structure as-is |
| `src/` directory | All folders (`app/`, `components/`) must be at the root |
| `fs.readFileSync` for JSON | Use `import rawData from '@/data/templates.json'` instead for caching and simple AI Builder integration |

---

## 10. Adding New Section — Checklist

1. types/templates.types.ts — Add interface for section data
2. types/templates.types.ts — Add field to LexoraTemplateData
3. data/templates.json — Add data under lexora key
4. components/sections/NewSection.tsx — Create component (named export, data? prop)
5. app/page.tsx or sub-page — Import and render

---

## 11. Adding New Icons — Checklist

1. Add icon string to JSON: "icon": "FaNewIcon"
2. Import in component: import { FaNewIcon } from 'react-icons/fa'
3. Add case to renderIcon switch
4. Test in browser

---

## 12. Dev Server Commands

```bash
npm run dev     # http://localhost:3000
npm run build   # Production build
npm run lint    # Lint check
```

- Always restart dev server after changing tailwind.config.ts or globals.css
- Always restart after adding new packages

---

## 13. Mobile Responsiveness (MANDATORY — Not Optional)

### Golden Rule
> Every component MUST be fully mobile responsive the moment it is built.
> Do NOT build desktop-only and plan to fix mobile later — do it together.

### Required Responsive Behaviour Per Component Type

| Component Type | Mobile Behaviour Required |
|---|---|
| Navigation / Header | Hamburger menu on mobile, full nav on desktop (`hidden lg:flex`) |
| TopBar | Hidden on mobile (`hidden lg:flex`) |
| Grid sections | Single column on mobile → multi-column on desktop |
| Hero / Banner | Stack content vertically, reduce font sizes |
| Cards | Full width on mobile, grid on tablet/desktop |
| Buttons | Full width or centered on small screens |
| Images | `w-full` on mobile, constrained on desktop |
| Text | Smaller sizes on mobile (`text-xl lg:text-4xl`) |
| Flex rows | `flex-col` on mobile, `flex-row` on desktop |
| Padding/Margin | Less on mobile (`px-4 lg:px-6`) |

### Common Responsive Patterns
```tsx
// Grid — 1 col mobile, 2 col tablet, 3 col desktop
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// Flex — column on mobile, row on desktop
className="flex flex-col lg:flex-row items-center gap-6"

// Text size — small mobile, large desktop
className="text-2xl md:text-3xl lg:text-5xl font-bold"

// Padding — tight mobile, generous desktop
className="px-4 md:px-6 lg:px-8 py-10 lg:py-20"

// Show/Hide
className="hidden lg:flex"   // desktop only
className="flex lg:hidden"   // mobile only
className="hidden md:block"  // tablet and above

// Image responsive
className="w-full lg:w-1/2 object-cover"
```

### Breakpoints to Always Think About
1. **Mobile** (320px–639px) — single column, compact spacing, hidden complex UI
2. **Tablet** (640px–1023px) — 2 columns, medium spacing, partial nav
3. **Desktop** (1024px+) — full layout, full nav, multi-column grids

### STRICTLY FORBIDDEN in Responsive
- `max-[Xpx]:` arbitrary max-width variants
- Writing desktop styles first without mobile base
- Skipping mobile layout and "fixing later"
- Using `sm:hidden` to hide things that need a proper mobile version

---

## 14. Refactoring Existing Components — CRITICAL RULE

> When cleaning up or converting an existing component to pure Tailwind,
> the VISUAL DESIGN must remain 100% identical. Only the implementation changes.

### What Changes (implementation only)
| Before | After |
|---|---|
| `style={{ marginBottom: '25px' }}` | `mb-6` |
| `style={{ maxWidth: '1250px', marginLeft: 'auto', marginRight: 'auto' }}` | `max-w-[1250px] mx-auto` |
| `style={{ gap: '15px' }}` | `gap-4` |
| `style={{ flexShrink: 0, width: '46px' }}` | `flex-shrink-0 w-[46px]` |
| `max-[992px]:flex-col` | `flex-col lg:flex-row` |
| `max-[576px]:grid-cols-1` | `grid-cols-1 sm:grid-cols-2` |
| `key={index}` | `key={item.id}` or `key={item.label}` |

### What NEVER Changes (design)
- Colors — same hex values
- Spacing — equivalent Tailwind values (px-6 = 24px, mb-6 = 24px)
- Font sizes — same text size
- Layout structure — same grid/flex arrangement
- Hover effects — same transitions
- Breakpoints at which layout changes

### Workflow for Refactoring
1. **READ** the entire component first — understand every style decision
2. **MAP** each `style={{}}` to its Tailwind equivalent exactly
3. **CONVERT** arbitrary breakpoints to nearest standard breakpoint
4. **VERIFY** — the design must look identical before and after

### Forbidden During Refactor
- Adding new sections or changing content
- Changing visual spacing (e.g., mb-6 where original had mb-10)
- Changing colors or gradients
- Changing breakpoint behaviour (layout should change at same screen size)
- Simplifying away design details (decorators, dividers, subtle effects)

---

## 15. Spacing Guidelines (STRICT RULE)

> DO NOT use massive vertical paddings (e.g. `py-[100px]`, `pt-[120px]`). The user prefers tighter, more balanced spacing.
> DO NOT use arbitrary pixel values for padding/margin (e.g. `py-[30px]`). Use standard Tailwind classes.

- **Vertical Section Padding:** Use standard Tailwind classes like `py-8 lg:py-12` (which equals 32px to 48px) as the standard for main section wrappers. NEVER use 100px unless explicitly asked.
- **Internal Component Spacing:** Keep gaps inside grids/flexboxes reasonable using standard classes (`gap-4` to `gap-8`).
- The user has explicitly stated: *"spacing zyda nhi deni abi ap hr jga 100 100 px k rhye ho... 30 top se botoom se 30... usse talwind way mai hi likho usme px nhi ata"*. Adhere to this by keeping padding tight and using pure Tailwind values (`py-8`, `py-10`, `py-12`).

---

## 16. Strict Visual Design Fidelity (CRITICAL RULE)

> **DO NOT** force generic designs, shapes, or project default styles if the user provides a specific design screenshot or layout requirement.
> **DO NOT** blindly apply bulk standardization scripts (like global regex replaces for spacing) without carefully isolating ONLY the target elements (e.g., main section wrappers).

- **Inner Component Paddings are Sacred:** When asked to standardize section spacing, NEVER modify the inner paddings of buttons (`py-2`, `py-3`), badges (`py-1`), or cards (`p-6`, `p-8`). Only target the outermost wrapper (e.g., `<section className="...">`).
- **Match the Provided Design Exactly:** If the user provides a design screenshot, you must match its exact shapes (e.g., flat lines vs pill boxes), layout (centered vs left-aligned), and colors. Do not assume the existing codebase style is correct if the user explicitly asks for a layout from a screenshot.
- **Ask Before Altering Designs:** If an instruction to standardize spacing or code might break the visual appearance of a UI element (like a button or a testimonial box), STOP and ask the user for confirmation or write a safer, more targeted script.
