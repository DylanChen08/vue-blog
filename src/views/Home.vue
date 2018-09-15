<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <login></login>
        <Index></Index>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import Login from '@/components/pages/login.vue'
    import Index from '@/components/pages/index.vue'

    export default {
        name: 'home',
        components: {
            HelloWorld,
            Login,
            Index
        }
    }
</script>
