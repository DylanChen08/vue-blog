import request from '@/helpers/request'


//登录登出相关的基础库

const URL = {
    REGISTER:'auth/register',
    LOGIN:'auth/login',
    LOGOUT:'auth/logout',
    GET_INFO:'auth/'
}

export default{

    register({name,password}){
        return request(URL.REGISTER,'POST',{name,password})
    },
    logIn({name,password}){
        return request(URL.REGISTER,'POST',{name,password})
    },
    logOut(){
        return request(URL.LOGOUT)
    },
    getInfo(){
        return request(URL.GET_INFO)
    }
}