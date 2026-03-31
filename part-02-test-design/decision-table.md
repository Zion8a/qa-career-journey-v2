# Decision Table

## Vald funktion
Inloggning på en enkel inloggningssida.

## Syfte
Att visa hur olika kombinationer av användarnamn/e-post och lösenord påverkar resultatet vid inloggning.

| Regel | Användarnamn/e-post korrekt | Lösenord korrekt | Förväntat resultat |
|------|------------------------------|------------------|--------------------|
| 1    | Ja                           | Ja               | Inloggning lyckas |
| 2    | Ja                           | Nej              | Felmeddelande visas |
| 3    | Nej                          | Ja               | Felmeddelande visas |
| 4    | Nej                          | Nej              | Felmeddelande visas |
| 5    | Tomt                         | Ja               | Återkoppling om obligatoriskt fält |
| 6    | Ja                           | Tomt             | Återkoppling om obligatoriskt fält |
| 7    | Tomt                         | Tomt             | Återkoppling om obligatoriska fält |

## Reflektion
En beslutstabell hjälper mig att se logiken tydligt och säkerställa att jag testar flera viktiga kombinationer, inte bara de mest uppenbara.