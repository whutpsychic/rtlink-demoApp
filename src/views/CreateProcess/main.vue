<template>
  <rtm-app-container title="创建流程" canPop>
    <template #body>
      chaungjianliucheng
    </template>
  </rtm-app-container>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
// --------------- data ---------------

// --------------- methods ---------------
const navto = (name) => {
  router.push(`model-page/${name}`)
}

</script>

<style scoped>
button {
  margin-bottom: 20px;
}
</style>
