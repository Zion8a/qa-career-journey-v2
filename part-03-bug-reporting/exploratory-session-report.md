# Exploratory Session Report

## Syfte
Att utforska en enkel inloggningssida med fokus på funktion, användbarhet och felhantering.

## Testfokus
- Inmatning av användarnamn eller e-post
- Inmatning av lösenord
- Inloggningsknappens beteende
- Felmeddelanden
- Återkoppling vid felaktig eller tom inmatning

## Genomförande
Jag utforskade sidan genom att prova både giltiga och ogiltiga inmatningar, tomma fält och olika användarscenarier kring inloggning.

## Det jag testade
- Inloggning med korrekta uppgifter
- Inloggning med fel lösenord
- Inloggning med tomma fält
- Hur lösenordsfältet visar inmatning
- Hur systemet ger återkoppling vid fel

## Det jag upptäckte
- Inloggningsknappen reagerade inte i ett scenario.
- Lösenord visades i klartext i ett scenario.
- Felmeddelandet vid misslyckad inloggning var otydligt.

## Risker och reflektioner
Den största risken är att användaren inte kan logga in alls. Det finns också risker kopplade till säkerhet och användarupplevelse om lösenord visas öppet eller om felmeddelanden inte är tydliga.

## Det jag skulle testa vidare
- Vad som händer efter flera misslyckade inloggningsförsök
- Hur sidan fungerar i mobilvy
- Hur sidan beter sig vid långsam uppkoppling
- Om det finns stöd för lösenordsåterställning