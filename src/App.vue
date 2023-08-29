<template>
  <div :class="cls">
    <!-- 启用过渡动效 -->
    <router-view v-if="enableRouterAnimate" v-slot="{ Component, route }">
      <transition :name="checkTransitionName(route)" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <!-- 不启用过渡动效 -->
    <router-view v-else></router-view>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { RouterView } from "vue-router";
import { useStore } from "vuex";
import { enableRouterAnimate } from "./appConfig.js";
import fc from "@/flutter-core";

const store = useStore();

const cls = computed(() => {
  return store.state.style;
});

// router 转场动画判断
const checkTransitionName = (route) => {
  const { meta } = route;
  // 如果有自定义的路由转场动画那么就使用自定义的
  if (meta.transition) {
    return meta.transition;
  };
  // 否则按照页面等级执行默认动效
  try {
    const curr = store.state.pageLevel;
    const next = meta.pageLevel;
    store.commit("markPageLevel", next);
    let result;
    if (curr < next) {
      result = "slider-left";
    }
    else if (curr > next) {
      result = "slider-right";
    }
    else {
      result = "fader";
    }
    return result;
  } catch (err) {
    console.error(err);
    return;
  };
};

// --------------- created ---------------
// 安全高度
fc.getSafeHeight();
fc.await("getSafeHeight", (res) => {
  store.commit("recordSafeHeights", res);
});
</script>

