<template>
    <div id="details">
        <section class="user">
            <img class="avatar" :src="user.avatar" :alt="user.username"/>
            <h3>{{title}}</h3>
            <p><router-link :to="`/pages/user/${user.id}`">{{user.username}}</router-link></p>
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
                user: {},
                createAt: ""
            }
        },
        created() {
            let blogId = this.$route.params.blogId
            console.log('blogID')
            console.log(blogId)
            blog.getDetail({blogId: blogId}).then(res => {
                console.log('res')
                console.log(res)
                this.title = res.data.title
                this.rawContent = res.data.content
                this.user = res.data.user
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
        section.user > *
            padding 5px
        section.user
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
            h3
                grid-column 2
                grid-row 1
            p
                grid-column 2
                grid-row 2

        section.article-area
            padding 30px 10px

</style>