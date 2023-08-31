<template>
  <rtm-app-container title="权限请求" canPop>
    <template #body>
      <van-button class="btn-item" type="primary" block @click="getCamera">请求照相机/摄像头权限</van-button>
      <van-button class="btn-item" type="primary" block @click="getStorage">请求读写数据权限</van-button>
      <van-button class="btn-item" type="primary" block @click="openAppSettings">打开 App 权限设置</van-button>
    </template>
  </rtm-app-container>
</template>

<script setup>
import { onUnmounted } from "vue";
import fc from "@/flutter-core/index";
import fp from "@/flutter-core/permissions.js";

const getCamera = () => {
  fp.request("camera");
}
const getStorage = () => {
  fp.request("storage");
};
const openAppSettings = () => {
  fp.openAppSettings();
};

// -------------- created --------------
// 注册权限请求之后的动作函数
fp.await("camera", (res) => {
  if (res === fp.status.denied) {
    fc.toast("需要申请")
  } else if (res === fp.status.permanentlyDenied) {
    fc.toast("您申请的权限已被禁止，您需要在系统设置中设置此应用的权限")
  }
  else if (res === fp.status.granted) {
    fc.toast("您申请的权限已获批准")
  }
});

// 模态确认询问时等待回馈，需要注册此函数
fp.await("storage", (res) => {
  fc.toast(res)
});

onUnmounted(() => {
  // 退出页面后卸载这些页面内注册的监听函数
  fp.uninstall("camera");
  fp.uninstall("storage");
});
</script>

<style scoped>
button {
  margin-bottom: 20px;
}
</style>
