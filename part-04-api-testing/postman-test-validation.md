# Postman Test Validation

## API
GET https://restful-booker.herokuapp.com/booking

## Syfte
Att kontrollera att API:t svarar med rätt statuskod.

## Test
Jag lade till ett test i Postman under After response för att kontrollera att statuskoden är 200.

## Kod
```javascript
pm.test("Status code is 200", function () {
    pm.expect(pm.response.code).to.eql(200);
});