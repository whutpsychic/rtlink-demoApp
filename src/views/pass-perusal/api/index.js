import { tool } from "@/utils";

const api = {};

// ------------------------------------------------------
// 查询传阅事项列表
api.getPassPerusalList = (page = 1, searchText) => {
  return tool.fakeListIO(page, [
    {
      "id": "1641321214539976704",
      "name": "公司审核",
      "subject": "超级管理员在2023-03-30发起设备调拨上报",
      "procInstId": "1641320240266072064",
      "taskId": "1641320572333314048",
      "nodeId": "UserTask_04jmqet",
      "procDefId": "1641316784360804352",
      "procDefKey": "sbdbsb",
      "procDefName": "设备调拨上报",
      "ownerId": "1",
      "ownerName": "超级管理员",
      "assigneeId": "1",
      "assigneeName": "超级管理员",
      "status": "FOLLOW",
      "createTime": "2023-03-30 14:07:26",
      "suspendState": 0,
      "typeId": "1641280546035712000",
      "supportMobile": 0,
      "isRead": 1,
      "isRevoke": 0,
      "pkVal": "1641321214539976704"
    },
    {
      "id": "1641321214539976704",
      "name": "公司审核",
      "subject": "超级管理员在2023-03-30发起设备调拨上报",
      "procInstId": "1641320240266072064",
      "taskId": "1641320572333314048",
      "nodeId": "UserTask_04jmqet",
      "procDefId": "1641316784360804352",
      "procDefKey": "sbdbsb",
      "procDefName": "设备调拨上报",
      "ownerId": "1",
      "ownerName": "超级管理员",
      "assigneeId": "1",
      "assigneeName": "超级管理员",
      "status": "FOLLOW",
      "createTime": "2023-03-30 14:07:26",
      "suspendState": 0,
      "typeId": "1641280546035712000",
      "supportMobile": 0,
      "isRead": 1,
      "isRevoke": 0,
      "pkVal": "1641321214539976704"
    },
    {
      "id": "1641321214539976704",
      "name": "公司审核",
      "subject": "超级管理员在2023-03-30发起设备调拨上报",
      "procInstId": "1641320240266072064",
      "taskId": "1641320572333314048",
      "nodeId": "UserTask_04jmqet",
      "procDefId": "1641316784360804352",
      "procDefKey": "sbdbsb",
      "procDefName": "设备调拨上报",
      "ownerId": "1",
      "ownerName": "超级管理员",
      "assigneeId": "1",
      "assigneeName": "超级管理员",
      "status": "FOLLOW",
      "createTime": "2023-03-30 14:07:26",
      "suspendState": 0,
      "typeId": "1641280546035712000",
      "supportMobile": 0,
      "isRead": 1,
      "isRevoke": 0,
      "pkVal": "1641321214539976704"
    },
    {
      "id": "1641321214539976704",
      "name": "公司审核",
      "subject": "超级管理员在2023-03-30发起设备调拨上报",
      "procInstId": "1641320240266072064",
      "taskId": "1641320572333314048",
      "nodeId": "UserTask_04jmqet",
      "procDefId": "1641316784360804352",
      "procDefKey": "sbdbsb",
      "procDefName": "设备调拨上报",
      "ownerId": "1",
      "ownerName": "超级管理员",
      "assigneeId": "1",
      "assigneeName": "超级管理员",
      "status": "FOLLOW",
      "createTime": "2023-03-30 14:07:26",
      "suspendState": 0,
      "typeId": "1641280546035712000",
      "supportMobile": 0,
      "isRead": 1,
      "isRevoke": 0,
      "pkVal": "1641321214539976704"
    }
  ]);
};


// 查询我传阅的列表
api.getMyPassPerusalList = (page = 1, searchText) => {
  return tool.fakeListIO(page, []);
};


export default api;