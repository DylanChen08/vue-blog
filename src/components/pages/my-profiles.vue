<template>
    <div id="user">
        <section class="user-info">
            <img :src="user.avatar" :alt="user.username" class="avatar">
            <h3>{{user.username}}</h3>
        </section>
        <section>
            <router-link class="item" v-for="item in blogs" :key="item.id" :to="`/pages/detail/${item.id}`">
                <div class="date">
                    <span class="day">{{splitDate(item.createdAt).date}}</span>
                    <span class="month">{{splitDate(item.createdAt).month}}月</span>
                    <span class="year">{{splitDate(item.createdAt).year}}</span>
                </div>
                <h3>{{item.title}}</h3>
                <p>{{item.description}}</p>
                <div class="actions">
                    <router-link :to="`/pages/edit/${item.id}`">编辑</router-link>
                    <a href="#" @click.prevent="onDelete(item.id)">删除</a>
                </div>
            </router-link>
        </section>
        <section class="pagination">
            <el-pagination
                    layout="prev, pager, next"
                    :total="total"
                    :current-page="page"
                    @current-change="onPageChange">
            </el-pagination>
        </section>
    </div>
</template>

<script>
    import blog from '../../api/blog'
    import {mapGetters} from 'vuex'

    export default {
        name: "create",
        data() {
            return {
                blogs: [],
                page: 1,
                total: 0
            }
        },

        computed: {
            ...mapGetters(['user'])
        },

        created() {
            console.log(99636)
            this.page = parseInt(this.$route.query.page) || 1
            blog.getBlogsByUserId(this.user.id, {page: this.page})
                .then(res => {
                    console.log(res)
                    this.page = res.page
                    this.total = res.total
                    this.blogs = res.data
                })
        },

        methods: {
            onPageChange(newPage) {
                blog.getBlogsByUserId(this.user.id, {page: newPage}).then(res => {
                    console.log(res)
                    this.blogs = res.data
                    this.total = res.total
                    this.page = res.page
                    this.$router.push({path: "/pages/my-profiles", query: {page: newPage}})
                })
            },

            async onDelete(blogId) {
                await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                })
                await blog.deleteBlog({blogId})
                this.$message.success('删除成功')
                this.blogs = this.blogs.filter(blog => blog.id != blogId)
            },

            splitDate(dataStr) {
                let dateObj = typeof dataStr === 'object' ? dataStr : new Date(dataStr)
                return {
                    date: dateObj.getDate(),
                    month: dateObj.getMonth() + 1,
                    year: dateObj.getFullYear()
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

    #user > .pagination
            text-align center

</style>