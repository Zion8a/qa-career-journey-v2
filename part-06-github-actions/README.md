# Part 06 GitHub Actions

Det här avsnittet fokuserar på att köra API-tester automatiskt i GitHub Actions.

## Innehåll
- `.github/workflows/api-tests.yml` – workflow-fil för CI-körning av API-test
- GitHub Actions-körning som installerar Node.js, installerar Newman och kör collectionen från `part-05-newman`

## Syfte
Syftet med arbetet är att koppla API-testning till ett CI-flöde så att tester kan köras automatiskt vid förändringar i repot.

## Det jag tränar på
- att förstå hur GitHub Actions fungerar
- att skapa en workflow-fil i rätt mappstruktur
- att köra Newman i CI
- att bygga snabb feedback i ett testflöde

## Resultat
Workflowen `API Tests` körs i GitHub Actions och går grönt. Flödet checkar ut repot, sätter upp Node.js, installerar Newman och kör Postman-collectionen automatiskt.

## Varför detta är viktigt
Det här visar hur testning kan flyttas från lokal körning till automatiserad kvalitetssäkring i pipeline, vilket är en viktig del av modern QA.