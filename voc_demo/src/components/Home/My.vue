<template>
    <div id="my">
        <div class="header">
            <div class="left" @click="goback">返回</div>
            <div class="title">My</div>
        </div>
        <br/>
        <br/>
        <div class="getdata" @click="getdata">get data</div>
        <br/>

        <div class="link-content">
            <router-link to="/home">home</router-link>
            <router-link to="/detail">my</router-link>
        </div>
    </div>
</template>
<style>
    #my{
        height:100%;
        background: #f4f4f4;
        font-size: 0.14rem;
    }
    .link-content{
        width:100%;
        height:1rem;
    }
    .getdata{
        padding:15px;
        margin-top: 20px;
    }
</style>
<script>
    import Vue from 'vue'

    export default{
        data(){
            return{
                msg:'MY'
            }
        },
        methods: {
            goback () {
                this.$router.goBack()
            },
            getdata(){
                this.axios.get('/data', {
                    email: '9527@qq.com',
                    password: '123456'
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>
