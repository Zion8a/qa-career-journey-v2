# Part 12 - Playwright CI and Professional Packaging

Avslutade Playwright-spåret med ett enkelt och stabilt UI-smoketest samt ett GitHub Actions-workflow som visar hur testet kan köras automatiskt i CI.

## Syfte
Denna del fokuserar på CI och professionell paketering av Playwright-testning. Målet är att visa hur ett litet, tydligt och stabilt UI-test kan användas som grund för automatiserad körning i GitHub Actions.

## Det här har jag gjort
- satt upp ett nytt Playwright-delprojekt i TypeScript
- skapat ett enkelt och stabilt UI-smoketest
- verifierat att testet går grönt lokalt i Chromium
- skapat ett GitHub Actions-workflow manuellt
- konfigurerat workflowen så att den körs när part-12 eller workflowfilen ändras
- förberett projektet för automatiserad körning i CI

## Test som körs
Testfil: `tests/example.spec.ts`

### Test
Verifierar att:
- Playwrights startsida öppnas
- sidtiteln innehåller `Playwright`

## GitHub Actions-workflow
Workflowfil: `.github/workflows/playwright-part12.yml`

Workflowen:
- checkar ut repot
- sätter upp Node.js
- installerar dependencies med `npm ci`
- installerar Chromium och nödvändiga beroenden
- kör Playwright-testet i Chromium

## Så körs testet lokalt
```bash
npm install
npx playwright install chromium
npx playwright test --project=chromium