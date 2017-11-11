<template>

<nav class="navbar navbar-default" @set="test('Kontakt')">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a  v-on:click="setActive('Hem')" class="navbar-brand" href="#/">Singilarity</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav" >
        <li v-on:click="setActive('Hem')"  :class="{ active: isActive('Hem') }" ><a href="#/">Hem</a></li>
        <li :class="{ active: isActive('Produkter') }"  class="dropdown">
          <a  class="dropdown-toggle" data-toggle="dropdown" href="#">Produkter<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li ><a  v-on:click="setActive('Produkter')" href="#/Robotmaker1">RobotMakerOne</a></li>
          </ul>
        </li>
          <li  :class="{ active: isActive('Artiklar') }" class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Artiklar<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a  v-on:click="setActive('Artiklar')" href="#/MissingLinkInRobotics">The missing link in robotics</a></li>
          </ul>
        </li>
        <li v-on:click="setActive('OmFöretaget')"  :class="{ active: isActive('OmFöretaget') }"><a   href="#/OmFöretaget">Om Singilarity</a></li>
      
        <li  v-on:click="setActive('Kontakt')"  :class="{ active: isActive('Kontakt') }"><a  href="#/Kontakt">Kontakt</a></li>
      </ul>
    </div>
  </div>
</nav>

</template>


<script>

import {bus} from '../main'

export default {
    data() {
    return { activeItem: 'Hem' }
    },
    methods: {
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    setActive: function (menuItem) {
      this.activeItem = menuItem // no need for Vue.set()
    },
    test:function(asdas){
console.log("recive");
    }
  },
    created() {
        
        bus.$on('SetActiveNavbar', (data)=>{this.setActive(data)});
    }
}
</script>

<style scoped>
.navbar {
    margin-bottom: 0;  
}

.navbar .nav >li.active > a {
  background-color: #e0e0e0;
}

.navbar .nav > li.dropdown.open > a{
   background-color: #ededed;
}

</style>
