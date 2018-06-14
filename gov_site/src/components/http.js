import axios from 'axios'
import store from '../store/'
import * as types from '../store/types'
import router from './router.config.js'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://192.168.6.11:8080/v1';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            //config.headers.Authorization = `${store.state.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT);
                    router.replace({
                        path: 'login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        return Promise.reject(error.response.data)
    });

export default axios;
