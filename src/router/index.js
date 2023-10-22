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
      path: '/VtextAndVModel',
      name: 'VtextAndVModel',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VtextAndVModel.vue')
    },
    {
      path: '/Vfor',
      name: 'Vfor',
      component: () => import('../views/Vfor.vue')
    },
    {
      path: '/Practice',
      name: 'Practice',
      component: () => import('../views/Practice.vue')
    },
    {
      path: '/Bootstrap',
      name: 'Bootstrap',
      component: () => import('../views/Bootstrap.vue')
    },
    {
      path: '/Von',
      name: 'Von',
      component: () => import('../views/Von.vue')
    },
    {
      path: '/Vbind',
      name: 'Vbind',
      component: () => import('../views/Vbind.vue')
    },
    {
      path: '/Waterfall',
      name: 'Waterfall',
      component: () => import('../views/Waterfall.vue')
    },
    {
      path: '/VifAndVshow',
      name: 'VifAndVshow',
      component: () => import('../views/VifAndVshow.vue')
    },
    {
      path: '/Estate',
      name: 'Estate',
      component: () => import('../views/Estate.vue'),
      children: [
        {
          path: 'EstateHome' , //自己寫法：path: '' (設定空字串)
          component: () => import('../components/EstateHome.vue'),
          alias:'' //重定向和别名 (Redirect and Alias)
        },
        {
          path: 'EstateLogin' ,
          component: () => import('../components/EstateLogin.vue')
        },
        {
          path: 'EstateInquiry' ,
          component: () => import('../components/EstateInquiry.vue')
        },
        {
          path: 'EstatePerson' ,
          component: () => import('../components/EstatePerson.vue')
        },
      ]
    },
    {
      path: '/VueRouter',
      name: 'VueRouter',
      component: () => import('../views/VueRouter.vue'),
      children:[
        {
          path: 'RouterComA',
          component: () => import('../components/RouterComA.vue')
        },
        {
          path: 'RouterComB',
          component: () => import('../components/RouterComB.vue')
        },
      ]
    },
    {
      path: '/Props',
      name: 'Props',
      component: () => import('../views/Props.vue'),
    },
    {
      path: '/Props_sign',
      component: () => import('../components/Props_sign.vue'),
    },
    {
      path: '/Emit',
      name: 'Emit',
      component: () => import('../views/Emit.vue'),
    },
    {
      path: '/Emit_sign',
      component: () => import('../components/Emit_sign.vue'),
    },
    {
      path: '/Accounting',
      name: 'Accounting',
      component: () => import('../views/Accounting.vue'),
    },
    {
      path: '/HW1',
      name: 'HW1',
      component: () => import('../views/HW1.vue')
    },
    {
      path: '/HW2',
      name: 'HW2',
      component: () => import('../views/HW2.vue')
    },
    {
      path: '/HW3',
      name: 'HW3',
      component: () => import('../views/HW3.vue')
    },
    {
      path: '/HW4',
      name: 'HW4',
      component: () => import('../views/HW4.vue')
    },
  ]
})

export default router
