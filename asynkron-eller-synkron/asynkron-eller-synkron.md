# Synkron eller Asynkron programmering

## Synkron programmering
Allting sker "i ordning", alltså en sak kan inte påbörjas innan den föregående hav avslutats.

## Asynkron programmering
I Asynkron programmering kan flera saker ske samtidigt, en sak kan sättas igång och sedan har man kod som kommer köras när den saken är färdig. På detta sätt kan man sätta igång fleras saker samtidigt och de kan hända parallellt.


### Problemet med synkron eller blockerande kod

Många är vana vid synkron programmering där en sak händer efter en annan och koden måste vänta på att föregående sak ska bli färdig innan programmet kan gå vidare, detta kan också kallas för blockerande kod.
Ofta är detta inte ett problem då koden körs oerhört snabbt och det märks inte om där blir små uppehåll där koden väntar på något.

Nu kanske du tänker, men jag har skrivit en hel del Javascriptkod och inte märk några problem!
När detta ofta blir till ett problem, är när man ska ladda in saker från någon annanstans, till exempel från en fil, från en databas eller från en webbtjänst.

Om man anropar en webbtjänst och nätverket är instabilt eller där är mycket trafik till den webbtjänsten just då, kan detta orsaka stora problem för din kod och användarna kommer definitivt att märka det och tycka att saker är långsamma. Laddar man in flera saker, kanske från flera olika ställen kan det bli så illa att användaren ger upp och då har du tappat den användaren.

## Asynkron kod, till undsättning

Det "gamla" sättet att hantera detta är genom vad som i Javascript kallas Callbacks.

```javascript

//Anropa en metod som hämtar data från en webbtjänst någonstans på nätet
getUsersIdsFromWebservice(function(users){
//Och här inne får vi tillabaka resultatet från anropet i variabels data, som vi specifierat i vår callback funktion
//Ett problem med detta är att att om vi sedan vill göra flera anrop till andra källor baserat på  datan vi fick tillbaka, kan det börja bli rörigt.

  users.forEach(function(userId){
    getCarDetails(userId, function(userDetails){
    console.log(userDetails);
    });
  });


});
```
