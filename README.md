För att starta projectet kör: 
ng serve

Om du inte har angular installerat behöver du först köra:
npm install -g @angular/cli


Såhär skapade jag mitt projekt:

Jag började med att installera angualr/cli genom att köra kommandot:
npm install -g @angular/cli
Jag skapade sedan en ny mapp:
ng new angular-clock
Och startade igång servern:
ng serve

Jag skapade sedan 3 olika komponenter, header, clock och footer, i en components-mapp:
ng generate component components/header
ng generate component components/clock
ng generate component components/footer

Jag raderade allt i app.component.html-filen och skev in vardera selector för varje komponent, alltså:
<app-header></app-header>
<app-clock></app-clock>
<app-footer></app-footer>
och fick ut:
header is working!
clock is working!
footer is working!

Jag "skapade" sedan klockan i clock.component.ts
Jag skrev ut propertyn dateTime vilket är en typ av Date som visar datum och tid.
dateTime initialiseras genom nedDate().
ngOnInit är en Angular-lifecykle-metod som anropar startClock för att börja uppdatera dateTime.
StartClock använder setInterval för att uppdatera dateTime varje sekund genom att tilldela den ett nytt Date-objekt. Jag loggar också ut "count" till konsolen varje sekund. 

Jag skrev sedan in {{dateTime | date: "hh:mm:ss a" }} i clock.component.html
dateTime refererar till dateTime i ClockComponent-klassen.
date är en inbyggd Angular-pipe (filter) som används för att formatera datum och tid. 

I header och footer- komponenterna har jag endast ändrat i .component.html-filerna och component.css-filerna. Jag la till en header-tag tag i headern och en footertag i footern för att underlätta styling. Jag la även till två divar i clock.component.html.

Jag stylade sedan vardera komponent i tillhörande css-fil. Jag la även till lite global styling i style.css. 





