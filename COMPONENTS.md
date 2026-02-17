# Best of Cebu - Editorial Components

This design system is built for high-end editorial content, featuring Apple-style typography, generous whitespace, and smooth scroll animations.

## Core Components

### `ArticleHeader`

The standard header for all feature articles. Handles title, subtitle, metadata, and the hero image.
**Note**: Includes automatic error handling for missing/broken images.

| Prop | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | Main article headline. |
| `subtitle` | `string` | (Optional) Deck text or summary. |
| `category` | `string` | Eyebrow text (e.g., "Cuisine", "Culture"). |
| `author` | `string` | (Optional) Author name. |
| `publishedAt` | `string` | (Optional) Publish date. |
| `imageSrc` | `string` | (Optional) URL for the hero image. |
| `className` | `string` | (Optional) Extra Tailwind classes. |

### `AnimatedSection`

A wrapper that triggers a "fade up" animation when the user scrolls to it. Wrap every major block of content (paragraphs, images, quotes) in this.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | - | Content to animate. |
| `delay` | `number` | `0` | Delay in seconds before animation starts. |
| `threshold` | `number` | `0.2` | (0-1) How much of element must be visible to trigger. |
| `direction` | `'up' \| 'down' ...` | `'up'` | Direction of entry. |

### `PullQuote`

A large, stylized quote block with an optional attribution.

| Prop | Type | Description |
| :--- | :--- | :--- |
| `children` | `string` | The quote text (without quotation marks). |
| `attribution` | `string` | (Optional) Who said it. |

### `DropCap`

A paragraph wrapper that styles the first letter as a large, bold initial. Use this for the opening paragraph of an article.

| Prop | Type | Description |
| :--- | :--- | :--- |
| `children` | `string` | The full paragraph text. |

### `Card`

**Strictly for Links**. A preview card that links to another page. Do NOT use as a generic container.

| Prop | Type | Description |
| :--- | :--- | :--- |
| `category` | `string` | Eyebrow text. |
| `title` | `string` | Card headline. |
| `excerpt` | `string` | Short summary. |
| `href` | `string` | Navigation URL (Required). |

---

## Typography Utilities

Import these from `@/components/editorial/Typography`.

- **`H1`**: Page titles (animated).
- **`H2`**: Section headings (animated on scroll).
- **`H3`**: Sub-headings (static).
- **`Paragraph`**: Standard body text (serif, readable measure).
- **`Label`**: Small, uppercase, bold utility text (amber).
