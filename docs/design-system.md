# RocketScreens Design System Specification & Usage Guide

## 1. Overview
The RocketScreens Design System provides a centralized visual foundation and reusable component system for the RocketScreens digital signage SaaS platform. It ensures visual consistency across the marketing website, enterprise dashboard, screen orchestration, and settings while allowing universal theme and token changes from a single source of truth.

---

## 2. Design Tokens

### 2.1 Color Tokens
Components MUST consume semantic color tokens rather than hardcoded hex values.

| Semantic Token | Value | Intended Usage |
| :--- | :--- | :--- |
| `primary` | `#D91C8A` | Primary brand accent, primary CTA buttons, active state indicators |
| `primaryHover` | `#C3197C` | Hover state for primary interactive elements |
| `primaryActive` | `#9E1564` | Pressed / active state for primary elements |
| `primarySubtle` | `#FDF2F8` | Light brand tint for subtle tags, active row highlights |
| `background` | `#FFFFFF` | Default page background |
| `backgroundCanvas`| `#FAFAFB` | Supporting page background and canvas regions |
| `surface` | `#FFFFFF` | Cards, modals, sheets, and popovers |
| `textPrimary` | `#171717` | High-emphasis headings, titles, and body content |
| `textSecondary` | `#666673` | Secondary descriptions, subheadings, and helper text |
| `textMuted` | `#8E8E93` | Placeholder text, disabled labels, timestamps |
| `textBrand` | `#D91C8A` | Brand highlighted links and colored text |
| `border` | `#E3E3E8` | Standard component borders, card dividers, table borders |
| `borderHover` | `#BABABE` | Hover border state on interactive elements |
| `borderFocus` | `#D91C8A` | Keyboard focus ring and active input border |
| `success` | `#10B981` | Online screens, healthy player telemetry, success alerts |
| `warning` | `#F59E0B` | Degraded network, expiring schedules, warning notices |
| `error` | `#EF4444` | Offline screens, disconnected hardware, validation errors |
| `info` | `#3B82F6` | Informational announcements and update badges |

### 2.2 Typography Tokens (Inter)
Font family: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.

| Variant | Size | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- |
| `display-xl` | 72px (`4.5rem`) | Bold (700) | 1.1 | `-0.04em` |
| `display-lg` | 60px (`3.75rem`) | Bold (700) | 1.15 | `-0.03em` |
| `display-md` | 48px (`3.0rem`) | Bold (700) | 1.2 | `-0.025em` |
| `heading-xl` | 36px (`2.25rem`) | Bold (700) | 1.25 | `-0.02em` |
| `heading-lg` | 30px (`1.875rem`)| Bold (700) | 1.3 | `-0.015em` |
| `heading-md` | 24px (`1.5rem`) | SemiBold (600)| 1.35 | `-0.01em` |
| `heading-sm` | 20px (`1.25rem`) | SemiBold (600)| 1.4 | `-0.005em` |
| `body-lg` | 18px (`1.125rem`)| Regular (400) | 1.6 | `0em` |
| `body-md` | 16px (`1.0rem`) | Regular (400) | 1.5 | `0em` |
| `body-sm` | 14px (`0.875rem`)| Regular (400) | 1.4 | `0em` |
| `label-lg` | 16px (`1.0rem`) | SemiBold (600)| 1.5 | `-0.01em` |
| `label-md` | 14px (`0.875rem`)| Medium (500) | 1.4 | `-0.005em` |
| `caption` | 14px (`0.875rem`)| Regular (400) | 1.4 | `0em` |

### 2.3 Spacing Scale (16px base)
- `xs` (8px / `0.5rem`): Compact inline element gaps
- `sm` (16px / `1.0rem`): Standard component padding and tight group gutters
- `md` (32px / `2.0rem`): Card padding and layout gutters
- `lg` (48px / `3.0rem`): Section gutters and panel spacing
- `xl` (64px / `4.0rem`): Large section padding

### 2.4 Radii Scale
- `sm` (4px): Small chips, status indicators, compact badges
- `md` (8px): Standard Buttons, Inputs, Selects, Cards
- `lg` (12px): Larger panels, modals, dialog containers
- `full` (9999px): Pill badges, avatar circles

### 2.5 Elevation & Shadows
- `sm`: Buttons, chips, small overlays
- `default`: Standard cards, table containers
- `md`: Hovered interactive cards, elevated popovers
- `lg`: Modals, dropdown sheets, overlay alerts

---

## 3. Reusable UI Components

### 3.1 Button
```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="md">Connect Screen</Button>
<Button variant="secondary" size="md">View Playlists</Button>
<Button variant="outline" size="sm">Edit Schedule</Button>
<Button variant="ghost" size="sm">Cancel</Button>
<Button variant="destructive" size="md">Delete Player</Button>
<Button variant="primary" loading>Publishing...</Button>
```

### 3.2 IconButton
```tsx
import { IconButton, Icon } from '@/components/ui';

<IconButton
  aria-label="Refresh connected screens"
  icon={<Icon name="RefreshCw" size={18} />}
  variant="secondary"
/>
```

### 3.3 Typography
```tsx
import { Typography } from '@/components/ui';

<Typography variant="heading-lg" as="h1">Screen Management</Typography>
<Typography variant="body-md" color="secondary">
  Monitor and deploy playlists to 48 active hardware displays.
</Typography>
```

### 3.4 Card
```tsx
import { Card } from '@/components/ui';

<Card variant="default">
  <Card.Header>
    <Card.Title>Lobby Display #1</Card.Title>
    <Card.Description>4K Samsung Smart Signage Player</Card.Description>
  </Card.Header>
  <Card.Content>
    <p>Current Channel: Morning Welcome Loop</p>
  </Card.Content>
  <Card.Footer>
    <Button variant="outline" size="sm">Manage</Button>
  </Card.Footer>
</Card>
```

### 3.5 Badge
```tsx
import { Badge } from '@/components/ui';

<Badge variant="success" dot>Online (60 fps)</Badge>
<Badge variant="primary">New Feature</Badge>
<Badge variant="warning" dot>Sync Pending</Badge>
<Badge variant="error" dot>Hardware Offline</Badge>
```

### 3.6 Form Controls
```tsx
import { Input, Textarea, Select } from '@/components/ui';

<Input
  label="Screen Device Name"
  placeholder="e.g., HQ 2nd Floor Conference Display"
  helperText="Choose a recognizable label for your physical hardware."
  required
/>

<Select
  label="Display Orientation"
  options={[
    { value: 'landscape', label: 'Landscape (16:9)' },
    { value: 'portrait', label: 'Portrait (9:16)' }
  ]}
/>

<Textarea
  label="Channel Description"
  placeholder="Provide a brief summary of this channel's scheduled media"
/>
```

### 3.7 Layout Primitives
```tsx
import { Section, Container, Divider } from '@/components/ui';

<Section spacing="lg" background="canvas">
  <Container size="lg">
    <Typography variant="heading-xl">Enterprise Features</Typography>
    <Divider label="Hardware Overview" />
  </Container>
</Section>
```

---

## 4. Engineering Rules & Best Practices

### DO:
1. **Always** import UI primitives from `@/components/ui`.
2. **Always** use semantic tokens for colors (`--color-primary`, `--color-surface`, etc.).
3. **Always** use the `Typography` component or semantic heading classes for text styling.
4. **Always** specify `aria-label` for icon-only buttons.
5. **Always** use the 16px-based spacing scale for layouts and gutters.

### DON'T:
1. **Never** hardcode arbitrary hex colors (e.g., `#e9008c`, `#112233`) in individual pages.
2. **Never** create duplicate button or card components with custom one-off CSS.
3. **Never** mix random icon sets or emojis as UI icons.
4. **Never** place business/data-fetching logic inside primitive UI components.
5. **Never** use arbitrary pixel radii (e.g., `border-radius: 17px`); use token radii (`sm`, `md`, `lg`, `full`).
