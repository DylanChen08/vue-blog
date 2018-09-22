import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth.js'
import blog from './modules/blog.js'


Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        auth,
        blog
    }
})