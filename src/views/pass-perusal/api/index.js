import { request, tool } from "@/utils";
import { pageSize } from "@/appCOnfig";

const api = {};

// ------------------------------------------------------
// 查询传阅事项列表
api.getPassPerusalList = (page = 1, searchText) => {
  const querys = [];

  if (!!searchText) {
    querys.push({ "property": "bpm_pro_inst.subject_", "value": searchText, "operation": "LIKE", "relation": "OR", "group": "main1" });
    querys.push({ "property": "bpm_pro_inst.proc_def_name_", "value": searchText, "operation": "LIKE", "relation": "OR", "group": "main1" });
  };

  const data = {
    pageBean: { page, pageSize },
    querys
  };

  const bpmRunTime = apiContext.bpmRunTime;
  return request({
    url: `${bpmRunTime}/runtime/task/v1/getNoticeTodoReadList`,
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


// 查询我传阅的列表
api.getMyPassPerusalList = (page = 1, searchText) => {
  const querys = [];

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
    url: `${bpmRunTime}/runtime/task/v1/getMyNoticeReadList`,
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