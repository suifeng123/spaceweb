// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
//import router from './router/index'
//import  './router/index'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
//引入bootstrap
import 'bootstrap/dist/css/bootstrap.css'
// 引入vuex
import Vuex from 'vuex'
//引入store中的状态
import store from './vuex/store'
//  引入jquery
import $ from 'jquery'
//引入组件
import Home from './components/Home'
import Main from './components/Main'
import Storage from './components/Pool'


Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name:'Home',
    component:Home
  },
  {
    path: '/storage/chi',
    name: 'Chi',
    component: Storage
  },
  {
    path: '/storage/dataset',
    name: 'Dataset',
    component: Storage
  },
  {
    path: '/storage/volume',
    name: 'Volume',
    component: Storage
  },
  {
    path: '/storage/virtual',
    name: 'Virtual',
    component: Storage
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },


]
const router = new VueRouter({
      routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
