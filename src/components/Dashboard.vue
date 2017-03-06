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

         this.$http.get('/hikcmd/global/pool/').then(response => {
              console.log(response)
              console.log("添加数据成功！！！！");
         },response => {
            console.log("fuck，添加数据失败")

         })




   }
}

</script>
