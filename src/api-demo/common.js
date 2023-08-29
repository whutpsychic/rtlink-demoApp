import { request } from "@/utils"

const api = {}

// ------------------------------------------------------
// 通用的访问文件接口
api.getImageByFileId = (fileId, callback) => {
  const portalServer = apiContext.portal
  return request({
    url: `${portalServer}/system/file/v1/preview`,
    method: 'GET',
    responseType: 'blob',
    params: { fileId }
  }).then((res) => {
    if (res.size > 0) {
      var blob = res;
      var reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = function (e) {
        callback(e.target.result);
      };
    } else {
      callback()
    }
  })
}

// 通用的上传文件接口
api.uploadFile = (file) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
}

export default api
