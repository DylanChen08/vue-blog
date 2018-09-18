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
    /*公共样式*/
    *
        margin 0
        padding 0
        box-sizing border-box

    html,body,#app
        height:100vh
    #app {
        display grid
        grid-template-columns 12% auto 12%
        grid-template-rows auto 1fr auto
        grid-template-areas "header header header"\
        ".      main  ."\
        "footer footer footer"
        border 1px solid red
    }

    #header
        grid-area header
        border 1px solid red
        padding 0 12%

    #main
        grid-area main
        border 1px solid green

    #footer
        grid-area footer
        padding-left 12%
        border 1px solid red

</style>
