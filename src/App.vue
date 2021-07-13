<template>
  <div id="app">
    <Header></Header>
    <main id="main">
      <!--主题部分显示内容，通过router控制-->
      <router-view></router-view>
    </main>
    <Footer></Footer>

  </div>
</template>
<script>
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="stylus">
/*引入css基础库*/
@import "./assets/commonStyle/base.stylus"
</style>
