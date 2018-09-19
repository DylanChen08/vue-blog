<template>
    <header :class="{'login':isLogin,'no-login':!isLogin}">
        <!--未登录状态header-->
        <template v-if="!isLogin">
            <h1>let`s share</h1>
            <span>精品博客汇聚</span>
            <section>
                <el-button plain @click="test">朴素按钮</el-button>
                <el-button plain>朴素按钮</el-button>
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
        methods: {
            test() {
                alert(1)
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>