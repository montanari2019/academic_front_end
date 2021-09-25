import Vue from 'vue';
import VueRouter from 'vue-router'
import BeforeEach from './beforeEach'


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            name: 'Home',
            path: '/',
            component: () => import('../components/Home'),
            // a meta field
            meta: { requiresAuth: false }
        },
        {
            name: 'Login',
            path: '/login',
            component: ()  => import('../modules/auth/pages/Login'),
            // a meta field
            meta: { requiresAuth: false }
        },
        {
            name: 'User',
            path: '/user',
            component: () => import('../modules/users/pages/User'),
            // a meta field
            meta: { requiresAuth: true }
        },
        {
            name: 'AdminHome',
            path: '/admin/Home',
            component: () => import('../modules/admin/pages/AdminHome'),
            // a meta field
            meta: { requiresAuth: true }
        },
        {
            name: 'Contrato',
            path: '/contrato',
            component: () => import('../modules/contrato/pages/Contrato'),
            // a meta field
            meta: { requiresAuth: true }
        },
        {
            name: 'CadastroUser',
            path: '/cadastroUser',
            component: () => import('../modules/contrato/pages/UserCadastro'),
            // a meta field
            meta: { requiresAuth: false }
        }
    ],
})

router.beforeEach(BeforeEach)

export default router