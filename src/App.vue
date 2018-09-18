<template>
    <div id="app">
        <Header></Header>
        <main id="main">8888</main>
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
    /*引入公共样式*/
    @import "./assets/commonStyle/common.stylus"
</style>
