<template>
  <div class="nav-item-wrapper">
    <rt-icon :name="transferIconName(icon, true)" color="#62c2f8" :size="iconSize" />
    <p class="name">{{ props.text }}</p>
  </div>
</template>

<script setup>
import { transferIconName } from "@/plugins/transform-rtlink-icons";

const props = defineProps({
  icon: { type: String, default: "" },
  text: { type: [Number, String], default: 0 },
  iconSize: { type: [Number, String], default: 30 },
});
</script>

<style lang="scss" scoped>
.nav-item-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 6px 0;

  p {
    text-align: center;
    margin-top: 5px;
  }

  * {
    flex-basis: 100%;
  }

  p.name {
    margin-top: 12px;
    width: calc(30vw - 30px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>