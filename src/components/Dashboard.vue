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
    /**
         this.$http.post('/hikcmd/global/issues',{
         cat:'1',
         name:'newBook'
         },).then(response => {

              console.log("添加数据成功！！！！");
         },response => {
            console.log("fuck，添加数据失败")

         })
         **/
     /*
        this.$http.delete('/hikcmd/global/issues',{

        }
        ).then(res => {
             console.log("删除数据成功");
         },res => {
              console.log("删除数据失败");
         })*/
         this.$http.put('/hikcmd/global/issues',{
           age:28,
           name:'wangshengwen',
         }).then( res => {
             console.log("put方法成功了");
         },res => {
            console.log("put方法失败了");
         })

   }
}

</script>
