<template>
  <div class="rt-form-item">
    <van-field readonly clickable :model-value="modelValue" :label="label" :rules="rules" :required="isRequired()"
      label-align="left">
      <template #input>
        <van-radio-group v-model="radio" direction="horizontal" @change="onChange">
          <van-radio v-for="(op, i) in options" :key="i" :name="op.value">{{ op.label }}</van-radio>
        </van-radio-group>
      </template>
    </van-field>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { judgeIfRequired } from "../utils";

const props = defineProps({
  // 值
  modelValue: { type: String, default: "" },
  // 标签
  label: { type: String, default: "" },
  // 校验规则
  rules: { type: Array, default: () => ([]) },
  // options
  options: { type: Array, default: () => ([]) }
});

const emit = defineEmits(["update:model-value"]);
// --------------- data ---------------
const radio = ref(null);

watch(() => props.modelValue, (newv, oldv) => {
  if (newv !== oldv) {
    radio.value = newv;
  }
});
// --------------- methods ---------------
// 是否必填
const isRequired = () => {
  return judgeIfRequired(props.rules);
};

// v-model
const onChange = (v) => {
  emit("update:model-value", v);
};

</script>

<style lang="scss" scoped></style>
