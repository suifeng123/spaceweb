<template>
<div class="panel">
 <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">

   <el-menu-item index="1"><img class="logo" src="../assets/images/logo4.png"><span style="font-size:26px;">AD<i style="color:#20a0ff">MIN</i></span></el-menu-item>

   <li style="float:right;">
   <el-menu-item index="2" class="account"><span  style="font-size:26px">账户管理</span></el-menu-item>
   </li>
   <li style="float:right;">
   <el-menu-item index="3"><span style="font-size:26px">登出</span></el-menu-item>
   </li>
 </el-menu>
</div>
</template>

<script>
  export default {
      methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
.panel {
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
}
.logo {
    margin-top:10px;
    width: 40px;
    float: left;
    magin: 10px 10px 10px 18px;
}
.account {
    margin-left: 1500px;
}



</style>

