# Do You Love Me? 💕

A single-file, no-backend romantic web "gag." Ask the question, watch the **No**
button flee and the **Yes** button balloon — saying no is (comically) impossible.
Built as a reusable template you can re-skin in ~2 minutes.

The entire experience lives in **`index.html`** (markup + styles + logic + config),
with three mood GIFs in **`assets/`**. No build step, no `node_modules`, nothing to
install — drop the folder on any static host, or just double-click `index.html`.

```
do-you-love-me/
├── index.html        # the whole app: markup, CDN includes, CONFIG, logic, styles
├── assets/
│   ├── question.gif  # hopeful / cute   → Question state
│   ├── yes.gif       # happy / celebrating → Yes payoff
│   └── no.gif        # sad / pathetic   → Guilt screen
└── README.md
```

> The three GIFs that ship here are **placeholders** — cute, but generic. Swap in
> your own for the real magic (see below).

---

## How it works (the gag)

Three states, and the whole layout quietly tilts toward "yes":

- **Question → Yes** — confetti burst + heart flurry + a "screenshot this" hint + replay.
- **Question → No** — the No button dodges (desktop: on hover/approach · mobile: before
  the tap registers), escalating its label and growing the Yes button each time. After
  `dodgesBeforeRelent` dodges it finally relents → the **Guilt** screen.
- **Guilt → "okay fine, YES"** — loops straight back to the Yes payoff.

There is **no genuine "no" ending** — that's the joke. Floating hearts drift behind every
state, and `prefers-reduced-motion` dials the ambience down while keeping the gag intact.

---

## Re-skin it (edit only the `CONFIG` block)

Everything customizable lives in **one `CONFIG` object** near the bottom of `index.html`.
Change these and nothing else:

| Field | What it controls |
|---|---|
| `question` | The headline question |
| `yesLabel` | The Yes button text |
| `gifs.question` / `gifs.yes` / `gifs.no` | Paths to the three mood GIFs |
| `alts.*` | Alt text for each GIF (accessibility) |
| `noButtonLabels` | Escalating No labels; the button relents once these run out |
| `dodgesBeforeRelent` | How many times No dodges before it's clickable (default `2`) |
| `yesGrowthPerDodge` | Yes scale multiplier per dodge (default `1.25`) |
| `yesMaxScale` | Growth cap so Yes never overflows (default `2.6`) |
| `yesScreen` | Yes payoff heading, share hint, replay label |
| `guiltScreen` | Guilt heading, body, "fine, yes" button |

### Swapping the GIFs
Replace the three files in `assets/` (keep the same names) **or** point `CONFIG.gifs`
at new paths/URLs. Three distinct moods — **hopeful / happy / sad** — make each beat land.
Keep them small and optimized (they're the only real weight on the page).

### Re-theme the colours
The palette is defined **once** as CSS variables in the `:root { … }` block at the top of
`index.html`, and mirrored into `tailwind.config`. Edit the hex values in one place:

| Variable | Role |
|---|---|
| `--blush-top` / `--blush-bottom` | Background gradient |
| `--card` | Card surface |
| `--yes-from` / `--yes-to` | Yes button gradient (the hero element) |
| `--no` / `--no-text` | No button (deliberately *less* tempting than Yes) |
| `--heading` | Headings |
| `--body` | Body text |

Fonts are **Fredoka** (display) + **Quicksand** (body), loaded from Google Fonts — swap the
`<link>` and the `fontFamily` values to retheme the type.

---

## Deploy

Pure static — no server, no build, nothing stored or transmitted. Host anywhere:

- **GitHub Pages** — push the folder, enable Pages on the branch, done.
- **Netlify / Vercel / Cloudflare Pages** — drag-and-drop the folder, or connect the repo
  (no build command, publish directory = the project folder).
- **Or just send the file** — it works opened directly from disk.

---

## Tech

HTML5 · [Tailwind Play CDN](https://tailwindcss.com) · [Alpine.js](https://alpinejs.dev) ·
[canvas-confetti](https://github.com/catdad/canvas-confetti) · Google Fonts — all via CDN.
No backend, no database, no analytics. The visitor's "answer" is never submitted, stored,
or transmitted anywhere.
