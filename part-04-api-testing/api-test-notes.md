# API Test Notes

## Första API-requesten
Jag skickade en GET-request till:

https://restful-booker.herokuapp.com/booking

## Det jag observerade
- Requesten gick iväg från Postman
- API:t svarade med data
- Svaret innehöll en lista med boknings-id:n

## Viktiga delar i svaret
- Statuskod: 200 OK
- Response body: JSON-data med bokningsinformation
- Response time: visades i Postman

## Min första lärdom
Ett API-test börjar med att förstå om requesten lyckades, vad servern svarade med och om svaret verkar rimligt.