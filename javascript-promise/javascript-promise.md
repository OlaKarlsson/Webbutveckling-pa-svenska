# Javascript - Promises (eller löfte på Svenska)

Detta är ett intro till [Löften i Javascript (Promises på Engelska)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). Målet är att även någon som är ganska ny inom programmering och Javascript ska kunna få ut något av detta.

## Vad är löften i Javascript?
Ett löfte i Javascript programmering är en representation eller också kallad platshållare för resultatet av en [asynkron händelse](../asynkron-eller-synkron/asynkron-eller-synkron.md).

## Varför använda löften i Javascript?

För att förstå varför det är bra att använda löften i vår Javascriptkod bör du först ha en förståelse för vad det betyder att kod kan köras [synkront eller asynkront.](../asynkron-eller-synkron/asynkron-eller-synkron.md)

### Problemet med synkron eller blockerande kod

Många är vana vid synkron programmering där en sak händer efter en annan och koden måste vänta på att föregående sak ska bli färdig innan programmet kan gå vidare, detta kan också kallas för blockerande kod.
Ofta är detta inte ett problem då koden körs oerhört snabbt och det märks inte om där blir små uppehåll där koden väntar på något.

Nu kanske du tänker, men jag har skrivit en hel del Javascriptkod och inte märk några problem!
När detta ofta blir till ett problem, är när man ska ladda in saker från någonannanstans, till exempel från en fil, från en databas eller från en webbtjänst.

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









[Tillbaka till Readme](/Readme.md)


Källor:
https://spring.io/understanding/javascript-promises
