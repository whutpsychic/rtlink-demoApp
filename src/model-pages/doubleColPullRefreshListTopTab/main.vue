<template>
  <rtm-app-container title="带顶部tab的下拉刷新列表" canPop>
    <rtm-top-searcher placeholder="搜索" :history="searchHistory" :predictions="predictions" @change="onChange"
      @search="onSearch" />
    <van-tabs v-model:active="active">
      <van-tab title="tab1">
        <tab1 ref="tabc1" />
      </van-tab>
      <van-tab title="tab2">
        <tab2 ref="tabc2" />
      </van-tab>
    </van-tabs>
  </rtm-app-container>
</template>

<script setup>
import { ref } from "vue";
import tab1 from "./tab-contents/tab1.vue";
import tab2 from "./tab-contents/tab2.vue";

const active = ref(0);

const tabc1 = ref(null);
const tabc2 = ref(null);

// --------------- data ---------------
const predictions = ref([]);
const searchHistory = ref(["无量寿佛经书", "嘻哈风", "四成弦和豆腐坊", "天地无极万里追踪", "西天", "王总", "小蔡", "老毕"]);

// --------------- methods ---------------

const onChange = (x) => {
};

const onSearch = (text) => {
  if (active.value === 0) {
    tabc1.value.query(text);
  } else if (active.value === 1) {
    tabc2.value.query(text);
  }
};

// --------------- created ---------------

</script>

<style lang="scss" scoped></style>
