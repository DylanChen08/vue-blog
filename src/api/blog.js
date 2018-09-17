import request from '@helpers/request'

//博客增删改查相关的基础库
const URL = {
    GET_LIST: '/blog',
    GET_DETAILS: '/blog/:blogId',
    CREATE: '/blog',
    UPDATE: "/blog/:blogId",
    DELETE: "/blog/:blogId"
}


export default {
    getBlogs({page = 1, userId, atIndex} = {page:1}) {
        return request(URL.GET_LIST,'GET',{page,userId,atIndex})
    },
    getIndexBlog({page=1}={page:1}){
        return this.getBlogs({page,atIndex:true})
    },
    getBlogsByUserId(userId,{page=1,atIndex}={page:1}){
        return this.getBlogs({userId,atIndex,page})
    },
    getDetails({blogId}){
        return request(URL.GET_DETAILS.replace(':blogId',blogId))
    }
}
