import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/home/HomeView.vue'

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
      component: () => import('@/pages/newClaim/ClaimView.vue')
    },
    {
      path:'/claim/:id',
      name:'claimsolo',
      component : () => import('@/pages/editClaim/editClaim.vue')
    }
  ]
})

export default router
