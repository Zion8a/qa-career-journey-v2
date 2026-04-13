# Part 10 - Playwright Page Object Model

Byggde vidare på tidigare Playwright-delar genom att strukturera testkoden med Page Object Model för bättre läsbarhet, återanvändbarhet och underhållbarhet.

## Syfte
Denna del fokuserar på att strukturera Playwright-tester mer professionellt. Målet är att separera testflöde från sidlogik, så att testfiler blir renare och page objects ansvarar för interaktioner och verifieringar kopplade till en specifik sida.

## Det här har jag gjort
- satt upp ett nytt Playwright-delprojekt i TypeScript
- skapat en separat page object-klass för Playwrights startsida
- flyttat logik för navigation, klick och verifieringar till page object-filen
- förenklat testfilen så att den beskriver flödet tydligare
- kört testet lokalt i Chromium med grönt resultat

## Struktur
- `tests/example.spec.ts` innehåller testflödet
- `pages/playwrightHomePage.ts` innehåller sidlogik och assertions

## Test som körs
Testet verifierar att en användare kan:
- öppna Playwrights startsida
- verifiera att sidtiteln innehåller `Playwright`
- klicka på `Get started`
- verifiera att sidan med `Installation` visas

## Så körs testet lokalt
```bash
npm install
npx playwright install chromium
npx playwright test --project=chromium