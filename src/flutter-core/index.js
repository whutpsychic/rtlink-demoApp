// =======================================
// 本模块为 flutter 与 h5 相互通信的对接模块
// 开发者：zbc
// 创建日期：2021-06-07
// 上次修改日期：2023-05-18
// =======================================
import fc from "./base/core.js";
import service_base from "./service_base.js";
import service_device from "./service_device.js";

const module = {};

// 初始化
// 此函数用于挂载默认设置,仅需在应用起始位置调用一次即可
module.init = (router) => {

  // 注册后退函数（供flutter调用）
  fc.register("goback", () => {
    router.back();
  });
};

// 注册从 flutter 端来的回调函数
module.await = (name, fn) => {
  // 模态提示互动返回
  if (name === "modalTips") {
    fc.register("modalTipsCallback", fn);
  }
  // 模态确认动作互动返回
  else if (name === "modalConfirm") {
    fc.register("modalConfirmCallback", fn);
  }
  // 监听扫码
  else if (name === "scanner") {
    fc.register("scannerCallback", fn);
  }
  // 监听读取本地缓存
  else if (name === "readLocal") {
    fc.register("readLocalCallback", fn);
  }
  // 网络连接状态
  else if (name === "checkNetworkType") {
    fc.register("checkNetworkTypeCallback", fn);
  }
  // 监听获取到的安全高度
  else if (name === "getSafeHeight") {
    fc.register("getSafeHeightCallback", fn);
  }
};

// 卸载函数
module.uninstall = (name) => {
  if (name === "modalTips") {
    fc.unregister("modalTipsCallback");
  } else if (name === "modalConfirm") {
    fc.unregister("modalConfirmCallback");
  }
};

// *************************** 系统通用 ***************************
// 注册/卸载函数
module.register = fc.register;
module.unregister = fc.unregister;

// 预留的万能通道函数
module.call = fc.call;

export default { ...module, ...service_base, ...service_device };