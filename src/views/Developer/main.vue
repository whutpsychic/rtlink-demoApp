<template>
  <rtm-app-container title="开发者中心" canPop>
    <template #body>
      <van-button type="primary" block @click="navto('model-pages')">模板页面</van-button>
      <van-button type="primary" block @click="navto('native')">原生功能</van-button>
      <van-button type="primary" block @click="navto('device')">设备功能</van-button>
    </template>
  </rtm-app-container>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
// --------------- data ---------------

// --------------- methods ---------------
const navto = (name) => {
  router.push(`developer/${name}`);
};

</script>

<style scoped>
button {
  margin-bottom: 20px;
}
</style>
