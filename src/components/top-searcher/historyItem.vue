<template>
  <div class="history-item" @click="emit('click', props.label)">
    <van-icon name="search" class="icon" />
    <p>
      <span>{{ label }}</span>
      <van-tag v-if="props.type === 'hot'" color="#FFB6C1" text-color="#FF4500">热门</van-tag>
      <van-tag v-else-if="props.type === 'last'" color="#eee" text-color="#666">上次搜索过</van-tag>
    </p>
  </div>
</template>

<script setup>

const props = defineProps({
  // label
  label: { type: String, defualt: "" },
  // 标签类型
  type: { type: String, default: "" },
})

const emit = defineEmits(['click'])

</script>

<style lang="scss" scoped>
.history-item {
  padding: 6px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .icon {
    margin-left: 10px;
  }
}

p {
  width: 100%;
  margin: 0 10px;
  padding: 4px;
  border-bottom: solid 1px #eee;

  span {
    margin-right: 0.5em;
  }
}
</style>
