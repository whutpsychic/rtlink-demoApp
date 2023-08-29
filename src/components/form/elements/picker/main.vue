<template>
  <div class="rt-form-item">
    <van-field readonly clickable :model-value="text" :label="props.label" :rules="props.rules"
      :placeholder="props.placeholder" :required="isRequired()" @click="showSelector = true" label-align="left" clearable
      :error-message="errmsg">
    </van-field>
    <van-popup v-model:show="showSelector" @close="checkVal" position="bottom" @open="openUp">
      <van-picker v-model="pv" ref="picker" show-toolbar :columns="options" @confirm="onConfirm" @cancel="onCancel" />
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
  // options
  options: { type: Array, default: () => ([]) }
});

const emit = defineEmits(['update:model-value']);

// --------------- data ---------------
const pv = ref([]);
const showSelector = ref(false);
const error = ref(false);
const picker = ref(null);

// 本项错误信息
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

const text = computed(() => {
  const { options } = props;
  const target = options.find((item) => {
    return item.value === props.modelValue;
  })
  if (target)
    return target.text;
});
// --------------- methods ---------------
// 是否必填
const isRequired = () => {
  return judgeIfRequired(props.rules);
};

// v-model
const onConfirm = (v) => {
  const result = v.selectedOptions[0].value;
  showSelector.value = false;
  emit("update:model-value", result);
  checkVal();
};

// 
const onCancel = () => {
  showSelector.value = false;
  checkVal();
};

// 校验是否有错
const checkVal = () => {
  const { modelValue } = props;
  // 如果是必填且无值则报错警告
  if (isRequired() && !modelValue) {
    error.value = true;
  }
  // 否则静默
  else {
    error.value = false;
  }
};

// 弹出窗口后将值对齐
const openUp = () => {
  const { modelValue } = props;
  try {
    pv.value = [modelValue];
  } catch (err) {
    console.error(err);
  }
}
</script>

<style lang="scss" scoped></style>
