// 服务器地址
var host = "http://192.168.0.213";
// combine为true时五合一部署, 为false时分五个服务部署
var combine = false;
// 默认的端口排布
var defaultModulePortMap = {
  form: "8082",
  portal: "8084",
  bpmRunTime: "8086",
  bpmModel: "8087",
  uc: "8088",
};
// 工具函数
window.getModuleRootUrl = function (module) {
  // 默认是全部服务合一的端口
  var modulePort = "8088";
  if (!combine) {
    modulePort = defaultModulePortMap[module];
  }
  return host + ":" + modulePort;
};
// 设置上下文环境
window.apiContext = {
  mobile: host + ":8082/mobile", //手机端页面
  form: getModuleRootUrl("form"),
  portal: getModuleRootUrl("portal"),
  bpmRunTime: getModuleRootUrl("bpmRunTime"),
  bpmModel: getModuleRootUrl("bpmModel"),
  uc: getModuleRootUrl("uc"),
};
