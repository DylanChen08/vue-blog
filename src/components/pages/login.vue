<template>
    <div id="login">
        <h4>用户名</h4>
        <el-input v-model="username" placeholder="用户名"></el-input>
        <h4>密码</h4>
        <el-input v-model="password" placeholder="输入密码" @keyup.enter.native="onLogIn"></el-input>
        <el-button type="primary" @click="onLogIn" plain>登录</el-button>
        <p class="notice">没有账号？
            <router-link to="/pages/register">注册新用户</router-link>
        </p>
    </div>
</template>

<script>
    import request from '../../helpers/request.js'
    import auth from '../../api/auth.js'
    import {mapActions} from 'vuex'


    window.request = request;
    window.auth = auth;
    export default {
        name: "login",
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            ...mapActions([
                'logIn'
            ]),
            onLogIn() {
                this.logIn(
                    {
                        username: this.username,
                        password: this.password
                    })
                    .then(() => {
                        this.$router.push({path:'/'})
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