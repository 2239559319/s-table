import Vue from 'vue'
import VueRouter from 'vue-router'

import Table from '@/components/STable'
import Input from '@/views/Input'

Vue.use(VueRouter)

const routes = [
  {
    path: '/table',
    name: 'table',
    component: Table
  },
  {
    path: '/',
    name: 'input',
    component: Input
  }
  
]

const router = new VueRouter({
  routes
})

export default router
