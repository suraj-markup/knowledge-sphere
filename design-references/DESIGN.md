# Knowledge Sphere - Production Design Spec (Editorial Scholar)

This is the implementation-ready design source of truth.

## 1. Creative Direction
North star: **Editorial Scholar**
- Premium, intentional, and calm.
- Long-form reading comfort with clear learning hierarchy.
- Asymmetry is allowed in hero and feature compositions, but information density must remain structured.

## 2. Canonical Tokens
Use these tokens directly in Tailwind utility values/CSS variables.

### 2.1 Core Colors
- `--ks-primary: #264e98`
- `--ks-primary-container: #4267b2`
- `--ks-secondary: #c73e86`
- `--ks-tertiary: #664d00`
- `--ks-text: #1a1c1c`
- `--ks-text-muted: #4f5562`

### 2.2 Surfaces
- `--ks-bg: #f9f9f9`
- `--ks-surface-low: #f3f3f3`
- `--ks-surface: #ffffff`
- `--ks-surface-high: #eceff4`
- `--ks-surface-inverse: #102a52`

### 2.3 Utility
- `--ks-outline-ghost: rgba(195, 198, 211, 0.15)`
- `--ks-shadow-soft: 0 18px 42px rgba(26, 28, 28, 0.06)`
- `--ks-shadow-float: 0 22px 48px rgba(26, 28, 28, 0.08)`
- `--ks-gradient-primary: linear-gradient(135deg, #264e98 0%, #4267b2 100%)`

### 2.4 Functional Accent Set (Content Buckets)
- Concepts: `#28a8bf`
- Banks: `#58489d`
- Quiz: `#f16b25`
- Past Papers: `#d31c88`
- Mocks: `#edb83c`

## 3. Typography
Use:
- Heading: **Plus Jakarta Sans**
- Body: **Inter**

### 3.1 Scale
- Hero title: `clamp(2.1rem, 4vw, 3.6rem)`, line-height `1.08`, weight `700`
- Section heading: `clamp(1.6rem, 2.4vw, 2.4rem)`, uppercase, letter spacing `0.01em`
- Card title: `1.125rem - 1.35rem`, weight `600`
- Body: `0.98rem - 1.05rem`, line-height `1.65`
- Label/meta: `0.72rem - 0.82rem`, uppercase, letter spacing `0.08em`

## 4. Layout Rules
- Max container: `1180px`.
- Primary horizontal padding: `16px mobile`, `24px tablet+`.
- Section spacing: `64px mobile`, `80-96px desktop`.
- Use background tonal separation instead of hard separators.

## 5. Component Rules

### 5.1 Buttons
- Primary: gradient fill (`--ks-gradient-primary`), white text, rounded-full.
- Secondary: surface button, text primary, optional ghost outline only.
- Tertiary: text-only with subtle hover background.

### 5.2 Cards
- No hard 1px dark borders.
- Prefer surface stacking: `surface` on `surface-low`.
- Shadows should be diffused and low contrast.

### 5.3 Inputs
- Fill-based fields on `surface-high`.
- Focus ring uses primary with soft alpha, never harsh glow.

### 5.4 Pills/Tags
- Use for program and filter shortcuts.
- Base state: surface with primary text.
- Hover: gradient or primary fill with white text.

## 6. Motion
- Keep transitions subtle and purpose-driven.
- Duration guidance: `180-260ms` for hover/focus.
- Entrance animation only for major section reveals; avoid noisy micro-motion.

## 7. Accessibility Requirements
- Body text contrast >= `4.5:1`.
- Interactive text/buttons >= `4.5:1`.
- Focus-visible state required for all keyboard-interactive elements.
- Do not encode meaning by color alone.

## 8. Home Page Blueprint
1. Utility strip + auth actions.
2. Sticky navigation.
3. Asymmetrical hero with strong outcome and CTA.
4. Metrics/capability snapshot row.
5. Why choose us (benefits + methodology).
6. Subjects catalogue preview.
7. Resource pillar cards.
8. Free learning entry section.
9. Pricing preview.
10. Trust/social proof panel.
11. Structured footer.

## 9. Build Principle
When screenshots conflict with this document, follow this document.
