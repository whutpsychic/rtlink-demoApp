<template>
  <rtm-app-container :title="'我的'">
    <div class="rtm-app-body">
      <div class="top-section">
        <div class="left-icon">
          <img :src="avatar" />
        </div>
        <div class="right-content">
          <p class="name">{{ userInfo.fullname }}</p>
          <div class="account">
            <p>账号： {{ userInfo.account }}</p>
            <account-state :type="userInfo.status" />
          </div>
        </div>
      </div>
      <van-cell-group>
        <van-field class="mine-item" :model-value="userInfo.mobile" label="手机号码" readonly input-align="right"
          :border="false">
          <template #left-icon>
            <rtmicon-phone-number :size="24" />
          </template>
        </van-field>
        <div class="spliter-line" />
        <van-field class="mine-item" :model-value="userInfo.email" label="电子邮箱" readonly input-align="right"
          :border="false">
          <template #left-icon>
            <rtmicon-email :size="24" />
          </template>
        </van-field>
        <div class="spliter-line" />
        <van-field class="mine-item" :model-value="userInfo.address" label="家庭地址" readonly input-align="right"
          :border="false">
          <template #left-icon>
            <rtmicon-address :size="24" />
          </template>
        </van-field>
      </van-cell-group>
      <div :style="`height:${spliterHeight}px;`" />
      <van-cell-group>
        <van-field class="mine-item" label="所属角色" readonly input-align="right" :border="false">
          <template #left-icon>
            <rtmicon-role :size="24" />
          </template>
        </van-field>
        <div :class="(role.length === 1 && role[0] === '无') ? `tag-container nodata` : `tag-container`">
          <van-tag v-for="(r) in role" :key="r" type="primary" size="large">{{ r }}</van-tag>
        </div>
      </van-cell-group>
      <div :style="`height:${spliterHeight}px;`" />
      <van-cell-group>
        <van-field class="mine-item" label="所在岗位" readonly input-align="right" :border="false">
          <template #left-icon>
            <rtmicon-station :size="24" />
          </template>
        </van-field>
        <div :class="(station.length === 1 && station[0] === '无') ? `tag-container nodata` : `tag-container`">
          <van-tag v-for="(s) in station" :key="s" type="primary" size="large">{{ s }}</van-tag>
        </div>
      </van-cell-group>
      <div :style="`height:${spliterHeight}px;`" />
      <van-cell-group>
        <van-field class="mine-item" label="所属部门" readonly input-align="right" :border="false">
          <template #left-icon>
            <rtmicon-department :size="24" />
          </template>
        </van-field>
        <div :class="(department.length === 1 && department[0] === '无') ? `tag-container nodata` : `tag-container`">
          <van-tag v-for="(d) in department" :key="d" type="primary" size="large">{{ d }}</van-tag>
        </div>
      </van-cell-group>
      <div :style="`height:${spliterHeight}px;`" />
      <van-cell-group>
        <van-field class="mine-item" label="电子签章" readonly input-align="right" :border="false">
          <template #left-icon>
            <rticon-fillin-data :size="24" />
          </template>
        </van-field>
        <div class="sign-container" @click="navto('/mine/signature', preSignatureInfo)">
          <img v-if="!!signatureImg" style="height:120px;" alt="签名" :src="signatureImg" />
          <div v-else style="height:120px;" />
        </div>
      </van-cell-group>
      <div :style="`height:${spliterHeight}px;`" />
      <div class="op-btn">
        <van-button block @click="logout">
          <template #icon>
            <rticon-run :size="20" color="red" />
          </template>
          退出登录
        </van-button>
      </div>
    </div>
  </rtm-app-container>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { showLoadingToast, closeToast, showToast } from "vant";
import { showConfirmDialog } from "vant";
import accountState from "../com/account-state.vue";
import avatarImg from "@/assets/img/avatar-default.png";
import api from "@/api/home";
import commonApi from "@/api/common";
import ucapi from "@/api/login";

const spliterHeight = 20;
const router = useRouter();

const userRoleInfo = ref({});
const userInfo = ref({});

const avatar = ref(avatarImg);
const signatureImg = ref(null);

const preSignatureInfo = ref({});

// 角色
const role = computed(() => {
  const { value = {} } = userRoleInfo;
  try {
    return value.role.roleName.split("|");
  } catch (err) {
    return ["无"];
  }
});

// 岗位
const station = computed(() => {
  const { value = {} } = userRoleInfo;
  try {
    if (value.post instanceof Array) {
      return value.post.map((item) => {
        return item.postName;
      });
    }
    return ["无"];
  } catch (err) {
    return ["无"];
  }
});

// 部门
const department = computed(() => {
  const { value = {} } = userRoleInfo;
  try {
    return value.org.map((item) => { return item.orgName });
  } catch (err) {
    return ["无"];
  }
});

// ------------------ methods ------------------
const navto = (path) => {
  router.push({ path, query: { ...preSignatureInfo.value } });
};

// 登出
const logout = () => {
  showConfirmDialog({
    title: '退出登录',
    message:
      '您确定要退出登录吗？',
  })
    .then(() => {
      // on confirm
      ucapi.logout().then(() => {
        showToast({
          message: '您已退出登录',
          position: 'bottom'
        });
        router.replace("/login");
      });
    })
    .catch(() => {
      // on cancel
    });
};
// ------------------ created ------------------
showLoadingToast({
  message: '加载中...',
  duration: 0,
  forbidClick: true,
});
// 获取用户信息
api.getUserInfo().then((res) => {
  const { user } = res;
  userRoleInfo.value = res;
  userInfo.value = user;
  // 获取用户头像
  commonApi.getImageByFileId(user.photo, (result) => {
    avatar.value = result
  });
});

// 获取提交签章前的必要信息
api.getPreSignatureInfo().then((res) => {
  preSignatureInfo.value = { ...res };
  // 获取签名图片
  commonApi.getImageByFileId(res.fileId, (result) => {
    signatureImg.value = result
  });
}).finally(() => {
  closeToast();
});

</script>

<style lang="scss" scoped>
.rtm-app-body {
  padding-bottom: 100px;
}

.top-section {
  height: 180px;
  background-image: url('@/assets/img/main-mine-bg.png');
  background-repeat: no-repeat;
  background-size: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;

  .left-icon {
    width: 80px;
    height: 80px;
    margin-right: 20px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .right-content {
    color: #fff;

    p.name {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 24px;
    }

    .account {
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.spliter-line {
  width: calc(100% - 60px);
  height: 1px;
  margin: 0 30px;
  background-color: #eee;
}

.op-btn {
  margin: 0 20px;
}

.tag-container,
.sign-container {
  padding: 10px;
  padding-top: 0;
  padding-bottom: 20px;

  >* {
    margin-top: 10px;
    margin-left: 10px;
  }
}

.sign-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>