<template>
  <div class="todos-dones-item-can">
    <div class="left-icon">
      <rt-icon :name="states[getStateByData(data)].icon" size="40" :color="states[getStateByData(data)].color" />
      <p class="state" :style="`color:${states[getStateByData(data)].color};`">{{ states[getStateByData(data)].text }}</p>
    </div>
    <div class="right-content">
      <p class="title">{{ data.subject || " — " }}</p>
      <p class="time">
        <span>{{ data.createTime }}</span>
        <van-tag size="medium">{{ data.creator }}</van-tag>
      </p>
      <p class="sustain" v-if="data.status == 'end' || data.status == 'manualend'">
        持续时间：{{ formatDuring(data.duration) }}
      </p>
      <p class="sustain" v-else>节点：{{ data.nodeName }}</p>
    </div>
  </div>
</template>

<script setup>

defineProps({
  data: { type: Object, default: () => ({}) },
});

const states = [
  { text: "运行中", color: "#45c60d", icon: "process" },
  { text: "结束", color: "#999", icon: "todo-already-m" },
  { text: "撤销", color: "orange", icon: "withdraw" },
  { text: "驳回", color: "red", icon: "disable" },
  { text: "???", color: "red", icon: "todo-already-m" },
];

const getStateByData = (data) => {
  if (data.status == 'running') {
    return 0;
  } else if (data.status == 'end' || data.status == 'manualend') {
    return 1;
  } else if (data.status == 'revoke' || data.status == 'revokeToStart') {
    return 2;
  } else if (data.status == 'backToStart' || data.status == 'back') {
    return 3;
  } else {
    return 4;
  }
};

const formatDuring = (mss) => {
  let days = Math.floor(mss / (1000 * 60 * 60 * 24));
  let hours = Math.floor((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((mss % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.round((mss % (1000 * 60)) / 1000);
  return days + '天' + hours + '小时' + minutes + '分钟' + seconds + '秒';
};

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
  margin-left: 10px;
  margin-right: 20px;
}

.right-content {
  overflow: hidden;
}

p.state {
  text-align: center;
  white-space: nowrap;
}

p.title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

p.time {
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  span {
    margin-right: 15px;
  }
}
</style>
