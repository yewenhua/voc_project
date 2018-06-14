<template>
    <div id="list">
        <div class="header">
            <div class="left" @click="goback">返回</div>
            <div class="title">List</div>
        </div>
        <br/>

    </div>
</template>
<style>
    #list{
        height:100%;
        background: #f4f4f4;
        font-size: 0.14rem;
    }
</style>
<script>
    import Vue from 'vue'

    export default{
        data(){
            return{
                msg:'LIST'
            }
        },
        methods: {
            goback () {
                this.$router.goBack()
            }
        }
    }
</script>
