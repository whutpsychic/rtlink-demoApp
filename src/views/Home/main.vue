<template>
  <router-view></router-view>
  <!-- 底部导航 -->
  <van-tabbar fixed v-model="active" :before-change="beforeChangeTab">
    <van-tabbar-item icon="home-o" to="/home/main">首页</van-tabbar-item>
    <van-tabbar-item icon="search" to="/home/message">消息</van-tabbar-item>
    <van-tabbar-item to="/home/create-process">
      <template #icon>
        <AddIcon />
      </template>
    </van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/home/craft-table">工作台</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="/home/mine">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from 'vue';
import AddIcon from "./com/add-icon.vue"

// --------------- data ---------------
const active = ref(0);

// --------------- methods ---------------

const beforeChangeTab = (index) => {
  console.log(index)
  // 点击“添加流程”只触发动作，不进行跳转
  if (index === 2) {
    // 添加流程触发的动作
    console.log("触发动作")
    return false
  }
  else {
    return true
  }
}

</script>

<style lang="scss" scoped></style>