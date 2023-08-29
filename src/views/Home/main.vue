<template>
  <div>
    <router-view></router-view>
    <!-- 底部导航 -->
    <van-tabbar fixed v-model="active" :before-change="beforeChangeTab" :style="`padding-bottom:${safeBottom}px;`">
      <van-tabbar-item icon="home-o" name="main" to="/home/main">
        <template #icon>
          <rtmicon-home v-if="active === 'main'" :size="24" :gradient-position="['50%', '0%', '50%', '100%']"
            :linear-gradient="[['0%', '#6bd5f8'], ['100%', '#a291ea']]" />
          <rtmicon-home v-else :size="24" color="#aab7ca" />
        </template>
        首页
      </van-tabbar-item>
      <van-tabbar-item :badge="calcUnreadNumber()" icon="search" name="message" to="/home/message">
        <template #icon>
          <rtmicon-message v-if="active === 'message'" :size="24" :gradient-position="['50%', '0%', '50%', '100%']"
            :linear-gradient="[['0%', '#6bd5f8'], ['100%', '#a291ea']]" />
          <rtmicon-message v-else :size="24" color="#aab7ca" />
        </template>
        消息
      </van-tabbar-item>
      <van-tabbar-item v-if="withCreateProcessBtn" name="create-process" to="/home/create-process">
        <template #icon>
          <AddIcon @click="onAddProcess" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o" name="craft-table" to="/home/craft-table">
        <template #icon>
          <rtmicon-craft-table v-if="active === 'craft-table'" :size="24"
            :gradient-position="['50%', '0%', '50%', '100%']"
            :linear-gradient="[['0%', '#6bd5f8'], ['100%', '#a291ea']]" />
          <rtmicon-craft-table v-else :size="24" color="#aab7ca" />
        </template>
        工作台
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o" name="mine" to="/home/mine">
        <template #icon>
          <rtmicon-mine v-if="active === 'mine'" :size="24" :gradient-position="['50%', '0%', '50%', '100%']"
            :linear-gradient="[['0%', '#6bd5f8'], ['100%', '#a291ea']]" />
          <rtmicon-mine v-else :size="24" color="#aab7ca" />
        </template>
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import AddIcon from "./com/add-icon.vue";
import api from "@/api/home";
import { withCreateProcessBtn } from "@/appConfig.js";

const router = useRouter();
const route = useRoute();
const store = useStore();
// --------------- data ---------------
const safeBottom = ref(0);
const active = ref("main");
const unreadnum = ref(0);

// --------------- methods ---------------

const beforeChangeTab = (index) => {
  // 点击“添加流程”只触发动作，不进行跳转
  if (index === "create-process") {
    // 添加流程触发的动作
    console.log("创建流程")
    router.push("/process/create");
    return false;
  }
  else {
    return true;
  }
};

const onAddProcess = () => {
  console.log(" ---------------- onAddProcess ")
};

// 路由显示修正
const routerFixedup = () => {
  const path = route.fullPath;

  const isTab1 = path.indexOf("/main") > -1;
  const isTab2 = path.indexOf("/message") > -1;
  const isTab4 = path.indexOf("/craft-table") > -1;
  const isTab5 = path.indexOf("/mine") > -1;

  if (isTab1) {
    active.value = "main";
  } else if (isTab2) {
    active.value = "message";
  } else if (isTab4) {
    active.value = "craft-table";
  } else if (isTab5) {
    active.value = "mine";
  }
};

const calcUnreadNumber = () => {
  const { value } = unreadnum;
  if (value > 0 && value <= 99) {
    return value;
  }
  else if (value > 99) {
    return "99+";
  }
  return undefined;
};

// -------------------- created --------------------
try {
  const { safeHeights } = store.state;
  safeBottom.value = safeHeights[1];
} catch (err) {
  console.error(err);
}


routerFixedup();
// 获取未读消息数量
api.getUnreadMsgNumber().then((res) => {
  unreadnum.value = res;
});

</script>

<style lang="scss" scoped></style>