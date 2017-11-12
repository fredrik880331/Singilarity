<template>
  <div>
    <div class ="imageWrapper">
      <img class ="image" src="../assets/logo1.jpg">
    </div>


    <div class='titel'>Singilarity</div>

    <div class='subTitel'>Welcome to the next generation of robotics</div>

    <div class="container">
      <div class="row">
        <thumbnail :data="robotmaker1Thumbnail"></thumbnail>    
        <thumbnail :data="kontatOssThumbnail"></thumbnail>
        <thumbnail :data="omFöretagetThumbnail"></thumbnail>
        <thumbnail :data="missingLinkInRobotics"></thumbnail>
     
      
      </div>
    </div>
 </div>


</template>

<script>
import {bus} from '../main'
export default {

  name: 'Home',
  data () {
    return {
      robotmaker1Thumbnail: {
        title:'RobotMakerOne',
        info: 'RobotMakerOne är en AI-motor som är designad för att klara av att utveckla nästa generation av AI-algoritmer. Den är byggd från botten upp för att kunna använda sig av...',
        imagePath:require("../assets/RM1 logo.png"),
        link: "#/Robotmaker1"},
      omFöretagetThumbnail: {
        title:'Om Sinilarity',
        info: 'Varför finns det inte intelligenta robotar? Det är frågan som är fröet till det som idag är Singilarity.',
        imagePath:require("../assets/Singilarity logo2 tagline.png"),
        link: "#/OmFöretaget" },
      missingLinkInRobotics: {
        title:'The missing link in robotics',
        info: 'In this article we search for “the missing link in robotics”. We state that this is the field that is holding back the robot development from...',
        imagePath:require("../assets/Missing link in robotics.jpg"),
        link: "#/MissingLinkInRobotics" },
      kontatOssThumbnail: {
        title:'Kontakt',
        info: 'Vill du veta mer om Sinilarity och våra produkter så får du gärna höra av dig med frågor.',
        imagePath:require("../assets/Contact us keyboard.jpg"),
        link: "#/Kontakt"}       
    }
  },
    created() {
        
       bus.$emit('SetActiveNavbar','Hem');
    }
}
</script>

<style scoped>
.titel {
font-size: 70px;
margin: 0px;
}
.subTitel {
margin: 0px;
margin-bottom:10px;
margin-top:-10px;
font-size:30px;
}
.image{
   
   width:100%;
   max-width: 1200px; 
}

.imageWrapper
{
  background: #e0e0e0;
  width:100%;
}
/*.wrapper{
  background-color:white;
}*/
</style>
