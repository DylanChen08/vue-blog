<template>
    <div id="user">
        <section class="user-info">
            <img :src="user.avatar" :alt="user.username" class="avatar">
            <h3>{{user.username}}</h3>
        </section>
        <section>
            <router-link v-for="item in blogs" v-bind:key="item.id" :to="`/pages/blog-details/${item.id}`">
                <div class="item">
                    <div class="date">

                        <span class="day">{{splitDate(item.createdAt).date}}</span>
                        <span class="month">{{splitDate(item.createdAt).month}}</span>
                        <span class="year">{{splitDate(item.createdAt).year}}</span>
                    </div>
                    <h3>{{item.title}}</h3>
                    <p>{{item.description}}</p>
                </div>
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
    import blog from "../../api/blog"

    export default {
        name: "user",
        data: function () {
            return {
                blogs: [],
                user: {},
                page: 1,
                total: null

            }
        },
        created() {
            this.useId = this.$route.params.userId
            this.page = this.$route.query.page || 1
            blog.getBlogsByUserId(this.useId, {page: this.page}).then(res => {
                console.log(6603)
                console.log(typeof res.data[0].createdAt)
                console.log(res)
                this.blogs = res.data
                this.page = res.page
                this.total = res.total
                if (res.data.length > 0) {
                    this.user = res.data[0].user
                }
            })
        },
        methods: {
            onPageChange(newPage) {
                blog.getBlogsByUserId(this.useId, {page: newPage, atIndex: ''}).then(res => {
                    console.log(res)
                    this.blogs = res.data
                    this.page = res.page
                    this.total = res.total
                    this.$route.push({path: `/user/${this.userId}`, query: {page: newPage}})
                })
            },
            splitDate(dataStr) {
                let dataObj = typeof dataStr === 'object' ? dataStr : new Date(dataStr)
                return {
                    date: dataObj.getDate(),
                    month: dataObj.getMonth() + 1,
                    year: dataObj.getFullYear()
                }
            }
        }

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