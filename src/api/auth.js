import request from '../helpers/request'


//登录登出相关的基础库

const URL = {
    REGISTER: 'auth/register',
    LOGIN: 'auth/login',
    LOGOUT: 'auth/logout',
    GET_INFO: 'auth/'
}

export default {

    register({username, password}) {
        return request(URL.REGISTER, 'POST', {username, password})
    },
    logIn({username, password}) {
        return request(URL.LOGIN, 'POST', {username, password})
    },
    logOut() {
        localStorage.removeItem('token')
        return request(URL.LOGOUT)
    },
    getInfo() {
        return request(URL.GET_INFO)
    }
}