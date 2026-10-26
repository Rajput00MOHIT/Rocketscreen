# RocketScreens — Digital Signage SaaS Platform

RocketScreens is an enterprise-grade digital signage SaaS platform built with Next.js (App Router), TypeScript, and Tailwind CSS.

---

## 🏛️ Project Architecture

```
src/
├── app/                  # Next.js App Router (layouts, routes, pages)
├── components/           # Reusable component system
│   ├── ui/               # Core design system primitives (Button, Card, Badge, etc.)
│   ├── layout/           # Future layout components (Navbar, Sidebar, Topbar, Footer)
│   ├── navigation/       # Navigation items and breadcrumbs
│   ├── marketing/        # Marketing-specific components
│   └── shared/           # Cross-cutting reusable UI
├── features/             # Scalable domain-driven feature modules
│   ├── screens/          # Physical screen management & monitoring
│   ├── players/          # Hardware pairing & player telemetry
│   ├── channels/         # Channel management & orchestration
│   ├── content/          # Digital media & app integrations
│   ├── playlists/        # Playlist composition & duration
│   ├── scheduling/       # Calendar & time-slot rules
│   ├── analytics/        # Screen impressions & playback health
│   ├── integrations/     # 3rd-party SaaS integrations
│   ├── organizations/    # Team & tenant management
│   └── settings/         # Account & billing settings
├── assets/               # Structured asset architecture
│   ├── brand/            # Logo, favicon, brand marks
│   ├── images/           # Categorized image assets
│   ├── icons/            # SVG icons & categories
│   ├── illustrations/    # Vector illustrations
│   ├── screenshots/      # Product mockups
│   └── fonts/            # Custom font definitions
├── styles/               # Centralized Design Tokens & Styles
│   ├── tokens/           # Colors, Typography, Spacing, Shadows, Radii, Breakpoints
│   ├── globals/          # Global styles & CSS variables
│   └── utilities/        # Reusable style classes & helpers
├── lib/                  # Utilities, constants & configuration
│   ├── utils/            # Class mergers (cn), formatters
│   ├── constants/        # Brand info, Route maps, Nav links
│   └── config/           # Site & Environment configuration
├── hooks/                # Custom React hooks
├── services/             # API client & backend service abstractions
├── types/                # TypeScript domain models & interfaces
└── data/                 # Static data & mocks
```

---

## 🚀 Getting Started

### Development Server
```bash
npm run dev
```

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

### Production Build
```bash
npm run build
```
