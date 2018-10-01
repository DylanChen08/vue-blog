function friendlyDate(dataStr) {
    //时间戳的转换
    let dataObj = typeof dataStr === "object" ? dataStr : new Date(dataStr)
    let time = dataObj.getTime()
    let now = Date.now()
    let space = now - time  //算出时间差,单位是毫秒(ms)
    let str = ''

    switch (true) {
        case space < 60000 :
            str = '刚刚'
            break
        //如果小于一小时
        case space < 1000 * 3600:
            str = Math.floor(space / 60000) + '分钟前'
            break
        //如果小于一天
        case  space < 1000 * 3600 * 24 :
            str = Math.floor(space / (1000 * 3600)) + '小时前'
            break
        //如果小于一年
        default :
            str = Math.floor(space / (1000 * 3600 * 24)) + '天前'
    }
    //要记得返回str,否则无效
    return str
}

export default {
    /*
    * 给vue增加插件的写法
    * 这种写法，将函数作为一个插件导出
    * 在main.js中引入即可
    * 如需增加新的插件，只需要添加到 Vue.prototype 的后面即可
    * 在main.js 中导入之后全局可用
    *
    * */
    install(Vue, options) {
        Vue.prototype.friendlyDate = friendlyDate
    }
}