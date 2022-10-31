import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
// import OmBrudeparetView from '../views/OmBrudeparetView.vue'
import InformasjonView from '../views/InformasjonView.vue'
import ReiseView from '../views/ReiseView.vue'
import ØnskerView from '../views/ØnskerView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/informasjon',
    name: 'informasjon',
    component: InformasjonView,
  },
  {
    path: '/ønsker',
    name: 'Ønsker',
    component: ØnskerView,
  },
  {
    path: '/reise',
    name: 'reise',
    component: ReiseView,
  },
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router