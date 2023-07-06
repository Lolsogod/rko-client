import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/claim',
      name: 'claim',
      component: () => import('../components/ClaimView.vue')
    },
    {
      path:'/claim/:id',
      name:'claimsolo',
      component : () => import('../views/claimSolo/ClaimSolo.vue')
    }
  ]
})

export default router
