<template>
  <main>
    <div class="login">login</div>
    <van-button type="primary" @click="login">登陆跳转到主页</van-button>
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