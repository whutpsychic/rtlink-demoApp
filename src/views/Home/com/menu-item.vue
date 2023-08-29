<template>
  <div class="menu-item-wrapper">
    <slot></slot>
    <p>{{ props.name }}</p>
    <p class="value">{{ props.number }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  name: { type: String, default: "" },
  number: { type: [Number, String], default: 0 },
});
</script>

<style lang="scss" scoped>
.menu-item-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  flex-basis: 100%;
  padding: 15px 0;
  margin: 0 5px;
  border-radius: 8px;

  p {
    text-align: center;
    margin-top: 5px;
  }

  * {
    flex-basis: 100%;
  }

  p.value {
    font-weight: bold;
    font-size: 16px;
  }
}
</style>