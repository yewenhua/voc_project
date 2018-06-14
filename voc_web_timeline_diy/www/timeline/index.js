import Vue from 'vue'
import Timeline from '../../src/components/Mobile/Timeline.vue'
import axios from '../../src/components/http'
import { px2rem, unixtimefromat } from '../../src/components/utils'

// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = axios;
px2rem();

//Vue.config.devtools = true;
new Vue({
    el: '#app',
    render: h => h(Timeline)
})
