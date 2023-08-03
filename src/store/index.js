import { createStore } from 'vuex'
import { style } from "../appConfig.js"

// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      // 默认风格
      style: style
    }
  },
  // 
  mutations: {
    // 切换风格
    changeStyle(state, style) {
      state.style = style
    }
  }
})


export default store