<template>
    <div class="list">
        <Header></Header>
        <div class="my-content">
            <p>{{msg}}</p>
            <hr>
            <div class="link">
                我们一起愉快地<router-link to="/index">回首页</router-link>吧!!!
            </div>
            <hr>
            <div class="wrap">
                <div class="top">
                    <input type="text" placeholder="请输入添加任务" v-model="inputText" >
                    <button @click="add()">+添加</button>
                </div>
                <div class="middle">
                    <table class="loadTable">
                        <thead>
                            <tr>
                                <th colspan="4">进行中</th>
                            </tr>
                            <tr class="title">
                                <td>选中</td>
                                <td>序号</td>
                                <td>任务</td>
                                <td>操作</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,i) in list" v-if="!item.checked">
                                <td><input type="checkbox" v-model='item.checked'></td>
                                <td>{{i+1}}</td>
                                <td>{{item.title}}</td>
                                <td><button @click='remove(i)'>删除</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="bottom">
                    <table class="loadTable">
                        <thead>
                            <tr>
                                <th colspan="4">已完成</th>
                            </tr>
                            <tr class="title">
                                <td>选中</td>
                                <td>序号</td>
                                <td>任务</td>
                                <td>操作</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item,i) in list" v-if="item.checked">
                                <td><input type="checkbox" v-model='item.checked'></td>
                                <td>{{i+1}}</td>
                                <td>{{item.title}}</td>
                                <td><button @click='remove(i)'>删除</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './constComponents/Header.vue';
    import Footer from './constComponents/Footer.vue'

    export default {
        data () {
            return {
                msg : '我是列表页',
                inputText : '',
                list : []
            }
        },
        methods : {
            // 添加  button事件
            add() {
                if(this.inputText.replace(/\s/g,"") == "") {
                    alert("请输入内容");
                }else {
                    this.list.unshift({
                        checked : false,
                        title : this.inputText
                    });
                    localStorage.setItem("list",JSON.stringify(this.list));
                    this.inputText = "";
                }
            },
            remove(i) { 
                this.list.splice(i,1);
                localStorage.setItem("list",JSON.stringify(this.list));
            }
        },
        mounted(){ // 在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
            let list = JSON.parse(localStorage.getItem("list"));
            if( list ){
                this.list = list;
            }
        },
        components : {
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
        .wrap {
            table {
                width: 90%;
                border: 1px solid #eee;
                margin: 10px auto;
            }
        }
    }
</style>


