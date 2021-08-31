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
        }
    ],
})

router.beforeEach(BeforeEach)

export default router