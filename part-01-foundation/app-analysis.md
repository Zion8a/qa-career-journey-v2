# App Analysis

## Vald tjänst
En enkel inloggningssida.

## Syfte
Tjänsten låter användaren logga in med sina uppgifter för att få tillgång till sitt konto eller en skyddad del av systemet.

## Målgrupp
Användaren är en person som redan har ett konto och vill kunna logga in snabbt, enkelt och säkert.

## Viktigaste funktioner
- Ange användarnamn eller e-post
- Ange lösenord
- Logga in
- Få tydligt felmeddelande vid felaktiga uppgifter
- Kunna komma vidare till rätt sida efter lyckad inloggning

## Känsliga eller viktiga delar
- Inloggningen måste fungera
- Felmeddelanden måste vara tydliga men säkra
- Lösenordet ska hanteras säkert
- Användaren ska inte bli inlåst eller förvirrad
- Systemet ska reagera rätt på felaktiga uppgifter

## Risker och testidéer
1. Användaren kan inte logga in trots korrekta uppgifter.
2. Felmeddelandet är otydligt vid fel lösenord.
3. Inloggningsknappen fungerar inte.
4. Lösenordsfältet visar texten öppet i stället för dolt.
5. Sidan fungerar dåligt i mobilvy.
6. Systemet reagerar inte tydligt på tomma fält.
7. Användaren skickas till fel sida efter inloggning.
8. Det går att skriva in ogiltiga tecken utan tydlig hantering.
9. Felmeddelandet avslöjar för mycket information om kontot.
10. Sidan är långsam eller fryser vid inloggningsförsök.

## Prioriterade risker
### Högst prioriterade
1. Användaren kan inte logga in trots korrekta uppgifter.
2. Inloggningsknappen fungerar inte.
3. Systemet reagerar inte tydligt på tomma fält.
4. Användaren skickas till fel sida efter inloggning.

## Motivering
De här riskerna är viktigast eftersom de direkt påverkar om användaren kan använda tjänsten och om förtroendet för systemet består.

## Första testfokus
- Inloggning med korrekta uppgifter
- Inloggning med fel lösenord
- Inloggning med tomma fält
- Vad som händer efter lyckad inloggning