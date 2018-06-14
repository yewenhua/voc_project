<template>
    <div id="mall">
        <div>{{msg}}</div>
        <br/>
        <br/>
        <router-link to="/detail">
            <mu-raised-button class="demo-raised-button" label="DETAIL" labelPosition="after" secondary>
                <i class="mudocs-icon-custom-github mu-icon" style="font-size:24px;"></i>
            </mu-raised-button>
        </router-link>
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
                msg:'PICTURE',
            }
        },
        methods:{

        }
    }
</script>
