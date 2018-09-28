<template>
    <header :class="{'login':isLogin,'no-login':!isLogin}">
        <!--未登录状态header-->
        <template v-if="!isLogin">
            <h1>
                <router-link to="/">Blog Sharer</router-link>
            </h1>
            <span>分享精品博客</span>
            <section>
                <el-button plain><router-link to="/pages/login">立即登录</router-link></el-button>
                <el-button plain><router-link to="/pages/register">注册账号</router-link></el-button>
            </section>
        </template>
        <!--登录状态header-->
        <template v-if="isLogin">
            <h1>
                <router-link to="/">Blog Sharer</router-link>
            </h1>
            <router-link to="/pages/create"><i class="el-icon-plus"></i></router-link>
            <div class="user-avatar">
                <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username"/>
                <ul>
                    <li>
                        <router-link to="/pages/my-profiles">我的</router-link>
                    </li>
                    <li><a @click="onLogOut">注销</a></li>
                </ul>
            </div>

        </template>
    </header>
</template>


<script>
    import auth from '../../api/auth'
    import {mapActions, mapGetters} from 'vuex'

    window.auth = auth


    export default {
        name: "Header",
        data() {
            return {}
        },
        computed: {
            ...mapGetters([
                'isLogin',
                'user'
            ]),

        },

        created() {
            this.checkLogin()
        },
        methods: {
            ...mapActions([
                'checkLogin',
                'logout'
            ]),
            onLogOut(){
                this.logout()
            }

        },

    }
</script>

<style lang="stylus" scoped>

</style>