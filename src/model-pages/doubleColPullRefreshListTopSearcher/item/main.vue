<template>
  <div class="item-can">
    <div class="inner-can">
      <p class="title">{{ title }}</p>
      <p>{{ content }}</p>
      <p>{{ date }}</p>
    </div>
  </div>
</template>

<script setup>

defineProps({
  title: { type: String, default: "" },
  content: { type: String, default: "" },
  date: { type: String, default: "" },
})

</script>

<style lang="scss" scoped>
.item-can {
  background-color: white;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 4px 4px 4px #ddd;
  border: solid 1px #eee;

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

.item-can:active {
  border-color: #eee;
}
</style>
