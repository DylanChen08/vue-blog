<template>
    <div id="login">
        <h4>用户名</h4>
        <el-input v-model="username" placeholder="用户名"></el-input>
        <p class="error">该用户名已经注册过</p>
        <el-input v-model="password" placeholder="输入密码"></el-input>
        <p class="error">该用户名已经注册过</p>
        <el-button type="primary" plain>主要按钮</el-button>
        <p class="notice">没有账号？<router-link to="/pages/register">注册新用户</router-link></p>
    </div>
</template>

<script>
    import request from '../../helpers/request.js'
    import auth from '../../api/auth.js'


    window.request = request;
    window.auth = auth;
    export default {
        name: "login",
        data() {
            return {
                username: 'ease',
                password: ""
            }
        },
        methods: {}
    }
</script>

<style lang="stylus" scoped>

</style>