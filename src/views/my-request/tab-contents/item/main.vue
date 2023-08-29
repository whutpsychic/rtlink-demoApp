<template>
  <div class="todos-dones-item-can">
    <div class="left-icon">
      <rtmicon-myrequest-running v-if="data.status == 'running'" size="32" color="green" />
      <rtmicon-myrequest-end v-else-if="data.status == 'end' || data.status == 'manualend'" size="32" color="gray" />
      <rticon-withdraw v-else-if="data.status == 'revoke' || data.status == 'revokeToStart'" size="32" color="orange" />
      <rticon-disable2 v-else-if="data.status == 'backToStart' || data.status == 'back'" size="32" color="red" />
      <rtmicon-myrequest-draft v-else-if="data.status == 'draft'" size="32" color="#7B68EE" />

      <p class="state" v-if="data.status == 'running'" style="color: green;">运行中</p>
      <p class="state" v-else-if="data.status == 'end' || data.status == 'manualend'" style="color: gray;">结束</p>
      <p class="state" v-else-if="data.status == 'revoke' || data.status == 'revokeToStart'" style="color: orange;">撤销</p>
      <p class="state" v-else-if="data.status == 'backToStart' || data.status == 'back'" style="color: red;">驳回</p>
      <p class="state" v-else-if="data.status == 'draft'" style="color: #7B68EE;">草稿</p>
    </div>
    <div class="right-content">
      <p class="title">{{ data.procDefName || " — " }}</p>
      <div class="subject">
        <span>{{ data.subject }}</span>
      </div>
      <p class="sustain">{{ data.createTime }}</p>
    </div>
  </div>
</template>

<script setup>

defineProps({
  data: { type: Object, default: () => ({}) },
})

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
  height: 4em;
  margin-bottom: 8px;

  span {
    margin-right: 15px;
  }
}
</style>
