import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/'

import Timeline from './Mobile/Timeline.vue'
import Tongji from './Mobile/Tongji.vue'
import Lockrecord from './Mobile/Lockrecord.vue'
import Devicelog from './Mobile/Devicelog.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/timeline',
        component: Timeline,
        meta: {
            requireAuth: true,
            agent: 'pc'
        }
    },
    {
        path: '/tongji',
        component: Tongji,
        meta: {
            requireAuth: true,
            agent: 'pc'
        }
    },
    {
        path: '/lockrecord',
        component: Lockrecord,
        meta: {
            requireAuth: true,
            agent: 'pc'
        }
    },
    {
        path: '/devicelog',
        component: Devicelog,
        meta: {
            requireAuth: true,
            agent: 'pc'
        }
    },
    {
        path: '*',
        redirect: '/timeline'
    }
];

/*
 * 新建一个方法  当new Router时，实例就包含goBack方法
 * 可用this.$router.goBack()调用
 */
VueRouter.prototype.goBack = function () {
    this.isBack = true;
    this.go(-1);
}

const router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    routes
});

router.beforeEach((to, from, next) => {
    store.dispatch('showLoading');
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.token) {
            next();
        }
        else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        }
    }
    else {
        next();
    }
});

router.afterEach(function (to) {
    store.dispatch('hideLoading')
});

export default router;


