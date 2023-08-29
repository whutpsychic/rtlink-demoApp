// app 静态配置总闸
// 如果有动态配置项在这里，那么设置的就是默认的初始状态值
// 如需配置服务器地址相关，请移步 ./sso.js

// ************************** app 启用开发者模式 *************************
// 开发者模式下有如下功能
//  - 此模式下首页将多一条“开发者中心”路由，去往模板页展示效果预览页。
// **********************************************************************
const developing = true;

// ************************** app 默认风格 *******************************
// 之后可以在应用内部动态修改，这里设置的是启动时的初始风格
// 默认为浅色风格
// **********************************************************************
const style = "light";

// ********************* app 是否启用路由切换时的动效 *********************
// 这是一个静态配置项，暂时不支持动态配置
// **********************************************************************
const enableRouterAnimate = true;

// 是否显示“创建流程”按钮
const withCreateProcessBtn = false;

// 下拉列表页单词查询数据条数
const pageSize = 10;

// 模板页假接口的模拟等待时间
const fakeIOTimeout = 1500;









export { developing, style, enableRouterAnimate, pageSize, withCreateProcessBtn, fakeIOTimeout };
