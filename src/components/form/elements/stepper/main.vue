<template>
  <div class="rt-form-item">
    <van-field readonly clickable :model-value="modelValue" :label="label" :rules="rules" :required="isRequired()"
      label-align="left">
      <template #input>
        <van-stepper :model-value="modelValue" :min="$attrs.min" :max="$attrs.max" :step="$attrs.step"
          @change="onChange" />
      </template>
    </van-field>
  </div>
</template>

<script setup>
import { onMounted, useAttrs } from "vue";
import { judgeIfRequired } from "../utils";

const attrs = useAttrs();

const props = defineProps({
  // 值
  modelValue: { type: String, default: "" },
  // 标签
  label: { type: String, default: "" },
  // 校验规则
  rules: { type: Array, default: () => ([]) },
});

const emit = defineEmits(["update:model-value"]);
// --------------- lifecycle ---------------
onMounted(() => {
  const { modelValue } = props;
  if (!modelValue && modelValue !== 0) {
    emit("update:model-value", attrs.min.toString() || "1");
  }
});
// --------------- methods ---------------

// 是否必填
const isRequired = () => {
  return judgeIfRequired(props.rules);
};

// v-model
const onChange = (v) => {
  emit("update:model-value", `${v}`);
};

</script>

<style lang="scss" scoped></style>
