import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/'

import Frame from './Frame.vue'
import PIndex from './Pc/Index.vue'
import News from './Home/News.vue'
import Mall from './Home/Mall.vue'
import My from './Home/My.vue'
import Login from './personal/Login.vue'
import Regist from './personal/Regist.vue'
import Logout from './personal/Logout.vue'
import Movies from './Home/Movies.vue'
import Picture from './Home/Picture.vue'
import ProductList from './Pc/Product/List.vue'
import FullPage from './Pc/Product/FullPage.vue'
import Statistic from './Mobile/Statistic.vue'
import Timeline from './Mobile/Timeline.vue'
import Tongji from './Mobile/Tongji.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/logout',
        component: Logout
    },
    {
        path: '/regist',
        component: Regist
    },
    {
        path: '/frame',
        component: Frame,
        meta: {
            requireAuth: true  // 添加该字段，表示进入这个路由是需要登录的
        },
        children:[
            {
                path: 'picture',
                component: Picture,
                name: 'picture',
                requireAuth: true
            },
            {
                path: 'news',
                component: News,
                name: 'news',
                requireAuth: true
            },
            {
                path: 'mall',
                component: Mall,
                name: 'mall',
                requireAuth: true
            },
            {
                path: 'movies',
                component: Movies,
                name: 'movies',
                requireAuth: true
            }
        ]
    },
    {
        path: '/detail',
        component: My,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/house',
        component: My,
        meta: {
            requireAuth: true
        }
    },
    /**
     * pc begin
     */
    {
        path: '/home',
        component: PIndex
    },
    {
        path: '/plist',
        component: ProductList,
        meta: {
            requireAuth: true,
            agent: 'pc'
        }
    },
    {
        path: '/fullpage',
        component: FullPage,
        meta: {
            requireAuth: true,
            agent: 'pc'
        }
    },
    {
        path: '/statistic',
        component: Statistic,
        meta: {
            requireAuth: true,
            agent: 'pc'
        }
    },
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
        path: '*',
        redirect: '/home'
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


