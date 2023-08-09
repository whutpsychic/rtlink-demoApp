import axios from 'axios'
import { showNotify } from 'vant'
import store from '@/store'
import router from '@/router'

// ================ 设置默认的超时时间 20s ================
axios.defaults.timeout = 20000
// =======================================================

// 请求拦截（配置发送请求的信息）
axios.interceptors.request.use(
  // fn
  (config) => {
    // 开始加载
    store.commit("markLoading", true)  // 全局标识正在请求

    config.headers = config.headers || {}
    if (config.headers && config.headers.constructor === String) {
      try {
        config.headers = JSON.parse(config.headers)
      } catch (err) {
        console.error(`请求头部不是有效的JSON格式:${config.headers}`)
        throw err
      }
    }
    config.headers['Accept-Language'] = localStorage.getItem('lang') || 'zh-CN'
    // if (store.state.loginAccount) {
    //   config.headers['Tenant-Code'] =
    //     localStorage
    //       .getItem(store.state.loginAccount + 'loginRoutePath')
    //       .replace('/login/', '') || ''
    // }
    const { currentUser } = store.state
    if (currentUser.token && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${currentUser.token}`
    }
    // 如果是请求 auth 接口，则不带 token
    if (config.url.indexOf('/auth?') !== -1) {
      delete config.headers.Authorization
    }
    // 如果是请求 sso 接口，则不带 token
    if (config.url.indexOf('/sso/') !== -1) {
      delete config.headers.Authorization
    }
    // 判断是否需要刷新token
    let currentTime = new Date().getTime()
    if (currentUser.loginTime
      && (currentTime - currentUser.loginTime >= (currentUser.expiration / 5) * 1000)
      && config.url.indexOf('/refresh') === -1
    ) {
      // $store.dispatch('login/refreshAndGetAuthenticationToken')
    }
    return config
  },
  // error
  (error) => {
    // 请求失败的处理
    return Promise.reject(error)
  }
)

// 响应拦截（配置请求回来的信息）
axios.interceptors.response.use(
  (res) => {
    // 处理响应数据
    let isShowMessage =
      res.config.isShowMessage !== undefined ? res.config.isShowMessage : true
    if (
      res.data &&
      res.data.state != undefined &&
      res.data.state === false &&
      isShowMessage
    ) {
      showNotify({ type: 'danger', message: res.data.message })
    }
    // 加载结束
    store.commit("markLoading", false)  // 全局标识加载结束

    // // 附件下载
    // if (
    //   res &&
    //   res.status == 200 &&
    //   res.headers &&
    //   res.headers['content-disposition'] &&
    //   res.headers['content-disposition'].startsWith('attachment;')
    // ) {
    //   let blob = new Blob([res.data])
    //   const fileName = decodeURIComponent(
    //     res.headers['content-disposition'].split(';')[1].split('filename=')[1]
    //   )
    //   saveAs(blob, fileName)
    // }
    return res
  },
  (error) => {
    // 处理响应失败
    const errorMessage =
      error &&
        error.response &&
        error.response.data &&
        error.response.data.message
        ? error.response.data.message
        : error.message
    if (error && error.response && error.response.status === 401) {
      // $store.dispatch('login/clearCurrentUser')
      // 错误则返回登陆
      router.replace({ path: '/login' })
    } else if (error && error.response && error.response.status === 403) {
      showNotify({ type: 'danger', message: errorMessage })
    } else if (error && error.response && error.response.status === 500) {
      if (error.response.data && error.response.data.message) {
        //如果是jwt超时了
        if (error.response.data.message.indexOf('JWT expired at') >= 0) {
          showNotify({ type: 'warning', message: '登录认证超时，请重新登录！' })
        } else {
          showNotify({ type: 'danger', message: error.response.data.message })
        }
      } else {
        showNotify({ type: 'danger', message: error.message })
      }
    } else if (errorMessage && typeof errorMessage != 'undefined') {
      //如果是jwt超时了
      if (errorMessage.indexOf('JWT expired at') >= 0) {
        showNotify({ type: 'warning', message: '登录认证超时，请重新登录！' })
      } else {
        showNotify({ type: 'danger', message: errorMessage })
      }
    }
    return Promise.reject(error)
  }
)

// -------------------- tool --------------------
const parseUrl = (url) => {
  if (url === '') return
  var ctx = apiContext,
    reg = /^(\$\{(\w+)\})\/.*$/

  var match = reg.exec(url)
  if (match != null) {
    var name = match[2],
      mc = match[1],
      val = ctx[name]
    if (!val) {
      throw new Error(
        "The '" +
        name +
        "' in url:" +
        url +
        ' does not defined in context provider.'
      )
    }
    return url.replace(mc, val)
  } else {
    return url
  }
}
// ----------------------------------------------
const request = ({ url, method, data, params, onUploadProgress, headers, responseType, isShowMessage }) => {
  let reqData = data || {}
  //支持表达式作为域名解析
  url = parseUrl(url)
  //统一拼接域名接口
  // if (url.indexOf('http') == -1) {
  //   url = context.mobile + url
  // }
  let requestData = {
    url,
    data: reqData,
    method: method || 'GET',
    params: params || {},
    headers: headers || "Content-Type:application/json",
    onUploadProgress: onUploadProgress || null,
    responseType: responseType || 'json',
    isShowMessage: isShowMessage,
  }

  console.log(requestData)
  return axios(requestData)
}

export default request;

// export default {
//   request(data) {
//     let reqData = data.data || {}
//     //支持表达式作为域名解析
//     data.url = this.parseUrl(data.url)
//     //统一拼接域名接口
//     if (data.url.indexOf('http') == -1) {
//       data.url = context.mobile + data.url
//     }
//     let requestData = {
//       url: data.url,
//       data: reqData,
//       method: data.method || 'GET',
//       params: data.params || {},
//       onUploadProgress: data.onUploadProgress || null,
//       headers: data.headers || '',
//       responseType: data.responseType || 'json',
//       isShowMessage: data.isShowMessage,
//     }
//     return axios(requestData)
//   },
//   download(url) {
//     return this.request({ url, responseType: 'arraybuffer' })
//   },
//   get(url, type, isShowMessage) {
//     return this.request({
//       url,
//       responseType: type,
//       isShowMessage: isShowMessage,
//     })
//   },
//   post(url, data, responseType) {
//     return this.request({
//       url,
//       data,
//       method: 'POST',
//       responseType: responseType,
//     })
//   },
//   remove(url) {
//     return this.request({ url, method: 'DELETE' })
//   },
//   getContext() {
//     return context
//   },

// }
