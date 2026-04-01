# The Architectural Learning System: Design Documentation

## 1. Overview & Creative North Star
### Creative North Star: "The Editorial Scholar"
This design system moves away from the "industrial" look of traditional EdTech—characterized by heavy borders and flat, saturated tiles—and embraces an editorial, high-end atmosphere. We treat educational content like a premium publication: sophisticated, layered, and breathing with intentionality.

The "Editorial Scholar" approach uses **intentional asymmetry** and **tonal depth** to guide the student's eye. By breaking the rigid grid with overlapping elements (e.g., a floating course badge overlapping a hero image), we create a sense of movement and modern energy. We prioritize white space not just as a gap, but as a structural tool to frame complex information.

---

## 2. Colors & Surface Philosophy
The palette is rooted in a deep, academic blue (`primary`) and a vibrant, energetic fuchsia (`secondary`). However, the "premium" feel comes from how we treat the neutrals.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections or containers. 
- **The Alternative:** Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section sitting on a `surface` background creates a clear but soft structural change without the visual noise of a line.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine vellum.
- **Base:** `surface` (#f9f9f9)
- **Sections:** `surface-container-low` (#f3f3f3) for secondary content.
- **Interactive Elements:** `surface-container-lowest` (#ffffff) for primary cards to create a "lifted" feel.
- **Nesting:** When placing a progress tracker inside a course card, use a subtle shift (e.g., the card is `surface-container-lowest` and the tracker background is `surface-container-high`) to create depth.

### The "Glass & Gradient" Rule
To avoid a "flat" template look, use Glassmorphism for floating UI (modals, navigation bars, floating action buttons). 
- Use a semi-transparent `surface` color with a `backdrop-blur: 12px`.
- **Signature Textures:** Main CTAs should utilize a subtle linear gradient from `primary` (#264e98) to `primary_container` (#4267b2) at a 135-degree angle. This provides a "soul" and professional luster that a flat hex code cannot achieve.

---

## 3. Typography: The Intellectual Voice
We pair the structural precision of **Plus Jakarta Sans** (Headlines) with the clarity of **Inter** (Body).

*   **Display & Headline (Plus Jakarta Sans):** These are your "Editorial" voices. Use `display-lg` (3.5rem) for hero sections with tight tracking (-0.02em) to feel authoritative and bespoke.
*   **Title & Body (Inter):** Inter is chosen for its high legibility in dense learning content. 
*   **Labels (Plus Jakarta Sans):** Used for micro-copy and metadata.

**Hierarchy as Identity:** 
We use a high-contrast scale. A `headline-lg` title paired with a `body-md` description creates an immediate visual hierarchy that feels organized and curated, reducing the cognitive load on the learner.

---

## 4. Elevation & Depth
In this system, depth is a function of light and shadow, not lines.

### The Layering Principle
Achieve hierarchy by "stacking" surface tokens. Place a `surface-container-lowest` card (Pure White) on a `surface-container-low` background. The slight delta in brightness creates a soft, natural lift.

### Ambient Shadows
When a floating effect is required (e.g., an active Course Card), use **Extra-Diffused Shadows**:
- **Blur:** 24px - 40px.
- **Opacity:** 4% - 6%.
- **Color:** Use a tinted shadow (`on-surface` #1a1c1c at low alpha) rather than pure black to mimic natural ambient light.

### The "Ghost Border" Fallback
If a border is legally or accessibly required, use the **Ghost Border**:
- Token: `outline-variant` (#c3c6d3) at **15% opacity**.
- **Rule:** Never use 100% opaque, high-contrast borders.

---

## 5. Components

### Buttons
- **Primary:** Gradient-filled (`primary` to `primary_container`), `round-md` (0.75rem), with a soft `primary` tinted shadow.
- **Secondary:** Transparent background with a `tertiary` text color. No border. Use `surface-container-high` on hover.
- **Tertiary:** Text only, capitalized `label-md` for a "utilitarian-chic" look.

### Course Cards & Progress Trackers
- **Forbid Divider Lines:** Separate the course title from the lesson count using `spacing-4` (1rem) of vertical white space or a subtle background shift using `surface-container-low`.
- **Progress Bars:** Use `primary` for the fill and `primary_fixed` for the track. Ensure the corners are `round-full` for a modern, organic feel.

### Input Fields
- **Styling:** Use `surface-container-highest` as the fill color. No border. 
- **Focus State:** Transition the background to `surface-container-lowest` and add a 2px `primary` "Ghost Border" (20% opacity).

### Specialized EdTech Components
- **The "Curriculum Timeline":** An asymmetrical vertical list where the date/module number sits to the left of a vertical `surface-variant` track, and the content cards "float" to the right.
- **The "Glass Instructor" Badge:** A floating glassmorphic profile chip that stays pinned to the corner of video content, using `backdrop-blur`.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts. Let an image bleed off the edge of the grid while text stays centered.
*   **Do** use `tertiary` (#664d00) for "Achievement" or "Gold" moments to provide a premium contrast to the blues.
*   **Do** rely on the `Spacing Scale`. Consistent 1.5rem (`spacing-6`) and 2.5rem (`spacing-10`) gaps create a rhythm that feels intentional.

### Don't:
*   **Don't** use 1px solid black or grey borders. This is the fastest way to make the UI look "cheap."
*   **Don't** use standard "Drop Shadows." If the shadow is visible as a dark smudge, it is too heavy.
*   **Don't** cram content. If a screen feels full, move to a "long-scroll" editorial format. Breathing room is a sign of a premium experience.