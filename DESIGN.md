---
name: Cole Turner Portfolio
description: A well-kept physical scoreboard, lit up on a navy field at night, showing a software engineer's stat line.
colors:
  scoreboard-gold: "#facc15"
  bulb-amber: "#fbbf24"
  erau-blue: "#003087"
  stadium-navy-deep: "#000414"
  stadium-navy: "#001030"
  stadium-navy-mid: "#001540"
  panel-navy-active: "#002a6e"
  panel-navy-inactive: "#001840"
  hairline-navy: "#0a1a40"
  card-navy: "#0d2a5e"
  navy-ink: "#1e3a8a"
  scoreboard-chrome: "#c4c4c8"
  dugout-gray: "#94a3b8"
  press-box-white: "#ffffff"
typography:
  display:
    fontFamily: "Oswald, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Oswald, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "0.02em"
  title:
    fontFamily: "system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Oswald, system-ui, sans-serif"
    fontSize: "9px"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0.15em"
rounded:
  none: "0px"
  sm: "2px"
  md: "4px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "20px"
components:
  button-primary:
    backgroundColor: "{colors.scoreboard-gold}"
    textColor: "{colors.navy-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "10px 12px"
  button-primary-hover:
    backgroundColor: "{colors.scoreboard-gold}"
    textColor: "{colors.navy-ink}"
  button-secondary-outline:
    backgroundColor: "transparent"
    textColor: "{colors.scoreboard-gold}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "10px 12px"
  side-panel-active:
    backgroundColor: "{colors.panel-navy-active}"
    textColor: "{colors.scoreboard-gold}"
    typography: "{typography.label}"
  side-panel-inactive:
    backgroundColor: "{colors.panel-navy-inactive}"
    textColor: "{colors.dugout-gray}"
    typography: "{typography.label}"
  card-default:
    backgroundColor: "{colors.stadium-navy}"
    rounded: "{rounded.md}"
    padding: "12px"
  chip-tag:
    backgroundColor: "rgba(30,58,138,0.3)"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.sm}"
    padding: "1px 5px"
---

# Design System: Cole Turner Portfolio

## 1. Overview

**Creative North Star: "The Home Scoreboard Under the Lights"**

The whole interface is one object: a well-kept, physical scoreboard sitting on a field at night. Everything reads as that object, not as a web app — a thick chrome cabinet, hairline dividers between panels, glowing gold bulbs marking what's active, a mono-digit score grid, and a live GitHub activity strip standing in for the day's box score. The navy that dominates every surface is the night sky and the field under stadium lights; the gold is the light spilling off the bulbs. Content — About, Projects, Skills, Experience, Education, Contact — is framed as innings on a scorecard, not sections on a page.

The personality underneath the metaphor is approachable, curious, and hardworking, not aggressively competitive. The scoreboard supplies discipline and precision in the *structure* (grid alignment, exact hairlines, consistent chip sizing), while the *voice* (bio copy, project descriptions) stays warm and grounded — someone who learns on the fly and does the work, not a chest-thumping athlete persona. This system explicitly rejects the generic AI/template developer-portfolio look: no identical icon-card grids, no gradient-text hero, no stock icon rows, no tiny uppercase uppercase eyebrow kickers stacked over every section, no hero-metric-with-gradient-accent template. The scoreboard concept is the one idea; every section should extend it, not fall back to boilerplate SaaS-portfolio scaffolding.

**Key Characteristics:**
- One object, not a page: thick chrome frame, hairline navy dividers, physical drop shadow — never a floating card grid.
- Gold bulbs mark "active" everywhere (side panels, score digits, CTAs); navy is the resting/inactive state.
- Oswald in tight, wide-tracked uppercase carries all scoreboard-native chrome (labels, stat numbers, headlines); plain system sans carries actual prose.
- Mono (JetBrains Mono) is reserved for anything that reads as *data* — scores, stats, tech tags, timestamps.
- Sharp cabinet, rounded internals: the outer frame has zero radius; cards, chips, and buttons inside it use small, consistent radii.

## 2. Colors

A near-monochrome navy field lit almost entirely by one gold accent, plus one institutional blue reserved strictly for the ERAU header banner.

### Primary
- **Scoreboard Gold** (#facc15): the single "lit bulb" accent. Active side-panel icon/label, primary CTA fill, GitHub-brand touches, pinned-repo highlight. Used sparingly and always to mean "this is active / this is the call to action."
- **Bulb Amber** (#fbbf24): a slightly warmer, higher-glow amber reserved for the scoreboard's own numeric read-out (career/education score-grid digits) and their text-shadow glow — distinct from the flatter Scoreboard Gold used on chrome and buttons.

### Secondary
- **ERAU Blue** (#003087): the institution's own brand blue. Confined entirely to the white header banner (school name, "COLE TURNER" title, jersey number, logo frame) — it never appears against the navy field. It reads as printed ink on the scoreboard's marquee, not as a UI accent.

### Neutral
- **Stadium Night Navy** (#000414): the darkest surface — the center display screen, where each section's content sits like a screen inside the cabinet.
- **Cabinet Navy** (#001030): the scoreboard cabinet body itself — outer frame fill, logo box background.
- **Mid Navy** (#001540): the stats bar band between the display and the score grid.
- **Panel Navy — Active/Inactive** (#002a6e → #001f55 gradient / #001840 → #001030 gradient): the two states of every side-panel button.
- **Hairline Navy** (#0a1a40): every 1–2px divider and border across the cabinet — panels, stat cells, score-grid rows. This is the connective tissue of the whole layout.
- **Card Navy** (#0d2a5e): the border color for content cards (projects, experience, education) sitting on the dark display screen.
- **Navy Ink** (#1e3a8a): dark navy text set *on top of* gold (button labels) — never used as a background.
- **Scoreboard Chrome** (#c4c4c8, with #d4d4d8 / #a1a1aa as its lighter/darker steps): the physical, slightly worn metal of the outer frame border and the two "support post" details beneath it.
- **Dugout Gray** (#94a3b8, plus Tailwind gray-400/500): secondary/muted text — descriptions, timestamps, placeholder stat values.
- **Press Box White** (#ffffff): the one bright surface in the system, reserved for the header banner strip.

### Named Rules
**The One Bulb Rule.** Scoreboard Gold means "active" or "primary action" and nothing else. It never appears as decoration or fills a large surface at rest — it lights up specific, meaningful elements (the current panel, the one CTA, the pinned repo).

**The Navy Field Rule.** Every background from the display screen out to the cabinet body is a step in the same navy family. Don't introduce a new hue for a new surface; pick the existing navy step one shade lighter or darker.

## 3. Typography

**Display/Label Font:** Oswald (with system-ui, sans-serif fallback)
**Body Font:** system-ui (native sans stack)
**Data Font:** JetBrains Mono (with monospace fallback)

**Character:** Oswald's condensed, heavy uppercase carries every piece of scoreboard chrome — it's the typeface of the object itself (team names, stat labels, section titles). Plain system sans is reserved for the one place a real person is talking (bio, project descriptions) — a deliberate contrast so prose never gets the shouty scoreboard treatment. JetBrains Mono marks anything that is literally a number or code-shaped token: scores, GitHub stats, timestamps, tech tags.

### Hierarchy
- **Display** (weight 900, 32px, line-height 1, letter-spacing -0.01em): the one hero moment — "COLE TURNER" in the header banner. Uppercase, tight tracking so it reads as a printed marquee name, not a web headline.
- **Headline** (weight 900, 22px, line-height 1.1, letter-spacing 0.02em): the About panel's name treatment and equivalent section-defining titles. Uppercase Oswald.
- **Title** (weight 900, 11–14px, line-height 1.2): card and list-item titles (project names, job titles, degree name). Plain system sans, not Oswald — these are content, not chrome.
- **Body** (weight 400, 11px, line-height ~1.5): bios, project descriptions, experience bullets. Dugout Gray. Keep short — panels are compact, not long-form; don't let body copy run past what fits in the 305px display window without scrolling.
- **Label** (weight 900, 8–10px, letter-spacing 0.15–0.2em, uppercase): every stat label, panel label, and section eyebrow-equivalent (REPOS, STARS, PROJ, LANG). Oswald for static labels, JetBrains Mono when the adjacent value is numeric/data.

### Named Rules
**The Chrome vs. Content Rule.** If it's a fixed piece of the scoreboard's own furniture (labels, panel names, stat headers), it's Oswald and uppercase. If it's specific to Cole (a bio sentence, a project description, a job title), it's plain sans. Don't let Oswald creep into prose, and don't let prose creep into chrome.

## 4. Elevation

This system doesn't use soft, layered card shadows. It's a **physical object, not a UI**: the entire cabinet is flat and inset internally — panels, cards, and stat cells sit at the same visual depth, separated only by hairline navy borders — while a single dramatic shadow falls from the *whole frame* onto the field behind it, as if a real scoreboard were standing there at night. Depth inside the cabinet comes from insets and glows, not drop shadows: the active side panel gets an inset gold ring plus a soft external glow (simulating a lit bulb), and large numbers get a white or amber text-shadow glow rather than a shadow behind a box.

### Shadow Vocabulary
- **Cabinet shadow** (`box-shadow: 0 16px 64px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.15)`): the one true "elevation" shadow in the system, applied once to the outer frame. Never apply a second instance of this to an inner element.
- **Active-panel glow** (`box-shadow: inset 0 0 0 2px #facc15, 0 0 16px rgba(250,204,21,0.15)`): marks the current side panel. Inset ring + soft external glow, not a raised card.
- **Inactive-panel inset** (`box-shadow: inset 0 0 0 1px rgba(255,255,255,0.05)`): a near-invisible inset seam, just enough to read as a distinct button.
- **Display-screen vignette** (`box-shadow: inset 0 0 40px rgba(0,0,0,0.5)`): a subtle inward darkening at the edges of the center display, like light falloff on a screen.

### Named Rules
**The Physical Object Rule.** Only the outermost cabinet frame casts a real drop shadow. Everything inside it is flat, separated by hairlines and insets, never by a floating-card shadow. If a new component needs to feel "raised," reach for a gold inset glow before reaching for `box-shadow` blur.

## 5. Components

### Buttons
- **Shape:** 4px radius (`rounded`), never fully rounded/pill.
- **Primary:** Scoreboard Gold background (#facc15), Navy Ink text (#1e3a8a), uppercase, weight 900, wide tracking, ~10–11px, padding roughly 10px 12px (compact, matches panel scale).
- **Hover:** `opacity: 0.9` on primary; on the outline/ghost variant, a faint gold-tinted background wash (`rgba(250,204,21,0.1)`) instead of a border-color change.
- **Secondary/Ghost (outline):** transparent background, 2px solid Scoreboard Gold border, gold text — used for LinkedIn/secondary CTAs sitting next to a primary gold button.
- **Tertiary:** 1px Hairline Navy or Card Navy border, white or gray text, no fill — used for the lowest-emphasis action in a group (e.g. "GitHub Profile" beneath a primary email CTA).

### Chips / Tags
- **Style:** background is the relevant color at ~20–30% opacity, 1px border at ~50% opacity of that same color, 2px radius, tiny padding (1px 5px), 9–10px JetBrains Mono or plain text.
- **State:** tech-stack chips use a fixed navy tint (`rgba(30,58,138,0.3)` bg / border); language chips borrow the language's own brand color (e.g. Python's #3572A5) for bg/border/text at reduced opacity — the one place per-item dynamic color is allowed.

### Cards (Projects / Experience / Education)
- **Corner Style:** 4px radius.
- **Background:** `rgba(0,8,32,0.7)` — a translucent wash of Stadium Night Navy, letting the display's dark background show through slightly.
- **Shadow Strategy:** none — flat, per the Physical Object Rule. Depth comes only from the 1px Card Navy border.
- **Border:** 1px solid Card Navy (#0d2a5e); the Education "current program" card upgrades this to a 1px gold-tinted border (`rgba(250,204,21,0.3)`) to mark it as the featured entry.
- **Internal Padding:** 12px (`spacing.md`).

### Navigation (Side Panels)
- Six fixed panel buttons (three per side), each full-bleed within its slot, icon above a 1–2 line uppercase Oswald label.
- **Default:** Panel Navy Inactive gradient background, Dugout Gray label/icon.
- **Active:** Panel Navy Active gradient background, Scoreboard Gold label/icon, inset gold ring + glow (see Elevation).
- **Mobile:** not currently addressed — the layout is a fixed-width (940px max) cabinet with no responsive breakpoints defined yet; this is a known gap, not a deliberate choice.

### GitHub Activity Strip (signature component)
A live "box score" band across the bottom of the cabinet: identity block, three stat cells (REPOS/STARS/FOLLOWERS) with large white glowing numbers, a top-languages row using each language's real brand color, then a 4-column grid of repo cards (one pinned, three live-fetched) with a language dot, star count, and relative timestamp. This is the component that makes the "live scoreboard" metaphor literal rather than decorative — treat it as the centerpiece signature pattern, not a generic "stats widget."

## 6. Do's and Don'ts

### Do:
- **Do** keep Scoreboard Gold confined to active/primary elements (One Bulb Rule) — if more than one thing glows gold on screen at once, something is probably not actually "active."
- **Do** use Oswald + uppercase + wide tracking for anything that's scoreboard chrome (labels, stat headers); use plain system sans for anything that's actually Cole's own words (bio, descriptions, job bullets).
- **Do** keep the outer cabinet frame's shadow as the only true drop shadow in the system; use inset rings/glows for internal "active" states instead.
- **Do** keep the sharp, zero-radius cabinet exterior contrasted against small (2–4px) rounded corners on everything inside it (cards, chips, buttons).
- **Do** let the GitHub Activity Strip carry real, live data — it's the proof-of-work element, not a decoration.

### Don't:
- **Don't** add a generic AI/template developer-portfolio look: no identical icon-topped card grids, no gradient hero text, no stock icon rows, no tiny uppercase eyebrow kicker stacked above every section, no hero-metric-with-gradient-accent block. Per PRODUCT.md's anti-references, the scoreboard is the one idea and every section should extend it.
- **Don't** give more than one element the gold treatment at the same time in the same view — it dilutes "active" into "decorative."
- **Don't** add soft, floating card-shadow elevation anywhere inside the cabinet. Depth here is hairlines and insets, not blurred drop shadows (Physical Object Rule).
- **Don't** round the outer cabinet frame's corners, and don't sharpen the internal cards/chips/buttons to match it — the sharp/rounded contrast is intentional.
- **Don't** let the tone drift toward a hard-edged "competitive athlete" persona in copy — the scoreboard is structural discipline, not the voice; the voice stays approachable, curious, and hardworking.
