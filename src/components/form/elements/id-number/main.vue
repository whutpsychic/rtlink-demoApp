<template>
  <div class="rt-form-item">
    <van-field readonly clickable :model-value="props.modelValue" :label="props.label" :rules="validateRules"
      :placeholder="props.placeholder" :required="isRequired()" @click="showKeyboard = true" label-align="left" clearable
      :error-message="errmsg">
    </van-field>
    <van-number-keyboard :show="showKeyboard" extra-key="X" close-button-text="完成" @blur="showKeyboard = false"
      @hide="onHide" @input="onChange" @delete="onDelete" />
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

const emit = defineEmits(['update:model-value']);

// --------------- data ---------------
const showKeyboard = ref(false);
const error = ref(false);
// 身份证校验规则
const pattern = ref(/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/);

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

const validateRules = computed(() => {
  let { rules } = props;
  rules[0].pattern = pattern.value;
  return rules;
});

// --------------- methods ---------------
// 是否必填
const isRequired = () => {
  return judgeIfRequired(props.rules);
};

// v-model
const onChange = (v) => {
  const { modelValue } = props;
  const result = `${modelValue}${v}`;
  emit("update:model-value", result);
  checkVal();
};

// v-model
const onDelete = () => {
  let { modelValue } = props;
  let newvArr = modelValue.split("");
  newvArr.pop();
  emit("update:model-value", `${newvArr.join("")}`);
  checkVal();
};

//
const onHide = () => {
  checkVal();
};

// 校验合法字符
const validate = () => {
  const { modelValue } = props;
  let result = pattern.value.test(modelValue);
  return result;
};

// 校验是否有错
const checkVal = () => {
  const { modelValue } = props;
  // 看看值是否对劲
  if (isRequired() && !modelValue) {
    error.value = true;
  } else if (!validate()) {
    error.value = true;
  } else {
    error.value = false;
  }
};

</script>

<style lang="scss" scoped></style>
