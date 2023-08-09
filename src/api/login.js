import request from "@/utils/request.js"
import { JSEncrypt } from 'jsencrypt'
import store from "@/store"

const api = {}

// ------------------------ tool ------------------------
const encryptWithRsa = (string) => {
  let encrypt = new JSEncrypt()
  let key = window.eipRSAPublicKey
  if (!key) {
    key =
      'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCMnhQ99yP-eEU2jXdQWc6j-wWbqNLqOLinEGBY11WJUCmzHiEycDXPc6-3YMOvrdAiHZcjkMCzU_eRnBLUqkcNw9nhQrCak-sTpEVlAV21LskD6KMf-6PsfttUvpXeCO5g3Hg48F_vbLKxb8s_lcvQgCpKBIpsUdYRcp_PgSg8BQIDAQAB'
  }
  encrypt.setPublicKey(key)
  return encrypt.encrypt(string)
}
// ------------------------------------------------------

// 主登录
api.login = (loginInfo = {}, callback, errorCallback) => {
  const ucServer = apiContext.uc
  return request({
    url: `${ucServer}/auth?tenantId=${loginInfo.tenantId || ''}`,
    method: 'POST',
    data: {
      username: loginInfo.account,
      password: encryptWithRsa(loginInfo.password),
    },
  })
    // 登录成功
    .then((res) => {
      // 记录 token
      store.commit("recordUser", res.data)
      return true
    })
    // 登陆失败
    .catch((err) => {
      console.error(err)
      store.commit("clearUser")
    })
}

export default api
