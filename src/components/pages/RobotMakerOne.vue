<template>
<div class="wrapper">
<page :data = "data" ></page>
  <div class="container ">   
    <div class="col-md-2"></div>
      <div class="col-md-8 ">

        <div class="panel panel-default">
          <div class="panel-body">
            <div class="pageTitle">RobotMakerOne</div>
            <p>RobotMakerOne är en AI-motor som är designad för att klara av att utveckla nästa generation av AI-algoritmer. Den är byggd från botten upp för att kunna använda sig av data från nya sensorer så som lidar och 3d kameror. RobotMakerOne är inte svaret på vad vilka algoritmer som kommer ge robotar möjligheten att ta sig till nästa nivå av deras utveckling. Utan det är medlet som kommer göra det möjligt att ta sig dit.</p>
            <p>RobotMakerOne har många nödvändiga algoritmer implementerade för utveckling av nästa generations vision system. Två exempel är edge detection och isotropisk remeshing.</p>
            <br>
            <img class="contentImage" src="../../assets/Double grid.jpg" >
            <p class ="contentImageInfo">Original mesh: Double grid</p> 
            <img class="contentImage" src="../../assets/Edge detection.jpg" >
            <p class ="contentImageInfo">Edgedetection på Double grid </p> 
            <img class="contentImage" src="../../assets/Isotropisk remeshing.jpg" >
            <p class ="contentImageInfo">Isotropisk remeshing på Double grid</p> 
            <p>RobotMakerOne har också möjligheten att låta användare dynamisk lägga till nya algoritmer och ger stöd i produktutvecklingen. Det senaste systemet Singilaritys utvecklings team tagit fram med hjälp av RobotMakerOne. Är object recognition algoritmer som klarat av att hitta ett object på X sekunder i en mesh på Y verticer. </p>
            <img class="contentImage" src="../../assets/bröte.jpg" >
            <p class ="contentImageInfo">3d skannat fat med en hammare, en skruvdragare och ett glas.</p>
            <img class="contentImage" src="../../assets/bröte hammer.jpg" >
            <p class ="contentImageInfo">RobotMakerOne har klarat av att identifiera hammaren på X sekunder.</p>
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