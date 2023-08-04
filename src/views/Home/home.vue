<template>
  <rtm-app-container class="home" :title="'首页'">
    <template #body>
      <div class="top-text">
        <p>欢迎使用瑞太 EIP ！</p>
        <p>您好，超级管理员祝您开心每一天！</p>
      </div>
      <van-button class="developer-btn" @click="navto('developer')">开发者中心</van-button>
      <div class="menu-content">
        <MenuItem name="我的待办" :number="todoNum" />
        <MenuItem name="我的请求" :number="requestNum" />
        <MenuItem name="我的已办" :number="doneNum" />
        <MenuItem name="我的传阅" :number="readNum" />
      </div>
    </template>
  </rtm-app-container>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import MenuItem from "./com/menu-item.vue"

const router = useRouter()

// --------------- data ---------------
const todoNum = ref(0)
const requestNum = ref(0)
const doneNum = ref(0)
const readNum = ref(0)

// --------------- methods ---------------
const navto = (path) => {
  router.push(`/${path}`)
}

</script>

<style lang="scss" scoped>
.top-text p {
  margin-bottom: 1em;
}

.menu-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 100px;
}
</style>