<template>
  <van-form>
    <component v-for="(item, index) in myItems" :key="index" :is="getItemByType(item.type)" :rules="rules[index]"
      v-bind="item.attributes" v-model:value="value[item.field]" @update:value="(v) => onChange(v, item.field)" />
  </van-form>
</template>

<script setup>
import { computed } from 'vue'
import formElements from './elements';

const props = defineProps({
  // 值
  value: { type: Object, default: () => ({}) },
  // 
  items: { type: Array, default: () => ([]) },
  // 
  rules: { type: Array, default: () => ([]) },
})

const emit = defineEmits(['update:value'])

const myItems = computed(() => {
  return props.items.map(item => {
    const { label, field, type, ...elseArgs } = item;
    const attributes = { label, field, ...elseArgs };
    return { label, field, type, attributes };
  })
})

// --------------- methods ---------------
//
const getItemByType = (type) => {
  if (!type) {
    type = "input"
  }
  return formElements[type]
}

const onChange = (v, field) => {
  let result = { ...props.value }
  result[field] = v
  emit("update:value", result, field)
}


</script>

<style lang="scss" scoped></style>
