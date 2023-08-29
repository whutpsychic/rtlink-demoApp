<template>
  <rtm-app-container title="模板页面" canPop>
    <template #body>
      <van-button type="primary" block @click="navto('pullRefreshList')">一般下拉刷新列表</van-button>
      <van-button type="primary" block @click="navto('pullRefreshListTopSearcher')">带顶部搜索栏的下拉刷新列表</van-button>
      <van-button type="primary" block @click="navto('pullRefreshListTopTab')">带顶部tab的下拉刷新页面</van-button>
      <van-button type="primary" block @click="navto('doubleColPullRefreshList')">两列式下拉刷新列表</van-button>
      <van-button type="primary" block @click="navto('doubleColPullRefreshListTopSearcher')">带顶部搜索栏的两列式下拉刷新列表</van-button>
      <van-button type="primary" block @click="navto('doubleColPullRefreshListTopTab')">带顶部tab的两列式下拉刷新页面</van-button>
      <van-button type="primary" block @click="navto('commonForm')">表单页</van-button>
  
    </template>
  </rtm-app-container>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
// --------------- data ---------------

// --------------- methods ---------------
const navto = (name) => {
  router.push(`model-page/${name}`);
};

</script>

<style scoped>
button {
  margin-bottom: 20px;
}
</style>
