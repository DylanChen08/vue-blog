<template>
    <div id="edit">
        <h1>创建文章</h1>
        <h3>文章标题</h3>
        <el-input v-model="articleTitle" placeholder="请输入文章标题"></el-input>
        <h3>内容简介</h3>
        <el-input
                type="textarea"
                :rows="3"
                placeholder="请输入内容简介"
                v-model="articleSummary">
        </el-input>
        <h3>文章内容</h3>
        <el-input
                type="textarea"
                :rows="10"
                placeholder="请输入内容"
                v-model="articleContent">
        </el-input>
    </div>
</template>

<script>
    export default {
        name: "edit",
        data(){
            return{
                articleTitle:'',
                articleSummary:'',
                articleContent:'',
                textarea:''
            }
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
</style>