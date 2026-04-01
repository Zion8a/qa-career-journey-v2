# Part 07 - Playwright Foundation

## Syfte
Denna del visar grunden i UI-testautomation med Playwright. Målet är att sätta upp ett fungerande testprojekt, köra ett första smoke test lokalt och förstå den grundläggande projektstrukturen för UI-automation.

## Det här har jag gjort
- satt upp ett Playwright-projekt i TypeScript
- organiserat projektet i en egen delmapp
- felsökt och rättat projektstruktur när filer först hamnade i fel nivå i repot
- installerat Playwright och Chromium lokalt
- skapat och kört ett första smoke test
- verifierat att testet går grönt lokalt

## Test som körs
Testfil: `tests/example.spec.ts`

Testet verifierar att Playwrights startsida laddas och att sidtiteln innehåller ordet `Playwright`.

## Så körs testet lokalt
```bash
npm install
npx playwright install chromium
npx playwright test --project=chromium