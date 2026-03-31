# QA Foundation Notes

## Vad betyder kvalitet?
Kvalitet i en digital tjänst betyder att den fungerar som användaren förväntar sig, är tydlig, stabil och går att lita på.

## Vad gör en testare värdefull?
En testare skapar värde genom att upptäcka risker tidigt, ställa frågor, förbättra krav och hjälpa teamet att leverera bättre kvalitet.

## Vad är risk i testning?
Risk i testning handlar om vad som kan gå fel, hur sannolikt det är att det händer och hur stor påverkan det får för användaren eller verksamheten.

## Mina första lärdomar om QA
- Testning handlar inte bara om att hitta buggar.
- En testare måste förstå användaren.
- Risk hjälper oss att prioritera vad som ska testas.
- Tydlig dokumentation är viktig.
- Kvalitet börjar med tänkande, inte verktyg.

## Analys av vald tjänst

### Vald tjänst
En enkel inloggningssida.

### Vad tjänsten gör
Tjänsten låter användaren logga in med sina uppgifter för att få tillgång till sitt konto eller en skyddad del av systemet.

### Vem användaren är
Användaren är en person som redan har ett konto och vill kunna logga in snabbt, enkelt och säkert.

### Viktigaste funktionerna
- Ange användarnamn eller e-post
- Ange lösenord
- Logga in
- Få tydligt felmeddelande vid felaktiga uppgifter
- Kunna komma vidare till rätt sida efter lyckad inloggning

### Känsliga eller viktiga delar
- Inloggningen måste fungera
- Felmeddelanden måste vara tydliga men säkra
- Lösenordet ska hanteras säkert
- Användaren ska inte bli inlåst eller förvirrad
- Systemet ska reagera rätt på felaktiga uppgifter

## Mina första 10 risker eller testidéer
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

## Prioritering av risker

### Högst prioriterade risker
1. Användaren kan inte logga in trots korrekta uppgifter.
2. Inloggningsknappen fungerar inte.
3. Systemet reagerar inte tydligt på tomma fält.
4. Användaren skickas till fel sida efter inloggning.

### Varför dessa är viktigast
De är viktigast eftersom de direkt påverkar om användaren överhuvudtaget kan använda tjänsten. Om inloggningen inte fungerar eller beter sig otydligt tappar användaren snabbt förtroendet för systemet.

### Vad jag skulle testa först
Jag skulle börja med att testa:
- inloggning med korrekta uppgifter
- inloggning med fel lösenord
- inloggning med tomma fält
- vad som händer efter lyckad inloggning