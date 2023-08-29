<template>
  <rtm-app-container :title="'我的签章'" canPop>
    <template #body>
      <van-signature @submit="onSubmit" @clear="onClear" clear-button-text="重新签名" />
      <van-image v-if="image" :src="image" height="200" />
      <div v-else style="height:203px;"></div>
      <rtm-form ref="form" v-model:value="form" :items="items" :rules="rules" @update:value="onChange" />
      <div class="btn-can">
        <van-button type="primary" block @click="onSave" :disabled="!image">保存</van-button>
      </div>
    </template>
  </rtm-app-container>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { showLoadingToast, closeToast, showSuccessToast, showFailToast } from "vant";
import api from "@/api-demo/home";
import commonApi from "@/api-demo/common";

const route = useRoute();
const router = useRouter();

const form = ref({});
const preInfo = ref({});

const image = ref("");

const items = computed(() => {
  return [
    { label: "登录密码", field: "oldPassWord", type: "text-field", mode: "password", placeholder: "请填写密码" },
    { label: "签章密码", field: "password", type: "text-field", mode: "password", placeholder: "请填写密码" },
    { label: "密码确认", field: "confirmPwd", type: "text-field", mode: "password", placeholder: "请填写密码" },
  ];
});

const rules = computed(() => {
  return [
    [{ required: true, message: "请填写密码" }],
    [{ required: true, message: "请填写密码" }],
    [{ required: true, message: "请填写密码" }],
  ];
});
// ------------------ methods ------------------
const onChange = (v) => {
};

const onSubmit = (data) => {
  image.value = data.image;
};

const onClear = () => {
  image.value = "";
};

const checkPsw = async () => {
  const { password, confirmPwd } = form.value;
  const validate = await form.value.validate();
  return validate && (password === confirmPwd);
};

const onSave = async () => {
  // 先判断密码重复是否正确
  const canContinue = await checkPsw();
  if (!canContinue) {
    return showFailToast("密码确认不正确！");
  }

  showLoadingToast({
    message: '保存中...',
    duration: 0,
    forbidClick: true,
  });
  commonApi.uploadFile(image.value).then((res) => {
    const { success, fileId } = res;
    const { oldPassWord, password, confirmPwd } = form.value;
    if (success) {
      api.saveSignature({ ...preInfo.value, fileId, oldPassWord, password, confirmPwd }).then((res) => {
        closeToast();
        showSuccessToast("保存成功");
        router.back()
      });
    }
  }).finally(() => {
    closeToast();
  })
};

// ------------------ created ------------------
preInfo.value = route.query;
</script>

<style lang="scss" scoped>
.btn-can {
  margin-top: 16px;
}
</style>