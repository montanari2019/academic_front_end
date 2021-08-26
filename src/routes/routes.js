import Vue from 'vue';
import VueRouter from 'vue-router'


import Login from '../components/Login.vue';
import Home from '../components/Home.vue';

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/login',
            component: Login,
        }
    ]
})

export default router