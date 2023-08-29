<template>
  <div class="rt-form-item">
    <van-field readonly clickable :model-value="expValue" :label="props.label" :rules="props.rules"
      :placeholder="props.placeholder" :required="isRequired()" @click="showSelector = true" label-align="left" clearable
      :error-message="errmsg">
    </van-field>
    <van-popup v-model:show="showSelector" @close="checkVal" position="bottom" @open="openUp">
      <van-cascader v-model="pv" title="请选择所在地区" :options="options" @close="onCancel" @finish="onConfirm" />
    </van-popup>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { judgeIfRequired, calcer } from "../utils";

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

const emit = defineEmits(["update:model-value"]);
// --------------- data ---------------
const pv = ref("");
const showSelector = ref(false);
const error = ref(false);

const errmsg = computed(() => {
  const { rules } = props;
  if (rules && rules.length) {
    if (error.value) {
      return rules[0].message;
    }
  }
});

// 显示文字
const expValue = computed(() => {
  const { options, modelValue } = props;
  const result = calcer(options, modelValue);

  return result.map((item) => { return item.text }).join(" / ");
});

// --------------- methods ---------------
// 是否必填
const isRequired = () => {
  return judgeIfRequired(props.rules);
};

// v-model
const onConfirm = (v) => {
  console.log(v)
  console.log(pv.value)
  const { value } = v;
  showSelector.value = false;
  emit("update:model-value", `${value}`);
  //
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
    pv.value = modelValue;
  } catch (err) {
    console.error(err);
  }
}
</script>

<style lang="scss" scoped></style>
