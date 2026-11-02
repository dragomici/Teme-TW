# Lab 05 – Multi-page website: Moonlake Jazz Festival

**Student:** Dragomir David Ștefan · **Group:** 10LF442 (IAG III) · **Date:** 2026-11-02

## What I built
A website with five pages for an invented open-air jazz festival. Four pages use W3.CSS, the contact page is rebuilt with Bootstrap 5.
All pages share the same header, navigation and footer, and the current page is marked in the navigation.
The site has a long page with anchor links, links to sections of other pages, an iframe with a named target, external links that open in a new tab, `mailto:` links, a price table with merged cells, CSS transitions, `@keyframes` animations and a reduced-motion rule. All parts of the task are finished.

## How to run it
Open `site/index.html` in a browser (or right-click `site/index.html` → *Open with Live Server*).
W3.CSS and Bootstrap are loaded from the internet, so the styling needs an internet connection.

## Known problems / unfinished parts
- Without an internet connection the frameworks are not loaded and the pages are unstyled (all content and links still work).
- The festival, the bands, the address and `info@example.com` are invented; the "photos" are SVG illustrations made for this site.
- The three pages in `site/pages/` are made to be shown **inside the frame** on the home page, so they have no header and navigation of their own. Their links back to the site use `target="_top"`, so they open in the whole window and not inside the frame.

## AI usage log (mandatory)
Using AI tools (ChatGPT, Claude, Copilot, Gemini, …) is **allowed**. Hiding it is not.

| # | What I asked the AI (short) | What I changed, or what the AI got wrong |
|---|-----------------------------|-------------------------------------------|
| 1 | Claude (Claude Code): build the whole Lab 5 site from the slides and the starter – pages, `style.css`, SVG pictures, this README | <fill in: what you checked, changed or corrected> |
| 2 | Claude: answers to the six quiz questions (English and German) | <fill in> |

**One thing I learned in this exercise (in my own words):**
<1–3 sentences – write this yourself.>

## My site

**Option:** 1 – business or event
**Topic:** Moonlake Jazz Festival – a three-day open-air jazz festival on a lake shore (invented)
**Pages:**

| File | Framework | What the page shows |
|---|---|---|
| `index.html` | W3.CSS | Home: introduction, pulsing "Buy tickets" button, three cards that link to the days on `lineup.html`, festival guide with `<iframe name="viewer">` |
| `lineup.html` | W3.CSS | Line-up – the **long page**: a menu of anchor links (`#friday`, `#saturday`, `#sunday`, `#workshops`) and "Back to top" after every section |
| `gallery.html` | W3.CSS | Gallery: six pictures with `alt` texts and captions; they zoom in on hover |
| `tickets.html` | W3.CSS | Prices: ticket table with **merged cells** (`rowspan`, `colspan`), what is included, reservation by e-mail |
| `contact.html` | **Bootstrap 5.3.8** | Contact cards in a row, opening hours table, directions |
| `pages/map.html`, `pages/food.html`, `pages/faq.html` | W3.CSS | Small pages that open inside the iframe on the home page |
| `style.css` | – | My own CSS for all pages: layout details, 4 transitions, 4 animations, reduced motion |
| `images/` | – | 7 SVG illustrations drawn for this site |

## Requirements – where to find them

| Requirement | Where |
|---|---|
| 4–5 pages, same header / nav / footer, current page marked | 5 pages; the current page has `w3-indigo` + `aria-current="page"` (Bootstrap: `active` + `aria-current="page"`) |
| Long page with anchors + Back to top | `lineup.html`: `<nav aria-label="Days on this page">` → `#friday` … `#workshops`; "Back to top" (`href="#top"`) after every day and in every footer |
| Link to a section of another page | `index.html` cards → `lineup.html#friday`, `#saturday`, `#sunday`; `tickets.html` → `lineup.html#workshops`; `gallery.html` → `lineup.html#sunday`; `contact.html` → `index.html#guide` |
| ≥ 2 external links in a new tab | footer: Wikipedia and OpenStreetMap; `lineup.html`: jam session (Wikipedia); `contact.html`: OpenStreetMap – all with `target="_blank" rel="noopener noreferrer"` and "(new tab)" in the text |
| `mailto:` | footer on every page, `tickets.html` (with a subject), `contact.html` |
| Named target | `index.html`: `<iframe name="viewer">` + 3 links with `target="viewer"` that open my own pages `pages/map.html`, `pages/food.html`, `pages/faq.html` |
| Relative paths | same folder (`tickets.html`), sub-folder (`pages/map.html`, `images/crowd.svg`), one folder up (`../style.css`, `../tickets.html` in `pages/`) |
| W3.CSS everywhere, ONE page with Bootstrap | `contact.html` is the only Bootstrap page; no page loads both frameworks |
| ≥ 2 transitions, ≥ 2 `@keyframes` | see *Animations* below |
| Reduced motion | the last rule in `style.css`: `@media (prefers-reduced-motion: reduce)` |
| Quality | `header` / `nav` / `main` / `footer` on every page, one `h1` per page, `alt` on every image, own `style.css`, no `style="…"`, no `!important` |

## W3.CSS and Bootstrap – the same thing, two names

All classes in this table are really used: W3.CSS on the W3.CSS pages, Bootstrap on `contact.html`.

| What it does | W3.CSS | Bootstrap |
|---|---|---|
| Container with padding | `w3-container` | `container` |
| Padding above and below | `w3-padding-16` | `py-3` |
| Navigation bar | `w3-bar` + `w3-bar-item w3-button` | `nav nav-pills` + `nav-item` + `nav-link` |
| Light grey background of the bar | `w3-light-grey` | `bg-body-tertiary` |
| Mark the current page | `w3-indigo` + `aria-current="page"` | `active` + `aria-current="page"` |
| Columns – 3 per row from tablet size | `w3-row-padding` + `w3-col m4` | `row g-3` + `col-md-4` |
| Card | `w3-card` (+ `w3-container` inside) | `card` (+ `card-body`) |
| Green button | `w3-button w3-green` | `btn btn-success` |
| Yellow (amber) button | `w3-button w3-amber` | `btn btn-warning` |
| White button with a border | `w3-button w3-white w3-border` | `btn btn-outline-success` |
| Table with borders and stripes | `w3-table w3-bordered w3-striped` | `table table-bordered table-striped` |
| Table that scrolls sideways on a phone | `w3-responsive` | `table-responsive` |
| List with lines between the items | `w3-ul` | `list-group` + `list-group-item` |

## Animations (`style.css`)

| Kind | Rule / class | Used on | What happens |
|---|---|---|---|
| Transition 1 | `.main-nav a` | navigation, all pages | the hover colour fades in (0.3 s) |
| Transition 2 | `.btn-anim` | buttons | the button rises 3 px and gets a shadow |
| Transition 3 | `.card-lift` | cards on Home, Line-up, Contact | the card rises 6 px, bigger shadow |
| Transition 4 | `.photo-frame img` | Gallery | the picture zooms in to 108 % |
| Animation 1 | `@keyframes slide-in` → `.hero-title` | site title, all pages | slides in from the left once |
| Animation 2 | `@keyframes pulse` → `.pulse` | "Buy tickets", e-mail button | grows and shrinks every 2 s, forever |
| Animation 3 | `@keyframes fade-up` → `.fade-in` | sections, iframe pages | fades in and moves up once |
| Animation 4 | `@keyframes equalize` → `.equalizer span` | header, all pages | five bars go up and down like an equalizer |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` | end of `style.css` | all animations and transitions off, no movement on hover, no smooth scrolling |
