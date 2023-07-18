import { createRouter, createWebHistory } from 'vue-router'
import ClaimsListPage from 'pages/claims-list'

const temp = { template: '<div>test</div>' }

export const router = createRouter({
  //@ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'claims-list',
      component: ClaimsListPage
    },
  ]
    /*{
      path: '/claim',
      name: 'create-claim',
      component: () => import('pages/create-claim')
    },
    {
      path:'/client/:clientId',
      name:'client',
      component : () => import('pages/edit-claim'),
      children: [
        {
          path: ':claimId',
          name: 'edit-claim',
          component: () => import('features/claimForms/workForm/EditClaimForm.vue'),
          props: true
        }
      ]
    }
  ]*/
})


