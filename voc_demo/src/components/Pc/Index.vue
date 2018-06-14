<template>
    <div>
        <Banner></Banner>
        <br/>
        <router-link to="/detail"><mu-float-button icon="add" secondary class="demo-float-button"/></router-link>
        <br/>
        <router-link to="/detail">
            <mu-raised-button label="左进右回" class="demo-raised-button" primary/>
        </router-link>
        <br/>
        <br/>
        <router-link to="/plist">
            <mu-raised-button label="淡入淡出" class="demo-raised-button" secondary/>
        </router-link>
        <br/>
        <br/>
        <router-link to="/fullpage">
            <mu-raised-button label="fullpage" class="demo-raised-button" secondary/>
        </router-link>
        <br/>
        <br/>
        <router-link to="/statistic">
            <mu-raised-button label="statistic" class="demo-raised-button" secondary/>
        </router-link>
        <br/>
        <br/>
        <router-link to="/timeline">
            <mu-raised-button label="timeline" class="demo-raised-button" secondary/>
        </router-link>
        <br/>
        <br/>
        <router-link to="/tongji">
            <mu-raised-button label="tongji" class="demo-raised-button" secondary/>
        </router-link>
    </div>
</template>
<script>
    import Vue from 'vue'
    import Banner from './Home/Banner.vue'

    export default {
        data(){
            return{
                msg:'hello vue'
            }
        },
        components: {
            Banner
        },
        methods:{

        }
    }

</script>
<style>

</style>