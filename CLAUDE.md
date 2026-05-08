# CLAUDE.md — Claire Design System
Milwaukee Tool · Service UX · Last updated May 2026

This file is the AI pipeline source of truth for the Claire design system.
It is machine-readable. Explanations are minimal. Rules are absolute unless marked otherwise.

---

## System Identity

Claire is a dependency-free React design system for two Milwaukee Tool internal web apps.
One component library. Two modes. Mode is set at the theme level — never via duplicate components.

| Mode | App | Primary action | Corners |
|------|-----|---------------|---------|
| Brand | eService (field service mgmt) | Milwaukee red `#DB011C` | Sharp — `0px` |
| Task | OnePoint (technician task mgmt) | Blue `#076AE6` | Rounded — `4px` |

---

## Hard Rules — Never Violate

- Focus color is always `#076AE6` in both modes. Never red for focus.
- Raw hex values are not allowed in components. Use semantic tokens only.
- Font family is locked: Helvetica Neue LT Pro. No substitutions.
- Body text is locked at 14px system-wide.
- Icons render at true size. No padding containers.
- Do not mix FA Sharp Solid and Regular within the same control.
- Brand mode = sharp corners (`0px`). Task mode = rounded (`4px`). Never swap.
- "Primary" in token names refers to importance, not hue.

---

## Color

### Semantic Roles
Components reference roles, never primitives or raw hex.

| Role | Token |
|------|-------|
| Page background | `color/surface/page` |
| Content surface | `color/surface/default` |
| Subtle surface | `color/surface/subtle` |
| Primary text | `color/text/primary` |
| Secondary text | `color/text/secondary` |
| Disabled text | `color/text/disabled` |
| Primary action | `color/action/primary` |
| Default border | `color/border/default` |
| Subtle border | `color/border/subtle` |
| Field border | `color/border/field` |
| Focus | `color/focus` — always `#076AE6` |

### Mode Split — Key Values

| Token | Brand (eService) | Task (OnePoint) |
|-------|-----------------|-----------------|
| `surface/page` | `#F6F7F8` | `#F1F3F6` |
| `surface/subtle` | `#F6F7F8` | `#F8F9FA` |
| `text/primary` | `#343434` | `#262D37` |
| `text/secondary` | `#747476` | `#4B5A6E` |
| `text/disabled` | `#747476` | `#5E718A` |
| `border/default` | `#DDDDDD` | `#D8DDE5` |
| `border/field` | `#747476` | `#7588A1` |
| `action/primary` | `#DB011C` | `#076AE6` |
| `action/primary/hover` | `#AD0015` | `#0052B4` |
| `action/primary/pressed` | `#7A000F` | `#003090` |
| `sidebar` | `#343434` | `#384453` |

### Neutral Scales
Brand mode uses the Milwaukee .COM / OneKey warm grey scale.
Task mode uses the Claire cool blue-grey scale (derived from `#076AE6`).
Never merge or cross-reference these scales between modes.

### Shared Tokens (both modes)
- `color/focus`: `#076AE6`
- `color/error`: `#DC2626`
- `color/warning`: `#F59E0B`
- `color/success`: `#059669`
- `color/info`: `#0041B3`

### Status Layer Opacities (M3)
- Hover: `0.08` · Press: `0.12` · Focus: `0.12` · Drag: `0.16`
- Disabled: `0.38` · Disabled container: `0.12`

---

## Typography

Font family: **Helvetica Neue LT Pro** exclusively.

| Cut | Style | Weight |
|-----|-------|--------|
| Roman | 55 Roman | 400 |
| Bold | 75 Bold | 700 |
| Heavy Extended | 83 Heavy Extended | 900 |
| Bold Extended | 73 Bold Extended | 700 |
| Medium Condensed | 67 Medium Condensed | 500 |

### Type Scale

| Role | Token | Size | Line height | Cut |
|------|-------|------|-------------|-----|
| Heading lg | `type/heading/lg` | 30px | 36px | Heavy Extended |
| Heading md | `type/heading/md` | 23px | 28px | Heavy Extended |
| Heading sm | `type/heading/sm` | 20px | 24px | Bold Extended |
| Title default | `type/title/default` | 16px | 22px | Roman |
| Title strong | `type/title/strong` | 16px | 22px | Bold |
| Title prominent | `type/title/prominent` | 16px | 22px | Heavy Extended |
| Body default | `type/body/default` | 14px | 14px | Roman |
| Body strong | `type/body/strong` | 14px | 14px | Bold |
| Label sm | `type/label/sm` | 12px | 16px | Roman |
| Label md | `type/label/md` | 14px | 16px | Roman |
| Label lg | `type/label/lg` | 16px | 20px | Roman |
| Footer default | `type/footer/default` | 10px | 16px | Roman |
| Footer strong | `type/footer/strong` | 10px | 16px | Bold |
| Data lg | `type/data/lg` | 16px | 16px | Medium Condensed |
| Data md | `type/data/md` | 14px | 14px | Medium Condensed |
| Data sm | `type/data/sm` | 12px | 12px | Medium Condensed |
| Data xs | `type/data/xs` | 10px | 10px | Medium Condensed |

Body is locked at 14px system-wide. Data roles use Medium Condensed — for SKUs, part numbers, and structured numeric data only.

### Usage Rules
- Use lowest emphasis required
- Labels are not body text. Body is not used for actions.
- Do not simulate hierarchy with size alone.

---

## Iconography

Library: **FA Sharp** — Regular and Solid cuts only.
Sizes: `16px`, `20px`, `24px` — true size, no padding containers.

### Role → Style Mapping
| Use | Cut |
|-----|-----|
| Action, system state | FA Sharp Solid |
| Guidance, assistive | FA Sharp Regular |

Do not mix Solid and Regular within the same control.

### Semantic Roles
- `icon/action` — triggers behavior
- `icon/navigation` — direction or movement
- `icon/status` — system state
- `icon/assistive` — supports comprehension
- `icon/decorative` — non-functional, discouraged

---

## Spacing

Convention: `space/N` where N = pixel value. Base unit: 4px.
Full scale defined in Figma library. Use these tiers:

### Micro — 4–12px (internal component spacing)
| Token | Value | Use |
|-------|-------|-----|
| `space/4` | 4px | Icon-to-label gap, badge internal gap |
| `space/8` | 8px | Tight text stack, icon button padding |
| `space/12` | 12px | Input padding, button vertical padding |

### Component — 16–40px (section padding, card internals)
| Token | Value | Use |
|-------|-------|-----|
| `space/16` | 16px | Section padding, standard element gap |
| `space/24` | 24px | Gap between card sections |
| `space/32` | 32px | Card vertical padding |
| `space/36` | 36px | Card horizontal padding |
| `space/40` | 40px | Max intra-page structural gap |

### Structural — 48px and above (chrome only)
- `space/80` = 80px — top nav height
- Do not use structural values for component-level design
- Page layout spacing is undocumented — do not infer

Button padding is component-level — not defined here. Default to `space/16` or `space/24` when uncertain.

---

## Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `radius/none` | 0px | Brand mode — buttons, inputs |
| `radius/sm` | 2px | Checkbox |
| `radius/md` | 4px | Task mode — buttons, inputs, modals |
| `radius/lg` | 8px | Cards, alerts, thumbnails |
| `radius/pill` | 16px | Badges |
| `radius/sheet` | 28px | Bottom sheet top corners |
| `radius/full` | 9999px | Circular elements |

Brand mode = `radius/none`. Task mode = `radius/md`. This is a mode-level decision, not a component preference.

---

## Elevation

| Level | Shadow |
|-------|--------|
| `elevation/0` | none |
| `elevation/1` | `0px 1px 2px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15)` |
| `elevation/2` | `0px 1px 2px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15)` |
| `elevation/3` | `0px 1px 3px rgba(0,0,0,0.3), 0px 4px 8px 3px rgba(0,0,0,0.15)` |

Use sparingly. Elevation communicates focus, not decoration.

---

## Repository

- GitHub: `drewlettner/service-design-system`
- Token file: `claire-tokens.css` is the code source of truth
- Figma file: `Service-UX-MVS` (foundations file — hardened tokens only)
- CLAUDE.md takes precedence over Figma where conflicts exist
