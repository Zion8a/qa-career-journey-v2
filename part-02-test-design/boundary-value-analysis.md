# Boundary Value Analysis

## Vald funktion
Inloggning med lösenord.

## Antagande
Lösenordet måste vara mellan 8 och 20 tecken långt.

## Gränsvärden att testa
- 7 tecken
- 8 tecken
- 9 tecken
- 19 tecken
- 20 tecken
- 21 tecken

## Testidéer
1. Ange ett lösenord med 7 tecken.
   - Förväntat resultat: lösenordet ska inte accepteras.

2. Ange ett lösenord med 8 tecken.
   - Förväntat resultat: lösenordet ska accepteras.

3. Ange ett lösenord med 9 tecken.
   - Förväntat resultat: lösenordet ska accepteras.

4. Ange ett lösenord med 19 tecken.
   - Förväntat resultat: lösenordet ska accepteras.

5. Ange ett lösenord med 20 tecken.
   - Förväntat resultat: lösenordet ska accepteras.

6. Ange ett lösenord med 21 tecken.
   - Förväntat resultat: lösenordet ska inte accepteras.

## Reflektion
Gränsvärdesanalys hjälper mig att testa precis där risken för fel ofta är som störst: vid de tillåtna gränserna och precis utanför dem.