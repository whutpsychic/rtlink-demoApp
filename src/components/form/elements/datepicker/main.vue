<template>
  <div class="rt-form-item">
    <van-field readonly clickable :model-value="value" :label="props.label" :rules="props.rules"
      :placeholder="props.placeholder" :required="isRequired()" @click="showPicker = true" label-align="left" clearable
      :error-message="errmsg">
    </van-field>
    <van-popup v-model:show="showPicker" position="bottom" @closed="checkVal()">
      <van-date-picker :columns-type="type" @confirm="onConfirm" @cancel="onCancel" :formatter="expformatter"
        :min-date="$attrs.min" :max-date="$attrs.max" />
    </van-popup>
  </div>
</template>

<script setup>
import { ref, computed, useAttrs } from 'vue'
import moment from 'moment'
import { judgeIfRequired } from "../utils"

const attrs = useAttrs()

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
const showPicker = ref(false)
const error = ref(false)
const defaultFormatters = ref({
  undefined: "YYYY-MM-DD",
  year: "YYYY",
  month: "MM",
  "year-month": "YYYY-MM",
  "month-day": "MM-DD",
  date: "YYYY-MM-DD",
})

const computedFormatter = computed(() => {
  const { mode, formatter } = attrs
  if (formatter) {
    return formatter
  } else {
    return defaultFormatters.value[mode]
  }
})

const errmsg = computed(() => {
  const { rules } = props
  if (rules && rules.length) {
    if (error.value) {
      return rules[0].message
    }
  } else {
    return null
  }
})

const type = computed(() => {
  const { mode } = attrs
  if (mode === "year") {
    return ['year']
  }
  else if (mode === "month") {
    return ['month']
  }
  else if (mode === "year-month") {
    return ['year', 'month']
  }
  else if (mode === "month-day") {
    return ['month', 'day']
  }
  // 默认是 date
  else {
    return ['year', 'month', 'day']
  }
})


// --------------- methods ---------------
// 是否展示必填星号
const isRequired = () => {
  return judgeIfRequired(props.rules)
}

// 展示时默认文字添加
const expformatter = (type, option) => {
  if (type === 'year') {
    option.text += '年';
  }
  if (type === 'month') {
    option.text += '月';
  }
  if (type === 'day') {
    option.text += '日';
  }
  return option;
};

// v-model:value
const onConfirm = (v) => {
  showPicker.value = false

  const res = v.selectedValues.join("-")
  let val = moment(res).format(computedFormatter.value)

  emit("update:value", val)
}

const onCancel = () => {
  showPicker.value = false
  checkVal()
}

// 检查值
// 主要针对必填项且
const checkVal = () => {
  const { value } = props
  if (isRequired() && !value) {
    error.value = true
  } else {
    error.value = false
  }
}
</script>

<style lang="scss" scoped></style>
