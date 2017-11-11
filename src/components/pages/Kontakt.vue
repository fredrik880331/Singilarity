<template>
<div>
<page :data = "data" ></page>
  
  <div class="container ">   
    <div class="col-md-2"></div>
      <div class="col-md-8 ">

        <div class="panel panel-default">
          <div class="panel-body">
            <h1>Kontakt</h1>
            <h2 class="fix">Vill du veta mer om Singilarity och våra produkter så får du gärna höra av dig med frågor. </h2>
            <br>
            <h3>Växel</h3>
            <p>Tel: 0761-848504 <br>Mail: info@singilarity.com</p>
            <h3>Adress</h3>
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