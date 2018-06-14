<template>
    <div id="mall">
        <div>{{msg}}</div>
        <br/>
        <br/>
        <router-link to="/detail"><mu-float-button icon="add" secondary class="demo-float-button"/></router-link>
    </div>
</template>
<style>
    #mall{
        height:100%;
        background: #f4f4f4;
    }
</style>
<script>
    import Vue from 'vue'

    export default{
        cumputed:{

        },
        data(){
            return{
                msg:'MALL',
            }
        },
        methods:{

        }
    }
</script>
