<template>
  <div class="todos-dones-item-can">
    <div class="left-icon">
      <rtmicon-read-already v-if="data.isRead == 1" size="32" color="gray" />
      <rtmicon-read-wait v-else size="32" color="orange" />

      <p class="state" v-if="data.status === 'COPYTO'" style="color: #7B68EE;">待回复</p>
      <p class="state" v-else-if="data.status === 'COMMU'" style="color: orange;">待反馈</p>
      <p class="state" v-else-if="data.status === 'feedback'" style="color: gray;">已反馈</p>
      <p class="state" v-else-if="data.status === 'copyto_reply'" style="color:gray;">已回复</p>
      <p class="state" v-else-if="data.status === 'FOLLOW'" style="color: #1E90FF;">跟踪</p>
    </div>
    <div class="right-content">
      <p class="title">{{ data.subject || " — " }}</p>
      <div class="subject">
        <span>{{ data.ownerName }}</span>
      </div>
      <p class="sustain">{{ data.createTime }}</p>
    </div>
  </div>
</template>

<script setup>

defineProps({
  data: { type: Object, default: () => ({}) },
});

</script>

<style lang="scss" scoped>
.todos-dones-item-can {
  margin: 10px 20px;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.left-icon {
  flex-basis: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  >* {
    flex-basis: 100%;
  }
}

.right-content {
  overflow: hidden;
  flex-basis: calc(100% - 60px);
}

p.state {
  text-align: center;
  white-space: nowrap;
  margin-top: 6px;
}

p.title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 6px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.subject {
  height: 2em;
  margin-bottom: 8px;

  span {
    margin-right: 15px;
  }
}
</style>
