# UniRide Frontend Style System

This document defines the shared visual style foundation for UniRide frontend.

## Goals

- Keep UI styling consistent across screens.
- Reuse classes and tokens instead of duplicating CSS.
- Improve developer experience when creating new views.

## Source of Truth

Global style system is defined in `src/index.css`.

## Design Tokens

### Colors

- `--color-bg`: base app background
- `--color-surface`: card/surface background
- `--color-surface-border`: borders on elevated containers
- `--color-text`: main text color
- `--color-text-muted`: secondary text color
- `--color-brand-500`, `--color-brand-600`: primary brand tones
- `--color-accent-500`: accent tone for gradients
- `--color-success-500`: success messages
- `--color-danger-500`: error messages
- `--color-focus`: accessible focus ring
- `--color-input-border`: form control border

### Spacing Scale

- `--space-1`: 4px
- `--space-2`: 8px
- `--space-3`: 12px
- `--space-4`: 16px
- `--space-5`: 20px
- `--space-6`: 24px
- `--space-8`: 32px

### Typography

- Font family: `--font-sans` (Space Grotesk)
- Sizes:
  - `--text-sm`
  - `--text-md`
  - `--text-lg`
  - `--text-xl`

## Reusable Classes

### Layout and Typography

- `.stack`: vertical spacing container
- `.text-title`: title style
- `.text-label`: form label style

### Surfaces

- `.card`: reusable card container style

### Forms

- `.input`: reusable input style with focus state

### Buttons

- `.btn`: base button class
- `.btn-primary`: primary action button
- `.btn-ghost`: low emphasis text button

### Feedback

- `.message`: base message text
- `.message-error`: error state
- `.message-success`: success state

## Usage Example

```tsx
<div className="card stack">
  <h2 className="text-title">Section title</h2>
  <label className="text-label" htmlFor="email">Email</label>
  <input className="input" id="email" type="email" />
  <button className="btn btn-primary">Continue</button>
  <p className="message message-error">Something went wrong</p>
</div>
```

## Guidelines

- Always prefer tokens over hardcoded values.
- Start with reusable classes before creating screen-specific classes.
- Keep page-specific layout styles in each screen stylesheet (for example, `Login.css`).
- Place global conventions and shared UI updates in `src/index.css`.
