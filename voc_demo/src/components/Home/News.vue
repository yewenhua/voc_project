<template>
    <div id="news">
        {{msg}}
        <br/>
        <br/>
        <router-link to="/detail"><mu-float-button icon="add" secondary class="demo-float-button"/></router-link>
    </div>
</template>
<style>
    #news{
        height:100%;
        background: #f4f4f4;
    }
</style>
<script>
    import Vue from 'vue'

    export default{
        data(){
            return{
                msg:'NEWS'
            }
        }
    }
</script>
