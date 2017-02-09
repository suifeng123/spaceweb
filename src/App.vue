<template>
  <div id="app">
    <MyHeader></MyHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from './components/Header'
export default {
  name: 'app',
  components: {
     MyHeader
  }
}

</script>

<style>
#app {

}
</style>
