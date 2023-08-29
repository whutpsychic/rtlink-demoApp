<template>
  <rtm-list ref="list" doubleCol :load="loadData" :empty="items.length === 0" @refresh="refresh">
    <Item v-for="(it, i) in items" :key="i" :data="it" @click="onClickItem(it)" />
  </rtm-list>
</template>

<script setup>
import { ref } from "vue";
import Item from "./item/main.vue";
import api from "../api";

// --------------- data ---------------
const items = ref([]);
const list = ref(null);
const page = ref(1);
const searchText = ref("");
// --------------- methods ---------------

// 正常加载
const loadData = async () => {
  let res = await api.getList(page.value, searchText.value);
  if (res && res.length > 0) {
    items.value = [...items.value, ...res];
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

//
const onClickItem = (item) => {
  console.log(item)
};

// ================ 外部暴露 ================
defineExpose({
  query
});
</script>

<style lang="scss" scoped></style>
