<template>
    <div id="details">
        <section class="userInfo">
            <img class="avatar" :src="userInfo.avatar" :alt="userInfo.username"/>
            <h3>{{title}}</h3>
            <p>发布者{{userInfo.username}}发布于xxxx</p>
        </section>
        <!--将markdown渲染为html输出的结果在这里-->
        <section class="article-area" v-html="markedConvert"></section>
    </div>
</template>

<script>
    import marked from "marked"

    console.dir(marked)
    import blog from "../../api/blog"

    export default {
        name: "blog-details",
        data: function () {
            return {
                title: "",
                rawContent: "",
                userInfo: {},
                createAt: ""
            }
        },
        created() {
            let blogId = this.$route.params.blogId
            blog.getDetail({blogId: blogId}).then(res => {
                console.log(226336)
                console.log(res)
                this.title = res.data.title
                this.rawContent = res.data.content
                this.userInfo = res.data.user
                this.createAt = res.data.user.createAt
            }).catch(() => {

            })
        },
        computed: {
            markedConvert() {
                return marked(this.rawContent)
            }
        },
        methods: {},

    }
</script>

<style lang="stylus" scoped>
    #details
        section.userInfo > *
            padding 5px
        section.userInfo
            display grid
            grid auto auto / 80px 1fr
            padding 30px 0
            img.avatar
                padding 0
                grid-column 1
                grid-row 1 / span2
                width 60px
                height 60px
                border-radius 50%
                border 1px solid red
            h3
                grid-column 2
                grid-row 1
                border 1px solid red
            p
                grid-column 2
                grid-row 2
                border 1px solid red

        section.article-area
            padding 30px 10px
            border 1px solid red

</style>