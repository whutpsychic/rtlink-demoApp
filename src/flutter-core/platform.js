import fc from "./index";
import androidCore from "./base/android";
import { argsSpliter } from "./base/static";

// ====================== Android ======================
const android = {};

// 短提示
android.toast = (msg) => {
  androidCore.call(`toast${argsSpliter}${msg}`);
};

// 获取电池信息
android.getBatteryInfo = () => {
  androidCore.call(`battery`);
};

// 
android.await = (name, fn) => {
  if (name === "batteryInfo") {
    fc.register("batteryInfoCallback", fn);
  }
  else if (name === "xxxxxxxxxxx") {
    fc.register("xxxxxxxxxx", fn)
  }
};

// ====================== iOS ======================


export { android };