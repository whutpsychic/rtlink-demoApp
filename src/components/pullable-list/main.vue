<template>
  <!-- 两列式渲染 -->
  <van-pull-refresh v-if="doubleCol" v-model="refreshing" @refresh="reloadData" :offset="100">
    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="loadData">
      <div class="doubleCol-mode">
        <slot></slot>
      </div>
    </van-list>
    <!-- 骨架屏 -->
    <van-skeleton v-show="showSkeleton" title :row="3" />
    <van-divider v-show="showSkeleton" />
    <van-skeleton v-show="showSkeleton" title :row="3" />
  </van-pull-refresh>
  <!-- 普通模式渲染 -->
  <van-pull-refresh v-else v-model="refreshing" @refresh="reloadData">
    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="loadData" :offset="100">
      <slot></slot>
    </van-list>
    <!-- 骨架屏 -->
    <van-skeleton v-show="showSkeleton" title :row="3" />
    <van-divider v-show="showSkeleton" />
    <van-skeleton v-show="showSkeleton" title :row="3" />
  </van-pull-refresh>
</template>

<script setup>
// 可下拉刷新的列表组件
// 当下拉时可以触发查询动作
// 当滚动到底部时会触发加载更多动作
import { ref, computed } from "vue"

const props = defineProps({
  // 加载函数，要求是一个异步函数
  load: { type: Function, default: () => { } },
  // 两列式分布
  doubleCol: { type: Boolean, default: false },
})

const emit = defineEmits(['refresh'])

// --------------- data ---------------
const refreshing = ref(false)
const loading = ref(false)
const finished = ref(false)

const showSkeleton = computed(() => {
  return (loading.value || refreshing.value) && (!finished.value)
})
// --------------- lifcycle ---------------

// --------------- methods ---------------
// 初始化加载、下拉刷新
const reloadData = async () => {
  // 复位状态
  finished.value = false
  emit("refresh")
  refreshing.value = false
  loadData()
}

// 正常加载
const loadData = async () => {
  loading.value = true
  await props.load()
  loading.value = false
}

// 加载结束
const finish = () => {
  finished.value = true
}

// ================ 外部暴露 ================
defineExpose({
  finish
})
</script>

