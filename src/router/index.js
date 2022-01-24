import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../plugins/firebase'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Default'),
    meta: {
      requiresAuth: true
    },
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/bf',
        name: 'BF',
        component: () => import(/* webpackChunkname: "bf" */'../views/BF.vue')
      },
      {
        path: '/gpo',
        name: 'GPO',
        component: () => import(/* webpackChunkname: "gpo" */'../views/GPO.vue')
      },
      {
        path: '/astd',
        name: 'ASTD',
        component: () => import(/* webpackChunkname: "astd" */'../views/ASTD.vue')
      },
      {
        path: '/sl2',
        name: 'SL2',
        component: () => import(/* webpackChunkname: "sl2" */'../views/SL2.vue')
      },
      {
        path: '/acs',
        name: 'ACS',
        component: () => import(/* webpackChunkname: "acs" */'../views/ACS.vue')
      },
      {
        path: '/ads',
        name: 'ADS',
        component: () => import(/* webpackChunkname: "ads" */'../views/ADS.vue')
      },
      {
        path: '/afs',
        name: 'AFS',
        component: () => import(/* webpackChunkname: "afs" */'../views/AFS.vue')
      },
      {
        path: '/am',
        name: 'AM',
        component: () => import(/* webpackChunkname: "am" */'../views/AM.vue')
      },
      {
        path: '/atrs',
        name: 'ATRS',
        component: () => import(/* webpackChunkname: "atrs" */'../views/ATRS.vue')
      },
      {
        path: '/bss',
        name: 'BSS',
        component: () => import(/* webpackChunkname: "bss" */'../views/BSS.vue')
      },
      {
        path: '/df',
        name: 'DF',
        component: () => import(/* webpackChunkname: "df" */'../views/DF.vue')
      },
      {
        path: '/kl',
        name: 'KL',
        component: () => import(/* webpackChunkname: "kl" */'../views/KL.vue')
      },
      {
        path: '/psx',
        name: 'PSX',
        component: () => import(/* webpackChunkname: "psx" */'../views/PSX.vue')
      },
      {
        path: '/afis',
        name: 'AFIS',
        component: () => import(/* webpackChunkname: "afis" */'../views/AFIS.vue')
      },
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/Blank'),
    children:[{
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkname: "login" */'../views/Login.vue')
    }]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router