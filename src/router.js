import Vue from 'vue'
import Router from 'vue-router'
import storeInRouter from './store/index'
import {Message} from 'element-ui'

//测试用的变量
window.storeInRouter = storeInRouter;
Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        // {
        //     path: '/',
        //     name: 'home',
        //     component: Home
        //     /*这种写法要从上面import*/
        // },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
            /*或者在这里导入，上面不用import*/
        },
        {
            path: '/pages/index',
            name: 'index',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './components/pages/index')
        },
        {
            path: '/pages/create',
            name: 'create',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './components/pages/create'),
            meta: {requiresAuth: true}
        },
        {
            path: '/pages/blog-details/:blogId',
            name: 'details',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './components/pages/blog-details')
        },
        {
            path: '/pages/edit/:blogId',
            name: 'edit',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './components/pages/edit'),
            meta: {requiresAuth: true}
        },
        {
            path: '/pages/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './components/pages/login')
        },
        {
            path: '/pages/register',
            name: 'register',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './components/pages/register')
        },
        {
            path: '/pages/my-profiles/:blogId',
            name: 'my-profiles',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './components/pages/my-profiles')
        },
        {
            path: '/pages/user/:blogId',
            name: 'user',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './components/pages/user')
        }
    ]
})


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        storeInRouter.dispatch('checkLogin').then(isLogin => {
            console.log(34)
            console.log(isLogin)
            if (!isLogin) {
                Message.error("您还没登录")
                next({
                    path: '/pages/login',
                    query: {redirect: to.fullPath}
                })
            } else {
                next()
            }
        })
    } else {
        next() // make sure to always call next()!
    }
})


export default router;