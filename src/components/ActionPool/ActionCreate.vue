<template>
  <div>
  <MyHeader></MyHeader>
  <Leftbar></Leftbar>
  <h1>创建存储具体动作</h1>
    </div>
</template>
<style>
</style>
<script>
import MyHeader from '../Header'
import Leftbar from '../Leftbar'

export default {
   created: function(){
   console.log("sdaf")
      console.log("下面是路由后得到的参数");
     console.log(this.$route.params);
   },
   components:{
   MyHeader,
   Leftbar
   }

}
</script>
