import axios from 'axios'
import {Message} from 'element-ui'

axios.defaults.baseURL = 'http://blog-server.hunger-valley.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true
/*
* 对axios的request进行封装，使用更加方便
* 传入三个参数:url,请求类型,请求的数据。
* 可以直接在控制台模拟请求
*
* */
export default function request(url, type = "GET", data = {}) {
    return new Promise((resolve, reject) => {
        let option = {
            url,
            method:type
        }
        console.log(option)
        if (type.toLowerCase() === "get") {
            console.log(0)
            option.params = data
        } else {
            console.log(1)
            option.data = data
        }
        axios(option).then(res => {
            console.log(2)
            // console.log(res)
            if (res.data.status === 'ok') {
                console.log(3)
                resolve(res)
            } else {
                console.log(4)
                console.log(res)
                console.log(5)
                Message.error(res.data.msg)
                console.log(6)
                reject(res)
            }
        }).catch(e => {
            console.log(e)
            Message.error("网络异常")
            reject({msg: "网络异常"})
        })
    })
}