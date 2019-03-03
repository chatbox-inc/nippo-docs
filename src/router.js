// Base dependencies
import Vue from 'vue'
import VueRouter  from 'vue-router'

// Enable the ionic-vue router plugin
Vue.use(VueRouter)

// Create a new IonicVueRouter instance
// Define and export our routes
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: () => import('@/views/TopView.vue')
        },
        {
            path: '/pages/:path*',
            component: () => import('@/views/PageView.vue')
        },
        { path: '*', redirect: { path: '/' }}
    ],
})

export default router