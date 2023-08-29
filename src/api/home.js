import { Base64 } from 'js-base64'
import { request } from "@/utils"

const api = {}

// ------------------------------------------------------

// 首页的额外内容
// 此接口最终的展示内容需配合 <Ht-Column /> 使用，单拿出来没意义。
api.getMobileHome = () => {
  const portalServer = apiContext.portal
  return request({
    url: `${portalServer}/portal/main/v1/myMobileHome`,
    method: 'GET',
  }).then((res) => {
    const layout = JSON.parse(
      Base64.decode(res.value.designHtml) || '{}'
    )
    if (layout && layout.mobileList && layout.mobileList.length > 0) {
      return layout.mobileList
    }
    return []
  })
}

// 此为 <Ht-Column /> 内部调用的一个接口，目前没啥用
api.getInfoByAlias = (alias) => {
  const portalServer = apiContext.portal
  return request({
    url: `${portalServer}/portal/sysIndexColumn/sysIndexColumn/v1/getByAlias`,
    method: 'GET',
    params: { alias }
  })
}

// 获取当前用户的流程中心信息
api.getDefaultInfoMap = () => {
  const bpmRunTime = apiContext.bpmRunTime
  return request({
    url: `${bpmRunTime}/runtime/instance/v1/getDefaultInfoMap`,
    method: 'GET',
  })
}

// 获取未读消息数量
api.getUnreadMsgNumber = () => {
  const portalServer = apiContext.portal
  return request({
    url: `${portalServer}/innermsg/messageReceiver/v1/getMsgbadge`,
    method: 'GET',
  }).then((res) => {
    return res.value || 0
  })
}

// 获取工作台菜单
api.getMenu = () => {
  const portalServer = apiContext.portal
  return request({
    url: `${portalServer}/portal/appModel/v1/getApp?typeKey=appType`,
    method: 'GET',
  })
}

// 获取当前用户信息(详细)
api.getUserInfo = () => {
  const infoStr = sessionStorage.getItem("userInfo")
  const userInfo = JSON.parse(infoStr)
  const ucServer = apiContext.uc
  return request({
    url: `${ucServer}/api/user/v1/user/getDetailByAccountOrId`,
    method: 'POST',
    data: { accountOrId: userInfo.account }
  })
}

// 获取当前用户信息(粗略)
api.getUserInfo2 = () => {
  const ucServer = apiContext.uc
  return request({
    url: `${ucServer}/api/user/v1/user/getByAccount`,
    method: 'POST',
    data: {}
  })
}

// 获取签章前置信息
api.getPreSignatureInfo = () => {
  const ucServer = apiContext.uc
  return request({
    url: `${ucServer}/uc/electronicSeal/v1/getSealByCurrentUserId`,
    method: 'GET',
  })
}

// 保存签名绑定的图片 id
api.saveSignature = (data) => {
  const ucServer = apiContext.uc
  return request({
    url: `${ucServer}/uc/electronicSeal/v1/userSave`,
    method: 'POST',
    data
  })
}

export default api
