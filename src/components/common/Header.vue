<template>
    <div id="header">
        <h1>LET`S SHARE</h1>
        <span>精品博客汇聚</span>
        <section>
            <el-button plain @click="test">朴素按钮</el-button>
            <el-button plain>朴素按钮</el-button>
        </section>
    </div>
</template>

<style lang="stylus">
</style>
<script>

    export default {
        name: "Header",
        methods: {
            test() {
                alert(1)
            }
        }
    }
</script>

<style scoped>

</style>