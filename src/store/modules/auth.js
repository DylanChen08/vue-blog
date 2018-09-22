import auth from "../../api/auth"

const state = {
    user: null,
    isLogin: false

}
const getters = {}
const mutation = {
    setUser(state, payload) {
        state.user = payload.user
    },
    setLogin(state, payload) {
        state.isLogin = payload.isLogin
    }
}
const actions = {
    logIn({commit},{username,password}){
        return auth.logIn({username,password}).then(res=>{
            commit("setUser",{user:res.data})
            commit("setLogin",{isLogin:true})
        })
    },
    async logOut({commit}){
       await auth.logOut()
        commit("setUser",null)
        commit("isLogin",false)
    },
    async register({commit},{username,password}){
        let res = await auth.register({username,password})
        commit("setUser",{user:res.data})
        commit("isLogin",{isLogin:true})
    },
    async checkLogin({commit,state}){
        if(state.isLogin) return true
        let res= await auth.getInfo()
        commit("setLogin",{isLogin:res.isLogin})
        if(!state.isLogin) return false
        commit("setUser",{user:res.user})
    }
}

export default {
    state ,
    getters,
    mutation,
    actions
}