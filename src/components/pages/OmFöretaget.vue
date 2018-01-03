<template>
<div class="wrapper">
<page :data = "data" ></page>

  <div class="container ">   
    <div class="col-md-2"></div>
      <div class="col-md-8 ">

        <div class="panel panel-default">
          <div class="panel-body">
            <div class="pageTitle">Om Singilarity</div>
                <div class="pageIntro">I avsnittet ”Var är min robot?” från BBCs Horizon från 2008. Frågar Danny Wallace varför robotarna vi fantiserade om på 50-talet aldrig blivit verklighet. Flera år tidigare hade grundarna till Singilarity redan ställt sig precis samma fråga och tio år senare kan vi presentera både svaret och lösningen. </div>
                <p>Även om Singilarity är ett ungt bolag så har resan varit lång. Att reda ut vad som hållit tillbaka robotiken har inte varit lätt. Vi trodde som många andra länge att det var förmågan att lära sig som höll robotiken tillbaka. Idag är vi dock övertygade om att det är förmågan att processera tredimensionell information som är lösningen till att bygga robotar som klarar av att utföra avancerade fysiska uppgifter.     </p>
                <p>Singilarity är ett bolag som valt att fokusera på ett litet väldigt avancerat problem. Detta för att vi är övertygade om att när det är löst kommer det vara lika revolutionerande som bensinmotorn.   </p> 
                <p>Om ni vill veta mer om Singilarity och våra produkter kan ni kontakta oss <a href="#/Kontakt">här</a>.</p>
                
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