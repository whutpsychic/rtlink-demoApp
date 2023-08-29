import { request } from "@/utils";
import { pageSize } from "@/appConfig";

const api = {};

// 查询主列表
api.getItems = (page = 1, searchText) => {
  const data = {
    querys: [],
    pageBean: {
      page,
      pageSize,
    }
  };

  if (searchText) {
    data.querys.push({ property: "subject", value: searchText, operation: "LIKE", relation: "OR", group: "quickSearch" });
    data.querys.push({ property: "content", value: searchText, operation: "LIKE", relation: "OR", group: "quickSearch" });
  }

  const portalServer = apiContext.portal
  return request({
    url: `${portalServer}/innermsg/messageReceiver/v1/list`,
    method: "POST",
    data
  }).then((res) => {

    if (res && res.rows.length > 0) {
      return res.rows
    }
    return []
  });
};

// 立即处理
api.executeItem = (id) => {
  const portalServer = apiContext.portal
  return request({
    url: `${portalServer}/innermsg/messageReceiver/v1/get`,
    method: "GET",
    params: { id }
  });
};

export default api;