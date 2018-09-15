<template>
    <div>
        <span>登录</span>
        <span class="demonstration">自定义初始值</span>
        <el-slider v-model="value2" @change="log" :show-tooltip="true"></el-slider>
    </div>

</template>

<script>
    import request from '../../helpers/request.js'

    window.request = request;
    export default {
        name: "login",
        data() {
            return {
                value2: 50
            }
        },
        methods: {
            formatTooltip(val) {
                return val / 100;
            },
            log() {
                console.log(this.value2)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    div
        width 60%;
        margin 0 auto
</style>