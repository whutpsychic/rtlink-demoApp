<template>
  <van-field :model-value="props.value" :type="$attrs && $attrs.mode" :label="props.label" :placeholder="props.placeholder"
    :rules="props.rules" @update:model-value="onChange" :required="isRequired()" label-align="left" clearable
    @clear="$emit('update:value', '')" />
</template>

<script setup>
import { judgeIfRequired } from "../utils"

const props = defineProps({
  // 值
  value: { type: String, default: "" },
  // 标签
  label: { type: String, default: "" },
  // 无值填充
  placeholder: { type: String, default: "" },
  // 校验规则
  rules: { type: Array, default: () => ([]) },
})

const emit = defineEmits(['update:value'])

// --------------- methods ---------------
// 是否展示必填星号
const isRequired = () => {
  return judgeIfRequired(props.rules)
}

// v-model
const onChange = (v) => {
  emit("update:value", v)
}

</script>

<style lang="scss" scoped></style>
