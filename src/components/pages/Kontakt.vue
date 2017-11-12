<template>
<div class="wrapper">
<page :data = "data" ></page>
  
  <div class="container ">   
    <div class="col-md-2"></div>
      <div class="col-md-8 ">

        <div class="panel panel-default">
          <div class="panel-body">
            <div class="pageTitle">Kontakt</div>
            <div class="pageIntro">Vill du veta mer om Singilarity och våra produkter så får du gärna höra av dig med frågor. </div>
            <br>
            <div class="sectionTitle">Växel</div>
            <p>Tel: 0761-848504 <br>Mail: info@singilarity.com</p>
            <div class="sectionTitle">Adress</div>
            <p>Alpvägen 22 <br> 16865 Bromma</p>
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
        imagePath:require("../../assets/Contact us keyboard.jpg")
        }
    }
    },
    created() {
        
       bus.$emit('SetActiveNavbar','Kontakt');
    }
}
</script>

<style scoped>
.wrapper{
  background-color:#f3f3f3;
  height: calc(100vh - 52px);
}
</style>