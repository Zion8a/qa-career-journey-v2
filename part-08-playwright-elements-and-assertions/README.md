# Part 08 - Playwright Elements and Assertions

## Syfte
Denna del bygger vidare på Playwright-grunden från part-07. Målet är att arbeta mer konkret med elementidentifiering och assertions i UI-testautomation.

## Det här har jag gjort
- satt upp ett nytt Playwright-delprojekt i TypeScript
- arbetat med robust elementhantering med `getByRole`
- verifierat att viktiga länkar är synliga på startsidan
- verifierat navigation efter klick på `Get started`
- lagt till assertions för titel, synlighet, URL och heading
- kört testerna lokalt i Chromium med grönt resultat

## Test som körs
Testfil: `tests/example.spec.ts`

### Test 1
Verifierar att startsidan:
- har en titel som innehåller `Playwright`
- visar länken `Get started`
- visar länken `Docs`

### Test 2
Verifierar att:
- klick på `Get started` navigerar vidare
- URL ändras till introductionssidan
- headingen `Installation` visas

## Så körs testet lokalt
```bash
npm install
npx playwright install chromium
npx playwright test --project=chromium