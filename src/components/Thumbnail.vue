<template>

    <div class="col-sm-6 col-md-3">
      <div class="thumbnail">
        <a :href="data.link"><img class="image" :src="data.imagePath" ></a>
        <div class="caption">
            <div class="titel">{{data.title}}</div>
            <p>{{data.info}}</p>
        </div>
          <div class="text-right">
              <a :href="data.link" class="btn btn-default" role="button">Read more</a>
            </div>
      </div>
    </div>
</template>

<script>

import {bus} from '../main'

export default {
  name: 'Thumbnail',
  props:['data'],
  data () {
    return {
        imagePath: require("../assets/Robotmaker1Logo.png"),
        Title: 'Thumbnail title'
    }
  }
}
</script>

<style scoped>
.image{
    border: 1px solid #bdbdbd;
}
.caption{
    height:150px;
    overflow:hidden;
}

.btn{
    margin-top:10px;
}

.thumbnail:hover
{
     box-shadow: 0px 0px 10px #348bd4;
}

.titel{
    text-align:center;
    font-size:20px;
     margin:4px;
}
</style>