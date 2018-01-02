<template>
<div class="wrapper">
<page :data = "data" ></page>
  <div class="container ">   
    <div class="col-md-2"></div>
      <div class="col-md-8 ">

        <div class="panel panel-default">
          <div class="panel-body">
            <div class="pageTitle">RobotMakerOne</div>
            <div class="pageIntro">Inom robotiken har det skett att paradigmskifte de senaste 10 åren. Robotar har gått från att enbart kunna använda sig av 2D teknik och simpla distans sensorer. Till att ta in hela punktmoln av sin omgivning i realtid. Detta har gett upphov till en ny generation av mer avancerade robotar. Av de robotar som idag använder sig av denna nya teknik så är självkörande bilar de som fått störst genomslagskraft hos allmänheten. Det är dock så att detta teknikskifte har potentialen för så mycket mer och kan vara det som till slut öppnar dörren till verkligt autonoma robotar.</div>
            <p>Singilarity har alltid haft ett tydligt fokus på att ligga i framkant inom robotiken och som mål att bygga robotar som kan ersätta det människor gör idag. Det vi fann vara att det idag inte fanns någon bra plattform för detta och därför var vi tvungna att ta fram vår egen plattform. Det var detta som blev RobotMakerOne. RobotMakerOne är en AI-motor som har två tydliga fokusområden. Att göra det så enkelt som möjligt att utveckla nya typer av AI och att kunna använda sig av den nyaste sensortekniken.</p>
            <p>När man idag går från 2D till 3D sensorer så är ett av det absolut viktigaste områdena man måste behärska Computational Geometry. Därför kommer RobotMakerOne med ett robust bibliotek för grundläggande CG beräkningar. RobotMakerOne använder sig även av en sense-plan-act arkitektur. Vilket gör det möjlig att utveckla ett kontinuerligt flöde ända från sensor input till fysisk exekvering men har störst fokus på Computational Geometry. Detta för att det är flaskhalsen inom dagens robotikutveckling.</p>
            <p>Exempel på grundläggande Computational Geometry beräkningar:</p> 
            <br>
            <img class="contentImage" src="../../assets/Double grid.jpg" >
            <p class ="contentImageInfo">Original mesh</p> 
            <img class="contentImage" src="../../assets/Edge detection.jpg" >
            <p class ="contentImageInfo">Edge detection</p> 
            <img class="contentImage" src="../../assets/Isotropisk remeshing.jpg" >
            <p class ="contentImageInfo">Isotropisk remeshing</p> 
            <p>Singilarity har med hjälp av RobotMakerOne lyckats ta fram ett vision system som i realtid klarar av att identifiera komplexa objekt och deras position i en 3D rymd. Här nedan kan man de hur systemet lyckas identifiera en hammare i en hög av verktyg. För mer information om vision systemet kan du läsa <a href="#/EagleEye">här</a>.</p>
            <img class="contentImage" src="../../assets/bröte.jpg" >
            <p class ="contentImageInfo">Verktyg</p>
            <img class="contentImage" src="../../assets/bröte hammer.jpg" >
            <p class ="contentImageInfo">Identifierad hammare</p>
            <br>
          
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
           imagePath:require("../../assets/RM1 logo.png")
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