# Endpoint Behavior Notes

## Testade endpoints
1. GET https://restful-booker.herokuapp.com/booking
2. GET https://restful-booker.herokuapp.com/booking/2526

## Observationer
Den första endpointen returnerade 200 OK och en lista med bookingid.

Den andra endpointen returnerade 404 Not Found, trots att bookingid 2526 fanns med i listsvaret från den första endpointen.

## Tolkning
Det verkar som att ett bookingid som visas i listan inte nödvändigtvis går att hämta som en enskild resurs via detail-endpointen.

## Testperspektiv
Som testare är detta viktigt att uppmärksamma eftersom det kan tyda på:
- instabil testdata
- inkonsekvent API-beteende
- skillnad mellan listdata och åtkomlig detaljdata

## Lärdom
API-testning handlar inte bara om att få 200 OK. Det handlar också om att upptäcka och dokumentera när ett systems beteende inte är konsekvent.