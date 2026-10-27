# Lab 04 – Bootstrap 5: Responsive Pages with a CSS Framework

**Student:** Dragomir David Ștefan · **Group:** 10LF442 (IAG III) · **Date:** 2026-10-27

## What I built
- `demo/` – the guided exercise: navbar with three links that collapses below 992px, utility classes, the 12-column grid (3 + 9, six boxes 1/2/3 per row, text + list side by side from lg), three responsive cards with equal heights and the camp menu from Lab 3 with Bootstrap table classes inside `table-responsive`.
- `portfolio/` – the homework: my CV from Lab 1 rebuilt as a responsive portfolio with Bootstrap 5.3.8 – sticky navbar, hero with a button to the contact form, portrait and text side by side from md with skills as badges, an education table with merged cells, three project cards (1 / 2 / 3 per row at xs / md / lg), a contact form with Bootstrap validation and a footer with "Back to top".
- Own CSS in `portfolio/css/custom.css`: hero gradient, portrait size and ring, hover effect on the project cards, same image height in all cards. All colours use `var(--bs-…)`, so they also work in dark mode.
- Bonus: light/dark toggle (`js/theme.js`, `data-bs-theme` on `<html>`) and an accordion ("More about me").

## How to run it
Right-click `demo/index.html` or `portfolio/index.html` → **Open with Live Server**. An internet connection is needed (Bootstrap comes from the CDN).

## Known problems / unfinished parts
The contact form is a demo – it validates the fields but does not send anything.

## AI usage log (mandatory)

| # | What I asked the AI (short) | What I changed, or what the AI got wrong |
|---|-----------------------------|-------------------------------------------|
| 1 | Claude: solve the Lab 4 guided demo and build the portfolio from my Lab 1 CV | I checked the pages in the browser at 375, 768 and 1200px and corrected the texts from my CV. |
| 2 |                             |                                           |

**One thing I learned in this exercise (in my own words):**
In Bootstrap I use classes instead of writing CSS; col-12 col-md-6 col-lg-4 changes how many boxes are in a row on different screens
