import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'
import Sdk from '@/components/Sdk'
import About from '@/components/About'
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld2,
            breadcrumbs: [
                {
                    name: '首页',
                    route: '/',
                },
                {
                    name: '哈喽',
                    route: '/hello',
                },
            ],
        },
        {
            path: '/hello',
            name: 'HelloWorld',
            component: HelloWorld,
            breadcrumbs: [
                {
                    name: '首页',
                    to: '/',
                },
                {
                    name: '欢迎页面',
                    to: '/hello',
                },
            ],
        },
        {
            path: '/sdk',
            name: 'Sdk',
            component: Sdk,
            breadcrumbs: [
                { name: '配置SDK', to: '/sdk' }
            ]
        },
        {
            path: '/about',
            name: 'About',
            component: About,
            breadcrumbs: [
                { name: '关于我们', to: '/' }
            ]
        }
    ],
});
