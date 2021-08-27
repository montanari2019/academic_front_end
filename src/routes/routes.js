import Vue from 'vue';
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            name: 'login',
            path: '/login',
            component: ()  => import('../modules/auth/pages/Login')
        },
        {
            name: 'Home',
            path: '/',
            component: () => import('../components/Home'),
        }
    ]
})

export default router