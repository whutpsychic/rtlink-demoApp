const api = {}

// ------------------------ tool ------------------------
// ------------------------------------------------------

// 主登录
api.login = (loginInfo = {}) => {
  const { account, password } = loginInfo;
  if (account === "admin" && password === "123456") {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000)
    })
  } else {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(false);
      }, 1000)
    })
  }
}

// 退出登录
api.logout = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000)
  })
}

export default api
