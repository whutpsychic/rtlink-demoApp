<template>
  <van-form ref="form">
    <component v-for="(item, index) in myItems" :key="index" :is="getItemByType(item.type)" :rules="rules[index]"
      v-bind="item.attributes" v-model="modelValue[item.field]" @update:model-value="(v) => onChange(v, item.field)" />
  </van-form>
</template>

<script setup>
import { ref, computed } from "vue";
import formElements from "./elements";

const form = ref(null);

const props = defineProps({
  // 值
  modelValue: { type: Object, default: () => ({}) },
  // 
  items: { type: Array, default: () => ([]) },
  // 
  rules: { type: Array, default: () => ([]) },
});

const emit = defineEmits(["update:model-value", "update:value"]);

const myItems = computed(() => {
  return props.items.map(item => {
    const { label, field, type, ...elseArgs } = item;
    const attributes = { label, field, ...elseArgs };
    return { label, field, type, attributes };
  });
});

// --------------- methods ---------------
//
const getItemByType = (type) => {
  if (!type) {
    type = "input";
  }
  return formElements[type];
};

const onChange = (v, field) => {
  let result = { ...props.modelValue };
  result[field] = v;
  emit("update:model-value", result);
  emit("update:value", v, field);
}

const validate = async () => {
  console.log(" --------------------- validate ")
  return form.value.validate()
    .then(() => {
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    })
}

// ================ 外部暴露 ================
defineExpose({
  validate
});
</script>

<style lang="scss" scoped></style>
