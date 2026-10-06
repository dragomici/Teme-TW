# Lab 01 – HTML5 structure, first CSS (Exercises 1 and 2)

**Student:** Dragomir David Ștefan · **Group:** 10LF442 (IAG III) · **Date:** 2026-10-05

## What I built
A page about my current semester (`index.html` + external `style.css`). It contains an intro paragraph
with `<strong>` and `<em>`, two images with `alt` text, the list of all six subjects (each `<li>` has
the class `subject` and its own `id`, styled differently in CSS), the real weekly schedule of
group 10LF442 as a table (`<caption>`, `<thead>`, `<tbody>`, `<th scope>`), and at the end a link
to the official timetable on the faculty website. Exercises 1 and 2 are finished.

## How to run it
Open `index.html` in a browser (double-click, or right-click → Open with Live Server in VS Code).

## Known problems / unfinished parts
- The timetable only shows abbreviations (TW, SSI, BDD, IAC, DI, SAP). The full subject names
  for SSI, BDD, IAC, DI and SAP were deduced from the abbreviations and must be checked.
- Courses that alternate weekly (IAC course/seminar, SAP seminar/lab) are shown in one cell.

## AI usage log (mandatory)

| # | What I asked the AI (short) | What I changed, or what the AI got wrong |
|---|-----------------------------|-------------------------------------------|
| 1 | Asked Claude (Anthropic) to solve all Lab 1 exercises: complete `index.html` and `style.css`. | Claude took the schedule from the official faculty timetable (`MI_67_I_OrSt1.xlsx`) and built the table for group 10LF442. The full names of SSI, BDD, IAC, DI and SAP were guessed from the abbreviations, so they still have to be confirmed. |
| 2 | Asked where the schedule came from and for the link to the source. | I got the link to the official timetable (mateinfo.unitbv.ro → Studenți → Consultă orarul), so I can compare my table with it. |
| 3 | Asked how to push the lab to GitHub in several commits. | I cloned my repository `Teme-TW` with Git Bash and made the commits myself. I first forgot `cd Teme-TW`, got "not a git repository", and fixed it by moving `lab01` into the repository. |

**One thing I learned in this exercise (in my own words):**
<1–3 sentences – write this yourself.>
