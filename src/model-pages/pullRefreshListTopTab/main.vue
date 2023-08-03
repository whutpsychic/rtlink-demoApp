<template>
  <rtm-app-container title="带顶部tab的下拉刷新页面" canPop>
    <rtm-top-searcher placeholder="搜索" :history="searchHistory" :predictions="predictions" @change="onChange"
      @search="onSearch" />
    <van-tabs>
      <van-tab title="标签1">
        <tab1 />
      </van-tab>
      <van-tab title="标签2">
        <tab2 />
      </van-tab>
      <van-tab title="标签3">
        <tab3 />
      </van-tab>
      <van-tab title="标签4">
        <tab4 />
      </van-tab>
      <van-tab title="标签5">
        <tab5 />
      </van-tab>
      <van-tab title="标签6">
        <tab6 />
      </van-tab>
      <van-tab title="标签7">
        <tab7 />
      </van-tab>
      <van-tab title="标签8">
        <tab8 />
      </van-tab>
    </van-tabs>
  </rtm-app-container>
</template>

<script setup>
import { ref } from 'vue'

import tab1 from "./tab-contents/tab1.vue"
import tab2 from "./tab-contents/tab2.vue"
import tab3 from "./tab-contents/tab3.vue"
import tab4 from "./tab-contents/tab4.vue"
import tab5 from "./tab-contents/tab5.vue"
import tab6 from "./tab-contents/tab6.vue"
import tab7 from "./tab-contents/tab7.vue"
import tab8 from "./tab-contents/tab8.vue"

// --------------- data ---------------
const predictions = ref([])
const searchHistory = ref(["无量寿佛经书", "嘻哈风", "四成弦和豆腐坊", "天地无极万里追踪", "西天", "王总", "小蔡", "老毕"])

// --------------- methods ---------------

const onChange = (x) => {
  const arr = x.split("").map((item, i) => {
    return { text: item, type: (i % 2) > 0 ? "hot" : "last" }
  })
  predictions.value = arr
}

const onSearch = (text) => {
  console.log(text)
}

</script>

<style lang="scss" scoped></style>
