<template>

  <div class="container ">
    <div class="col-md-2"></div>
      <div class="col-md-8 ">

        <img class="pageImage" :src="data.imagePath"  >
        <img class="pageShadow" src="../assets/CardShadow.png" >
<!--
        <div class="panel panel-default">
          <div class="panel-body">
            <h1>{{data.titel}}</h1>
            <h4>{{data.intro}}</h4>
            <p>{{data.content}}</p>
           </div>
        </div>
-->
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Page',
  props: ['data'],
  data () {
    return {
      msg: 'Robotmaker1'
    }
  }
}
</script>

<style scoped>

.pageImage{
    width:100%;
  margin-top:20px;
   border: 1px solid #646464;
}
.pageShadow{
  width:100%;
   margin-bottom:20px;
}


</style >