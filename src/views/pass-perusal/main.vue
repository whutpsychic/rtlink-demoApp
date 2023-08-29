<template>
  <rtm-app-container title="我的传阅" canPop>
    <rtm-top-searcher ref="searcher" placeholder="搜索" :history="searchHistory" :predictions="predictions"
      @search="onSearch" />
    <van-tabs v-model:active="active" @change="onChangeTab">
      <van-tab title="传阅事项">
        <tab1 ref="tabc1" />
      </van-tab>
      <van-tab title="我传阅的">
        <tab2 ref="tabc2" />
      </van-tab>
    </van-tabs>
  </rtm-app-container>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import tab1 from "./tab-contents/tab1.vue";
import tab2 from "./tab-contents/tab2.vue";

const route = useRoute();
const active = ref(0);

const searcher = ref(null);
const tabc1 = ref(null);
const tabc2 = ref(null);

// --------------- data ---------------
const predictions = ref([]);
const searchHistory = ref([]);

// --------------- methods ---------------

const onChangeTab = (x) => {
  searcher.value.reset();
  if (tabc1.value && tabc1.value.resetSearchText) {
    tabc1.value.resetSearchText();
  }
  if (tabc2.value && tabc2.value.resetSearchText) {
    tabc2.value.resetSearchText();
  }
};

const onSearch = (text) => {
  if (active.value === 0) {
    tabc1.value.query(text);
  } else if (active.value === 1) {
    tabc2.value.query(text);
  }
};

// --------------- created ---------------
active.value = parseInt(route.query.tag);

</script>

<style lang="scss" scoped></style>
