import { fakeIOTimeout } from "@/appConfig";

const tool = {};

// 生成一个随机名字作为上传的文件名
tool.generateRandomName = () => {
  // 随机获取值 当作文件名称
  var s = []
  var hexDigits = '0123456789abcdef'
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4'
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
  s[8] = s[13] = s[18] = s[23] = '-'

  return s.join('')
};

//
tool.base64ToFile = (urlData, fileName) => {
  let arr = urlData.split(',')
  let mime = arr[0].match(/:(.*?);/)[1]
  let bytes = atob(arr[1]) // 解码base64
  let n = bytes.length
  let ia = new Uint8Array(n)
  while (n--) {
    ia[n] = bytes.charCodeAt(n)
  }
  return new File([ia], fileName, { type: mime })
};

tool.countDate = (date) => {
  var currentDate = new Date().getTime();
  date = new Date(date.replace(/-/g, '/')).getTime();
  if (date != undefined) {
    var total = (currentDate - date) / 1000;
    var day = parseInt(total / (24 * 60 * 60)); //计算整数天数
    var afterDay = total - day * 24 * 60 * 60; //取得算出天数后剩余的秒数
    var hour = parseInt(afterDay / (60 * 60)); //计算整数小时数
    var afterHour = total - day * 24 * 60 * 60 - hour * 60 * 60; //取得算出小时数后剩余的秒数
    var min = parseInt(afterHour / 60); //计算整数分
    var afterMin = parseInt(total - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60); //取得算出分后剩余的秒数
    var val = "";
    if (day != 0) {
      val += day + "天";
    }
    if (hour != 0) {
      val += hour + "小时";
    }
    if (min != 0) {
      val += min + "分钟";
      if (afterMin != 0) {
        val += afterMin + "秒前";
      }
    } else {
      val += "刚刚";
    }
    return val;
  }
}

// 处理通用的假接口函数
tool.fakeIO = (result) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result);
    }, fakeIOTimeout)
  })
}

tool.fakeListIO = (page, result) => {
  const r = Math.random() > 0.5;
  return new Promise((resolve) => {
    setTimeout(() => {
      if (page === 1) {
        resolve(result);
      } else {
        if (r) {
          resolve(result);
        } else {
          resolve([]);
        }
      }
    }, fakeIOTimeout);
  });
};

export default tool;