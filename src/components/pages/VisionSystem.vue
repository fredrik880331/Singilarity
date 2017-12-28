<template>
<div class="wrapper">
<page :data = "data" ></page>
  
  <div class="container ">   
    <div class="col-md-2"></div>
      <div class="col-md-8 ">

        <div class="panel panel-default">
          <div class="panel-body">
            <div class="pageTitle">Vision system</div>
            <div class="pageIntro">Vision system </div>
            <br>
            <div class="sectionTitle">titel</div>
            <p>mening</p>
     
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