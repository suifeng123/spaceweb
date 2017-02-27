<template>
<div>
  <ul style="margin-top:-23px;">
  <!--增加路由-->

  <li style="display:inline-block;"><a href="javascript:;" @click="toggleText(tab01Text)"><button class="btn btn-success btn-lg">{{tab01Name}}</button></a></li>
  <li style="display:inline-block;"><a href="javascript:;" @click="toggleText(tab02Text)"><button class="btn btn-success btn-lg">{{tab02Name}}</button></a></li>
  <li style="display:inline-block;"><a href="javascript:;" @click="toggleText(tab03Text)"><button class="btn btn-success btn-lg">{{tab03Name}}</button></a></li>
  <li style="display:inline-block;"><a href="javascript:;" @click="toggleText(tab04Text)"><button class="btn btn-success btn-lg">{{tab04Name}}</button></a></li>
  <!-- 增加路由 -->
  </ul>
  <div>
    <component :is='currentView'></component>
  </div>
</div>
</template>
<style>

</style>
<script>
import Create from '../Chi/Create'
import Disk from '../Chi/Disk'
import Snapshot from '../Chi/Snapshot'
import Replication from '../Chi/Replication'

export default {
     data() {
       return {
         tab01Text:'Create',
         tab01Name:'存储池',
         tab02Text:'Disk',
         tab02Name:'磁盘',
         tab03Text:'Snapshot',
         tab03Name:'快照',
         tab04Text:'Replication',
         tab04Name:'远程复制',
         currentView:'Create'
         }
     },
   components: {
       Create,
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
