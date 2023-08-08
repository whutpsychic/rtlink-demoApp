<template>
  <main>
    <div class="login">
      <h1>登录页</h1>
      <p>此页面尚未经过设计</p>
    </div>
    <van-button type="primary" @click="login">转到主页</van-button>
  </main>
</template>

<script>
import { useRouter, useRoute } from "vue-router"

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    const login = (query) => {
      router.replace({
        path: 'home',
        query: {
          ...route.query,
          ...query,
        },
      })
    }

    return {
      login
    }
  },
}

</script>