<template>
  <div :class="read ? `item-can read` : `item-can`">
    <div class="left-icon">
      <rt-icon :name="read ? `read-already-m` : `read-wait-m`" :color="read ? `#aaa` : `#30c4fd`" />
      <div v-if="!read" class="badger" />
    </div>
    <div class="main-content">
      <p class="title">{{ data.subject }}</p>
      <p class="content"><span>{{ data.owner }}</span><span>{{ data.createTime }}</span></p>
      <p class="execute">
        <span>{{ '立即处理' }}</span>
        <rt-icon name="arrow-right-m" size="16" :color="read ? `#aaa` : `#30c4fd`" />
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  read: { type: Boolean, default: true },
  data: { type: Object, default: () => ({}) },
});

</script>

<style lang="scss" scoped>
.item-can {
  height: 92px;
  margin: 20px;
  padding: 20px 16px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 4px 4px 4px #ddd;
  border: solid 1px #eee;
  display: flex;
}

.left-icon {
  margin-right: 12px;
  position: relative;
}

.main-content {
  width: 100%;

  p.title {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 0.8em;
  }

  p.content,
  p.execute {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p.content {
    font-size: 13px;
    padding-bottom: 1em;
    border-bottom: solid 1px #ddd;
    color: #aaa;
  }

  p.execute {
    margin-top: 12px;
    color: #30c4fd;
  }
}

.item-can.read {

  p.execute,
  p.title {
    color: #aaa;
  }
}

.badger {
  position: absolute;
  top: 4px;
  right: 0;
  width: 8px;
  height: 8px;
  background-color: red;
  border-radius: 50%;
}
</style>
