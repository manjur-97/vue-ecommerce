import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Service from '../views/Service.vue'
import Contact from '@/views/Contact.vue'
import Regester from '@/views/auth/Regester.vue'
import LogIn from '@/views/auth/LogIn.vue'

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
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/sign_up',
      name: 'sign up',
      component: Regester
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn
    },
    
  ]
})

export default router
