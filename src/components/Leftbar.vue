<template>
    <div class="main">
      <!-- 这个是设计的左侧的导航栏 -->
      <!--这里使用boostrap来设置左侧导航栏-->
      <ul class="ul1">
        <li>
          <span>总览</span>
        </li>
        <li>
          <span @click="openurl1()">系统</span>
          <!--实现二级标题-->
          <ul v-show='flag1'>
               <li>
                 <span style="font-size:15px;font-weight:bold;">设备信息</span>
               </li>
               <li>
                 <span style="font-size:15px;font-weight:bold;">监控</span>
               </li>
               <li>
                 <span style="font-size:15px;font-weight:bold;">设置</span>
               </li>
               <li>
                  <span style="font-size:15px;font-weight:bold;">日志</span>
               </li>
          </ul>
        </li>
        <li>
          <span @click="openurl2()">存储服务</span>
          <ul v-show="flag2">
              <li @click="changeTab">
                <router-link to="/storage/chi">
                <span style="font-size:15px;font-weight:bold;">存储池</span>
                </router-link>
              </li>
            <li @click="changeTab">
              <router-link to="/storage/dataset">
              <span style="font-size:15px;font-weight:bold;">文件系统</span>
              </router-link>
            </li>
            <li @click="changeTab">
              <router-link to="/storage/volume">
              <span style="font-size:15px;font-weight:bold;">卷(待定)</span>
              </router-link>
            </li>
            <li @click="changeTab">
              <router-link to="/storage/virtual">
              <span style="font-size:15px;font-weight:bold;">虚拟化</span>
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <span @click="openurl3()">访问</span>
          <ul v-show="flag3">
             <li>
                <span style="font-size:15px;font-weight:bold;">主机</span>
            </li>
            <li>
              <span style="font-size:15px;font-weight:bold;">网络</span>
            </li>
            <li>
              <span style="font-size:15px;font-weight:bold;">映射</span>
            </li>
          </ul>
        </li>
        <li>
          <span @click="openurl4()">数据保护</span>
          <ul v-show="flag4">
            <li>
              <span style="font-size:15px;font-weight:bold;">快照</span>
            </li>
            <li>
              <span style="font-size:15px;font-weight:bold;">复制</span>
            </li>
          </ul>
        </li>
        <li>
          <span @click="openurl5()">其他</span>
          <ul v-show="flag5">
            <li>
                <span style="font-size:15px;font-weight:bold;">升级</span>
            </li>
            <li>
              <span style="font-size:15px;font-weight:bold;">关机</span>
            </li>
            <li>
              <span style="font-size:15px;font-weight:bold;">重启</span>
            </li>
          </ul>
        </li>
        <li>
           <span>支持</span>
        </li>
      </ul>


    </div>
</template>
<style>
li {
  list-style-type:none;
}
.ul1 {

   height:600px;
   margin-top: 60px;
}
.main {
  margin-top:-21px;
  margin-left:1px;
  width:180px;
  position:relative;
  float:left;
  height:100%;
  background:#324157;
}
span {
   font-size: 25px;
   color:white;
}

</style>
<script>
//引入相应的vuex状态
import { mapGetters,mapActions } from 'vuex'

  export default {
     data() {
     return{
       flag1: false,
       flag2: false,
       flag3: false,
       flag4: false,
       flag5: false,
       ff: 'hh'
       }
     },
     methods: {
        ...mapActions([
           'changeTab'
        ]),

        openurl1: function(){
             if(this.flag1==true){
                this.flag1 = false;
             }else{
                this.flag1 = true;
             }
        },
        openurl2: function(){
           if(this.flag2==true){
               this.flag2 = false;
           }else{
               this.flag2 = true;
           }
        },
        openurl3: function(){
            if(this.flag3 == true){
                this.flag3 = false;
            }else{
              this.flag3 = true;
            }
        },
        openurl4: function(){
            if(this.flag4 == true){
                 this.flag4 = false;
            }else{
               this.flag4 = true;
            }
        },
        openurl5: function(){
            if(this.flag5 == true){
                 this.flag5 = false;
            }else{
               this.flag5 = true;
            }
        },
        test: function(){

        }
     }
  }

</script>
