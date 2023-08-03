<template>
  <div class="rtm-top-searcher">
    <van-search :class="searching ? `searcher searching` : `searcher`" v-model="content" shape="round"
      :placeholder="placeholder" @update:model-value="onChangeValue" @focus="onFocus"
      :show-action="searching ? true : false" @cancel="onCancel" @clear="content = ''" />
    <!-- 搜索时的展示内容 -->
    <van-overlay :show="searching" class="overlay" duration="0.1">
      <div class="wrapper">
        <ul v-if="!(predictions.length > 0)">
          <li class="title">
            <p>历史搜索</p>
          </li>
          <li class="item" v-for="(h, i) in chistory" :key="i" @click="onSearchItem(h)">{{ h }}</li>
        </ul>
        <history-item v-for="(it, i) in predictions" :key="i" :label="it.text" :type="it.type"
          @click="onSearchItem"></history-item>
      </div>
    </van-overlay>
  </div>
</template>

<script setup>
// 这是一个通用的顶部搜索栏组件
// 常用于数据项展示页顶部用于根据索引名快速定位想要查找的数据
import { ref, computed } from 'vue'
import historyItem from "./historyItem.vue"

const props = defineProps({
  // placeholder
  placeholder: { type: String, defualt: "" },
  // 预判的将要查找的结果
  predictions: { type: Array, default: () => ([]) },
  // 历史搜索项
  history: { type: Array, default: () => ([]) },
})

const emit = defineEmits(['change', 'search'])

// --------------- data ---------------
// 正在搜索
const searching = ref(false)
const content = ref("")
const clientHistory = ref([])

// 渲染历史搜索项的实际数据源
const chistory = computed(() => {
  return Array.from(new Set([...clientHistory.value, ...props.history]))
})
// --------------- lifcycle ---------------

// --------------- methods ---------------
const onFocus = () => {
  searching.value = true
}

const onCancel = () => {
  searching.value = false
}

const onChangeValue = (text) => {
  emit("change", text)
}

const onSearchItem = (text) => {
  content.value = text
  searching.value = false
  emit("search", text)
  clientHistory.value = Array.from(new Set([text, ...clientHistory.value]))
}

</script>

<style lang="scss" scoped>
.rtm-top-searcher {
  overflow: hidden;

  .wrapper {
    padding-right: 12px;
    margin-top: 50px;

    ul {
      padding-top: 12px;
      margin-left: 12px;
      display: flex;
      flex-wrap: wrap;

      li.title {
        flex-basis: 100%;

        p {
          margin-top: 0;
          margin-bottom: 0.8em;
        }
      }

      li.item {
        font-size: 14px;
        height: 14px;
        line-height: 14px;
        margin-right: 0.5em;
        margin-bottom: 0.8em;
        padding: 6px 10px;
        background-color: #eee;
        border-radius: 14px;
      }
    }
  }

  .searcher {
    position: relative;
  }

  .searcher.searching {
    position: absolute;
    width: calc(100% - 12px);
    z-index: 3000;
    top: 4px;
  }
}

.overlay {
  background-color: white;
}
</style>
