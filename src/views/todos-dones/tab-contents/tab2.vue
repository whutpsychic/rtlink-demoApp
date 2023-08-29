<template>
  <rtm-list ref="list" :load="loadData" :empty="items.length === 0" @refresh="refresh">
    <Item v-for="(it, i) in items" :key="i" :data="it" @click="onClickItem(it)" />
  </rtm-list>
</template>

<script setup>
import { ref } from "vue";
import { showFailToast, showNotify } from "vant";
import Item from "./done-item/main.vue";
import api from "../api";

// --------------- data ---------------
const items = ref([]);
const list = ref(null);
const page = ref(1);
const searchText = ref("");
// --------------- methods ---------------
// 正常加载
const loadData = async () => {
  let res = await api.getDones(page.value);
  if (res && res.length > 0) {
    // 挨个查询，只为得到一个 nodeName
    const pArr = [];
    res.forEach((it) => {
      pArr.push(api.getMoreInfoById(it.id));
    });

    Promise.all(pArr).then((varr) => {
      varr.forEach((item, i) => {
        res[i].nodeName = item.nodeName;
      });
      items.value = [...items.value, ...res];
    });

    page.value++;
  } else {
    list.value.finish();
  }
};

// 复位状态  
const refresh = () => {
  page.value = 1;
  items.value = [];
};

// 带条件查询
const query = (text) => {
  searchText.value = text;
  list.value.reloadData();
};

// 重置查询条件
const resetSearchText = () => {
  searchText.value = "";
};

//
const onClickItem = (item) => {
  // showNotify({ type: "danger", message: "此流程未设置全局手机表单" });
  showFailToast("此功能尚未开发");
};

// ================ 外部暴露 ================
defineExpose({
  query, resetSearchText
});
</script>

<style lang="scss" scoped></style>
