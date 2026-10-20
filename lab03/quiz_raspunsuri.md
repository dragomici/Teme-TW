# Lab 3 – Quiz answers / Antworten

## English

1. `<caption>` – it must be the first child of `<table>`.
2. **1** more `<td>`: `colspan="2"` counts 2 + Snack counts 1 = 3, so one cell is missing to reach 4.
3. **2** `<td>`s: the table has 3 columns; "Fruit salad" (`rowspan="2"`) already covers the first column of row 2, so only 2 cells are needed.
4. `scope="col"` is the header of a **column** (e.g. the day names at the top); `scope="row"` is the header of a **row** (e.g. "Monday" at the start of a row).
5. `border-collapse: collapse;` on `table` and `border: 1px solid …;` on `th, td`.
6. `border` and `bgcolor` are old presentation attributes (obsolete in HTML5, the validator reports them). HTML should only describe structure and content; the look goes into an external CSS file (`style.css`), e.g. `table { background-color: yellow; } th, td { border: 1px solid; }`.

## Deutsch

1. `<caption>` – es muss das erste Kind von `<table>` sein.
2. **1** weiteres `<td>`: `colspan="2"` zählt 2 + Snack zählt 1 = 3, es fehlt also eine Zelle bis 4.
3. **2** `<td>`: Die Tabelle hat 3 Spalten; „Fruit salad“ (`rowspan="2"`) belegt bereits die erste Spalte der zweiten Zeile, also braucht sie nur 2 Zellen.
4. `scope="col"` ist die Überschrift einer **Spalte** (z. B. die Wochentage oben); `scope="row"` ist die Überschrift einer **Zeile** (z. B. „Monday“ am Anfang einer Zeile).
5. `border-collapse: collapse;` für `table` und `border: 1px solid …;` für `th, td`.
6. `border` und `bgcolor` sind veraltete Darstellungsattribute (in HTML5 obsolet, der Validator meldet sie). HTML beschreibt nur Struktur und Inhalt; das Aussehen gehört in eine externe CSS-Datei (`style.css`), z. B. `table { background-color: yellow; } th, td { border: 1px solid; }`.

## Română (explicație pe scurt)

1. `<caption>` – titlul tabelului.
2. Mai trebuie **1** `<td>` (2 + 1 = 3, tabelul are 4 coloane).
3. Rândul 2 are nevoie de **2** `<td>` – prima coloană e deja ocupată de „Fruit salad” cu `rowspan="2"`.
4. `scope="col"` = antet de coloană; `scope="row"` = antet de rând.
5. `border-collapse: collapse` + `border` pe `th, td`.
6. Atributele `border`/`bgcolor` sunt învechite; stilul se pune în fișierul CSS extern.
