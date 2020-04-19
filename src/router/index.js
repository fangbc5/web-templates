import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../components/layout/Container')
    },
]

const router = new VueRouter({
  routes
})

export default router
