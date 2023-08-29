<template>
  <rtm-app-container title="带顶部搜索栏的两列式下拉刷新列表" canPop>
    <rtm-top-searcher placeholder="搜索" :history="searchHistory" :predictions="predictions" @change="onChange"
      @search="onSearch" />
    <rtm-list ref="list" doubleCol :load="loadData" :empty="items.length === 0" @refresh="refresh">
      <Item v-for="(it, i) in items" :key="i" :data="it" />
    </rtm-list>
  </rtm-app-container>
</template>

<script setup>
import { ref } from "vue";
import Item from "./item/main.vue";
import api from "./api";

// --------------- data ---------------
const predictions = ref([]);
const searchHistory = ref(["无量寿佛经书", "嘻哈风", "四成弦和豆腐坊", "天地无极万里追踪", "西天", "王总", "小蔡", "老毕"]);
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

//
const onChange = (x) => {
  const arr = x.split("").map((item, i) => {
    return { text: item, type: (i % 2) > 0 ? "hot" : "last" };
  });
  predictions.value = arr;
};

//
const onClickItem = (item) => {
  console.log(item)
};

//
const onSearch = (text) => {
  searchText.value = text;
  list.value.reloadData();
};

</script>

<style lang="scss" scoped></style>
