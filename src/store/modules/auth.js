import auth from '../../api/auth'

const state = {
    user: '',
    isLogin: ''
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
    //action中的logIn
    logIn({commit}, {username, password}) {
        //调用api/auth中的logIn
        return auth.logIn({username, password})
            .then(res => {
                commit('setUser', {user: res.data})
                commit('setLogin', {isLogin: true})
            })
    },

    async register({commit}, {username, password}) {
        let res = await auth.register({username, password})
        commit('setUser', {user: res.data})
        commit('setLogin', {isLogin: true})
        return res.data
    },

    async logout({commit}) {
        await auth.logOut()
        commit('setUser', {user: null})
        commit('setLogin', {isLogin: false})
    },

    async checkLogin({commit, state}) {
        if (state.isLogin) return true
        let res = await auth.getInfo()
        commit('setLogin', {isLogin: res.isLogin})
        if (!res.isLogin) return false
        commit('setUser', {user: res.data})
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}