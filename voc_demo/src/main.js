import Vue from 'vue'
import App from './App.vue'
import router from './components/router.config.js'
import Loading from './components/loading/index.js'
import store from './store/index.js'
import axios from './components/http'
import { px2rem } from './components/utils'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(MuseUI)
Vue.use(Loading);
Vue.use(VueAwesomeSwiper);

// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = axios;
px2rem();

//Vue.config.devtools = true;
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
