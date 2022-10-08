import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/brudeparet',
      name: 'brudeparet',
      component: () => import('../views/BrudeparetView.vue')
    },
    {
      path: '/ønsker',
      name: 'ønsker',
      component: () => import('../views/ØnskerView.vue')
    },
    {
      path: '/reise',
      name: 'reise',
      component: () => import('../views/ReiseView.vue')
    }
  ]
})

export default router
