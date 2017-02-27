<template>
     <!--这个是主界面的开发--->
    <div>
      <MyHeader></MyHeader>
      <Leftbar></Leftbar>
      <Main></Main>
    </div>
</template>
<style>

</style>
<script>
import MyHeader from './Header'
import Leftbar from './Leftbar'
import Main from './Main'
export default {
     components: {
       MyHeader,
       Leftbar,
       Main
     }
}
</script>
