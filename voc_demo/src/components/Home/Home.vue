<template>
    <div id="home">
        <div class="header">
            <div class="left" @click="goback">返回</div>
            <div class="title">HOME</div>
        </div>
        <br/>
        <br/>
        <br/>

        <div @click="showLoading">showLoading</div>
        <br/>
        <div @click="hideLoading">hideLoading</div>
        <br/>
        <router-link to="/detail">detail</router-link>
        <br/>
        <div>{{msg}}</div>
        <br/>
        <com-a></com-a>
        <br/>
        <com-b></com-b>
        <br/>
        <com-c></com-c>
    </div>
</template>
<style>
    #home{
        height:100%;
        background: #f4f4f4;
        font-size: 0.14rem;
    }
</style>
<script>
    import Vue from 'vue'
    import { mapActions } from 'vuex'

    var eventBus = new Vue();

    var A = {
        template:'<div>我是A组件==><button @click="send">发送</button></div>',
        data(){
            return {
                 a: '我是A组件数据'
            }
        },
        methods:{
            send(){
                 eventBus.$emit('msg-a', this.a);
            }
        }
    };

    var B = {
        template:'<div>我是B组件==><button @click="send">发送</button></div>',
        data(){
            return {
                 a: '我是B组件数据'
            }
        },
        methods:{
            send(){
                 eventBus.$emit('msg-b', this.a);
            },
            goback () {
                this.$router.goBack();
            },
        }
    };

    var C = {
        template:`
            <div>我是C组件
                <div>A组件传过来的数据a:{{a}}</div>
                <div>B组件传过来的数据b:{{b}}</div>
            </div>
       `,
        data(){
            return {
                 a: '',
                 b:'',
                 c:'我是C组件数据'
            }
        },
        mounted(){
            eventBus.$on('msg-a', function(param){
                 this.a = param;
            }.bind(this));
            eventBus.$on('msg-b', function(param){
                 this.b = param;
            }.bind(this));
        }
    };

    export default{
        data(){
            return{
                msg:'单一事件方案：组件通信'
            }
        },
        methods: {
            goback () {
                this.$router.goBack()
            },
            ...mapActions([
                'showLoading',
                'hideLoading'
            ])
        },
        components:{
            'com-a': A,
            'com-b': B,
            'com-c': C
        }
    }
</script>
