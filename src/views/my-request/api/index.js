import { request, tool } from "@/utils";
import { pageSize } from "@/appCOnfig";

const api = {};

// ------------------------------------------------------
// 查询请求列表
api.getRequestList = (page = 1, searchText, type) => {
  const querys = [];

  switch (type) {
    case "running": querys[0] = { "property": "status_", "value": "running", "operation": "EQUAL", "relation": "AND" };
    case "end": querys[0] = { "property": "status_", "value": "end", "operation": "EQUAL", "relation": "AND" };
    default: ;
  };

  if (!!searchText) {
    querys.push({ "property": "subject_", "value": searchText, "operation": "LIKE", "relation": "OR", "group": "quickSearch" });
    querys.push({ "property": "proc_def_name_", "value": searchText, "operation": "LIKE", "relation": "OR", "group": "quickSearch" });
  };

  const data = {
    pageBean: { page, pageSize },
    querys
  };

  const bpmRunTime = apiContext.bpmRunTime;
  return request({
    url: `${bpmRunTime}/runtime/instance/v1/myMobileRequest`,
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


// 查询草稿列表
api.getDraftList = (page = 1, searchText) => {
  const querys = [{ "property": "status_", "value": "draft", "operation": "EQUAL", "relation": "AND" }];

  if (!!searchText) {
    querys.push({ "property": "subject_", "value": searchText, "operation": "LIKE", "relation": "OR", "group": "quickSearch" });
    querys.push({ "property": "proc_def_name_", "value": searchText, "operation": "LIKE", "relation": "OR", "group": "quickSearch" });
  };

  const data = {
    pageBean: { page, pageSize },
    querys
  };

  const bpmRunTime = apiContext.bpmRunTime;
  return request({
    url: `${bpmRunTime}/runtime/instance/v1/myMobileDraft`,
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


export default api;