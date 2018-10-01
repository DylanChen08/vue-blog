<template>
    <div id="login">
        <h4>用户名</h4>
        <el-input v-model="username" placeholder="用户名"></el-input>
        <h4>密码</h4>
        <el-input v-model="password" placeholder="输入密码" @keyup.enter.native="onRegister"></el-input>
        <el-button type="primary" plain @click="onRegister">注册</el-button>
        <p class="notice">已有账号？
            <router-link to="/pages/login">去登陆</router-link>
        </p>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import request from '../../helpers/request.js'
    import auth from '../../api/auth.js'


    window.request = request;
    window.auth = auth;
    export default {
        name: "register",
        data() {
            return {
                username: '',
                password: ""
            }
        },
        methods: {
            ...mapActions(['register']),
            onRegister() {
                this.register({username: this.username, password: this.password}).then(() => {
                    this.$router.push({path: "/pages/index"})
                }).catch(() => {
                })
            }

        }
    }
</script>

<style lang="stylus" scoped>
    @import "../../assets/commonStyle/base.stylus"

    #login > *, #register > *
        margin 5px 0

    #login, #register
        display grid
        justify-content center
        h4
            font-weight 500
        .el-input
            width 100%
            margin 0 auto
        p.error
            color $themeWarningTextColor
            font-size 12px
        .notice
            font-size 12px
</style>