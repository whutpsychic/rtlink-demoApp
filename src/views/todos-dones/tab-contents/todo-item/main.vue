<template>
  <div class="todos-dones-item-can">
    <div class="left-icon">
      <rtmicon-todo-wait size="40" :color="getState(data.status).color" />
      <p class="state" :style="`color:${getState(data.status).color}`">{{ getState(data.status).text }}</p>
    </div>
    <div class="right-content">
      <p class="title">{{ data.subject || " — " }}</p>
      <p class="time">
        <span>{{ data.createTime }}</span>
        <van-tag size="medium">{{ data.creator }}</van-tag>
      </p>
      <p class="sustain">{{ tool.countDate(data.createTime) }}</p>
    </div>
  </div>
</template>

<script setup>
import { tool } from "@/utils";

defineProps({
  data: { type: Object, default: () => ({}) },
});

// 根据状态获取图像
const getState = (state) => {
  switch (state) {
    case "NORMAL": return { text: "待办", icon: "todo-wait-m", color: "#45c60d" };
    case "TRANSFORMED": return { text: "流转", icon: "todo-wait-m", color: "#45c60d" };
    case "TRANSFORMEDINQU": return { text: "征询", icon: "todo-wait-m", color: "#45c60d" };
    case "DELIVERTO": return { text: "转办", icon: "todo-wait-m", color: "#45c60d" };
    case "FOLLOW": return { text: "跟踪", icon: "todo-wait-m", color: "#45c60d" };
    case "COMMU": return { text: "沟通", icon: "todo-wait-m", color: "#45c60d" };
    case "BACK": return { text: "驳回", icon: "todo-wait-m", color: "#45c60d" };
    case "ADDSIGN": return { text: "会签加签", icon: "todo-wait-m", color: "#45c60d" };
    case "AGENT": return { text: "委托", icon: "todo-wait-m", color: "#45c60d" };
    case "SHARE": return { text: "共享", icon: "todo-wait-m", color: "#45c60d" };
    case "BACKSHARE": return { text: "驳回共享", icon: "todo-wait-m", color: "#45c60d" };
    case "APPROVELINEED": return { text: "并行审批", icon: "todo-wait-m", color: "#45c60d" };
    case "SIGNSEQUENCEED": return { text: "顺序签署", icon: "todo-wait-m", color: "#45c60d" };
    case "SIGNLINEED": return { text: "并行签署", icon: "todo-wait-m", color: "#45c60d" };
    case "USERADDSIGN": return { text: "用户加签", icon: "todo-wait-m", color: "#45c60d" };
    default: return { text: "???", icon: "todo-wait-m", color: "#45c60d" };
  };
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
