<template>
    <div id="index">
        <section class="blog-post">
            <router-link class="item-wrapper" to="`/pages/blog-details/${item.id}`" v-for="item in blogs"
                         v-bind:key="item.id">
                <figure class="avatar">
                    <img :src="item.user.avatar" :alt="item.user.uername"/>
                    <figcaption>
                        <span>{{item.user.username}}</span>
                    </figcaption>
                </figure>
                <h3>{{item.title}}</h3>
                <p>{{item.description}}</p>
                <span class="time-area">{{item.updatedAt.slice(0,10)+" "+item.updatedAt.slice(11,19)}}</span>
            </router-link>
        </section>
        <section class="pagination">
            <el-pagination
                    background
                    layout="prev, pager, next"
                    @current-change="onPageChange"
                    :total="total"
                    :current-page="page"
            >
            </el-pagination>
        </section>
    </div>
</template>

<script>
    console.log(1)
    import blog from "../../api/blog"

    export default {
        name: "index",
        data: function () {
            return {
                blogs: [],
                total: 0,
                page: 1
            }
        },
        created() {
            this.page = parseInt(this.$route.query.page) || 1
            blog.getIndexBlogs({page: this.page}).then(res => {
                console.log(res)
                this.blogs = res.data
                this.total = res.total
                this.page = res.page
            })
        },
        methods: {
            onPageChange(newPage) {
                console.log("newPage")
                console.log(newPage)
                blog.getIndexBlogs({page: newPage}).then(res => {
                    this.blogs = res.data
                    this.total = res.total
                    this.page = res.page
                    //把当前的页数放进url,通过query传递当前的页码的值
                    this.$router.push({path: "/pages/index", query: {page: newPage}})
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .blog-post
        .item-wrapper > *
            padding 5px
        .item-wrapper
            display grid
            grid auto auto / 80px 1fr
            margin 20px 0
            figure.avatar
                grid-column 1
                grid-row 1 / span2
                /*border 1px solid green*/
                img
                    border-radius 50%
                figcaption
                    overflow hidden
                    white-space nowrap
                    text-overflow ellipsis
                    font-size 14px
                    color #999
                    text-align center
            h3
                grid-column 2
                grid-row 1
            /*border 1px solid red*/
            p
                grid-column 2
                grid-row 2

            .time-area
                font-size 13px
                color #999

    /*border 1px solid yellow*/

    .pagination
        margin 20px 0
        text-align center
</style>