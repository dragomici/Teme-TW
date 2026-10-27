# Lab 4 – Quiz answers / Antworten

## English

1. `container` → `row` → `col-md-6` (container outside, then row, then the column).
2. **800px:** 2 boxes per row – 800 ≥ 768 (md) but < 992 (lg), so `col-md-6` applies (6 of 12). **500px:** 1 box per row – below 576px only `col-12` applies.
3. - `mt-3` – margin on top (1rem)
   - `px-4` – padding left and right (1.5rem)
   - `fw-bold` – bold text
   - `text-center` – centred text
4. The Bootstrap JavaScript (`bootstrap.bundle.min.js`) is not included. Another frequent cause: Bootstrap 4 code – `data-toggle` instead of `data-bs-toggle`, or `data-bs-target` does not match the `id` of the collapse element.
5. **c)** – use the utility `rounded-pill` or an own class in `custom.css`. Never edit `bootstrap.min.css` (lost at the next update), no inline styles, no `!important`.
6. So that the page always gets exactly the version it was built and tested with. Without a pinned version, a new release (e.g. Bootstrap 6) could change or remove classes and break the page; a pinned version also caches better and the result is reproducible.

## Deutsch

1. `container` → `row` → `col-md-6` (außen der Container, dann die Zeile, dann die Spalte).
2. **800px:** 2 Boxen pro Zeile – 800 ≥ 768 (md), aber < 992 (lg), also gilt `col-md-6` (6 von 12). **500px:** 1 Box pro Zeile – unter 576px gilt nur `col-12`.
3. - `mt-3` – Außenabstand oben (1rem)
   - `px-4` – Innenabstand links und rechts (1,5rem)
   - `fw-bold` – fetter Text
   - `text-center` – zentrierter Text
4. Das Bootstrap-JavaScript (`bootstrap.bundle.min.js`) ist nicht eingebunden. Andere häufige Ursache: Bootstrap-4-Code – `data-toggle` statt `data-bs-toggle`, oder `data-bs-target` passt nicht zur `id` des Collapse-Elements.
5. **c)** – die Utility `rounded-pill` oder eine eigene Klasse in `custom.css`. `bootstrap.min.css` nie bearbeiten (beim nächsten Update weg), keine Inline-Styles, kein `!important`.
6. Damit die Seite immer genau die Version lädt, mit der sie gebaut und getestet wurde. Ohne feste Version könnte ein neues Release Klassen ändern oder entfernen und die Seite kaputt machen; außerdem wird die Datei besser gecacht und das Ergebnis ist reproduzierbar.

## Română (pe scurt)

1. `container` → `row` → `col-md-6`.
2. La 800px: 2 pe rând (se aplică `col-md-6`). La 500px: 1 pe rând (`col-12`).
3. `mt-3` = margine sus, `px-4` = padding stânga-dreapta, `fw-bold` = text îngroșat, `text-center` = text centrat.
4. Lipsește scriptul `bootstrap.bundle.min.js` (sau e cod de Bootstrap 4: `data-toggle` în loc de `data-bs-toggle`).
5. **c)**
6. Ca pagina să folosească mereu aceeași versiune cu care a fost testată; o versiune nouă poate schimba clasele și strica pagina.
