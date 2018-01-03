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
        <thumbnail :data="eagleEyeThumbnail"></thumbnail>
        <thumbnail :data="omFöretagetThumbnail"></thumbnail>
        <thumbnail :data="missingLinkInRobotics"></thumbnail>
     
      <!--  <thumbnail :data="kontatOssThumbnail"></thumbnail>-->
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
        info: 'Inom robotiken har det skett att paradigmskifte de senaste 10 åren. Robotar har gått från att enbart kunna använda sig av 2d teknik och simpla distans sensorer. Till att ta in hela...',
        imagePath:require("../assets/RM1 logo.png"),
        link: "#/Robotmaker1"},
      omFöretagetThumbnail: {
        title:'Om Sinilarity',
        info: 'I avsnittet ”Var är min robot?” från BBCs Horizon från 2008. Frågar Danny Wallace varför robotarna vi fantiserade om på 50-talet aldrig blivit verklighet. Flera år tidigare hade grundarna till Singilarity redan ställt sig precis samma fråga och tio år senare kan vi presentera både svaret och lösningen. ',
        imagePath:require("../assets/Singilarity logo2 tagline.png"),
        link: "#/OmForetaget" },
      missingLinkInRobotics: {
        title:'The missing link in robotics',
        info: 'In this article we search for “the missing link in robotics”. We state that this is the field that is holding back the robot development from...',
        imagePath:require("../assets/Missing link in robotics.jpg"),
        link: "#/MissingLinkInRobotics" },
      kontatOssThumbnail: {
        title:'Kontakt',
        info: 'Vill du veta mer om Sinilarity och våra produkter så får du gärna höra av dig med frågor.',
        imagePath:require("../assets/Contact us keyboard.jpg"),
        link: "#/Kontakt"}, 
      eagleEyeThumbnail: {
        title:'Eagle Eye',
        info: 'Eagle Eye är ett vision system som är framtaget med hjälp av Singilaritys egen AI-plattform RobotMakerOne för att ge robotar möjlighet att hjälpa människor i vardagen.',
        imagePath:require("../assets/Vision system.jpg"),
        link: "#/EagleEye"}             
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
