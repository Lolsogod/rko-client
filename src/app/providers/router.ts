import { createRouter, createWebHistory } from 'vue-router'
import ClaimsListPage from 'pages/claims-list'

export const router = createRouter({
  //@ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'claims-list',
      component: ClaimsListPage
    },
    {
      path: '/claim',
      name: 'create-claim',
      component: () => import('pages/create-claim')
    },
    {
      path:'/claim/:id',
      name:'edit-claim',
      component : () => import('pages/edit-claim')
    }
  ]
})


