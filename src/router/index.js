import { createRouter, createWebHashHistory } from 'vue-router'
import HomeMain from '../views/Home/main.vue'
import Login from '../views/Login/main.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    // 首页
    {
      path: '/:name',
      component: HomeMain,
      children: [
        { path: 'main', component: () => import('../views/Home/home.vue'), meta: { pageLevel: 1 }, },
        { path: 'message', component: () => import('../views/Home/message.vue') },
        { path: 'craft-table', component: () => import('../views/Home/craft-table.vue') },
        { path: 'mine', component: () => import('../views/Home/mine.vue') },
      ],
      meta: { pageLevel: 1 },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/developer',
      name: 'developer',
      component: () => import('../views/Developer/main.vue'),
      meta: { pageLevel: 2 },
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
    // ************************************ 流程相关 ************************************
    // 创建流程
    {
      path: '/process/create',
      component: () => import('../views/CreateProcess/main.vue'),
      meta: { pageLevel: 3 },
    },
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
    {
      path: '/home',
      redirect: "/home/main"
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
