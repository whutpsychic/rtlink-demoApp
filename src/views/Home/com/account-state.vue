<template>
  <div class="account-state-wrapper">
    <rtmicon-mystate-normal v-if="type == '1'" size="18" :color="colors[0]" />
    <rtmicon-mystate-abnormal v-else-if="type == '0'" size="18" :color="colors[1]" />
    <rtmicon-mystate-abnormal v-else-if="type == '-1'" size="18" :color="colors[2]" />
    <rtmicon-mystate-abnormal v-else size="18" :color="colors[3]" />
    <span v-if="type == '1'" :style="`color:${colors[0]}`">正常</span>
    <span v-else-if="type == '0'" :style="`color:${colors[1]}`">禁用</span>
    <span v-else-if="type == '-1'" :style="`color:${colors[2]}`">未激活</span>
    <span v-else :style="`color:${colors[3]}`">离职</span>
  </div>
</template>

<script setup>
const props = defineProps({
  // 状态类型
  // 可选值: none / normal / abnormal
  type: { type: [Number, String], default: "" },
  text: { type: String, default: " - " },
})

// 正常、禁用、未激活、离职
const colors = ["#62caf8", "red", "orange", "#000"]
</script>

<style lang="scss" scoped>
.account-state-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 24px;
  border-radius: 12px;
  padding: 0 8px;
  margin-left: 16px;

  span {
    font-size: 12px;
    margin: 0 4px;
  }
}
</style>