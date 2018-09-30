<template>
    <div id="index">
        <section class="blog-post">
            <router-link class="item-wrapper" to="" v-for="item in blogs" v-bind:key="item.id">
                <figure class="avatar">
                    <img :src="item.user.avatar"/>
                    <figcaption>
                        <span>{{item.user.username}}</span>
                    </figcaption>
                </figure>
                <h3>{{item.title}}</h3>
                <p>{{item.description}}</p>
            </router-link>
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
            blog.getIndexBlogs({page: this.page}).then(res => {
                console.log(res)
                this.blogs = res.data
                this.total = res.total
                this.page = res.page
            })
        },
        methods: {}
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
                /*border 1px solid yellow*/


</style>