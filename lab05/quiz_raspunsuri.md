# Lab 5 – Quiz answers / Antworten

## English

1. The link opens W3Schools in a **new tab** (`target="_blank"`); our page stays open in its own tab.
   `rel="noopener noreferrer"` is there for security and privacy:
   - `noopener` – the new page gets no access to our tab (`window.opener` is `null`), so it cannot redirect or change our page ("tabnabbing").
   - `noreferrer` – the browser does not send the address of our page (the `Referer` header) to the other site.

   Rule from the lab: `_blank` only for external sites, always with `rel="noopener noreferrer"`, and "(new tab)" in the link text.
2. `target="viewer"` – the value of `target` must be the **name** of the iframe, not its `id`:
   `<a href="menu.html" target="viewer">Menu</a>`
3. `<a href="activities.html#forest">Forest</a>` – the page, then `#` and the `id` of the section (same spelling, upper and lower case included).
4. - A **transition** animates the change of a property **between two states**. It needs a trigger (`:hover`, `:focus`, a new class), is written on the normal state and runs back when the state ends:
     `.card-lift { transition: transform 0.3s ease; }` + `.card-lift:hover { transform: translateY(-6px); }`
   - A **`@keyframes` animation** runs **by itself** (e.g. when the page loads), can have many steps (0 %, 50 %, 100 %) and can repeat (`infinite`):
     `@keyframes slide-in { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }` + `.hero-title { animation: slide-in 1s ease-out; }`
5. Every element with the class `pulse` plays the `@keyframes` animation called `pulse`: one cycle takes **2 seconds**, `ease-in-out` = slow at the start and at the end, faster in the middle, `infinite` = forever. With `scale(1)` → `scale(1.06)` → `scale(1)` the element grows a little and shrinks back – it "pulses", e.g. a "Book now" button. Without `@keyframes pulse` nothing moves; with `prefers-reduced-motion: reduce` it should be switched off (`animation: none`).
6. - `card` → `w3-card`
   - `btn btn-success` → `w3-button w3-green`
   - `col-md-4` → `w3-col m4` (inside `w3-row-padding`, which matches `row`)

## Deutsch

1. Der Link öffnet W3Schools in einem **neuen Tab** (`target="_blank"`); unsere Seite bleibt in ihrem Tab offen.
   `rel="noopener noreferrer"` dient der Sicherheit und dem Datenschutz:
   - `noopener` – die neue Seite bekommt keinen Zugriff auf unseren Tab (`window.opener` ist `null`) und kann unsere Seite nicht umleiten oder verändern („Tabnabbing“).
   - `noreferrer` – der Browser schickt die Adresse unserer Seite (den `Referer`-Header) nicht an die fremde Website.

   Regel aus dem Labor: `_blank` nur für externe Seiten, immer mit `rel="noopener noreferrer"`, und „(neuer Tab)“ im Linktext.
2. `target="viewer"` – der Wert von `target` muss der **Name** (`name`) des iframes sein, nicht seine `id`:
   `<a href="menu.html" target="viewer">Menu</a>`
3. `<a href="activities.html#forest">Wald</a>` – die Seite, dann `#` und die `id` des Abschnitts (gleiche Schreibweise, auch Groß-/Kleinbuchstaben).
4. - Eine **Transition** animiert die Änderung einer Eigenschaft **zwischen zwei Zuständen**. Sie braucht einen Auslöser (`:hover`, `:focus`, eine neue Klasse), steht beim normalen Zustand und läuft zurück, wenn der Zustand endet:
     `.card-lift { transition: transform 0.3s ease; }` + `.card-lift:hover { transform: translateY(-6px); }`
   - Eine **`@keyframes`-Animation** läuft **von selbst** (z. B. beim Laden der Seite), kann viele Schritte haben (0 %, 50 %, 100 %) und sich wiederholen (`infinite`):
     `@keyframes slide-in { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }` + `.hero-title { animation: slide-in 1s ease-out; }`
5. Jedes Element mit der Klasse `pulse` spielt die `@keyframes`-Animation `pulse` ab: ein Durchlauf dauert **2 Sekunden**, `ease-in-out` = langsam am Anfang und am Ende, schneller in der Mitte, `infinite` = endlos. Mit `scale(1)` → `scale(1.06)` → `scale(1)` wird das Element etwas größer und wieder kleiner – es „pulsiert“, z. B. ein „Jetzt buchen“-Button. Ohne `@keyframes pulse` bewegt sich nichts; bei `prefers-reduced-motion: reduce` wird sie ausgeschaltet (`animation: none`).
6. - `card` → `w3-card`
   - `btn btn-success` → `w3-button w3-green`
   - `col-md-4` → `w3-col m4` (in `w3-row-padding`, das entspricht `row`)
