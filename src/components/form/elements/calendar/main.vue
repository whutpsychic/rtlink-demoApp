<template>
  <div class="rt-form-item">
    <van-field readonly clickable :model-value="expValue" :label="props.label" :rules="props.rules"
      :placeholder="props.placeholder" :required="isRequired()" @click="showPicker = true" label-align="left" clearable
      :error-message="errmsg">
    </van-field>
    <van-calendar ref="calendar" v-model:show="showPicker" color="#1e90ff" :type="$attrs.mode" @confirm="onConfirm"
      @open="openUp" @close="checkVal" />
  </div>
</template>

<script setup>
import { ref, computed, useAttrs } from "vue";
import moment from "moment";
import { judgeIfRequired } from "../utils";

const attrs = useAttrs();

const props = defineProps({
  // 值
  modelValue: { type: [String, Array], default: "" },
  // 标签
  label: { type: String, default: "" },
  // 无值填充
  placeholder: { type: String, default: "" },
  // 校验规则
  rules: { type: Array, default: () => ([]) },
});

const emit = defineEmits(["update:model-value"]);

// --------------- data ---------------
const calendar = ref(null);
const showPicker = ref(false);
const error = ref(false);
const defaultFormatter = "YYYY-MM-DD";

// 值格式
const valueFormatter = computed(() => {
  return defaultFormatter;
});

// 文字显示格式
const textFormatter = computed(() => {
  const { formatter } = attrs;
  if (formatter) {
    return formatter;
  } else {
    return defaultFormatter;
  }
});

const errmsg = computed(() => {
  const { rules } = props;
  if (rules && rules.length) {
    if (error.value) {
      return rules[0].message;
    } else {
      return null;
    }
  }
});

// 显示的值
const expValue = computed(() => {
  const { render, mode } = attrs;
  const { modelValue } = props;

  if (!modelValue) {
    return "";
  }

  // 多选日期或者日期区间
  if (modelValue instanceof Array) {
    // 自定义显示模式
    if (!!render) {
      return render(modelValue);
    }
    // 默认显示模式
    else {
      // 区间
      if (mode === "range") {
        return defaultDateRangeRenderer(modelValue);
      }
      // 其他认为是多选值
      else {
        return defaultMultiDatesRenderer(modelValue);
      }
    }
  }
  // 单选日期
  else {
    return moment(modelValue).format(textFormatter.value);
  }
});

// --------------- methods ---------------
// 是否展示必填星号
const isRequired = () => {
  return judgeIfRequired(props.rules);
};

// v-model
const onConfirm = (v) => {
  showPicker.value = false;
  let val;
  const multiple = v instanceof Array;
  if (multiple) {
    val = v.map((item) => {
      return moment(item).format(valueFormatter.value);
    });
  }
  else {
    val = moment(v).format(valueFormatter.value);
  }

  emit("update:model-value", val);
};

// 检查值
// 主要针对必填项且
const checkVal = () => {
  const { modelValue } = props;
  if (isRequired() && !modelValue) {
    error.value = true;
  } else {
    error.value = false;
  }
};

// 默认的多选日期渲染模式
const defaultMultiDatesRenderer = (vArr) => {
  return `您选择了${vArr.length}个日期`;
};

// 默认的日期区间渲染模式
const defaultDateRangeRenderer = (vArr) => {
  const _formatter = textFormatter.value;
  return `${moment(vArr[0]).format(_formatter)} 至 ${moment(vArr[1]).format(_formatter)}`;
};

// 弹出窗口后将值对齐
const openUp = () => {
  const { modelValue } = props;
  const { mode } = attrs;
  const multipleType = (modelValue instanceof Array) || mode === "multiple" || mode === "range";
  try {
    // 单个日期
    if (!multipleType) {
      calendar.value.reset(new Date(modelValue));
    }
    // 多日期
    else {
      let opt;
      if (!modelValue) {
        opt = [];
      } else {
        opt = modelValue;
      }
      const targetVArr = opt.map((v) => {
        return new Date(v);
      });
      calendar.value.reset(targetVArr);
    }
  } catch (err) {
    console.error(err);
  }
}
</script>

<style lang="scss" scoped></style>
