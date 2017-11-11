<template>

  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
body{
  background-color:#f3f3f3;
}
.pageTitle{
    font-size: 40px;
}
.pageIntro{
  font-size: 18px;
  line-height: 120%;
   text-align: justify; 
}
.sectionTitle{
    font-size: 20px;
    margin-bottom:0px;
}
h4{
    font-size: 18px;
    margin:0px;
}
p{ 
    text-align: justify; 
}
p.contentImageInfo{ 
    text-align: right;
    color:darkgray; 
}
.indent{
  margin-left:20px;
}
.contentImage{
  width:100%;
}
.container{
  text-align: left;
}
</style>
