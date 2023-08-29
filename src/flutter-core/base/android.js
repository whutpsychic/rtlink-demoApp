import { preName } from "./static"

const android = {};

// 预留的向 flutter 端发送一般信息的默认函数
android.call = (info) => {
  // 规范检测
  if (typeof info != "string")
    throw new Error("android函数中你传给flutter端的信息不是一个字符串,将无法识别!");
  // 平台检测
  if (!window[`${preName}android`]) {
    console.error(
      "你所在的位置于flutter端没有注册android函数,请先行注册方可使用,或者联系zbc!"
    );
    console.warn(
      "如果你在非flutter端调试,那么android函数将不会产生任何作用,且不会影响你继续调试其他功能。"
    );
    return;
  }

  window[`${preName}android`].postMessage(info);
};

export default android;