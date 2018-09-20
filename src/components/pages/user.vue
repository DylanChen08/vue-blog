<template>
    <div id="user">
        <section class="user-info">
            <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="" class="avatar">
            <h3>ease</h3>
        </section>
        <section>
            <div class="item">
                <div class="date">
                    <span class="day">20</span>
                    <span class="month">5月</span>
                    <span class="year">2018</span>
                </div>
                <h3>前端异步解密</h3>
                <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co
                    模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>
            </div>

            <div class="item">
                <div class="date">
                    <span class="day">20</span>
                    <span class="month">5月</span>
                    <span class="year">2018</span>
                </div>
                <h3>前端异步解密</h3>
                <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co
                    模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>
            </div>

        </section>
    </div>
</template>

<script>
    export default {
        name: "user"
    }
</script>

<style lang="stylus" scoped>
    #user > .user-info,
    #my-page > .user-info
        display grid
        grid auto auto / 80px 1fr
        border 1px solid green
        padding 5px 5px 5px 10px
        img.avatar
            grid-row 1 / span2
            grid-coloumn 1
            border 1px solid red
            width 60px
            height 60px
            border-radius 50%

    #user .item,
    #my-page .user-info
        display grid
        grid auto auto auto / 80px 1fr
        margin 20px 0
        .date
            padding 5px
            grid-row 1
            grid-column 1
            justify-self center
            text-align center
            border 1px solid red
        .date > span
            display block
        h3
            padding 5px
            grid-column 2
            grid-row 1
            border 1px solid red
        p
            padding 5px
            grid-column 2
            grid-row 3
            border 1px solid red

</style>