# Equivalence Partitioning

## Vald funktion
Inloggning med e-postadress.

## Syfte
Att dela upp möjliga inmatningar i grupper för att kunna testa representativa värden i stället för alla tänkbara värden.

## Giltiga klasser
1. Korrekt formaterad e-postadress
   - Exempel: user@example.com

## Ogiltiga klasser
1. Tomt fält
   - Exempel: ""

2. Saknar @-tecken
   - Exempel: userexample.com

3. Saknar domändel
   - Exempel: user@

4. Saknar användardel
   - Exempel: @example.com

5. Innehåller otillåtna tecken eller felaktigt format
   - Exempel: user@exa mple.com

## Testidéer
1. Ange en korrekt e-postadress.
   - Förväntat resultat: värdet accepteras.

2. Lämna fältet tomt.
   - Förväntat resultat: tydlig återkoppling visas.

3. Ange e-post utan @.
   - Förväntat resultat: värdet accepteras inte.

4. Ange e-post utan domändel.
   - Förväntat resultat: värdet accepteras inte.

5. Ange e-post utan användardel.
   - Förväntat resultat: värdet accepteras inte.

6. Ange e-post med ogiltigt format.
   - Förväntat resultat: värdet accepteras inte.

## Reflektion
Ekvivalensindelning hjälper mig att gruppera liknande typer av indata så att jag kan testa smartare utan att behöva testa varje enskilt möjligt värde.