<template>
    <div class="progress-outer">
        <div class="progress" :class="{'progress-striped active' : animate}">
            <div class="progress-bar"
                :class="type && 'progress-bar-' + type"
                 role="progressbar"
                 :aria-valuenow="value"
                 :aria-valuemin="0"
                 :aria-valuemax="max"
                 :style="{width:(percent<100 ? percent : 100) + '%'}"
            >
            </div>
            <span class="progress-text">{{valueText}}</span>
        </div>
    </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
    .progress{
        height: 10px;
        width: 90%;
        margin-bottom: 10px;
        float: left;
        overflow: hidden;
        background-color: #f5f5f5;
        border-radius:4px;
        box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
        -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1)
    }
    .progress-bar{
        height: 100%;
        width: 0;
        font-size:12px;
        line-height:20px;
        color:#fff;
        text-align:center;
        background-color: #337ab7;
        border-radius:4px;
        box-shadow: inset 0 -1px 0 rgba(0,0,0,0.15);
        -webkit-box-shadow: inset 0 -1px 0 rgba(0,0,0,0.15);
        transition: width .6s ease;
        -webkit-transition: width .6s ease;
    }
    .progress.active .progress-bar{
        animation: progress-bar-stripes 2s linear infinite;
        -webkit-animation: progress-bar-stripes 2s linear infinite;
    }
    @keyframes progress-bar-striped{
        0% {
             background-position: 40px 0;
        }
        100% {
             background-position: 0 0;
        }
    }
    .progress-striped .progress-bar{

    }
    progress-bar-info{
        background-color: #5bc0de;
    }
</style>
<script>
    export default{
        props: {
            value:{
                type: Number,
                required: true
            },
            max: {
                type:Number,
                default: 100
            },
            type: {
                type: String,
                default: ''
            },
            animate: {
                type: Boolean,
                default: true
            }
        },
        computed:{
            percent(){
                return parseInt(this.value * 100 / this.max, 10);
            },
            valueText(){
                return this.percent + '%';
            }
        },
        data(){
            return{
                msg:'hello vue'
            }
        }
    }

</script>
