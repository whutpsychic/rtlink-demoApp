import { createRouter, createWebHashHistory } from "vue-router";
import HomeMain from "../views/Home/main.vue";
import Login from "../views/Login/main.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    // 登录
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    // 首页
    {
      path: "/home",
      component: HomeMain,
      children: [
        { path: "main", component: () => import("../views/Home/home/main.vue"), meta: { pageLevel: 1 } },
        { path: "message", component: () => import("../views/Home/message/main.vue"), meta: { pageLevel: 1 } },
        { path: "craft-table", component: () => import("../views/Home/craft-table/main.vue"), meta: { pageLevel: 1 } },
        { path: "mine", component: () => import("../views/Home/mine/main.vue"), meta: { pageLevel: 1 } },
      ],
      meta: { pageLevel: 1 },
    },
    // 电子签章
    {
      path: "/mine/signature", component: () => import("../views/Home/signature/main.vue"), meta: { pageLevel: 2 }
    },
    // 开发者中心
    {
      path: "/developer", component: () => import("../views/Developer/main.vue"), meta: { pageLevel: 2 },
    },
    // 开发者中心 - 模板页
    {
      path: "/developer/model-pages", component: () => import("../views/Developer/model-pages.vue"), meta: { pageLevel: 3 },
    },
    // 开发者中心 - 原生功能
    {
      path: "/developer/native", component: () => import("../views/Developer/native.vue"), meta: { pageLevel: 3 },
    },
    // 开发者中心 - 设备功能
    {
      path: "/developer/device", component: () => import("../views/Developer/device.vue"), meta: { pageLevel: 3 },
    },
    // ********************************************************************************
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue")
    // }
    // ********************************************************************************
    // ************************************ 流程相关 ************************************
    // 创建流程
    {
      path: "/process/create", component: () => import("../views/create-process/main.vue"), meta: { pageLevel: 2 },
    },
    // 待办已办
    {
      path: "/todos-dones", component: () => import("../views/todos-dones/main.vue"), meta: { pageLevel: 2 },
    },
    // 我的请求
    {
      path: "/my-request", component: () => import("../views/my-request/main.vue"), meta: { pageLevel: 2 },
    },
    // 我的传阅
    {
      path: "/pass-perusal", component: () => import("../views/pass-perusal/main.vue"), meta: { pageLevel: 2 },
    },
    // 
    // ************************************ 模板页面 ************************************
    {
      path: "/developer/model-page/doubleColPullRefreshList",
      component: () => import("../model-pages/doubleColPullRefreshList/main.vue"),
      meta: { pageLevel: 4 },
    },
    {
      path: "/developer/model-page/doubleColPullRefreshListTopSearcher",
      component: () => import("../model-pages/doubleColPullRefreshListTopSearcher/main.vue"),
      meta: { pageLevel: 4 },
    },
    {
      path: "/developer/model-page/doubleColPullRefreshListTopTab",
      component: () => import("../model-pages/doubleColPullRefreshListTopTab/main.vue"),
      meta: { pageLevel: 4 },
    },
    {
      path: "/developer/model-page/pullRefreshList",
      component: () => import("../model-pages/pullRefreshList/main.vue"),
      meta: { pageLevel: 4 },
    },
    {
      path: "/developer/model-page/pullRefreshListTopSearcher",
      component: () => import("../model-pages/pullRefreshListTopSearcher/main.vue"),
      meta: { pageLevel: 4 },
    },
    {
      path: "/developer/model-page/pullRefreshListTopTab",
      component: () => import("../model-pages/pullRefreshListTopTab/main.vue"),
      meta: { pageLevel: 4 },
    },
    {
      path: "/developer/model-page/commonForm",
      component: () => import("../model-pages/commonForm/main.vue"),
      meta: { pageLevel: 4 },
    },
    // ********************************************************************************
    // 默认导向登陆
    { path: "/", redirect: "/login" },
    { path: "/home", redirect: "/home/main" },
    // 404
    { path: "/:pathMatch(.*)*", name: "notFound", component: () => import("../views/404/main.vue") },
  ]
});

export default router;
