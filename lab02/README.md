# Lab 02 – Navigation, semantic layout and forms

**Student:** Dragomir David Ștefan · **Group:** 10LF442 (IAG III) · **Date:** 2026-10-12

## What I built
- **`guided/`** – all TODOs of the walkthrough: real navigation targets (three sections, `about.html`,
  the HTML spec in a new tab), a link back home from `about.html`, link states in L-V-H-A order,
  a visible `:focus-visible` outline, three fieldsets with legends and native validation.
  Exercise 1 is included: a fourth section `#contact` in the navigation, a "Year of study" `<select>`
  and a link from `about.html` straight to the signup form (`index.html#signup`).
- **`hw-anchors/`** (graded) – a "Student Survey" micro-site with two pages that share the same header
  (with `<nav>`) and footer. `index.html` has a table of contents, the sections `#overview`, `#survey`
  and `#resources`, a survey form (`method="get"`, no `action`) and three external links that open in a
  new tab. `faq.html` has five questions `#q1`–`#q5`, a table of contents and a "Back to top" link after
  every answer. The two pages link to sections of each other (`faq.html#q2`, `index.html#survey`).
- **Exercise 3** (challenge) is done as well: `:user-invalid` / `:user-valid` feedback for inputs,
  select and textarea, the FAQ answer reached through a link is highlighted with `:target`, smooth
  scrolling only inside `@media (prefers-reduced-motion: no-preference)`, and an optional
  "Student ID" field with `pattern="[0-9]{6}"` and a visible hint.

All four pages pass the W3C validator with no errors, and the form can be filled in and submitted
using only the keyboard.

## How to run it
Right-click `guided/index.html` or `hw-anchors/index.html` → **Open with Live Server**
(or simply open the file in a browser).

## Known problems / unfinished parts
- The form has no server, so the answers are not saved; they only appear in the address bar after Submit.
- `:user-invalid` / `:user-valid` work only in current browsers (Chrome 119+, Firefox 88+, Safari 16.5+).

## AI usage log (mandatory)

| # | What I asked the AI (short) | What I changed, or what the AI got wrong |
|---|-----------------------------|-------------------------------------------|
| 1 | Asked Claude (Anthropic) to solve Lab 2: the guided TODOs, Exercise 1, the Student Survey site (Exercise 2) and the challenge (Exercise 3). | Claude wrote the HTML and CSS, then checked the pages with the W3C validator, tested that every internal link points to an existing id, that the empty form is blocked and that headings are not hidden under the sticky header. |
| 2 | Asked Claude to fill in this README, including a draft of the sentence below. | Claude wrote the text of the README; I checked it against my files and rewrote the "One thing I learned" sentence in my own words. |

**One thing I learned in this exercise (in my own words):**
I learned that the order of the link rules matters (link, visited, hover, active), because rules with the
same specificity override each other. I also understood that a placeholder is not a label: every form
field needs a `<label>` and a `name`, otherwise it is not accessible and its value is not sent.