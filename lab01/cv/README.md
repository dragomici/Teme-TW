# Lab 01 – Homework 1: CV page

**Student:** Dragomir David Ștefan · **Group:** 10LF442 (IAG III) · **Date:** 2026-10-05

## What I built
A one-page CV written in semantic HTML5 (`header`, `nav`, `aside`, `main`, `section`, `figure`, `footer`) with an
external stylesheet `style.css`. It has a gradient hero header, a sticky navigation bar and a two-column layout:
the sidebar holds personal details (definition list with icons), skill bars, tools and hobbies; the main column
holds "About me" with key numbers, an education timeline (ordered list), a language table, a projects gallery
with captions, and a contact section with a mock form that does not send anything.
The CSS uses CSS variables, Flexbox and Grid, element, class (`.card`, `.skill-fill`, `.gallery-item`, …) and
id (`#profile-photo`, `#languages`, `#info-email`, `#contact-form`) selectors, a layout for phones
(media queries) and a print style. Fonts: Poppins and Inter from Google Fonts.

## How to run it
Open `cv/index.html` in a browser.

## Known problems / unfinished parts
- Name, email, language levels, high school and baccalaureate grade are real; date of birth, driving licence, certificates, projects and hobbies are placeholders, as the lab sheet allows.
  The images are simple SVG drawings, not real photos.
- The form has `action="#"`, so pressing "Send message" only reloads the page.

## AI usage log (mandatory)

| # | What I asked the AI (short) | What I changed, or what the AI got wrong |
|---|-----------------------------|-------------------------------------------|
| 1 | Asked Claude (Anthropic) to write the CV page (HTML, CSS and SVG images) for Homework 1. | The first version used invented data (the name "Alex Rusu" and an example email address). |
| 2 | Asked to put in my real name, email and language levels. | I replaced the invented data with mine: Dragomir David Ștefan, david.dragomir@student.unitbv.ro, German B1, English C1. |
| 3 | Asked to keep the language table as it was before (Claude had replaced the "Certificate" column). | The original table format is back; only the certificates were changed to match the new levels (DSD I, Cambridge C1 Advanced). |
| 4 | Asked for a more polished design. | Claude redesigned the page (hero header, sticky menu, two-column layout, skill bars, timeline, project cards). It also found and fixed a horizontal overflow on phones and a badly wrapped email address. |
| 5 | Asked to change my high school and baccalaureate grade. | I added my real data: "Emil Racoviță" High School (natural sciences), baccalaureate average 8.65. |

**One thing I learned in this exercise (in my own words):**
<1–3 sentences – write this yourself.>
