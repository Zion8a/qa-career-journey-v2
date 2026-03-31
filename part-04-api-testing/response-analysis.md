# Response Analysis

## API
GET https://restful-booker.herokuapp.com/booking

## Vad svaret innehåller
Svaret innehåller en lista med bokningsobjekt. Varje objekt verkar innehålla ett bookingid.

## Format
Svaret är i JSON-format.

## Det som verkar rimligt
- API:t returnerar data utan fel
- Det finns många bokningsposter, från bookingid 1 upp till bookingid 2526 i det svar jag observerade.
- Varje post verkar ha ett id
- Svaret ser strukturerat ut

## Det jag som testare skulle vilja kontrollera vidare
- Att statuskoden är korrekt
- Att alla poster verkligen innehåller bookingid
- Att formatet är konsekvent i hela svaret
- Att API:t inte returnerar tomt svar utan anledning
- Att svarstiden är rimlig

## Min reflektion
Det räcker inte att ett API svarar. Som testare behöver jag också bedöma om svaret verkar korrekt, konsekvent och användbart.