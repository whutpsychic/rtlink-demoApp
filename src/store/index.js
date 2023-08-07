import { createStore } from 'vuex'
import { style } from "../appConfig.js"

// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      // 默认风格
      style: style,
      // 当前页面等级
      pageLevel: 1,
    }
  },
  // 
  mutations: {
    // 切换风格
    changeStyle(state, style) {
      state.style = style
    },
    // 记录当前页面等级
    markPageLevel(state, lvl) {
      state.pageLevel = lvl
    },
  }
})


export default store