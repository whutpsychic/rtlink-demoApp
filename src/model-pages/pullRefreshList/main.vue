<template>
  <rtm-app-container title="一般下拉刷新列表" canPop>
    <rtm-list ref="list" :load="loadData" :empty="items.length === 0" @refresh="refresh">
      <Item v-for="(it, i) in items" :key="i" :data="it" />
    </rtm-list>
  </rtm-app-container>
</template>

<script setup>
import { ref } from "vue";
import Item from "./item/main.vue";
import api from "./api";

// --------------- data ---------------
const items = ref([]);
const list = ref(null);
const page = ref(1);
// --------------- methods ---------------

// 正常加载
const loadData = async () => {
  let res = await api.getList(page.value);
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

//
const onClickItem = (item) => {
  console.log(item)
};

</script>

<style lang="scss" scoped></style>
