import Vue from 'vue'
import VueRouter from 'vue-router'

import Welcome from '@/views/Welcome'
import Register from '@/views/Register'
import Graph from '@/views/Graph'
import Map from '@/views/Map'
import File from '@/views/File'
import Forecast from '@/views/Forecast'
import Login from '@/views/Login'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/Welcome' },
  { path: '/Welcome', component: Welcome, meta: { keepAlive: false } },
  { path: '/Login', component: Login, meta: { keepAlive: false } },
  { path: '/Register', component: Register, meta: { keepAlive: false } },
  { path: '/Graph', component: Graph, meta: { keepAlive: true } },
  { path: '/Map', component: Map, meta: { keepAlive: false } },
  { path: '/File', component: File, meta: { keepAlive: false } },
  { path: '/Forecast', component: Forecast, meta: { keepAlive: false } }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const path = to.path
  if (
    path === '/Graph' ||
    path === '/Map' ||
    path === '/File' ||
    path === '/Forecast'
  ) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      Vue.prototype.$message.warning('请先登录')
      next('/Login')
    }
  } else {
    next()
  }
})

export default router
