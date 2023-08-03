<template>
  <div class="rt-form-item">
    <van-field readonly clickable :model-value="expValue" :label="label" :rules="rules" :placeholder="placeholder"
      :required="isRequired()" @click="showSelector = true" label-align="left" clearable :error-message="errmsg">
    </van-field>
    <van-popup v-model:show="showSelector" @close="checkVal" position="bottom">
      <van-area :model-value="value" :area-list="areaListData" @confirm="onConfirm" @cancel="onCancel" />
    </van-popup>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { areaList } from '@vant/area-data';
import { judgeIfRequired, areaCalcer } from "../utils"

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
// --------------- data ---------------
const showSelector = ref(false)
const error = ref(false)
const areaListData = ref(areaList)

// 显示文字
const expValue = computed(() => {
  const { value } = props
  return areaCalcer(areaList, value)
})

const errmsg = computed(() => {
  const { rules } = props
  if (rules && rules.length) {
    if (error.value) {
      return rules[0].message
    } else {
      return null
    }
  }
})

// --------------- methods ---------------
// 是否必填
const isRequired = () => {
  return judgeIfRequired(props.rules)
}

// v-model
const onConfirm = (v) => {
  showSelector.value = false
  console.log(v)
  emit("update:value", v.selectedValues[v.selectedValues.length - 1])
  //
  checkVal()
}

// 
const onCancel = () => {
  showSelector.value = false
  checkVal()
}

// 校验是否有错
const checkVal = () => {
  const { value } = props
  // 如果是必填且无值则报错警告
  if (isRequired() && (!value || (value && value.length === 0))) {
    error.value = true
  }
  // 否则静默
  else {
    error.value = false
  }
}

</script>

<style lang="scss" scoped></style>
