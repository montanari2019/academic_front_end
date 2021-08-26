import Vue from 'vue';
import Router from 'vue-router'


import Login from '../components/Login.vue';

Vue.use(Router)

const routes = [
    {
        name: 'login',
        path: '/longin',
        component: Login

    },
]

const rotas = new Router(routes)



export default rotas