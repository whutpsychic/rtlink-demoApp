<template>
  <div class="rt-form-item">
    <van-field readonly clickable :model-value="value" :label="label" :rules="rules" :required="isRequired()"
      label-align="left">
      <template #input>
        <van-stepper :model-value="value" @change="onChange" />
      </template>
    </van-field>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { judgeIfRequired } from "../utils"

const props = defineProps({
  // 值
  value: { type: String, default: "" },
  // 标签
  label: { type: String, default: "" },
  // 校验规则
  rules: { type: Array, default: () => ([]) },
})

const emit = defineEmits(['update:value'])
// --------------- lifecycle ---------------
onMounted(() => {
  const { value } = props
  if (!value && value !== 0) {
    emit("update:value", `1`)
  }
})
// --------------- methods ---------------

// 是否必填
const isRequired = () => {
  return judgeIfRequired(props.rules)
}

// v-model:value
const onChange = (v) => {
  emit("update:value", `${v}`)
}

</script>

<style lang="scss" scoped></style>
