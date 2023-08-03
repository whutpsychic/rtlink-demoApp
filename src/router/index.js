import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home/main.vue'
import Login from '../views/Login/main.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/developer',
      name: 'developer',
      component: () => import('../views/Developer/main.vue')
    },
    // ********************************************************************************
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    // ********************************************************************************
    // ************************************ 模板页面 ************************************
    {
      path: '/model-page/doubleColPullRefreshList',
      component: () => import('../model-pages/doubleColPullRefreshList/main.vue')
    },
    {
      path: '/model-page/doubleColPullRefreshListTopSearcher',
      component: () => import('../model-pages/doubleColPullRefreshListTopSearcher/main.vue')
    },
    {
      path: '/model-page/doubleColPullRefreshListTopTab',
      component: () => import('../model-pages/doubleColPullRefreshListTopTab/main.vue')
    },
    {
      path: '/model-page/pullRefreshList',
      component: () => import('../model-pages/pullRefreshList/main.vue')
    },
    {
      path: '/model-page/pullRefreshListTopSearcher',
      component: () => import('../model-pages/pullRefreshListTopSearcher/main.vue')
    },
    {
      path: '/model-page/pullRefreshListTopTab',
      component: () => import('../model-pages/pullRefreshListTopTab/main.vue')
    },
    {
      path: '/model-page/commonForm',
      component: () => import('../model-pages/commonForm/main.vue')
    },
    // ********************************************************************************
    // 默认导向登陆
    {
      path: '/',
      redirect: "/login"
    },
    // 404
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/404/main.vue')
    },
  ]
})

export default router
