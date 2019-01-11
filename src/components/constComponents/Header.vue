<template>
    <div class="header">
        <div class="my-header">
            <h2>{{msg}}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg : "我是头部组件"
            }
        }
    }
</script>

<style lang="less" scoped>
    .my-header {
        width: 90%;
        margin: 0 auto;
        border: 1px solid #eee;
        text-align: center;
        h2 {
            font-size: 20px;
            color: rebeccapurple;
            line-height: 50px
        }
    }
</style>


