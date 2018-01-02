<template>
<div class="wrapper">
<page :data = "data" ></page>
  
  <div class="container ">   
    <div class="col-md-2"></div>
      <div class="col-md-8 ">

        <div class="panel panel-default">
          <div class="panel-body">
            <div class="pageTitle">Eagle Eye</div>
            <div class="pageIntro">Eagle Eye är ett vision system som är framtaget med hjälp av Singilaritys egen AI-plattform RobotMakerOne för att ge robotar möjlighet att hjälpa människor i vardagen.  </div>
            <p>Fram till för 10 år sedan så fokuserade nästan all forsking om vision system kring bildhantering och 2D data. Detta berodde på av vi biologiskt använder oss av stereosyn. Vilket bevisar att det går att bygga ett fungerande vision system med hjälp av kameror. Det var också så att det var väldigt lätt att få tag på test data i form av bildserier. Sensorer som klarade av att lästa in tredimensionella modeller av ett motiv var väldigt dyra och få personer hade tillgång till dem.</p>
            <p>På Singilarity avser vi att mänsklig synförmågan så som objekt igenkänning och objekt kategoresering måste vara baserad på 3D data. Detta har varit ett problem eftersom det inte gått att tillräckligt bra omvandla 2D bilder vill en tredimensionell representation av motivet på bilden. Detta har lätt till att forskningen av snedvridits när det varit en brist på tillförlitlig tredimensionell data. Man har helt enkelt försökt hitta tredimensionella objekt i tvådimensionell data eftersom det är det man haft tillgång till. Detta har ändrats i grunden de senaste tio åren med nya och billigare sonsorer som klarar av att läsa in punktmoln i realtid.   </p>
            <p>Många vision system idag använder sig av Machine learning för att försöka lära en AI var som skiljer olika objekt. Eagle Eye skapar istället ett dimensionsoberoende objekt som gör att den klarar av att känna igen objekt den sett tidigare. Skillnaden kan liknas som att man med Machine learning försöker förstå vad som är unikt med en hammare genom att titta på många hammare och jämföra det mot många stolar. Medan man med Eagle Eye istället skapar sig en matematisk representation av objektet som man senare kan jämföra med andra objekt.  Här är ett exempel på när Eagle Eye hittar en hammare i en hög med verktyg.</p>
            
            <img class="contentImage" src="../../assets/bröte.jpg" >
            <p class ="contentImageInfo">Verktyg</p>
            <img class="contentImage" src="../../assets/bröte hammer.jpg" >
            <p class ="contentImageInfo">Identifierad hammare</p>

            <p>Eagle Eye klarar även av att hitta objekt även när den bara kan se delare av objektet. I exemplet nedan klarar den av att förstå att det står ett glas på bordet även som delar av glaset är sönder. Den klarar även av att förstå vilka delar som saknas för att kunna fatta ett informerat beslut.</p>
           
            <img class="contentImage" src="../../assets/Trasigt glas och hammare.jpg" >
            <p class ="contentImageInfo">Bord med trasigt glas.</p>
            <img class="contentImage" src="../../assets/Identifierat glas.jpg" >
            <p class ="contentImageInfo">Identifierat glas.</p>

           </div>
        </div>

      </div>
    </div>
  </div>
</div>
</template>

<script>

import {bus} from '../../main'

export default {
    data () {
    return {
      data: { 
        imagePath:require("../../assets/Vision system.jpg")
        }
    }
    },
    created() {     
        bus.$emit('SetActiveNavbar','Produkter');
        window.scrollTo(0, 0);
    }
}
</script>

<style scoped>
.wrapper{
  background-color:#f3f3f3;
  min-height: calc(100vh - 52px);
}
</style>