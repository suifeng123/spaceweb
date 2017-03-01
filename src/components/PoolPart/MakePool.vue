<template>
    <div class="box">
      <table class="table table-hover table-bordered">
        <thead>
        <tr>
          <th width="25%;">名字</th>
          <th width="25%;">运行控制器</th>
          <th width="25%;">配置控制器</th>
          <th width="25%;">大小</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="data in PoolData">
          <td  v-text="data.name"></td>
          <td  v-text="data.config_controller"></td>
          <td  v-text="data.run_controller"></td>
          <td  v-text="data.size"></td>

        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td colspan="4">
            <div class="pull-left">
              <button class="btn btn-sucess" @click="refresh">刷新</button>
            </div>
            <div class="pull-right">
              <!--<boot-page ref:page :async="false" :data="lists" :lens="lenArr" :page-len="pageLen" :param="param"></boot-page>
             <!-- <bootPage></bootPage> -->
              <nav class="boot-nav">
                <ul class="pagination boot-page">
                  <li>
                    <a href="javascript:void(0)" @click="onFirstClick()">
                      <span style="font-size:15px;color:blue">首页</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" aria-label="Next" @click="onPrevClick()">
                      <span style="font-size:15px;color:blue;">上一页</span>
                    </a>
                  </li>
                  <li v-for="page in pages" :class="activeNum == (page-1)?'active':''">
                    <a href="javascript:void(0)" v-text="page" @click="onPageClick(page)"></a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" aria-label="Next" @click="onNextClick()">
                      <span style="font-size:15px;color:blue;">下一页</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" aria-label="Next" @click="onLastClick()">
                      <span style="font-size:15px;color:blue;">末页</span>
                    </a>
                  </li>
                </ul>
                <div class="page-total">
                  共 <span style="font-size:15px;color:black;" v-text="pageTotal"></span> 页
                </div>
              </nav>
              <select class="form-control boot-select" v-model="len">
                <option v-for="arr in lens" :value="arr" v-text="arr"></option>
              </select>
            </div>
          </td>
        </tr>
        </tfoot>
      </table>
      <p>子组件传递会的数据:{{messages}}</p>
      <child v-on:childmsg="notifyAll"></child>
    </div>
</template>
<style>
  .active{
     background:red;
     font-weight:bold;
  }
  .box {
     height:600px;
     width:1000px;
     position: relative;
     left:100px;
     float:left;
  }

  .boot-select {
    float: right;
    width: 80px;
}

.boot-nav {
    float: right;
}

.boot-page {
    display: inline-block;
    margin: 2px 10px 0 20px;
    vertical-align: middle;
}

.page-total {
    display: inline-block;
    vertical-align: middle;
}
</style>
<script>
import bootPage from './content'
import child from './Child'
import data from '../util/mock' // TODO 引入 mock，从而能够实现模拟前端http请求的情况

export default {
     data () {
         return {
            activeNum:0,
            len:5,
            lens:[5,10,20],
            lenArr: [5,10,20],//每页显示的长度
            pageLen: 5,//可显示的分页数
            param: {},//传递的参数
            pages:[],
            active:"active",
            tableList:[
            {num:1,author:'刘德华',content:'忘情水',remark:'情歌'},
            {num:2,author:'刘德华',content:'天若有情',remark:'情歌'},
            {num:3,author:'刘德华',content:'忘情水',remark:'情歌'},
            {num:4,author:'刘德华',content:'天若有情',remark:'情歌'},
            {num:5,author:'刘德华',content:'忘情水',remark:'情歌'},
            {num:6,author:'刘德华',content:'天若有情',remark:'情歌'},
            {num:7,author:'刘德华',content:'忘情水',remark:'情歌'},
            {num:8,author:'刘德华',content:'天若有情',remark:'情歌'},
            {num:9,author:'刘德华',content:'忘情水',remark:'情歌'},
            {num:10,author:'刘德华',content:'天若有情',remark:'情歌'},
            {num:11,author:'刘德华',content:'忘情水',remark:'情歌'}
            ],//分页组件传回的分页后的数据
            DataPool:[],
            DataPool1:[
            {name:"pool1",size:"19.9G",config_controller:"A",run_controller:"A"},
            {name:"pool1",size:"19.9G",config_controller:"A",run_controller:"A"},
            {name:"pool1",size:"19.9G",config_controller:"A",run_controller:"A"},
            {name:"pool1",size:"19.9G",config_controller:"A",run_controller:"A"},
            ],
            messages:["sd"],
            total:0,
            pageTotal:1
         }
     },
     components: {
        bootPage,
        child
     },
     methods: {

        test() {
          console.log(this.pages[0].$index);
        },
        refresh () {
            this.getData()  //页面的刷新功能，就是重新获取了一次数据
        },
        incrementTotal: function(b){
                  this.total = b;
        },
         //TODO add by 王圣文 这个是从子组件传回的数据
        notifyAll: function(msg) {
               console.log("父组件中事件派送结果");
               this.messages.push(msg);
               console.log("父组件得到的数据为:"+this.messages);
        },
        //点击到某一页时到这一页的信息
        onPageClick (index) {
             console.log(index);
             this.activeNum = index-1;
        },
        //获取页数
        getPages() {
            this.pages = [];
            //获取了总共的页数
            this.pageTotal = Math.ceil(this.PoolData.length/this.len)
            //比较总页数和显示的页数
            if(this.pageTotal <= this.pageLen){
                  for(let i=1;i<=this.pageTotal;i++){
                     this.pages.push(i)
                  }
            }else{
                   for(let i=1;i<=this.pageLen;i++){
                       this.pages.push(i);
                   }
            }
            console.log("999999"+this.pages);
        },
        //获取数据
        getData() {
                  //首先确定一下要展示的页数
                   let len = this.len; //获取当前的页数
                   let pageNum = this.pages[this.activeNum]-1; //获取当前的page[0]的数据
                   let newData = [];  //使用当前的数据来源
                   //开始向数组中push数据
                   for(let i=pageNum*len;i<(pageNum*len+len);i++){
                       this.tableList[i] !== undefined ? newData.push(this.PoolData[i]):''
                   }

                    this.PoolData = newData; //获取我们所需要的数据

                    console.log("执行了这里了"+this.PoolData);


 },

       //跳转到首页的功能
       onFirstClick () {
          if(this.pages[0] === 1){
             this.activeNum = 0;
          } else {
            let originPage = []
              for(let i=1;i<= this.pageLen;i++){
                 originPage.push(i)
              }

              this.pages = originPage;
              this.activeNum === 0 ? this.getData() : this.activeNum = 0;
          }
       },
       //跳转到末页的功能
       onLastClick () {
       console.log(this.pageTotal)
       console.log(this.pageLen)
         if(this.pageTotal <= this.pageLen){
             this.activeNum = this.pages.length - 1;
         }else {
            let lastPage = []
              for(let i= this.pageLen-1;i>=0;i--){
                   lastPage.push(this.pageTotal - i);
              }
              this.pages = lastPage;
              console.log("sadf");
              this.activeNum === this.pages.length-1?this.getData():this.activeNum=this.pages.length-1
         }
       },
       //跳转到上一页的功能
         // 上一页
        onPrevClick () {

            // 当前页是否为当前最小页码
            if (this.activeNum > 0) {
                this.activeNum = this.activeNum - 1
            } else {
                if (this.pages[0] !== 1) {
                    let newPages = []

                    for (let i = 0; i < this.pages.length; i++) {
                        newPages[i] = this.pages[i] - 1
                    }

                    this.pages = newPages
                    this.getData()
                }
            }
        },

        // 下一页
        onNextClick () {

            // 当前页是否为当前最大页码
            if (this.activeNum < this.pages.length - 1) {
                this.activeNum = this.activeNum + 1
            } else {
                if (this.pages[this.pages.length - 1] < this.pageTotal) {
                    let newPages = []

                    for (let i = 0; i < this.pages.length; i++) {
                        newPages[i] = this.pages[i] + 1
                    }

                    this.pages = newPages

                    this.getData()
                }
            }
        }
     },
     // TODO 传递到子组件的数据 add by 王圣文 20170228
     //TODO 现在不考虑两个组件之间的通信了
     mounted: function(){
     //获取数据

      this.$http.get('http://hicmd/goabl/pool/list').then(successData => {
                  console.log(successData.body);
                  let newTable = []; //定义一个新的数组
                  let comData = successData.body;
                  for(let i in comData){
                    newTable.push(comData[i]);
                  }
                  console.log(newTable);
                  this.PoolData= newTable;
                  console.log("现在存储池的数据为:"+this.PoolData);
         //在数据未加载之前，先进行获取页数的操作
         this.getPages();
         this.getData();
         console.log("获取数据执行完毕");

         },failData => {
          console.log("靠，又他妈帅了"+failData);
         })
         //this.getData()
         //this.getPages()

     },
     //监听事件
     watch: {
        //监听数量变化
        'len' (newVal,oldVal) {
            this.getPages(); //首先是获取页数
            if (this.activeNum+1 > this.pages.length){
               this.activeNum = this.pages.length -1;
            }
            console.log("88888");
            this.getData();
        },
        //监听当前变化
        'activeNum' (newVal,oldVal) {
           this.getData()
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

     },

}

</script>
