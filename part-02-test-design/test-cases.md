# Test Cases

## Testfall 1: Lyckad inloggning

### Förutsättning
Användaren har ett giltigt konto och befinner sig på inloggningssidan.

### Teststeg
1. Ange giltig e-post eller användarnamn.
2. Ange korrekt lösenord.
3. Klicka på inloggningsknappen.

### Förväntat resultat
Användaren loggas in och skickas vidare till rätt sida.

---

## Testfall 2: Fel lösenord

### Förutsättning
Användaren har ett giltigt konto och befinner sig på inloggningssidan.

### Teststeg
1. Ange giltig e-post eller användarnamn.
2. Ange fel lösenord.
3. Klicka på inloggningsknappen.

### Förväntat resultat
Ett tydligt felmeddelande visas och användaren loggas inte in.

---

## Testfall 3: Tomma fält

### Förutsättning
Användaren befinner sig på inloggningssidan.

### Teststeg
1. Lämna användarnamn/e-post tomt.
2. Lämna lösenord tomt.
3. Klicka på inloggningsknappen.

### Förväntat resultat
Systemet visar tydlig återkoppling om att obligatoriska fält inte är ifyllda.

---

## Testfall 4: Dolt lösenord

### Förutsättning
Användaren befinner sig på inloggningssidan.

### Teststeg
1. Klicka i lösenordsfältet.
2. Skriv in ett lösenord.

### Förväntat resultat
Lösenordet visas som dolda tecken och inte i klartext.

---

## Testfall 5: Rätt sida efter inloggning

### Förutsättning
Användaren har ett giltigt konto och befinner sig på inloggningssidan.

### Teststeg
1. Ange giltiga inloggningsuppgifter.
2. Klicka på inloggningsknappen.

### Förväntat resultat
Användaren skickas till rätt sida efter inloggning.