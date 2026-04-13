# Part 09 - Playwright Form and User Flow

Byggde vidare på tidigare Playwright-delar genom att testa ett enklare användarflöde med klick, inmatning i sökfält och verifiering av resultat i UI.

## Syfte
Denna del fokuserar på användarinteraktion i Playwright. Målet är att gå från statisk UI-verifiering till ett enklare användarflöde där en användare klickar, skriver in data och får ett synligt resultat.

## Det här har jag gjort
- satt upp ett nytt Playwright-delprojekt i TypeScript
- skapat ett test som öppnar Playwrights webbplats
- klickat på sökikonen
- fyllt i sökfältet med texten `python`
- verifierat att resultatet `Playwright for Python` visas
- kört testet lokalt i Chromium med grönt resultat

## Test som körs
Testfil: `tests/example.spec.ts`

### Test
Verifierar att en användare kan:
- öppna webbplatsen
- aktivera sökfunktionen
- skriva in en sökterm
- få ett relevant resultat i gränssnittet

## Så körs testet lokalt
```bash
npm install
npx playwright install chromium
npx playwright test --project=chromium