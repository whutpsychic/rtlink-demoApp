<template>
  <div class="rtm-app-container">
    <van-nav-bar v-if="title || $titleSlots > 0" :title="title" :left-arrow="canPop ? true : false" @click-left="backup">
      <template #title v-if="$titleSlots > 0">
        <slot name="title"></slot>
      </template>
      <template #right>
        <slot name="top-right"></slot>
        <van-popover v-if="!($topRightSlots > 0) && (moreActions && moreActions.length > 0)" v-model="showPopover"
          trigger="click" placement="bottom-end" :actions="moreActions" @select="onSelect">
          <template #reference>
            <van-icon name="ellipsis" size="24" />
          </template>
        </van-popover>
      </template>
    </van-nav-bar>
    <!-- 如果声明了 body 插槽则渲染之 -->
    <div class="rt-app-body" v-if="!($defaultSlots > 0)">
      <slot name="body"></slot>
    </div>
    <!-- 其他内容 / 无 body 的自定义内容 -->
    <slot></slot>
  </div>
</template>

<script setup>
// 这是一个通用的 app 最外层壳组件
// 用于方便整体调控风格样式、布局效果等
// 顶部导航栏当有title属性或者有#title插槽时会正常显示，否则不显示顶部导航栏
import { ref, useSlots } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  title: { type: String, default: "" },
  canPop: { type: Boolean, default: false },
  moreActions: { type: Array, default: () => ([]) },
  backFn: { type: Function, default: null },
})

const emit = defineEmits(['action'])

const router = useRouter()
const slots = useSlots()

// --------------- data ---------------
const showPopover = ref(false)

const $titleSlots = ref(slots['title'] ? slots['title']().length : 0)
const $topRightSlots = ref(slots['top-right'] ? slots['top-right']().length : 0)
const $defaultSlots = ref(slots['default'] ? slots['default']().length : 0)

// --------------- lifcycle ---------------

// --------------- methods ---------------
// 选择右上更"更多动作"
const onSelect = (action, index) => {
  emit("action", action.text, index)
}

// 默认的路由后退
const backup = () => {
  if (props.backFn) {
    props.backFn()
  } else {
    router.back()
  }
}

</script>



<style lang="scss" scoped>
.rt-app-body {
  padding: 20px;
  min-height: calc(100vh - 50px - 40px);
}
</style>
