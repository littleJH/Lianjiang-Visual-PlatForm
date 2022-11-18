import Vue from 'vue'
import VueRouter from 'vue-router'

import Welcome from '@/views/Welcome'
import Register from '@/views/Register'
import Graph from '@/views/Graph'
import Map from '@/views/Map'
import File from '@/views/File'
import Forecast from '@/views/Forecast'
import Login from '@/views/Login'
import BackStage from '@/views/BackStage'
import user from '@/components/backStage/user'
import map from '@/components/backStage/map'
import file from '@/components/backStage/file'
import data from '@/components/backStage/data'
import log from '@/components/backStage/log'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/Welcome' },
  { path: '/Welcome', component: Welcome, meta: { keepAlive: false } },
  { path: '/Login', component: Login, meta: { keepAlive: false } },
  { path: '/Register', component: Register, meta: { keepAlive: false } },
  { path: '/Graph', component: Graph, meta: { keepAlive: true } },
  { path: '/Map', component: Map, meta: { keepAlive: false } },
  { path: '/File', component: File, meta: { keepAlive: false } },
  { path: '/Forecast', component: Forecast, meta: { keepAlive: false } },
  { path: '/BackStage', redirect: '/BackStage/user' },
  {
    path: '/BackStage',
    component: BackStage,
    children: [
      { path: 'user', component: user },
      { path: 'map', component: map },
      { path: 'file', component: file },
      { path: 'data', component: data },
      { path: 'log', component: log }
    ]
  }
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
  } else if (path === '/BackStage/user') {
    Vue.prototype.$message.warning('对不起，您没有权限')
    next(false)
  } else {
    next()
  }
})

export default router
