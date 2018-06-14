import axios from 'axios'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://192.168.6.11:8080/v1';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (1==1) {
            var token = '';
            //config.headers.Authorization = `${token}`;
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

            }
        }
        return Promise.reject(error.response.data)
    });

export default axios;
