import { request, tool } from "@/utils";
import { pageSize } from "@/appCOnfig";

const api = {};

// ------------------------------------------------------
// 查询待办列表
api.getTodos = (page = 1, searchText) => {
  const querys = searchText ? [
    { property: "bt.subject_", value: searchText, operation: "LIKE", relation: "OR", group: "quickSearch" },
    { property: "bt.proc_def_name_", value: searchText, operation: "LIKE", relation: "OR", group: "quickSearch" }
  ] : [];

  const data = {
    pageBean: { page, pageSize },
    params: { isMobile: "true" },
    querys
  };

  const bpmRunTime = apiContext.bpmRunTime;
  return request({
    url: `${bpmRunTime}/runtime/task/v1/getTodoList`,
    method: 'POST',
    data
  }).then((res) => {
    if (res.rows && res.rows.length > 0) {
      return res.rows;
    } else {
      return [];
    }
  });
};

// 查询已办列表
api.getDones = (page = 1, searchText) => {
  const querys = searchText ? [
    { property: "bt.subject_", value: searchText, operation: "LIKE", relation: "OR", group: "quickSearch" },
    { property: "bt.proc_def_name_", value: searchText, operation: "LIKE", relation: "OR", group: "quickSearch" }
  ] : [];

  const data = {
    pageBean: { page, pageSize },
    params: { isMobile: "true" },
    querys
  };

  const bpmRunTime = apiContext.bpmRunTime;
  return request({
    url: `${bpmRunTime}/runtime/instance/v1/getDoneInstList`,
    method: 'POST',
    data
  }).then((res) => {
    if (res.rows && res.rows.length > 0) {
      return res.rows;
    } else {
      return [];
    }
  });
};

// 查询更多信息(已办)
api.getMoreInfoById = (id) => {
  const bpmRunTime = apiContext.bpmRunTime;
  return request({
    url: `${bpmRunTime}/runtime/instance/v1/get`,
    method: 'GET',
    params: { id }
  })
}



export default api;