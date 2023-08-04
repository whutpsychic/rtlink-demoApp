<template>
  <div class="menu-item-wrapper">
    <rticon-add-item />
    <p>{{ props.name }}</p>
    <p>{{ props.number }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  name: { type: String, default: "" },
  number: { type: [Number, String], default: 0 },
})
</script>

<style lang="scss" scoped>
.menu-item-wrapper {
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px 0;
  margin: 0 5px;
  border-radius: 8px;
  box-shadow: 1px 1px 4px 1px #ccc;

  p {
    text-align: center;
    margin-top: 5px;
  }

  * {
    flex-basis: 100%;
  }
}
</style>