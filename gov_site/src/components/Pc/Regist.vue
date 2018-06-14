<template>
    <div class="registWrapper">
        <div class="middleWrapper">
            <div class="xx-curs-m-ipt">
                <div class="xx-curs-u-ipt" :class="obj.focus ? 'xx-curs-u-ipt-active' : 'xx-curs-u-ipt-none'">
                    <div class="xx-curs-u-label"><label for="">手机号码</label><i></i><span class="xx-curs-i-split"></span></div>
                    <input placeholder="请输入手机号码" @focus="focus(obj)" @blur="blur(obj)" @input="input(obj)" v-model="obj.val">
                    <div class="xx-curs-u-tip" :style="{display: obj.val ? 'block' : 'none'}">
                        <div class="xx-curs-u-clear" @click="clear(obj)"></div>
                    </div>
                </div>

                <table class="xx-curs-m-popb" :style="{display: obj.error ? 'table' : 'none'}">
                    <tbody>
                    <tr>
                        <td class="xx-curs-b-i"><i></i></td>
                        <td class="xx-curs-b-p">
                            请输入正确的手机号码
                            <a href="javascript:void(0);" style="color: rgb(83, 142, 219);"></a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div class="xx-curs-m-ipt">
                <div class="xx-curs-u-ipt xx-curs-u-ipt-active">
                    <div class="xx-curs-u-label"><label for="">邮箱地址</label><i></i><span class="xx-curs-i-split"></span></div>
                    <input placeholder="请输入邮箱地址">
                    <div class="xx-curs-u-tip">
                        <div class="xx-curs-u-clear"></div>
                    </div>
                </div>

                <table class="xx-curs-m-popb" style="display: none;">
                    <tbody>
                    <tr>
                        <td class="xx-curs-b-i"><i></i></td>
                        <td class="xx-curs-b-p">
                            请输入正确的邮箱地址
                            <a href="javascript:void(0);" style="color: rgb(83, 142, 219);"></a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div class="xx-curs-m-ipt">
                <div class="xx-curs-u-ipt xx-curs-u-ipt-error">
                    <div class="xx-curs-u-label"><label for="">验证码</label><i></i><span class="xx-curs-i-split"></span></div>
                    <input placeholder="请输入验证码">
                    <div class="xx-curs-u-tip">
                        <div class="xx-curs-u-clear"></div>
                    </div>
                </div>

                <table class="xx-curs-m-popb">
                    <tbody>
                    <tr>
                        <td class="xx-curs-b-i"><i></i></td>
                        <td class="xx-curs-b-p">
                            请输入正确的验证码
                            <a href="javascript:void(0);" style="color: rgb(83, 142, 219);"></a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                obj: {
                    focus: false,
                    error: false,
                    val: ''
                }
            }
        },
        methods: {
            focus(item){
                item.focus = true;
            },
            blur(item){
                item.focus = false;
            },
            input(item){
                if(item.val.indexOf('9') !== -1){
                    item.error = true;
                }
                else{
                    item.error = false;
                }
            },
            clear(item){
                item.val = '';
            }
        }
    }
</script>
<style>
    .registWrapper{
        text-align: center;
        background-color: white;
    }
    .registWrapper :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: #ccc;
        font-size: 14px;
    }
    .registWrapper ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: #ccc;
        font-size: 14px;
    }
    .registWrapper input:-ms-input-placeholder{
        color: #ccc;
        font-size: 14px;
    }
    .registWrapper input::-webkit-input-placeholder {
        color: #ccc;
        font-size: 14px;
    }
    .middleWrapper{
        width:1000px;
        margin: 10px auto;
        text-align: left;
    }
    .xx-curs-m-ipt {
        width: 100%;
        height: 50px;
        line-height: 50px;
        margin-top: 20px;
        font-size: 14px;
        position: relative;
    }
    .xx-curs-u-ipt {
        position: relative;
        width: 350px;
        height: 100%;
        margin-left: 186px;
        border: 1px solid #d8e1f0;
        border-radius: 2px;
        float: left;
        padding-left: 16px;
    }
    .xx-curs-u-ipt-active {
        border: 1px solid #58a2f7;
    }
    .xx-curs-u-ipt-error {
        border: 1px solid #ff5c57;
    }
    .xx-curs-u-label {
        float: left;
        width: 105px;
        color: #666;
    }
    .xx-curs-u-label label {
        display: inline-block;
        width: 70px;
    }
    .xx-curs-u-label i {
        display: inline-block;
        margin-left: 6px;
        height: 10px;
        width: 8px;
        background: url(../../assets/img/sprite_yunreg_20160907.png) -9999px -9999px no-repeat;
        background-position: -29px -70px;
    }
    .xx-curs-u-label .xx-curs-i-split {
        display: block;
        position: absolute;
        left: 109px;
        top: 17px;
        height: 14px;
        width: 1px;
        background-color: #d8e1f0;
    }
    .xx-curs-u-ipt input {
        width: 205px;
        height: 20px;
        padding: 12px 0 14px;
        color: #333;
        border: none;
        font-size: 16px;
        line-height: 20px;
        background-color: #fcfdff;
        outline: none
    }
    .xx-curs-u-tip {
        position: absolute;
        z-index: 11;
        background: #fff;
        right: 10px;
        top: 14px;
    }
    .xx-curs-u-clear {
        background: url(../../assets/img/sprite_yunreg_20160907.png) -9999px -9999px no-repeat;
        position: absolute;
        height: 25px;
        width: 25px;
        top: 0;
        right: 0;
        cursor: pointer;
    }
    .xx-curs-u-clear {
        background-position: -23px -79px;
        opacity: 0.7;
    }
    .xx-curs-m-popb {
        float: left;
        margin-left: 16px;
        width: 160px;
        height: 50px;
        line-height: 16px;
        overflow: hidden;
        font-size: 12px;
        border-collapse: collapse;
        border-spacing: 0;
    }
    .xx-curs-b-i {
        width: 20px;
    }
    .xx-curs-m-popb i {
        display: block;
        height: 18px;
        width: 16px;
        background: url(../../assets/img/sprite_yunreg_20160907.png) -9999px -9999px no-repeat;
        background-position: -4px -66px;
    }
    .xx-curs-b-p {
        color: #ff5c57;
    }
</style>