<template>
<div class="wrapper">
<page :data = "data" ></page>
  <div class="container ">   
    <div class="col-md-2"></div>
      <div class="col-md-8 ">

        <div class="panel panel-default">
          <div class="panel-body">
            <div class="pageTitle">RobotMakerOne</div>
            <div class="pageIntro">Inom robotiken har det skett att paradigmskifte de senaste 10 åren. Robotar har gått från att enbart kunna använda sig av 2d teknik och simpla distans sensorer. Till att ta in hela punktmoln av sin omgivning i realtid. RobotMakerOne är en AI-motor som är byggd från grunden för att passa in i detta nya landskap.</div>
            <p>RobotMakerOne designad för att hjälpa till med alla delar när det kommer till att utveckla nästa generations robotar. Den använder sig av en sense-plan-act arkitektur. Vilket gör det möjlig för dig att utveckla ett kontinuerligt flöde ända från sensor input till fysisk exekvering.  </p>
            <p>RobotMakerOne har ett brett Computational Geometry bibliotek. Detta anses av många utvecklare vara den svåraste delen att utveckla själv. Vi har därför valt att lägga ett stort fokus på detta område. Exempel på algoritmer som finns färdigimplementerade är Edge detection och sotropisk remeshing.</p>
            <br>
            <img class="contentImage" src="../../assets/Double grid.jpg" >
            <p class ="contentImageInfo">Original mesh</p> 
            <img class="contentImage" src="../../assets/Edge detection.jpg" >
            <p class ="contentImageInfo">Edge detection</p> 
            <img class="contentImage" src="../../assets/Isotropisk remeshing.jpg" >
            <p class ="contentImageInfo">Isotropisk remeshing</p> 
            <p>Det är enkelt att lägga utveckla egna algoritmer och du får hjälp med såväl visuell debugging som kod strukturering. Det senaste systemet Singilaritys utvecklingsteam tagit fram med hjälp av RobotMakerOne är ett vision system. Som klarar av att identifiera ett objekt i en mesh på 200.000 verticer på 10 ms.</p>
            <img class="contentImage" src="../../assets/bröte.jpg" >
            <p class ="contentImageInfo">Inskannad mesh</p>
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