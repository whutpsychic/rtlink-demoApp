<template>
  <rtm-app-container title="设备功能" canPop>
    <template #body>
      <van-button class="btn-item" type="primary" block @click="appUpdate">App更新</van-button>
      <van-button class="btn-item" type="primary" block @click="phonecall">拨打电话: 139 8888 8888</van-button>
      <van-button class="btn-item" type="primary" block @click="launchInExplorer">在外部浏览器中打开网页（百度）</van-button>
      <van-button class="btn-item" type="primary" block @click="launchInnerExplorer">在内嵌浏览器中打开网页（腾讯）</van-button>
      <van-button class="btn-item" type="primary" block @click="scanQR">扫描二维码</van-button>
      <van-button class="btn-item" type="primary" block @click="scanBarcode">扫描条形码</van-button>
      <van-button class="btn-item" type="primary" block @click="scan">混合扫描(二维码或者条形码)</van-button>
      <!-- <van-button class="btn-item" type="primary" block @click="androidBattery">Android 获取电池电量</van-button> -->
      <!-- <van-button class="btn-item" type="primary" block @click="androidTost">Android 原生Toast</van-button> -->
      <van-button class="btn-item" type="primary" block @click="checkNetworkType">检查网络连接类型</van-button>
      <van-button class="btn-item" type="primary" block @click="getSafeHeight">获取安全高度</van-button>
      <van-button class="btn-item" type="primary" block @click="setTopbarStyle('dark')">设置设备顶部条为深色风格</van-button>
      <van-button class="btn-item" type="primary" block @click="setTopbarStyle('light')">设置设备顶部条为浅色风格</van-button>
    </template>
  </rtm-app-container>
</template>

<script setup>
import fc from "@/flutter-core";
// import { android } from "flutter-core/platform";

// --------------- data ---------------

// --------------- methods ---------------
const appUpdate = () => {
  fc.appUpdate("http://nxbhyt.cn:8280/exam/app/bhyt.apk");
};
const phonecall = () => {
  fc.phonecall("13988888888");
};
const launchInExplorer = () => {
  fc.launchInExplorer("https://www.baidu.com");
};
const launchInnerExplorer = () => {
  fc.launchInnerExplorer("https://www.tencent.com/zh-cn/");
};
const scanQR = () => {
  fc.scanQR();
};
const scanBarcode = () => {
  fc.scanBarcode();
};
const scan = () => {
  fc.scan();
};
// const androidBattery = () => {
//   android.getBatteryInfo();
// };
// const androidTost = () => {
//   android.toast("Android 原生短提示信息！");
// };

const checkNetworkType = () => {
  fc.checkNetworkType();
};

const getSafeHeight = () => {
  fc.getSafeHeight();
};

const setTopbarStyle = (type) => {
  if (type === "dark") {
    fc.setTopbarStyleToDark();
  } else if (type === "light") {
    fc.setTopbarStyleToLight();
  }
};

// --------------- created ---------------
// 扫码结果
fc.await("scanner", (res) => {
  fc.toast(res);
});

// // 电池电量
// android.await("batteryInfo", (res) => {
//   fc.toast(`电池电量${res}%`);
// });

// 等待网络类型检查结果
fc.await("checkNetworkType", (res) => {
  fc.toast(res);
});

// 安全高度
fc.await("getSafeHeight", (res) => {
  fc.toast(res);
});
</script>

<style scoped>
button {
  margin-bottom: 20px;
}
</style>
