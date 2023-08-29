import { tool } from "@/utils";

const api = {};

// ------------------------------------------------------
// 查询待办列表
api.getTodos = (page = 1, searchText) => {
  const result = [
    {
      "id": "1692112552084340736",
      "name": "审核",
      "subject": "超级管理员在2023-08-17发起作业检修执行",
      "taskId": "1692112552084340736",
      "execId": "1692112548217192448",
      "nodeId": "UserTask_0mq2zgx",
      "procInstId": "1692112547038593024",
      "procDefId": "1650688435837919232",
      "instIsForbidden": "0",
      "procDefKey": "zyjxzx",
      "procDefName": "作业检修执行",
      "ownerId": "1",
      "assigneeId": "1",
      "assigneeName": "超级管理员",
      "ownerName": "超级管理员",
      "status": "NORMAL",
      "priority": 50,
      "suspendState": 1,
      "parentId": "0",
      "bpmnInstId": "1692112548217192448",
      "bpmnDefId": "zyjxzx:1:1650688435716284416",
      "typeId": "1689171839449186304",
      "supportMobile": 1,
      "createTime": "2023-08-17 17:54:05",
      "skipResult": {
        "hasGetSkip": false,
        "skipTask": false,
        "skipType": "sameUser"
      },
      "createDate": "2023-08-17 17:54:04",
      "creatorId": "1",
      "creator": "超级管理员",
      "instStatus": "running",
      "leaderIds": "",
      "dueTaskTime": 0,
      "dueUseTaskTime": 0,
      "dueStatus": 0,
      "urgentStateValue": "",
      "identityEmpty": false,
      "bpmnTask": true,
      "gateway_": false,
      "gateWay": false,
      "pkVal": "1692112552084340736"
    },
    {
      "id": "1686933019819474944",
      "name": "用户任务",
      "subject": "超级管理员在2023-08-03发起作业票",
      "taskId": "1686933019819474944",
      "execId": "1686933016493391872",
      "nodeId": "UserTask_1phkmmq",
      "procInstId": "1686933015214129152",
      "procDefId": "1641730332836646912",
      "instIsForbidden": "0",
      "procDefKey": "zyp",
      "procDefName": "作业票",
      "ownerId": "1",
      "assigneeId": "1",
      "assigneeName": "超级管理员",
      "ownerName": "超级管理员",
      "status": "NORMAL",
      "priority": 50,
      "suspendState": 1,
      "parentId": "0",
      "bpmnInstId": "1686933016493391872",
      "bpmnDefId": "zyp:1:1641730338356350976",
      "typeId": "1620348666721505280",
      "supportMobile": 1,
      "createTime": "2023-08-03 10:52:28",
      "skipResult": {
        "hasGetSkip": false,
        "skipTask": false,
        "skipType": "sameUser"
      },
      "createDate": "2023-08-03 10:52:27",
      "creatorId": "1",
      "creator": "超级管理员",
      "instStatus": "running",
      "leaderIds": "",
      "dueTaskTime": 0,
      "dueUseTaskTime": 0,
      "dueStatus": 0,
      "urgentStateValue": "",
      "identityEmpty": false,
      "bpmnTask": true,
      "gateway_": false,
      "gateWay": false,
      "pkVal": "1686933019819474944"
    },
    {
      "id": "1686673559981096960",
      "name": "审核",
      "subject": "超级管理员在2023-08-02发起备件入库审核流",
      "taskId": "1686673559981096960",
      "execId": "1686673556067811328",
      "nodeId": "UserTask_0e1jlqq",
      "procInstId": "1686673554465587200",
      "procDefId": "1641603711777525760",
      "instIsForbidden": "0",
      "procDefKey": "bjrkshl",
      "procDefName": "备件入库审核流",
      "ownerId": "0",
      "assigneeId": "61120",
      "assigneeName": "系统管理员",
      "ownerName": "",
      "status": "NORMAL",
      "priority": 50,
      "suspendState": 1,
      "parentId": "0",
      "bpmnInstId": "1686673556067811328",
      "bpmnDefId": "bjrkshl:1:1641603745130631168",
      "typeId": "1641280546035712000",
      "supportMobile": 1,
      "createTime": "2023-08-02 17:41:28",
      "skipResult": {
        "hasGetSkip": false,
        "skipTask": false,
        "skipType": "sameUser"
      },
      "createDate": "2023-08-02 17:41:27",
      "creatorId": "1",
      "creator": "超级管理员",
      "instStatus": "running",
      "leaderIds": "",
      "dueTaskTime": 0,
      "dueUseTaskTime": 0,
      "dueStatus": 0,
      "urgentStateValue": "",
      "identityEmpty": false,
      "bpmnTask": true,
      "gateway_": false,
      "gateWay": false,
      "pkVal": "1686673559981096960"
    },
    {
      "id": "1681924000511844352",
      "name": "用户任务",
      "subject": "超级管理员在2023-07-20发起安环计划审批流程",
      "taskId": "1681924000511844352",
      "execId": "1681923991783497728",
      "nodeId": "UserTask_1bupc3b",
      "procInstId": "1681923987375284224",
      "procDefId": "1641730331435749376",
      "instIsForbidden": "0",
      "procDefKey": "ahjhsplc",
      "procDefName": "安环计划审批流程",
      "ownerId": "1",
      "assigneeId": "1",
      "assigneeName": "超级管理员",
      "ownerName": "超级管理员",
      "status": "NORMAL",
      "priority": 50,
      "suspendState": 1,
      "parentId": "0",
      "bpmnInstId": "1681923991783497728",
      "bpmnDefId": "ahjhsplc:1:1641730332224278529",
      "typeId": "1620348666721505280",
      "supportMobile": 1,
      "createTime": "2023-07-20 15:08:25",
      "skipResult": {
        "hasGetSkip": false,
        "skipTask": false,
        "skipType": "sameUser"
      },
      "createDate": "2023-07-20 15:08:22",
      "creatorId": "1",
      "creator": "超级管理员",
      "instStatus": "running",
      "leaderIds": "",
      "dueTaskTime": 0,
      "dueUseTaskTime": 0,
      "dueStatus": 0,
      "urgentStateValue": "",
      "identityEmpty": false,
      "bpmnTask": true,
      "gateway_": false,
      "gateWay": false,
      "pkVal": "1681924000511844352"
    },
    {
      "id": "1676425234719588352",
      "name": "审核",
      "subject": "超级管理员在2023-07-05发起作业检修执行",
      "taskId": "1676425234719588352",
      "execId": "1676425230894383104",
      "nodeId": "UserTask_0mq2zgx",
      "procInstId": "1676425229489291264",
      "procDefId": "1650688435837919232",
      "instIsForbidden": "0",
      "procDefKey": "zyjxzx",
      "procDefName": "作业检修执行",
      "ownerId": "1",
      "assigneeId": "1",
      "assigneeName": "超级管理员",
      "ownerName": "超级管理员",
      "status": "NORMAL",
      "priority": 50,
      "suspendState": 1,
      "parentId": "0",
      "bpmnInstId": "1676425230894383104",
      "bpmnDefId": "zyjxzx:1:1650688435716284416",
      "typeId": "1641280546035712000",
      "supportMobile": 1,
      "createTime": "2023-07-05 10:58:17",
      "skipResult": {
        "hasGetSkip": false,
        "skipTask": false,
        "skipType": "sameUser"
      },
      "createDate": "2023-07-05 10:58:16",
      "creatorId": "1",
      "creator": "超级管理员",
      "instStatus": "running",
      "leaderIds": "",
      "dueTaskTime": 0,
      "dueUseTaskTime": 0,
      "dueStatus": 0,
      "urgentStateValue": "",
      "identityEmpty": false,
      "bpmnTask": true,
      "gateway_": false,
      "gateWay": false,
      "pkVal": "1676425234719588352"
    },
    {
      "id": "1676425033753706496",
      "name": "审核",
      "subject": "超级管理员在2023-07-05发起备件入库审核流",
      "taskId": "1676425033753706496",
      "execId": "1676425029446156288",
      "nodeId": "UserTask_0e1jlqq",
      "procInstId": "1676425027399335936",
      "procDefId": "1641603711777525760",
      "instIsForbidden": "0",
      "procDefKey": "bjrkshl",
      "procDefName": "备件入库审核流",
      "ownerId": "0",
      "assigneeId": "61120",
      "assigneeName": "系统管理员",
      "ownerName": "",
      "status": "NORMAL",
      "priority": 50,
      "suspendState": 1,
      "parentId": "0",
      "bpmnInstId": "1676425029446156288",
      "bpmnDefId": "bjrkshl:1:1641603745130631168",
      "typeId": "1641280546035712000",
      "supportMobile": 1,
      "createTime": "2023-07-05 10:57:29",
      "skipResult": {
        "hasGetSkip": false,
        "skipTask": false,
        "skipType": "sameUser"
      },
      "createDate": "2023-07-05 10:57:28",
      "creatorId": "1",
      "creator": "超级管理员",
      "instStatus": "running",
      "leaderIds": "",
      "dueTaskTime": 0,
      "dueUseTaskTime": 0,
      "dueStatus": 0,
      "urgentStateValue": "",
      "identityEmpty": false,
      "bpmnTask": true,
      "gateway_": false,
      "gateWay": false,
      "pkVal": "1676425033753706496"
    },
    {
      "id": "1666621328615424000",
      "name": "部门审核",
      "subject": "超级管理员在2023-06-08发起设备调拨上报",
      "taskId": "1666621328615424000",
      "execId": "1666621324660195328",
      "nodeId": "UserTask_0wlkhkz",
      "procInstId": "1666621320738521088",
      "procDefId": "1641358746015125504",
      "instIsForbidden": "0",
      "procDefKey": "sbdbsb",
      "procDefName": "设备调拨上报",
      "ownerId": "0",
      "assigneeId": "61120",
      "assigneeName": "系统管理员",
      "ownerName": "",
      "status": "NORMAL",
      "priority": 50,
      "suspendState": 1,
      "parentId": "0",
      "bpmnInstId": "1666621324660195328",
      "bpmnDefId": "sbdbsb:4:1641358745486643200",
      "typeId": "1641280546035712000",
      "supportMobile": 1,
      "createTime": "2023-06-08 09:41:04",
      "skipResult": {
        "hasGetSkip": false,
        "skipTask": false,
        "skipType": "sameUser"
      },
      "createDate": "2023-06-08 09:41:02",
      "creatorId": "1",
      "creator": "超级管理员",
      "instStatus": "running",
      "leaderIds": "",
      "dueTaskTime": 0,
      "dueUseTaskTime": 0,
      "dueStatus": 0,
      "urgentStateValue": "",
      "identityEmpty": false,
      "bpmnTask": true,
      "gateway_": false,
      "gateWay": false,
      "pkVal": "1666621328615424000"
    },
    {
      "id": "1659507843993583616",
      "name": "提交审核",
      "subject": "超级管理员在2023-05-19发起备件入库审核流",
      "taskId": "1659507843993583616",
      "execId": "1659507450173603840",
      "nodeId": "UserTask_043do24",
      "procInstId": "1659507448898535424",
      "procDefId": "1641603711777525760",
      "instIsForbidden": "0",
      "procDefKey": "bjrkshl",
      "procDefName": "备件入库审核流",
      "ownerId": "1",
      "assigneeId": "1",
      "assigneeName": "超级管理员",
      "ownerName": "超级管理员",
      "status": "BACK",
      "priority": 50,
      "suspendState": 1,
      "parentId": "0",
      "bpmnInstId": "1659507450173603840",
      "bpmnDefId": "bjrkshl:1:1641603745130631168",
      "typeId": "1641280546035712000",
      "supportMobile": 1,
      "createTime": "2023-05-19 18:34:37",
      "skipResult": {
        "hasGetSkip": false,
        "skipTask": false,
        "skipType": "sameUser"
      },
      "createDate": "2023-05-19 18:33:03",
      "creatorId": "1",
      "creator": "超级管理员",
      "instStatus": "backToStart",
      "leaderIds": "",
      "dueTaskTime": 0,
      "dueUseTaskTime": 0,
      "dueStatus": 0,
      "urgentStateValue": "",
      "identityEmpty": false,
      "bpmnTask": true,
      "gateway_": false,
      "gateWay": false,
      "pkVal": "1659507843993583616"
    },
    {
      "id": "1659123060864073728",
      "name": "提交审核",
      "subject": "超级管理员在2023-05-18发起备件入库审核流",
      "taskId": "1659123060864073728",
      "execId": "1659114410502144000",
      "nodeId": "UserTask_043do24",
      "procInstId": "1659114408593735680",
      "procDefId": "1641603711777525760",
      "instIsForbidden": "0",
      "procDefKey": "bjrkshl",
      "procDefName": "备件入库审核流",
      "ownerId": "1",
      "assigneeId": "1",
      "assigneeName": "超级管理员",
      "ownerName": "超级管理员",
      "status": "BACK",
      "priority": 50,
      "suspendState": 1,
      "parentId": "0",
      "bpmnInstId": "1659114410502144000",
      "bpmnDefId": "bjrkshl:1:1641603745130631168",
      "typeId": "1641280546035712000",
      "supportMobile": 1,
      "createTime": "2023-05-18 17:05:37",
      "skipResult": {
        "hasGetSkip": false,
        "skipTask": false,
        "skipType": "sameUser"
      },
      "createDate": "2023-05-18 16:31:15",
      "creatorId": "1",
      "creator": "超级管理员",
      "instStatus": "backToStart",
      "leaderIds": "",
      "dueTaskTime": 0,
      "dueUseTaskTime": 0,
      "dueStatus": 0,
      "urgentStateValue": "",
      "identityEmpty": false,
      "bpmnTask": true,
      "gateway_": false,
      "gateWay": false,
      "pkVal": "1659123060864073728"
    },
    {
      "id": "1658638133273968640",
      "name": "审核",
      "subject": "超级管理员在2023-05-17发起检修计划提交验收",
      "taskId": "1658638133273968640",
      "execId": "1658638127364194304",
      "nodeId": "UserTask_0xazxfb",
      "procInstId": "1658638126839906304",
      "procDefId": "1641687666639917056",
      "instIsForbidden": "0",
      "procDefKey": "jxjhtjys",
      "procDefName": "检修计划提交验收",
      "ownerId": "0",
      "assigneeId": "61120",
      "assigneeName": "系统管理员",
      "ownerName": "",
      "status": "NORMAL",
      "priority": 50,
      "suspendState": 1,
      "parentId": "0",
      "bpmnInstId": "1658638127364194304",
      "bpmnDefId": "jxjhtjys:1:1641687666115629056",
      "typeId": "1641280546035712000",
      "supportMobile": 1,
      "createTime": "2023-05-17 08:58:42",
      "skipResult": {
        "hasGetSkip": false,
        "skipTask": false,
        "skipType": "sameUser"
      },
      "createDate": "2023-05-17 08:58:40",
      "creatorId": "1",
      "creator": "超级管理员",
      "instStatus": "running",
      "leaderIds": "",
      "dueTaskTime": 0,
      "dueUseTaskTime": 0,
      "dueStatus": 0,
      "urgentStateValue": "",
      "identityEmpty": false,
      "bpmnTask": true,
      "gateway_": false,
      "gateWay": false,
      "pkVal": "1658638133273968640"
    }
  ];
  return tool.fakeListIO(page, result);
};

// 查询已办列表
api.getDones = (page = 1, searchText) => {
  const r = Math.random() > 0.5;
  const result = [
    {
      "subject": "超级管理员在2023-08-25发起车牌号：-发货单位：-收货单位：的车辆预约",
      "duration": 14103606,
      "updateBy": "1",
      "isFormmal": "N",
      "id": "1694914316315541504",
      "resultType": "agree",
      "procDefKey": "clyysplc",
      "bpmnInstId": "1694973412720918528",
      "supportMobile": 0,
      "creator": "超级管理员",
      "id_": "1694914316315541504",
      "isDele": 0,
      "completeTime": "2023-08-25 15:22:21",
      "updateTime": "2023-08-25 15:22:22",
      "procDefId": "1694570853107691520",
      "bpmnDefId": "clyysplc:4:1694570851690016768",
      "createOrgId": "1637629630434766848",
      "createBy": "1",
      "dataMode": "bo",
      "isForbidden": 0,
      "createTime": "2023-08-25 11:27:18",
      "parentInstId": "0",
      "endTime": "2023-08-25 15:22:22",
      "procDefName": "车辆预约审批",
      "nodeId": "EndEvent_1tc94ih",
      "taskId": "1694973417645031424",
      "status": "end"
    },
    {
      "subject": "超级管理员在2023-08-24发起车牌号：鲁FBH605-发货单位：江铜国兴铜业有限公司-收货单位：青岛金盛美达铜业有限公司的车辆预约",
      "duration": 45962084,
      "updateBy": "1",
      "isFormmal": "N",
      "id": "1694722456976506880",
      "resultType": "agree",
      "procDefKey": "clyysplc",
      "bpmnInstId": "1694722457786007552",
      "supportMobile": 0,
      "creator": "超级管理员",
      "id_": "1694722456976506880",
      "isDele": 0,
      "completeTime": "2023-08-25 11:30:57",
      "updateTime": "2023-08-25 11:30:57",
      "procDefId": "1694570853107691520",
      "bpmnDefId": "clyysplc:4:1694570851690016768",
      "createOrgId": "1637629630434766848",
      "createBy": "1",
      "dataMode": "bo",
      "isForbidden": 0,
      "createTime": "2023-08-24 22:44:55",
      "parentInstId": "0",
      "endTime": "2023-08-25 11:30:57",
      "procDefName": "车辆预约审批",
      "nodeId": "UserTask_1e0hq5o",
      "taskId": "1694722463519621120",
      "status": "end"
    },
    {
      "subject": "超级管理员在2023-08-25发起车牌号：鲁FBH605-发货单位：江铜国兴铜业有限公司-收货单位：烟台市福坤金属材料有限公司的车辆预约",
      "duration": 31410,
      "updateBy": "1",
      "isFormmal": "N",
      "id": "1694901197191135232",
      "resultType": "agree",
      "procDefKey": "clyysplc",
      "bpmnInstId": "1694901197866418176",
      "supportMobile": 0,
      "creator": "超级管理员",
      "id_": "1694901197191135232",
      "isDele": 0,
      "completeTime": "2023-08-25 10:35:41",
      "updateTime": "2023-08-25 10:35:41",
      "procDefId": "1694570853107691520",
      "bpmnDefId": "clyysplc:4:1694570851690016768",
      "createOrgId": "1637629630434766848",
      "createBy": "1",
      "dataMode": "bo",
      "isForbidden": 0,
      "createTime": "2023-08-25 10:35:10",
      "parentInstId": "0",
      "endTime": "2023-08-25 10:35:41",
      "procDefName": "车辆预约审批",
      "nodeId": "UserTask_1e0hq5o",
      "taskId": "1694901201930698752",
      "status": "end"
    },
    {
      "subject": "超级管理员在2023-08-25发起车牌号：鲁FBH605-发货单位：江铜国兴铜业有限公司-收货单位：烟台市嘉耐盛商贸有限公司的车辆预约",
      "duration": 37968,
      "updateBy": "1",
      "isFormmal": "N",
      "id": "1694900621543882752",
      "resultType": "agree",
      "procDefKey": "clyysplc",
      "bpmnInstId": "1694900622680539136",
      "supportMobile": 0,
      "creator": "超级管理员",
      "id_": "1694900621543882752",
      "isDele": 0,
      "completeTime": "2023-08-25 10:33:31",
      "updateTime": "2023-08-25 10:33:31",
      "procDefId": "1694570853107691520",
      "bpmnDefId": "clyysplc:4:1694570851690016768",
      "createOrgId": "1637629630434766848",
      "createBy": "1",
      "dataMode": "bo",
      "isForbidden": 0,
      "createTime": "2023-08-25 10:32:53",
      "parentInstId": "0",
      "endTime": "2023-08-25 10:33:31",
      "procDefName": "车辆预约审批",
      "nodeId": "UserTask_1e0hq5o",
      "taskId": "1694900628099579904",
      "status": "end"
    },
    {
      "subject": "超级管理员在2023-08-24发起车牌号：鲁FBH605-发货单位：江铜国兴铜业有限公司-收货单位：烟台荣润经贸有限公司的车辆预约",
      "duration": 186932,
      "updateBy": "1",
      "isFormmal": "N",
      "id": "1694736957947920384",
      "resultType": "agree",
      "procDefKey": "clyysplc",
      "bpmnInstId": "1694736958958747648",
      "supportMobile": 0,
      "creator": "超级管理员",
      "id_": "1694736957947920384",
      "isDele": 0,
      "completeTime": "2023-08-24 23:45:39",
      "updateTime": "2023-08-24 23:45:39",
      "procDefId": "1694570853107691520",
      "bpmnDefId": "clyysplc:4:1694570851690016768",
      "createOrgId": "1637629630434766848",
      "createBy": "1",
      "dataMode": "bo",
      "isForbidden": 0,
      "createTime": "2023-08-24 23:42:32",
      "parentInstId": "0",
      "endTime": "2023-08-24 23:45:39",
      "procDefName": "车辆预约审批",
      "nodeId": "UserTask_1e0hq5o",
      "taskId": "1694736963333406720",
      "status": "end"
    },
    {
      "subject": "超级管理员在2023-08-24发起车牌号：鲁FBH605-发货单位：江铜国兴（烟台）铜业有限公司-收货单位：江铜国兴铜业有限公司的车辆预约",
      "duration": 20992,
      "updateBy": "1",
      "isFormmal": "N",
      "id": "1694730673043423232",
      "resultType": "agree",
      "procDefKey": "clyysplc",
      "bpmnInstId": "1694730673869701120",
      "supportMobile": 0,
      "creator": "超级管理员",
      "id_": "1694730673043423232",
      "isDele": 0,
      "completeTime": "2023-08-24 23:17:55",
      "updateTime": "2023-08-24 23:17:55",
      "procDefId": "1694570853107691520",
      "bpmnDefId": "clyysplc:4:1694570851690016768",
      "createOrgId": "1637629630434766848",
      "createBy": "1",
      "dataMode": "bo",
      "isForbidden": 0,
      "createTime": "2023-08-24 23:17:34",
      "parentInstId": "0",
      "endTime": "2023-08-24 23:17:55",
      "procDefName": "车辆预约审批",
      "nodeId": "UserTask_1e0hq5o",
      "taskId": "1694730678504407040",
      "status": "end"
    },
    {
      "subject": "超级管理员在2023-08-24发起车牌号：鲁FBH605-发货单位：江铜国兴铜业有限公司-收货单位：烟台市福坤金属材料有限公司的车辆预约",
      "duration": 21817,
      "updateBy": "1",
      "isFormmal": "N",
      "id": "1694730075195719680",
      "resultType": "agree",
      "procDefKey": "clyysplc",
      "bpmnInstId": "1694730076072329216",
      "supportMobile": 0,
      "creator": "超级管理员",
      "id_": "1694730075195719680",
      "isDele": 0,
      "completeTime": "2023-08-24 23:15:33",
      "updateTime": "2023-08-24 23:15:33",
      "procDefId": "1694570853107691520",
      "bpmnDefId": "clyysplc:4:1694570851690016768",
      "createOrgId": "1637629630434766848",
      "createBy": "1",
      "dataMode": "bo",
      "isForbidden": 0,
      "createTime": "2023-08-24 23:15:11",
      "parentInstId": "0",
      "endTime": "2023-08-24 23:15:33",
      "procDefName": "车辆预约审批",
      "nodeId": "UserTask_1e0hq5o",
      "taskId": "1694730079767511040",
      "status": "end"
    },
    {
      "subject": "超级管理员在2023-08-24发起车牌号：鲁FBH605-发货单位：江铜国兴铜业有限公司-收货单位：烟台市福坤金属材料有限公司的车辆预约",
      "duration": 42140,
      "updateBy": "1",
      "isFormmal": "N",
      "id": "1694729323412865024",
      "resultType": "agree",
      "procDefKey": "clyysplc",
      "bpmnInstId": "1694729324272697344",
      "supportMobile": 0,
      "creator": "超级管理员",
      "id_": "1694729323412865024",
      "isDele": 0,
      "completeTime": "2023-08-24 23:12:54",
      "updateTime": "2023-08-24 23:12:54",
      "procDefId": "1694570853107691520",
      "bpmnDefId": "clyysplc:4:1694570851690016768",
      "createOrgId": "1637629630434766848",
      "createBy": "1",
      "dataMode": "bo",
      "isForbidden": 0,
      "createTime": "2023-08-24 23:12:12",
      "parentInstId": "0",
      "endTime": "2023-08-24 23:12:54",
      "procDefName": "车辆预约审批",
      "nodeId": "UserTask_1e0hq5o",
      "taskId": "1694729329180033024",
      "status": "end"
    },
    {
      "subject": "超级管理员在2023-08-24发起车牌号：鲁FBH605-发货单位：江铜国兴铜业有限公司-收货单位：烟台市嘉耐盛商贸有限公司的车辆预约",
      "duration": 44804,
      "updateBy": "1",
      "isFormmal": "N",
      "id": "1694721675263098880",
      "resultType": "agree",
      "procDefKey": "clyysplc",
      "bpmnInstId": "1694721676252954624",
      "supportMobile": 0,
      "creator": "超级管理员",
      "id_": "1694721675263098880",
      "isDele": 0,
      "completeTime": "2023-08-24 22:42:33",
      "updateTime": "2023-08-24 22:42:33",
      "procDefId": "1694570853107691520",
      "bpmnDefId": "clyysplc:4:1694570851690016768",
      "createOrgId": "1637629630434766848",
      "createBy": "1",
      "dataMode": "bo",
      "isForbidden": 0,
      "createTime": "2023-08-24 22:41:48",
      "parentInstId": "0",
      "endTime": "2023-08-24 22:42:33",
      "procDefName": "车辆预约审批",
      "nodeId": "UserTask_1e0hq5o",
      "taskId": "1694721681839767552",
      "status": "end"
    },
    {
      "subject": "超级管理员在2023-08-24发起车牌号：鲁FBH605-发货单位：江铜国兴铜业有限公司-收货单位：烟台市福坤金属材料有限公司的车辆预约",
      "duration": 26431,
      "updateBy": "1",
      "isFormmal": "N",
      "id": "1694720901648891904",
      "resultType": "agree",
      "procDefKey": "clyysplc",
      "bpmnInstId": "1694720902429032448",
      "supportMobile": 0,
      "creator": "超级管理员",
      "id_": "1694720901648891904",
      "isDele": 0,
      "completeTime": "2023-08-24 22:39:10",
      "updateTime": "2023-08-24 22:39:10",
      "procDefId": "1694570853107691520",
      "bpmnDefId": "clyysplc:4:1694570851690016768",
      "createOrgId": "1637629630434766848",
      "createBy": "1",
      "dataMode": "bo",
      "isForbidden": 0,
      "createTime": "2023-08-24 22:38:44",
      "parentInstId": "0",
      "endTime": "2023-08-24 22:39:10",
      "procDefName": "车辆预约审批",
      "nodeId": "UserTask_1e0hq5o",
      "taskId": "1694720908259115008",
      "status": "end"
    }
  ];
  return tool.fakeListIO(page, result);
};

// 查询更多信息(已办)
api.getMoreInfoById = (id) => {
  return tool.fakeIO({
    "id": "1694729323412865024",
    "subject": "超级管理员在2023-08-24发起车牌号：鲁FBH605-发货单位：江铜国兴铜业有限公司-收货单位：烟台市福坤金属材料有限公司的车辆预约",
    "procDefId": "1694570853107691520",
    "bpmnDefId": "clyysplc:4:1694570851690016768",
    "procDefKey": "clyysplc",
    "procDefName": "车辆预约审批",
    "bizKey": null,
    "sysCode": null,
    "formKey": null,
    "status": "end",
    "endTime": "2023-08-24 23:12:54",
    "duration": 42140,
    "typeId": "31108",
    "resultType": "agree",
    "bpmnInstId": "1694729324272697344",
    "isFormmal": "N",
    "parentInstId": "0",
    "superNodeId": null,
    "urgentState": null,
    "creator": "超级管理员",
    "createBy": "1",
    "createAccount": "admin",
    "createTime": "2023-08-24 23:12:12",
    "createOrgId": "1637629630434766848",
    "updateBy": "1",
    "updateTime": "2023-08-24 23:12:54",
    "isForbidden": 0,
    "createOrgPath": "1631530094096183296.1637629630434766848.",
    "pcInstUrl": null,
    "mobileInstUrl": null,
    "isDele": 0,
    "supportMobile": 0,
    "dataMode": "bo",
    "authorizeRight": null,
    "taskName": "",
    "showModifyRecord": false,
    "bpmFormKey": null,
    "updateSubjectWhenExist": false,
    "backToStart": false,
    "pkVal": "1694729323412865024",
    "nodeName": "结束"
  });
}

export default api;