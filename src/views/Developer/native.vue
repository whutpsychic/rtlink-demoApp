<template>
  <rtm-app-container title="原生功能" canPop>
    <template #body>
      <van-button class="btn-item" type="primary" block @click="toast">Toast 短提示</van-button>
      <van-button class="btn-item" type="primary" block @click="modalTips">模态提示</van-button>
      <van-button class="btn-item" type="primary" block @click="modalConfirm">模态确认询问</van-button>
      <van-button class="btn-item" type="primary" block @click="modalLoading">模态加载中</van-button>
      <van-button class="btn-item" type="primary" block @click="modalProgress">模态进度条</van-button>
      <van-button class="btn-item" type="primary" block @click="writeLocalData">写入本地缓存数据</van-button>
      <van-button class="btn-item" type="primary" block @click="readLocalData">读取本地缓存数据</van-button>
      <van-button class="btn-item" type="primary" block @click="ipconfig">ip 设置</van-button>
    </template>
  </rtm-app-container>
</template>

<script setup>
import { onUnmounted } from "vue";
import fc from "@/flutter-core";
// --------------- data ---------------

// --------------- methods ---------------
const toast = () => {
  fc.toast("这是一则短提示消息！");
};
const modalTips = () => {
  fc.modalTips("标题", "这是一则重要提示！");
};
const modalConfirm = () => {
  fc.modalConfirm("标题", "您确定要这样做吗？");
};
const modalLoading = () => {
  fc.modalLoading("加载中...");
  setTimeout(() => { fc.done() }, 3000);
};
const modalProgress = () => {
  fc.modalProgress("正在处理...");
  setTimeout(() => { fc.modalProgressAdd(0.2) }, 1000);
  setTimeout(() => { fc.modalProgressAdd(0.2) }, 2000);
  setTimeout(() => { fc.modalProgressAdd(0.2) }, 3000);
  setTimeout(() => { fc.modalProgressAdd(0.2) }, 4000);
  setTimeout(() => { fc.modalProgressAdd(0.2) }, 5000);
  setTimeout(() => { fc.done() }, 6000);
};
const writeLocalData = () => {
  fc.recordLocal("hell", "xxxxx");
};
const readLocalData = () => {
  fc.readLocal("hell");
};
const ipconfig = () => {
  fc.ipconfig();
};

// --------------- created ---------------
// 如果需要在提示时暂停并且等待回馈，那么需要注册此函数
fc.await("modalTips", (res) => {
  fc.toast(res);
});
// 模态确认询问时等待回馈，需要注册此函数
fc.await("modalConfirm", (res) => {
  fc.toast(res);
});
// 读取数据
fc.await("readLocal", (res) => {
  fc.toast(res);
});

onUnmounted(() => {
  // 退出页面后卸载这些页面内注册的回馈监听函数
  fc.uninstall("modalTips");
  fc.uninstall("modalConfirm");
});
</script>

<style scoped>
button {
  margin-bottom: 20px;
}
</style>
