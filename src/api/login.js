import { JSEncrypt } from 'jsencrypt'
import { request } from "@/utils"
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
api.login = (loginInfo = {}) => {
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
      // 本地存储
      // 记录 token
      sessionStorage.setItem("authorization", res.token)
      // 记录 user 完整数据
      sessionStorage.setItem("userInfo", JSON.stringify(res))

      return true
    })
    // 登陆失败
    .catch((err) => {
      console.error(err)
    })
}

// 退出登录
api.logout = () => {
  const ucServer = apiContext.uc;
  return request({
    url: `${ucServer}/signout`,
    method: 'GET'
  }).then(() => {
    // 清除本地存储数据
    sessionStorage.clear()
  });
}

export default api
