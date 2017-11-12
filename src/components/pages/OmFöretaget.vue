<template>
<div class="wrapper">
<page :data = "data" ></page>

  <div class="container ">   
    <div class="col-md-2"></div>
      <div class="col-md-8 ">

        <div class="panel panel-default">
          <div class="panel-body">
            <div class="pageTitle">Om Singilarity</div>
                <div class="pageIntro"> Varför finns det inte intelligenta robotar? Det är frågan som är fröet till det som idag är Singilarity.</div>
                <p> Svaret är att hur avancerade dagens robotar än ser ut har väldigt svårt att förstå vad de tittar på. Singilarity är företaget som med hjälp av sig egenutvecklade plattform RobotMakerOne tagit fram nästa generation av vision algoritmer som klarar av att lösa just detta. </p>
                <p> Om ni vill veta mer om Sinilarity och våra produkter kan ni kontakta oss <a href="#/Kontakt">här</a>.</p>
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
           imagePath:require("../../assets/Singilarity logo2 tagline.png"),
           }
    }
  },
    created() {  
       bus.$emit('SetActiveNavbar','OmFöretaget');
    }
}
</script>

<style scoped>
.wrapper{
  background-color:#f3f3f3;
  min-height: calc(100vh - 52px);
}
</style>