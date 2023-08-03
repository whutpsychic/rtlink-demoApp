<template>
  <rtm-list ref="list" :load="loadData" :empty="items.length === 0" @refresh="refresh">
    <Item v-for="(it, i) in items" :key="i" :title="it.title" :content="it.content" :date="it.date" />
  </rtm-list>
</template>

<script setup>
import { ref } from 'vue'

import Item from "./item/main.vue"
import api from "../api"

// --------------- data ---------------
const items = ref([])
const list = ref(null)
// --------------- methods ---------------

// 正常加载
const loadData = async () => {
  let res = await api.getItems(8)
  console.log(res)

  if (res && res.length > 0) {
    items.value = [...items.value, ...res]
  } else {
    list.value.finish()
  }
}

// 复位状态  
const refresh = () => {
  this.items = []
}

</script>

<style lang="scss" scoped></style>
