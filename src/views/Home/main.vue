<template>
  <rtm-app-container :title="'首页'" :moreActions="actions" @action="onAction">
    <template #body>
      <div class="home">home</div>
      <van-button type="primary">首页</van-button>
      <van-button type="primary">列表1</van-button>
      <van-button type="primary">列表2</van-button>
      <van-button type="primary">我的</van-button>
      <van-button type="primary" @click="navto('developer')">开发者中心</van-button>
      <van-radio-group v-model="style" @change="onChange">
        <van-radio name="light">浅色风格（默认）</van-radio>
        <van-radio name="dark">深色风格</van-radio>
      </van-radio-group>
    </template>
  </rtm-app-container>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
// --------------- data ---------------
const style = ref(store.state.style)

const actions = ref([
  { text: "搜索", icon: "search" },
  { text: "扫一扫", icon: "qr" },
])

// --------------- methods ---------------
const onAction = (text, index) => {
  console.log(text, index)
}

const onChange = (v) => {
  console.log(v)
  store.commit('changeStyle', v)
}

const navto = (name) => {
  router.push(name)
}




</script>