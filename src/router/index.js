import {createRouter, createWebHistory} from 'vue-router'
import HjemView from '../views/HjemView.vue'
import OmBrudeparetView from '../views/OmBrudeparetView.vue'
import ReiseView from '../views/ReiseView.vue'
import ØnskerView from '../views/ØnskerView.vue'

const routes = [
  {
    path: '/',
    name: 'hjem',
    component: HjemView,
  },
  {
    path: '/OmBrudeparet',
    name: 'OmBrudeparet',
    component: OmBrudeparetView,
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

const router = createRouter(
  {
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  }
)

export default router
