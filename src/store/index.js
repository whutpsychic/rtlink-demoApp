import { createStore } from 'vuex'
import { style } from "../appConfig.js"

// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      // 默认风格
      style: style,
      // 当前页面等级(路由跳转动效时用)
      pageLevel: 1,
      // 正在进行网络连接请求
      loading: false,
      // 当前用户的网络请求 token 
      currentUser: {},
    }
  },
  // 
  mutations: {
    // 切换风格
    changeStyle(state, style) {
      state.style = style
    },
    // 记录当前页面等级(路由跳转动效时用)
    markPageLevel(state, lvl) {
      state.pageLevel = lvl
    },
    // 切换加载状态
    markLoading(state, status) {
      state.loading = status
    },
    // 记录当前用户 token
    recordUser(state, userInfo) {
      state.currentUser = userInfo
    },
    // 
    clearUser(state) {
      state.currentUser = {}
    }
  }
})


export default store