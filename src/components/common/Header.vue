<template>
    <header :class="{'login':isLogin,'no-login':!isLogin}">
        <!--未登录状态header-->
        <template v-if="!isLogin">
            <h1>Blog Sharer</h1>
            <span>分享精品博客</span>
            <section>
                <el-button plain>立即登录</el-button>
                <el-button plain>注册账号</el-button>
            </section>
        </template>
        <!--登录状态header-->
        <template v-if="isLogin">
            <h1>let`s share</h1>
            <i class="el-icon-plus"></i>
            <img class="avatar" src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="">
        </template>
    </header>
</template>


<script>
    export default {
        name: "Header",
        data() {
            return {
                isLogin: false
            }
        },
        methods: {}
    }
</script>

<style lang="stylus" scoped>

</style>