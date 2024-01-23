import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        const user = useUserStore()
        if (user.firstVisit) {
          next({ name: 'landingPage' })
        } else {
          next()
        }
      }
    },
    {
      path: '/manage',
      name: 'manage',
      component: () => import('../views/ManageView.vue')
    },
    {
      path: '/landingPage',
      name: 'landingPage',
      component: () => import('../views/LandingView.vue')
    }
  ]
})

export default router
