<template>
  <main class="login">
    <h1>微办公</h1>
    <van-form class="login-form-container" @submit="login">
      <van-cell-group inset class="form-body">
        <van-field class="form-item" v-model="loginInfo.account" name="账号" label="账号" placeholder="账号"
          :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field class="form-item" v-model="loginInfo.password" type="password" name="密码" label="密码" placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]" />
      </van-cell-group>
      <div class="login-btn">
        <van-button round block native-type="submit">
          <span class="login-btn-text">登录</span>
        </van-button>
      </div>
    </van-form>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { showLoadingToast, closeToast } from "vant";
import api from "@/api/login.js";

const router = useRouter();
const route = useRoute();

const loginInfo = ref({
  account: "admin",
  password: "123456",
  tenantId: "",
});

const login = () => {
  showLoadingToast({
    message: "登录中...",
    duration: 0,
    forbidClick: true,
  });
  api.login(loginInfo.value).then((success) => {
    // 前往主页
    if (success) {
      router.replace({ path: "home/main" });
    }
  }).finally(() => {
    closeToast();
  })
}

</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  background-image: url('@/assets/img/login-bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;

  display: flex;
  flex-wrap: wrap;
  align-content: center;

  * {
    flex-basis: 100%;
  }
}

h1 {
  padding: 20px 0;
  text-align: center;
  font-size: 32px;
  color: #fff;
  letter-spacing: 4px;
}

.login-form-container {
  margin-top: 80px;
  margin-bottom: 200px;
}

.login-btn {
  margin: 16px;
  margin-top: 48px;

  button {
    letter-spacing: 4px;
  }

  .login-btn-text {
    font-size: 18px;
    font-weight: bold;
    color: #43a8fd;
  }
}

.form-body,
.form-item {
  background-color: transparent;
}

.form-item.van-cell:after {
  border-bottom-color: transparent;
}

.form-item.van-cell {
  border-bottom: 1px solid #34bdfe;
}
</style>
