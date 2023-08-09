<template>
  <main>
    <div class="login">
      <h1>登录页</h1>
      <p>此页面尚未经过设计</p>
    </div>
    <van-button type="primary" @click="login">转到主页</van-button>
  </main>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router"
import api from "@/api/login.js"

const router = useRouter()
const route = useRoute()

const loginInfo = {
  account: "admin",
  password: "123456",
  tenantId: "",
}

const login = () => {
  api.login(loginInfo).then((success) => {
    // 前往主页
    if (success) {
      router.replace({
        path: 'home'
      })
    }
  })
}


</script>