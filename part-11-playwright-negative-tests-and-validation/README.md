# Part 11 - Playwright Negative Tests and Validation

Byggde vidare på tidigare Playwright-delar genom att testa ett negativt scenario där tom användarinput triggar validering och felhantering i UI.

## Syfte
Denna del fokuserar på negativa scenarier och validering i Playwright. Målet är att verifiera hur ett gränssnitt reagerar när användaren försöker skicka formulärdata utan att fylla i ett obligatoriskt fält.

## Det här har jag gjort
- satt upp ett nytt Playwright-delprojekt i TypeScript
- byggt ett negativt test för tom användarinput
- testat en körbar formulärversion i W3Schools Tryit-miljö
- hanterat dialog/alert i Playwright
- verifierat att rätt valideringsmeddelande visas när användaren skickar ett tomt fält
- kört testet lokalt i Chromium med grönt resultat

## Test som körs
Testfil: `tests/example.spec.ts`

### Test
Verifierar att:
- användaren öppnar formuläret
- fältet lämnas tomt
- submit triggas
- ett valideringsmeddelande visas med innehållet `Name must be filled out`

## Så körs testet lokalt
```bash
npm install
npx playwright install chromium
npx playwright test --project=chromium