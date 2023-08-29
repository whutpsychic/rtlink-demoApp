<template>
  <rtm-app-container title="消息">
    <rtm-top-searcher placeholder="搜索" :history="searchHistory" :predictions="predictions" @change="onChange"
      @search="onSearch" />
    <rtm-list ref="list" :load="loadData" :empty="items.length === 0" @refresh="refresh">
      <Item v-for="(it, i) in items" :key="i" :data="it" :read="!!it.receiveTime" @click="onExecute(it)" />
    </rtm-list>
  </rtm-app-container>
</template>

<script setup>
import { ref } from "vue";
import { showDialog, showLoadingToast, closeToast } from "vant";
import Item from "./item/main.vue";
import api from "./api";

// --------------- data ---------------
const items = ref([]);
const list = ref(null);
const page = ref(1);
const searchText = ref("");

// 搜索历史
const searchHistory = ref([]);
// 预判的可能搜索项
const predictions = ref([]);
// --------------- lifcycle ---------------

// --------------- methods ---------------
const onChange = (x) => {
};

const onSearch = (text) => {
  searchText.value = text;
  list.value.reloadData();
};

// 复位状态  
const refresh = () => {
  page.value = 1;
  items.value = [];
};

// 正常加载
const loadData = async () => {
  const _searchText = searchText.value;
  let res = await api.getItems(page.value, _searchText);
  if (res && res.length > 0) {
    items.value = [...items.value, ...res];
  } else {
    list.value.finish();
  }
  page.value++;
};

// 点击处理
const onExecute = (item) => {
  showLoadingToast({
    message: '请稍后...',
    forbidClick: true,
    duration: 0
  });
  api.executeItem(item.id).then((res) => {
    showDialog({
      allowHtml: true,
      title: res.subject,
      message: res.content
    });
  }).finally(() => {
    closeToast();
  });
};
</script>

<style lang="scss" scoped></style>
