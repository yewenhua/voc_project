<template>
    <div id="login">
        <div class="page">
            <div class="page__hd">
                <div class="logo-content">
                    <img src="../../assets/img/logo.png"/>
                </div>
                <div class="weui-cells weui-cells_form">
                    <div class="weui-cell">
                        <div class="weui-cell__hd"><label class="weui-label">手机</label></div>
                        <div class="weui-cell__bd">
                            <input class="weui-input" type="tel" placeholder="请输入手机号"/>
                        </div>
                    </div>
                    <div class="weui-cell">
                        <div class="weui-cell__hd">
                            <label class="weui-label">密码</label>
                        </div>
                        <div class="weui-cell__bd">
                            <input class="weui-input" type="password" placeholder="请输入密码"/>
                        </div>
                    </div>
                </div>
                <div class="weui-cell-login">
                    <div class="weui-btn weui-btn_primary" @click="login">登录</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        data(){
            return {
                ...mapState(['token'])
            }
        },
        methods:{
            login(){
                var that = this;
                this.axios.post('/login', {
                    email: '9527@qq.com',
                    password: '123456'
                })
                .then(function (response) {
                    //console.log(response.data.token);
                    that.$store.dispatch('login', {
                        token: response.data.token
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });

                let redirect = decodeURIComponent(this.$route.query.redirect || '/');
                this.$router.push({
                    path: redirect
                })
            },
            register(){
                this.axios.post('/register', {
                    email: '9528@qq.com',
                    name: 'lucky',
                    password: '123456'
                })
                .then(function (response) {
                    //console.log(response);
                })
                .catch(function (error) {
                    //console.log(error);
                });
            }
        },
        mounted(){
            //this.login();
        }
    }
</script>
<style>
    #login{
        padding:16px;
        background: #fff;
    }
    .logo-content{
        width: 100%;
        height: 100px;
        padding: 50px 0px;
        text-align:center;
    }
    .logo-content img{
        border-radius: 50%;
        height:100%;
    }
    .weui-cells{
        background: #fff;
    }
    .weui-cells:before{
        border:none;
    }
    .weui-cell:before{
        left: 0px;
    }
    .weui-cells:after{
        border-color: #ddd;
    }
    .weui-label{
        width: 80px;
    }
    .weui-cell-login{
        margin-top: 60px;
    }
</style>