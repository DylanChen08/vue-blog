import auth from "../../api/auth"

const state = {
    user: null,
    isLogin: false

}
const getters = {
    user: state => state.user,
    isLogin: state => state.isLogin
}
const mutations = {
    setUser(state, payload) {
        state.user = payload.user
    },
    setLogin(state, payload) {
        state.isLogin = payload.isLogin
    }
}
const actions = {
    logIn({commit}, {username, password}) {
        return auth.logIn({username, password})
            .then(res => {
            commit("setUser", {user: res.data})
            commit("setLogin", {isLogin: true})
        })
    },
    //async await 写法
    async logOut({commit}) {
        await auth.logOut()
        commit("setUser", {user:null})
        commit("setLogin", {isLogin:false})
    },
    async register({commit}, {username, password}) {
        let res = await auth.register({username, password});
        commit("setUser", {user: res.data})
        commit("setLogin", {isLogin: true})
        return res.data
    },
    async checkLogin({commit, state}) {
        console.log(0)
        if (state.isLogin) return true
        console.log(1)
        let res = await auth.getInfo()
        console.log(2)
        commit("setLogin", {isLogin: res.isLogin})
        console.log(3)
        if (!res.isLogin) return false
        console.log(4)
        commit("setUser", {user: res.data})
        console.log(5)
        return true
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}