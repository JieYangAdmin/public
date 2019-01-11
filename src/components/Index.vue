<template>
  <div class="index">
     <!-- <v-header></v-header>  -->
     <Header></Header>
    <div class="my-content">
        <p>{{msg}}</p>
        <hr>
        <div class="link">
            我们一起愉快地<router-link to="/list">去列表页</router-link>吧!!!
        </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
    import Header from './constComponents/Header.vue';
    import Footer from './constComponents/Footer.vue'

    export default {
        name: 'index',
        data () {
            return {
                msg: '我是首页'
            }
        },
        components : {
            // 'v-header' : Header
            Header,
            Footer
        }
    }
</script>
<style lang="less" scoped>
    .my-content {
        width: 90%;
        border: 1px solid #eee;
        margin: 10px auto;
        text-align: center;
        .link {
            line-height: 50px;
        }
    }
</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->

