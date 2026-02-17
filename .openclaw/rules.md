# Project Rules: Best of Cebu

## 🎨 Aesthetic & Design
- **Typography**: Primary serif (for headers/body), Secondary sans-serif (for labels/meta/UI).
- **Palette**: Stone-50 (Background), Stone-900 (Primary Text), Amber-600 (Accents/Editorial highlights), Charcoal (Dark UI elements).
- **Vibe**: Digital-first magazine. High contrast, heavy white space, premium feel.

## 🛠 Engineering Workflow
- **Tech Stack**: Next.js (App Router), Tailwind CSS, Framer Motion (for subtle transitions).
- **Component Library**: All reusable editorial blocks must reside in `src/components/editorial/`.
- **Atomic Design**: Build small. `<DropCap>`, `<PullQuote>`, `<PhotoCaption>` should be individual components.
- **Responsiveness**: Mobile-first design is mandatory. Magazine layouts must collapse elegantly.

## 🤝 Collaborative Protocol (Henry & Anti-Gravity)
- **Role Definition**: Anti-Gravity is the **Lead UI/UX Architect**. Your focus is exclusively on design, layout, user experience, and visual aesthetics.
- **Content Ownership**: Henry is the **Lead Editor & Content Architect**. Henry generates all editorial copy, narratives, and media selections based on Joy's field notes.
- **The Workflow**: Henry sends raw or structured content to Anti-Gravity. Anti-Gravity’s job is to "dress" that content in a high-end, beautiful, and performant web experience.
- **Component Standard**: Anti-Gravity builds and maintains the component library; Henry utilizes those components to assemble the final features.

## 🚫 Constraints
- Do not modify Henry's editorial text in `LechonArticle.jsx` unless explicitly asked.
- Do not add external libraries without Brian's approval.
- Maintain the "Digital Chief of Staff" (Henry) credentials and repo ownership structure.
