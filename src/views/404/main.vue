<template>
  <rtm-app-container>
    <div class="rtm-app-body">
      <p>真是抱歉，您走丢了！</p>
      <p>将会在{{ secondLeft + 1 }}秒后返回首页</p>
      <van-button type="primary" @click="backupNow">立即返回首页</van-button>
    </div>
  </rtm-app-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
// --------------- data ---------------
const secondLeft = ref(5);
const breakup = ref(false);
// --------------- lifecycle ---------------
onMounted(() => {
  loop();
});
// --------------- methods ---------------

const loop = () => {
  if (breakup.value) {
    return
  }
  const left = secondLeft.value + 1;
  if (left < 2) {
    router.replace("/home/main");
  } else {
    secondLeft.value--;
    setTimeout(() => {
      loop();
    }, 1000);
  }
};

const backupNow = () => {
  breakup.value = true;
  router.replace('/home/main');
};

</script>

<style scoped>
.rtm-app-body {
  height: calc(100vh - 40px);
  padding: 20px;
}

button {
  margin: 20px 0;
}
</style>
