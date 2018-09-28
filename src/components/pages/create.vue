<template>
    <div id="edit">
        <h1>创建文章</h1>
        <h3>文章标题</h3>
        <el-input v-model="articleTitle" placeholder="请输入文章标题"></el-input>
        <p class="msg">限30个字</p>
        <h3>内容简介</h3>
        <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入内容简介"
                v-model="articleSummary">
        </el-input>
        <p class="msg">限30个字</p>
        <h3>文章内容</h3>
        <el-input
                type="textarea"
                :autosize="{ minRows: 6, maxRows: 30}"
                placeholder="请输入内容"
                v-model="articleContent">
        </el-input>
        <p class="at-index-choice">
            <label>是否展示到首页</label>
            <el-switch
                    v-model="atIndex"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
            </el-switch>
        </p>
        <el-button type="primary" plain>立即创建</el-button>
    </div>
</template>

<script>
    export default {
        name: "create",
        data() {
            return {
                articleTitle: '',
                articleSummary: '',
                articleContent: '',
                atIndex: false
            }
        },
        computed:{

        }
    }
</script>

<style lang="stylus" scoped>
    @import "../../assets/commonStyle/base.stylus"

    #edit > *
        margin 5px 0

    #edit
        display grid
        justify-content center
        h1
            text-align: center
            font-weight 500
        .el-input
            width 600px
        p.msg
            color $themeWarningTextColor
        p.at-index-choice
            margin 15px 0
</style>