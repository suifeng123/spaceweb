<template>
<div class="maindiv">
  <ul>
  <!--增加路由-->
  <li style="display:inline-block;"><a href="javascript:;" @click="toggleText(tab01Text)"><button class="btn btn-success btn-lg">{{tab01Name}}</button></a></li>

  <li style="display:inline-block;"><a href="javascript:;" @click="toggleText(tab02Text)"><button class="btn btn-success btn-lg">{{tab02Name}}</button></a></li>
  <li style="display:inline-block;"><a href="javascript:;" @click="toggleText(tab03Text)"><button class="btn btn-success btn-lg">{{tab03Name}}</button></a></li>
  <li style="display:inline-block;"><a href="javascript:;" @click="toggleText(tab04Text)"><button class="btn btn-success btn-lg">{{tab04Name}}</button></a></li>
  <!-- 增加路由 -->
  </ul>
  <div>
    <component :is='currentView' keep-alive></component>
  </div>
</div>
</template>
<style scoped>
.maindiv {
  position:absolute;
  left:180px;
  top:60px;
  right:0;
  bottom:0;
  overflow:auto;



}

</style>
<script>
import CreatePool from '../PoolPart/MakePool'
import Disk from '../PoolPart/Disk'
import Snapshot from '../PoolPart/Snapshot'
import Replication from '../PoolPart/Replication'


export default {
     data() {
       return {
         tab01Text:'CreatePool',
         tab01Name:'存储池',
         tab02Text:'Disk',
         tab02Name:'磁盘',
         tab03Text:'Snapshot',
         tab03Name:'快照',
         tab04Text:'Replication',
         tab04Name:'远程复制',
         currentView:'CreatePool'
         }
     },
     created: function(){
      console.log(this.currentView);
     },
   components: {
       CreatePool,
       Disk,
       Snapshot,
       Replication
     },
     methods: {
       toggleText: function(tabText){
          this.currentView = tabText;
       }
     }
}
</script>
