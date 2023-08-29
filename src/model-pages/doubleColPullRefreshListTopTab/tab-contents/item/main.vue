<template>
  <div class="mp-item-can double-col">
    <div class="inner-can">
      <p class="title">{{ data.title }}</p>
      <p>{{ data.content }}</p>
      <p>{{ data.date }}</p>
    </div>
  </div>
</template>

<script setup>

defineProps({
  data: { type: Object, default: () => ({}) },
});

</script>

<style lang="scss" scoped>
.mp-item-can.double-col {
  margin: 10px;
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;

  .inner-can {
    padding: 10px;
  }

  p {
    margin: 0;
    margin-bottom: 8px;
  }

  .title {
    font-weight: bold;
  }
}
</style>
