<template>
  <div id="edit">
    <h1>编辑文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="articleTitle" placeholder="请输入文章标题"></el-input>
    <p class="msg">限30个字</p>
    <h3>内容简介</h3>
    <el-input
        type="textarea"
        :rows="3"
        placeholder="请输入内容简介"
        v-model="articleSummary">
    </el-input>
    <p class="msg">限30个字</p>
    <h3>文章内容</h3>
    <el-input
        type="textarea"
        :rows="10"
        placeholder="请输入内容"
        v-model="articleContent">
    </el-input>

    <el-button type="primary" @click="onEdit" plain>提交更改</el-button>
  </div>
</template>

<script>
import blog from '../../api/blog'

export default {
  name: "edit",
  data() {
    return {
      blogId: null,
      articleTitle: '',
      articleSummary: '',
      articleContent: '',
      atIndex: false
    }
  },

  created() {
    this.blogId = this.$route.params.blogId
    blog.getDetail({blogId: this.blogId}).then(res => {
      this.articleTitle = res.data.title
      this.articleSummary = res.data.description
      this.articleContent = res.data.content
      this.atIndex = res.data.atIndex
    })
  },

  methods: {
    onEdit() {
      blog.updateBlog({blogId: this.blogId}, {
        title: this.title,
        content: this.content,
        description: this.description,
        atIndex: this.atIndex
      })
          .then(res => {
            this.$message.success(res.msg)
            this.$router.push({path: `/pages/detail/${res.data.id}`})
          })
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

  p.msg
    color $themeWarningTextColor

  p.at-index-choice
    margin 15px 0
</style>