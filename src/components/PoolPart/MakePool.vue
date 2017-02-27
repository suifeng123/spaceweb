<template>
    <div class="box">
      <table class="table table-hover table-bordered">
        <thead>
        <tr>
          <th width="25%;">id</th>
          <th width="25%;">name</th>
          <th width="25%;">content</th>
          <th width="25%;">remark</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="data in tableList">
          <td  v-text="data.num"></td>
          <td  v-text="data.author"></td>
          <td  v-text="data.content"></td>
          <td  v-text="data.remark"></td>

        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td colspan="4">
            <div class="pull-left">
              <button class="btn btn-sucess" @click="refresh">刷新</button>
            </div>
            <div class="pull-right">

              <bootPage></bootPage>

            </div>
          </td>
        </tr>
        </tfoot>
      </table>
    </div>
</template>
<style>
  .box {
     height:600px;
     width:1000px;
     position: relative;
     left:100px;
     float:left;
  }
</style>
<script>
import bootPage from './content'

export default {
     data () {
         return {
            lenArr: [5,10,20],//每页显示的长度
            pageLen: 5,//可显示的分页数
            param: {},//传递的参数
            lists: [],//表格的原始数据
            tableList:[
            {num:1,author:'刘德华',content:'忘情水',remark:'情歌'},
            {num:2,author:'刘德华',content:'天若有情',remark:'情歌'}
            ] //分页组件传回的分页后的数据
         }
     },
     components: {
        bootPage
     },
     methods: {
        refresh () {
            this.$refs.page.refresh()
        }
     },
     events: {
        //分页组件传回的表格数据
        'data' (data) {
            this.tableList = data
        },
        //刷新数据
        'refresh' () {
           this.refresh()
        }
     }
}

</script>
