<template>
  <div class="bottom-add-icon">
    <div class="icon-body">
      <rticon-add :size="20" />
      <p>创建流程</p>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.bottom-add-icon {
  z-index: 9;
  position: relative;
  bottom: 20px;
  padding: 10px;
  border-radius: 50%;
}

.icon-body {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  width: 80px;
  height: 80px;
  border-radius: 50%;

  p {
    flex-basis: 100%;
    text-align: center;
    margin: 6px 0;
  }
}
</style>