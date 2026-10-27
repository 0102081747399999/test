---
name: Modern Arabic Pharmacy
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3d4a42'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6d7a72'
  outline-variant: '#bccac0'
  surface-tint: '#006c4a'
  primary: '#006948'
  on-primary: '#ffffff'
  primary-container: '#00855d'
  on-primary-container: '#f5fff7'
  inverse-primary: '#68dba9'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#006949'
  on-tertiary: '#ffffff'
  tertiary-container: '#00855d'
  on-tertiary-container: '#f5fff7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#85f8c4'
  primary-fixed-dim: '#68dba9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#005137'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#68fcbf'
  tertiary-fixed-dim: '#45dfa4'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#005137'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Alexandria
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 44px
  display-lg-mobile:
    fontFamily: Alexandria
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg:
    fontFamily: Alexandria
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 34px
  headline-md:
    fontFamily: Alexandria
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 30px
  headline-sm:
    fontFamily: Alexandria
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Alexandria
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Alexandria
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Alexandria
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Alexandria
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Alexandria
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Alexandria
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1.25rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system delivers an empathetic, modern healthcare and digital pharmacy experience engineered specifically for Arabic-first interfaces (`dir="rtl"`). 

The visual identity synthesizes medical credibility, technical precision, and organic wellness. Rather than feeling sterile or institutional, the interface conveys restorative calm, prompt responsiveness, and approachable clinical guidance. The experience centers around swift medication ordering, transparent prescription tracking, and direct consultation with pharmacists.

The design movement combines **Contemporary Medical Functionalism** with **Soft Skeuomorphic/Tactile Highlights**:
- Crisp white surfaces atop tinted medical neutrals create layered clinical hierarchy without visual clutter.
- Tactile, accessible targets designed for rapid scanning under stress or mobility limitations.
- Micro-delight achieved via pill badges, organic micro-radii, and soothing atmospheric emerald glows.
- Comprehensive RTL typography balancing modern kufic forms with precise vertical metric alignment.

## Colors

The palette draws directly from botanical and pharmaceutical healing notes, pairing stabilizing deep emerald tones with active mint accents against ultra-clean backgrounds.

### Palette Architecture
- **Primary (`#059669` - Deep Clinical Emerald):** Anchors primary call-to-actions, active state tabs, critical confirmations, and brand anchors. Delivers AAA contrast compliance against white backgrounds.
- **Secondary (`#10B981` - Vitality Mint):** Applied for progressive indicators, badge accents, success states, and interactive focal points.
- **Tertiary (`#34D399` - Soft Healing Mint):** Reserved for low-stress progress bars, decorative pill accents, and ambient glow highlights.
- **Neutral Core (`#0F172A` - Slate 900):** Provides authoritative, legible typography across all lighting conditions, avoiding harsh pure black.
- **Surface & Canvas:**
  - Base canvas: `#F8FAFC` (Slate 50) for effortless contrast and softened eye strain.
  - Card/Container Surface: `#FFFFFF` (Pure Crisp White) for focal elevation.
  - Secondary Container: `#ECFDF5` (Mint 50) for verified badges, discount pills, and active pharmacy hours tags.
  - Border/Divider Stroke: `#E2E8F0` (Slate 200) ensuring soft structural delineation.
  - Muted Text: `#64748B` (Slate 500) for secondary metadata, dosage instructions, and timestamps.

## Typography

The typographic system utilizes a contemporary, high-legibility geometric Arabic typeface (`Alexandria`), engineered for exceptional clarity across small screen sizes and medication packaging labeling. 

### RTL & Arabic Principles
- **Diacritics & Kashida Handling:** Ample line heights (1.4x to 1.6x) are maintained strictly to prevent overlap of Arabic accents (Tashkeel) and descending glyph terminals.
- **Numeral Presentation:** Support localized Eastern Arabic numerals (`١، ٢، ٣`) alongside Western numerals for dosages and pricing, preserving standard decimal spacing.
- **Weight Mapping:** Headers use SemiBold (`600`) and Bold (`700`) to provide definitive structure. Body copy utilizes Regular (`400`) to guarantee effortless readability of medical warnings and composition details.

## Layout & Spacing

Layout geometry follows an adaptable 4-to-6 column structure on mobile and an 8-column model for compact tablets, prioritizing rapid one-handed navigation and fluid bottom-sheet workflows.

### Geometry & Rhythm
- **RTL Directionality:** All spatial margins invert seamlessly (`dir="rtl"`). Reading flows from top-right to bottom-left; back arrows, carousel progressions, and disclosure chevrons reverse direction accordingly.
- **Vertical Rhythm:** 4px baseline grid increments dictate component spacing, aligning text baselines with icons and micro-indicators.
- **Thumb-Zone Optimizations:** Action panels, checkout triggers, dosage confirmations, and floating prescription capture buttons reside within the lower 40% vertical screen bounds.

## Elevation & Depth

Visual hierarchy uses a refined hybrid of **tonal layering** and **soft ambient diffusion**. Pure drop shadows are avoided in favor of emerald-tinted and cool slate ambient shadows that feel luminous rather than murky.

### Elevation Levels
- **Level 0 (Flat / Canvas):** Neutral `#F8FAFC` base without shadow.
- **Level 1 (Card & Product Tiles):** Solid `#FFFFFF` fill with border `1px solid #E2E8F0` and shadow `0 2px 8px -2px rgba(15, 23, 42, 0.04)`.
- **Level 2 (Active Search, Filter Sheets & Modals):** White container with `0 10px 25px -5px rgba(5, 150, 105, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)`.
- **Level 3 (Sticky Action Bars & Floating Actions):** White background with `0 20px 30px -10px rgba(5, 150, 105, 0.15)`.

Backdrop filters (`backdrop-filter: blur(12px)`) with `rgba(255, 255, 255, 0.85)` are applied to top navigation bars to allow scrolling medication cards to pass smoothly underneath.

## Shapes

The design system incorporates a soothing organic contour language reflecting pharmaceutical capsules and wellness products:
- **Pill Geometry (Full Roundedness):** Badges, prescription status tags, chips, and primary buttons use `rounded-full` (9999px) to produce authentic "pill" visual anchors.
- **Cards & Surfaces:** Standard radius of 1rem (`rounded-lg`) provides friendly, non-aggressive card frames.
- **Modals & Drawers:** Deep bottom-sheet headers employ 1.5rem (`rounded-xl`) on top-left and top-right corners for an ergonomic finish.

## Components

### Buttons
- **Primary Button:** Full-width mobile CTA with `bg-[#059669]`, text `#FFFFFF`, rounded pill shape (`rounded-full`), min-height 52px for optimal touch target, and active state tint `#047857`. Icon placed leading (on the right in RTL).
- **Secondary / Ghost Button:** Transparent background, `1.5px` border in `#10B981`, text `#059669`, with hover/active surface `#ECFDF5`.

### Medicine & Pharmacy Cards
- **Product Card:** `#FFFFFF` background, `rounded-2xl`, subtle slate border (`#E2E8F0`), padding `1rem`. Top-left contains favorite bookmark; top-right hosts category/prescription badge. Bottom section features price in bold slate, with a quick-add `+` button in mint green.
- **Prescription Upload Card:** Dashed emerald stroke (`#10B981`), light emerald tint surface (`#F0FDF4`), centered camera/document upload glyph with clear Arabic helper text.

### Search Bar
- **Pharmacy Search Field:** `h-14`, rounded-2xl or pill-shaped, `#FFFFFF` surface with soft shadow (`0 4px 14px rgba(5, 150, 105, 0.06)`). Includes embedded barcode/medicine scanner icon at trailing edge (left in RTL) and search glass leading (right in RTL). Placeholder in `#94A3B8`.

### Badges & Pill Chips
- **Status Pills:** Rx Required (`#FEF2F2` background, `#DC2626` text), In Stock / Available (`#ECFDF5` background, `#059669` text), Chronic Medication Refill (`#EFF6FF` background, `#2563EB` text).
- **Interactive Filter Chips:** Horizontal scrolling row, height 36px, `rounded-full`. Inactive: `#FFFFFF` border `#E2E8F0` with `#475569` text. Active: `#059669` fill with `#FFFFFF` text.

### Inputs & Selection Controls
- **Form Fields:** `h-12`, `rounded-xl`, `#FFFFFF` surface with `#CBD5E1` border. Active focus ring: `2px solid #10B981`. Floating Arabic label semantics.
- **Checkbox & Radio:** Rounded-md (checkbox) and full circle (radio) with `#059669` fill when checked, displaying clear white checkmark or dot. Positioned strictly to the right of associated label text in RTL.