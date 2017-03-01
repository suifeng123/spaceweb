<template>
  <div>
    <h1>靠，又他妈帅了，这个主页面还没进行开发</h1>
  </div>
</template>
<style>

</style>
<script>
import data from './util/mock'

export default {
   mounted: function(){
         this.$http.get('http://g.cn').then(response => {

             this.someData = response.body;
             console.log(this.someData);
         },response => {
            console.log("靠，数据丢失了");
         })
   }
}

</script>
