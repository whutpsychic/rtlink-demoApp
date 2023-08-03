<template>
  <div class="rt-form-item">
    <van-field readonly clickable :model-value="expValue" :label="props.label" :rules="props.rules" :placeholder="props.placeholder"
      :required="isRequired()" @click="showPicker = true" label-align="left" clearable :error-message="errmsg">
    </van-field>
    <van-calendar v-model:show="showPicker" color="#1e90ff" :type="$attrs.mode" @confirm="onConfirm" @close="checkVal" />
  </div>
</template>

<script setup>
import { ref, computed, useAttrs } from 'vue'
import moment from "moment"
import { judgeIfRequired } from "../utils"

const attrs = useAttrs()

const props = defineProps({
  // 值
  value: { type: [String, Array], default: "" },
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
const defaultFormatter = ref("YYYY-MM-DD")

const formatter = computed(() => {
  const { formatter } = attrs
  if (formatter) {
    return formatter
  } else {
    return defaultFormatter
  }
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

// 显示的值
const expValue = computed(() => {

  const { render, mode } = attrs
  const { value } = props

  // 多选日期或者日期区间
  if (value instanceof Array) {
    // 自定义显示模式
    if (typeof (render) === "function") {
      return render(value)
    }
    // 默认显示模式
    else {
      // 区间
      if (mode === "range") {
        return defaultDateRangeRenderer(value)
      }
      // 其他认为是多选值
      else {
        return defaultMultiDatesRenderer(value)
      }
    }
  }
  // 单选日期
  else {
    return value
  }
})

// --------------- methods ---------------
// 是否展示必填星号
const isRequired = () => {
  return judgeIfRequired(props.rules)
}

// v-model:value
const onConfirm = (v) => {
  showPicker.value = false
  const _formatter = formatter.value.value
  let val
  const multiple = v instanceof Array
  if (multiple) {
    val = v.map((item) => {
      return moment(item).format(_formatter)
    })
  }
  else {
    val = moment(v).format(_formatter)
  }

  emit("update:value", val)
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

// 默认的多选日期渲染模式
const defaultMultiDatesRenderer = (vArr) => {
  return `您选择了${vArr.length}个日期`
}

// 默认的日期区间渲染模式
const defaultDateRangeRenderer = (vArr) => {
  const _formatter = formatter.value.value
  return `${moment(vArr[0]).format(_formatter)} 至 ${moment(vArr[1]).format(_formatter)}`
}

</script>

<style lang="scss" scoped></style>
