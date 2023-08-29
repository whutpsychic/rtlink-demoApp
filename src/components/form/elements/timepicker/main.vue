<template>
  <div class="rt-form-item">
    <van-field readonly clickable :model-value="modelValue" :label="props.label" :rules="props.rules"
      :placeholder="props.placeholder" :required="isRequired()" @click="showPicker = true" label-align="left" clearable
      :error-message="errmsg">
    </van-field>
    <van-popup v-model:show="showPicker" position="bottom" @closed="checkVal()" @open="openUp">
      <van-time-picker v-model="pv" :columns-type="type" @confirm="onConfirm" @cancel="onCancel" :formatter="expformatter"
        :min-time="$attrs.min" :max-time="$attrs.max" />
    </van-popup>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { judgeIfRequired } from "../utils";

const props = defineProps({
  // 值
  modelValue: { type: String, default: "" },
  // 标签
  label: { type: String, default: "" },
  // 无值填充
  placeholder: { type: String, default: "" },
  // 校验规则
  rules: { type: Array, default: () => ([]) },
});

const emit = defineEmits(["update:model-value"]);
// --------------- data ---------------
const pv = ref([]);
const showPicker = ref(false);
const error = ref(false);

const errmsg = computed(() => {
  const { rules } = props;
  if (rules && rules.length) {
    if (error.value) {
      return rules[0].message;
    }
  } else {
    return null;
  }
});

const type = computed(() => {
  return ["hour", "minute"];
});

// --------------- methods ---------------
// 是否展示必填星号
const isRequired = () => {
  return judgeIfRequired(props.rules);
};

// 展示时默认文字添加
const expformatter = (type, option) => {
  if (type === "hour") {
    option.text += "时";
  }
  if (type === "minute") {
    option.text += "分";
  }
  if (type === "second") {
    option.text += "秒";
  }
  return option;
};

// v-model
const onConfirm = (v) => {
  showPicker.value = false;
  const res = v.selectedValues.join(":");

  emit("update:model-value", res);
};

const onCancel = () => {
  showPicker.value = false;
  checkVal();
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

// 弹出窗口后将值对齐
const openUp = () => {
  const { modelValue } = props;
  try {
    pv.value = modelValue.split(":");
  } catch (err) {
    console.error(err);
  }
}
</script>

<style lang="scss" scoped></style>
