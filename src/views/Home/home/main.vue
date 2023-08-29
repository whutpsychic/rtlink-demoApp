<template>
  <rtm-app-container class="home" :title="'首页'">
    <div class="rtm-app-body">
      <div class="top-text">
        <p>欢迎使用瑞太 EIP ！</p>
        <p>您好，{{ username }} 祝您开心每一天！</p>
        <div class="developer-btn-can">
          <van-button v-if="developing" class="developer-btn" @click="navto('/developer')">开发者中心</van-button>
        </div>
      </div>
      <div class="menu-content">
        <menu-item name="我的待办" :number="todoNum" @click="navto('/todos-dones', { tag: 0 })">
          <rtmicon-todo color="#6acaf8" />
        </menu-item>
        <menu-item name="我的请求" :number="requestNum" @click="navto('/my-request')">
          <rtmicon-request color="#6acaf8" />
        </menu-item>
        <menu-item name="我的已办" :number="doneNum" @click="navto('/todos-dones', { tag: 1 })">
          <rtmicon-done color="#6acaf8" />
        </menu-item>
        <menu-item name="我的传阅" :number="readNum" @click="navto('/pass-perusal')">
          <rtmicon-pass-perusal color="#6acaf8" />
        </menu-item>
      </div>
    </div>
  </rtm-app-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { showLoadingToast, closeToast } from "vant";
import MenuItem from "../com/menu-item.vue";
import { developing } from "@/appConfig.js";
import api from "@/api-demo/home";

const router = useRouter();

// --------------- data ---------------
const todoNum = ref(0);
const requestNum = ref(0);
const doneNum = ref(0);
const readNum = ref(0);

const username = ref("");

// --------------- lifeCycle ---------------
onMounted(() => {
  // // 获取额外内容
  // api.getMobileHome().then((list) => {
  // })
});
// --------------- methods ---------------
const navto = (path, params) => {
  const query = params ? params : {};
  router.push({ path: path, query });
};

// --------------- created ---------------
// 获取当前用户流程中心的信息
showLoadingToast({
  message: '加载中...',
  duration: 0,
  forbidClick: true,
});

api.getDefaultInfoMap().then((res) => {
  const { myTaks, myRequest, myAlready, myNoticeRead, user } = res;

  todoNum.value = myTaks.dataText;
  requestNum.value = myRequest.dataText;
  doneNum.value = myAlready.dataText;
  readNum.value = myNoticeRead.dataText;

  username.value = user.fullname;
}).finally(() => {
  closeToast();
});

</script>

<style lang="scss" scoped>
.rtm-app-body {
  padding: 10px;
  background-image: url('@/assets/img/main-home-bg.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: var();
}

.top-text {
  padding: 20px;

  p {
    margin-bottom: 1em;
  }
}

.menu-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 120px;
}

.developer-btn-can {
  height: 40px;
  margin-top: 40px;
}
</style>