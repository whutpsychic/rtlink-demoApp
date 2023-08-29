import { request, tool } from "@/utils"

const { generateRandomName, base64ToFile } = tool

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
  let _file = base64ToFile(file, generateRandomName())
  let formData = new FormData()
  formData.append('files', _file)

  const portalServer = apiContext.portal
  return request({
    url: `${portalServer}/system/file/v1/fileUpload`,
    method: 'POST',
    headers: 'Content-Type: multipart/form-data',
    data: formData
  })
}

export default api
