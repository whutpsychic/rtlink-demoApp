<template>
  <rtm-app-container title="一般两列式下拉刷新列表" canPop>
    <rtm-list ref="list" doubleCol :load="loadData" :empty="items.length === 0" @refresh="refresh">
      <Item v-for="(it, i) in items" :key="i" :title="it.title" :content="it.content" :date="it.date" />
    </rtm-list>
  </rtm-app-container>
</template>

<script setup>
import { ref } from "vue"
import Item from "./item/main.vue"
import api from "./api"

// --------------- data ---------------
const items = ref([])
const list = ref(null)
// --------------- lifcycle ---------------

// --------------- methods ---------------
// 复位状态  
const refresh = () => {
  items.value = []
}

// 正常加载
const loadData = async () => {
  let res = await api.getItems()
  if (res && res.length > 0) {
    items.value = [...items.value, ...res]
  } else {
    list.value.finish()
  }
}
</script>

<style lang="scss" scoped></style>
