<template>
  <rtm-app-container :title="'工作台'">
    <div class="rtm-app-body">
      <van-tabs class="menus-tab" v-model:active="activeName">
        <van-tab v-for="(tab) in tabs" :key="tab.typeName" :title="tab.typeName" :name="tab.typeName">
          <van-grid class="menus" clickable :column-num="3" gutter="12">
            <van-grid-item v-for="(item) in tab.appList" :key="item.id" class="craft-table-nav-item" :to="item.content">
              <nav-item :icon="item.icon" :text="item.name" />
            </van-grid-item>
          </van-grid>
        </van-tab>
      </van-tabs>
    </div>
  </rtm-app-container>
</template>

<script setup>
import { ref } from "vue";
import { showLoadingToast, closeToast } from "vant";
import navItem from "../com/nav-item.vue";
import api from "@/api/home";

const activeName = ref("defaultGroup");
const tabs = ref([]);

const loadMenu = () => {
  showLoadingToast({
    message: '请稍候...',
    duration: 0,
    forbidClick: true,
  });
  api.getMenu().then((res) => {
    activeName.value = res[0].typeName;
    tabs.value = res;
  }).finally(() => {
    closeToast();
  })
};

// ---------------------- created ----------------------
loadMenu();

</script>

<style lang="scss" scoped>
.menus {
  margin-top: 10px;
}
</style>