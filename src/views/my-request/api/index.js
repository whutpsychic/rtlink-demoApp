import { tool } from "@/utils";

const api = {};

// ------------------------------------------------------
// 查询请求列表
api.getRequestList = (page = 1, searchText, type) => {
  switch (type) {
    case "running": return tool.fakeListIO(page, [
      {
        "id": "1696433095293943808",
        "subject": "超级管理员在2023-08-29发起隐患排查治理流程",
        "procDefId": "1673630917886140416",
        "bpmnDefId": "yhpczltz:1:1673630917424766976",
        "procDefKey": "yhpczltz",
        "procDefName": "隐患排查治理流程",
        "status": "running",
        "typeId": "1620348666721505280",
        "bpmnInstId": "1696433096518680576",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-08-29 16:02:23",
        "createOrgId": "1637629630434766848",
        "updateBy": "1",
        "updateTime": "2023-08-29 16:02:24",
        "isForbidden": 0,
        "createOrgPath": "1631530094096183296.1637629630434766848.",
        "isDele": 0,
        "supportMobile": 0,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1696433095293943808"
      },
      {
        "id": "1696419082732453888",
        "subject": "超级管理员在2023-08-29发起固定周期发放计划流程",
        "procDefId": "1675711303374004224",
        "bpmnDefId": "gdzqffjhlc:1:1675711308621078528",
        "procDefKey": "gdzqffjhlc",
        "procDefName": "固定周期发放计划流程",
        "status": "running",
        "typeId": "1620348666721505280",
        "bpmnInstId": "1696419086360526848",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-08-29 15:06:42",
        "createOrgId": "1637629630434766848",
        "updateBy": "1",
        "updateTime": "2023-08-29 15:06:44",
        "isForbidden": 0,
        "createOrgPath": "1631530094096183296.1637629630434766848.",
        "isDele": 0,
        "supportMobile": 0,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1696419082732453888"
      },
      {
        "id": "1694257795109978112",
        "subject": "超级管理员在2023-08-23发起作业检修执行",
        "procDefId": "1650688435837919232",
        "bpmnDefId": "zyjxzx:1:1650688435716284416",
        "procDefKey": "zyjxzx",
        "procDefName": "作业检修执行",
        "status": "running",
        "typeId": "1689171839449186304",
        "bpmnInstId": "1694257796091445248",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-08-23 15:58:31",
        "createOrgId": "1637629630434766848",
        "updateBy": "1",
        "updateTime": "2023-08-23 15:58:32",
        "isForbidden": 0,
        "createOrgPath": "1631530094096183296.1637629630434766848.",
        "isDele": 0,
        "supportMobile": 1,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1694257795109978112"
      },
      {
        "id": "1694257613861519360",
        "subject": "超级管理员在2023-08-23发起作业检修执行",
        "procDefId": "1650688435837919232",
        "bpmnDefId": "zyjxzx:1:1650688435716284416",
        "procDefKey": "zyjxzx",
        "procDefName": "作业检修执行",
        "status": "running",
        "typeId": "1689171839449186304",
        "bpmnInstId": "1694257614750711808",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-08-23 15:57:48",
        "createOrgId": "1637629630434766848",
        "updateBy": "1",
        "updateTime": "2023-08-23 15:57:49",
        "isForbidden": 0,
        "createOrgPath": "1631530094096183296.1637629630434766848.",
        "isDele": 0,
        "supportMobile": 1,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1694257613861519360"
      },
      {
        "id": "1694257211095089152",
        "subject": "超级管理员在2023-08-23发起作业检修执行",
        "procDefId": "1650688435837919232",
        "bpmnDefId": "zyjxzx:1:1650688435716284416",
        "procDefKey": "zyjxzx",
        "procDefName": "作业检修执行",
        "status": "running",
        "typeId": "1689171839449186304",
        "bpmnInstId": "1694257212248522752",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-08-23 15:56:12",
        "createOrgId": "1637629630434766848",
        "updateBy": "1",
        "updateTime": "2023-08-23 15:56:13",
        "isForbidden": 0,
        "createOrgPath": "1631530094096183296.1637629630434766848.",
        "isDele": 0,
        "supportMobile": 1,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1694257211095089152"
      },
      {
        "id": "1694256822329245696",
        "subject": "超级管理员在2023-08-23发起作业检修执行",
        "procDefId": "1650688435837919232",
        "bpmnDefId": "zyjxzx:1:1650688435716284416",
        "procDefKey": "zyjxzx",
        "procDefName": "作业检修执行",
        "status": "running",
        "typeId": "1689171839449186304",
        "bpmnInstId": "1694256823382016000",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-08-23 15:54:39",
        "createOrgId": "1637629630434766848",
        "updateBy": "1",
        "updateTime": "2023-08-23 15:54:40",
        "isForbidden": 0,
        "createOrgPath": "1631530094096183296.1637629630434766848.",
        "isDele": 0,
        "supportMobile": 1,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1694256822329245696"
      },
      {
        "id": "1694243792509960192",
        "subject": "超级管理员在2023-08-23发起检修计划审批",
        "procDefId": "1641685275983106048",
        "bpmnDefId": "jxjhsp:1:1641685275773390848",
        "procDefKey": "jxjhsp",
        "procDefName": "检修计划审批",
        "status": "running",
        "typeId": "1689171839449186304",
        "bpmnInstId": "1694243793831165952",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-08-23 15:02:52",
        "createOrgId": "1637629630434766848",
        "updateBy": "1",
        "updateTime": "2023-08-23 15:02:54",
        "isForbidden": 0,
        "createOrgPath": "1631530094096183296.1637629630434766848.",
        "isDele": 0,
        "supportMobile": 1,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1694243792509960192"
      },
      {
        "id": "1694242951828832256",
        "subject": "超级管理员在2023-08-23发起检修计划审批",
        "procDefId": "1641685275983106048",
        "bpmnDefId": "jxjhsp:1:1641685275773390848",
        "procDefKey": "jxjhsp",
        "procDefName": "检修计划审批",
        "status": "running",
        "typeId": "1689171839449186304",
        "bpmnInstId": "1694242954429300736",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-08-23 14:59:32",
        "createOrgId": "1637629630434766848",
        "updateBy": "1",
        "updateTime": "2023-08-23 14:59:35",
        "isForbidden": 0,
        "createOrgPath": "1631530094096183296.1637629630434766848.",
        "isDele": 0,
        "supportMobile": 1,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1694242951828832256"
      },
      {
        "id": "1692445229140377600",
        "subject": "超级管理员在2023-08-18发起检修计划审批",
        "procDefId": "1641685275983106048",
        "bpmnDefId": "jxjhsp:1:1641685275773390848",
        "procDefKey": "jxjhsp",
        "procDefName": "检修计划审批",
        "status": "running",
        "typeId": "1689171839449186304",
        "bpmnInstId": "1692445231539519488",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-08-18 15:56:01",
        "createOrgId": "1637629630434766848",
        "updateBy": "1",
        "updateTime": "2023-08-18 15:56:03",
        "isForbidden": 0,
        "createOrgPath": "1631530094096183296.1637629630434766848.",
        "isDele": 0,
        "supportMobile": 1,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1692445229140377600"
      },
      {
        "id": "1692112547038593024",
        "subject": "超级管理员在2023-08-17发起作业检修执行",
        "procDefId": "1650688435837919232",
        "bpmnDefId": "zyjxzx:1:1650688435716284416",
        "procDefKey": "zyjxzx",
        "procDefName": "作业检修执行",
        "status": "running",
        "typeId": "1689171839449186304",
        "bpmnInstId": "1692112548217192448",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-08-17 17:54:04",
        "createOrgId": "1637629630434766848",
        "updateBy": "1",
        "updateTime": "2023-08-17 17:54:05",
        "isForbidden": 0,
        "createOrgPath": "1631530094096183296.1637629630434766848.",
        "isDele": 0,
        "supportMobile": 1,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1692112547038593024"
      }
    ]);
    case "end": return tool.fakeListIO(page, [
      {
        "id": "1694914316315541504",
        "subject": "超级管理员在2023-08-25发起车牌号：-发货单位：-收货单位：的车辆预约",
        "procDefId": "1694570853107691520",
        "bpmnDefId": "clyysplc:4:1694570851690016768",
        "procDefKey": "clyysplc",
        "procDefName": "车辆预约审批",
        "status": "end",
        "endTime": "2023-08-25 15:22:22",
        "duration": 14103606,
        "typeId": "31108",
        "resultType": "agree",
        "bpmnInstId": "1694973412720918528",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-08-25 11:27:18",
        "createOrgId": "1637629630434766848",
        "updateBy": "1",
        "updateTime": "2023-08-25 15:22:22",
        "isForbidden": 0,
        "createOrgPath": "1631530094096183296.1637629630434766848.",
        "isDele": 0,
        "supportMobile": 0,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1694914316315541504"
      },
      {
        "id": "1694901197191135232",
        "subject": "超级管理员在2023-08-25发起车牌号：鲁FBH605-发货单位：江铜国兴铜业有限公司-收货单位：烟台市福坤金属材料有限公司的车辆预约",
        "procDefId": "1694570853107691520",
        "bpmnDefId": "clyysplc:4:1694570851690016768",
        "procDefKey": "clyysplc",
        "procDefName": "车辆预约审批",
        "status": "end",
        "endTime": "2023-08-25 10:35:41",
        "duration": 31410,
        "typeId": "31108",
        "resultType": "agree",
        "bpmnInstId": "1694901197866418176",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-08-25 10:35:10",
        "createOrgId": "1637629630434766848",
        "updateBy": "1",
        "updateTime": "2023-08-25 10:35:41",
        "isForbidden": 0,
        "createOrgPath": "1631530094096183296.1637629630434766848.",
        "isDele": 0,
        "supportMobile": 0,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1694901197191135232"
      },
      {
        "id": "1694900621543882752",
        "subject": "超级管理员在2023-08-25发起车牌号：鲁FBH605-发货单位：江铜国兴铜业有限公司-收货单位：烟台市嘉耐盛商贸有限公司的车辆预约",
        "procDefId": "1694570853107691520",
        "bpmnDefId": "clyysplc:4:1694570851690016768",
        "procDefKey": "clyysplc",
        "procDefName": "车辆预约审批",
        "status": "end",
        "endTime": "2023-08-25 10:33:31",
        "duration": 37968,
        "typeId": "31108",
        "resultType": "agree",
        "bpmnInstId": "1694900622680539136",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-08-25 10:32:53",
        "createOrgId": "1637629630434766848",
        "updateBy": "1",
        "updateTime": "2023-08-25 10:33:31",
        "isForbidden": 0,
        "createOrgPath": "1631530094096183296.1637629630434766848.",
        "isDele": 0,
        "supportMobile": 0,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1694900621543882752"
      },
      {
        "id": "1694736957947920384",
        "subject": "超级管理员在2023-08-24发起车牌号：鲁FBH605-发货单位：江铜国兴铜业有限公司-收货单位：烟台荣润经贸有限公司的车辆预约",
        "procDefId": "1694570853107691520",
        "bpmnDefId": "clyysplc:4:1694570851690016768",
        "procDefKey": "clyysplc",
        "procDefName": "车辆预约审批",
        "status": "end",
        "endTime": "2023-08-24 23:45:39",
        "duration": 186932,
        "typeId": "31108",
        "resultType": "agree",
        "bpmnInstId": "1694736958958747648",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-08-24 23:42:32",
        "createOrgId": "1637629630434766848",
        "updateBy": "1",
        "updateTime": "2023-08-24 23:45:39",
        "isForbidden": 0,
        "createOrgPath": "1631530094096183296.1637629630434766848.",
        "isDele": 0,
        "supportMobile": 0,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1694736957947920384"
      },
      {
        "id": "1694730673043423232",
        "subject": "超级管理员在2023-08-24发起车牌号：鲁FBH605-发货单位：江铜国兴（烟台）铜业有限公司-收货单位：江铜国兴铜业有限公司的车辆预约",
        "procDefId": "1694570853107691520",
        "bpmnDefId": "clyysplc:4:1694570851690016768",
        "procDefKey": "clyysplc",
        "procDefName": "车辆预约审批",
        "status": "end",
        "endTime": "2023-08-24 23:17:55",
        "duration": 20992,
        "typeId": "31108",
        "resultType": "agree",
        "bpmnInstId": "1694730673869701120",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-08-24 23:17:34",
        "createOrgId": "1637629630434766848",
        "updateBy": "1",
        "updateTime": "2023-08-24 23:17:55",
        "isForbidden": 0,
        "createOrgPath": "1631530094096183296.1637629630434766848.",
        "isDele": 0,
        "supportMobile": 0,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1694730673043423232"
      },
      {
        "id": "1694730075195719680",
        "subject": "超级管理员在2023-08-24发起车牌号：鲁FBH605-发货单位：江铜国兴铜业有限公司-收货单位：烟台市福坤金属材料有限公司的车辆预约",
        "procDefId": "1694570853107691520",
        "bpmnDefId": "clyysplc:4:1694570851690016768",
        "procDefKey": "clyysplc",
        "procDefName": "车辆预约审批",
        "status": "end",
        "endTime": "2023-08-24 23:15:33",
        "duration": 21817,
        "typeId": "31108",
        "resultType": "agree",
        "bpmnInstId": "1694730076072329216",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-08-24 23:15:11",
        "createOrgId": "1637629630434766848",
        "updateBy": "1",
        "updateTime": "2023-08-24 23:15:33",
        "isForbidden": 0,
        "createOrgPath": "1631530094096183296.1637629630434766848.",
        "isDele": 0,
        "supportMobile": 0,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1694730075195719680"
      },
      {
        "id": "1694729323412865024",
        "subject": "超级管理员在2023-08-24发起车牌号：鲁FBH605-发货单位：江铜国兴铜业有限公司-收货单位：烟台市福坤金属材料有限公司的车辆预约",
        "procDefId": "1694570853107691520",
        "bpmnDefId": "clyysplc:4:1694570851690016768",
        "procDefKey": "clyysplc",
        "procDefName": "车辆预约审批",
        "status": "end",
        "endTime": "2023-08-24 23:12:54",
        "duration": 42140,
        "typeId": "31108",
        "resultType": "agree",
        "bpmnInstId": "1694729324272697344",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-08-24 23:12:12",
        "createOrgId": "1637629630434766848",
        "updateBy": "1",
        "updateTime": "2023-08-24 23:12:54",
        "isForbidden": 0,
        "createOrgPath": "1631530094096183296.1637629630434766848.",
        "isDele": 0,
        "supportMobile": 0,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1694729323412865024"
      },
      {
        "id": "1694722456976506880",
        "subject": "超级管理员在2023-08-24发起车牌号：鲁FBH605-发货单位：江铜国兴铜业有限公司-收货单位：青岛金盛美达铜业有限公司的车辆预约",
        "procDefId": "1694570853107691520",
        "bpmnDefId": "clyysplc:4:1694570851690016768",
        "procDefKey": "clyysplc",
        "procDefName": "车辆预约审批",
        "status": "end",
        "endTime": "2023-08-25 11:30:57",
        "duration": 45962084,
        "typeId": "31108",
        "resultType": "agree",
        "bpmnInstId": "1694722457786007552",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-08-24 22:44:55",
        "createOrgId": "1637629630434766848",
        "updateBy": "1",
        "updateTime": "2023-08-25 11:30:57",
        "isForbidden": 0,
        "createOrgPath": "1631530094096183296.1637629630434766848.",
        "isDele": 0,
        "supportMobile": 0,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1694722456976506880"
      },
      {
        "id": "1694721675263098880",
        "subject": "超级管理员在2023-08-24发起车牌号：鲁FBH605-发货单位：江铜国兴铜业有限公司-收货单位：烟台市嘉耐盛商贸有限公司的车辆预约",
        "procDefId": "1694570853107691520",
        "bpmnDefId": "clyysplc:4:1694570851690016768",
        "procDefKey": "clyysplc",
        "procDefName": "车辆预约审批",
        "status": "end",
        "endTime": "2023-08-24 22:42:33",
        "duration": 44804,
        "typeId": "31108",
        "resultType": "agree",
        "bpmnInstId": "1694721676252954624",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-08-24 22:41:48",
        "createOrgId": "1637629630434766848",
        "updateBy": "1",
        "updateTime": "2023-08-24 22:42:33",
        "isForbidden": 0,
        "createOrgPath": "1631530094096183296.1637629630434766848.",
        "isDele": 0,
        "supportMobile": 0,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1694721675263098880"
      },
      {
        "id": "1694720901648891904",
        "subject": "超级管理员在2023-08-24发起车牌号：鲁FBH605-发货单位：江铜国兴铜业有限公司-收货单位：烟台市福坤金属材料有限公司的车辆预约",
        "procDefId": "1694570853107691520",
        "bpmnDefId": "clyysplc:4:1694570851690016768",
        "procDefKey": "clyysplc",
        "procDefName": "车辆预约审批",
        "status": "end",
        "endTime": "2023-08-24 22:39:10",
        "duration": 26431,
        "typeId": "31108",
        "resultType": "agree",
        "bpmnInstId": "1694720902429032448",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-08-24 22:38:44",
        "createOrgId": "1637629630434766848",
        "updateBy": "1",
        "updateTime": "2023-08-24 22:39:10",
        "isForbidden": 0,
        "createOrgPath": "1631530094096183296.1637629630434766848.",
        "isDele": 0,
        "supportMobile": 0,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1694720901648891904"
      }
    ]);
    default: return tool.fakeListIO(page, [
      {
        "id": "1656942535843921920",
        "subject": "超级管理员在2023-05-12发起安环计划审批流程",
        "procDefId": "1641730331435749376",
        "bpmnDefId": "ahjhsplc:1:1641730332224278529",
        "procDefKey": "ahjhsplc",
        "procDefName": "安环计划审批流程",
        "status": "revokeToStart",
        "typeId": "1620348666721505280",
        "bpmnInstId": "1656942536154300416",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-05-12 16:41:00",
        "createOrgId": "1636743502009724928",
        "updateBy": "1",
        "updateTime": "2023-05-12 16:41:01",
        "isForbidden": 0,
        "createOrgPath": "1258608622670319616.1636743502009724928.",
        "isDele": 0,
        "supportMobile": 1,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1656942535843921920"
      },
      {
        "id": "1656932456373567488",
        "subject": "超级管理员在2023-05-12发起事故分析报告",
        "procDefId": "1641730313458962432",
        "bpmnDefId": "sgfxbg:1:1641730324196380672",
        "procDefKey": "sgfxbg",
        "procDefName": "事故分析报告",
        "status": "revokeToStart",
        "typeId": "1620348666721505280",
        "bpmnInstId": "1656932457090793472",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-05-12 16:00:57",
        "createOrgId": "1636743502009724928",
        "updateBy": "1",
        "updateTime": "2023-05-12 16:00:57",
        "isForbidden": 0,
        "createOrgPath": "1258608622670319616.1636743502009724928.",
        "isDele": 0,
        "supportMobile": 1,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1656932456373567488"
      },
      {
        "id": "1656854114521726976",
        "subject": "超级管理员在2023-05-12发起危险源管理流程",
        "procDefId": "1641730330114543616",
        "bpmnDefId": "wxygllc:1:1641730330965987328",
        "procDefKey": "wxygllc",
        "procDefName": "危险源管理流程",
        "status": "revokeToStart",
        "typeId": "1620348666721505280",
        "bpmnInstId": "1656854115150872576",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-05-12 10:49:38",
        "createOrgId": "1636743502009724928",
        "updateBy": "1",
        "updateTime": "2023-05-12 10:49:39",
        "isForbidden": 0,
        "createOrgPath": "1258608622670319616.1636743502009724928.",
        "isDele": 0,
        "supportMobile": 1,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1656854114521726976"
      },
      {
        "id": "1656841256543076352",
        "subject": "超级管理员在2023-05-12发起危险源管理流程",
        "procDefId": "1641730330114543616",
        "bpmnDefId": "wxygllc:1:1641730330965987328",
        "procDefKey": "wxygllc",
        "procDefName": "危险源管理流程",
        "status": "revokeToStart",
        "typeId": "1620348666721505280",
        "bpmnInstId": "1656841257323216896",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-05-12 09:58:33",
        "createOrgId": "1636743502009724928",
        "updateBy": "1",
        "updateTime": "2023-05-12 09:58:34",
        "isForbidden": 0,
        "createOrgPath": "1258608622670319616.1636743502009724928.",
        "isDele": 0,
        "supportMobile": 1,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1656841256543076352"
      },
      {
        "id": "1656836729970507776",
        "subject": "超级管理员在2023-05-12发起危险源管理流程",
        "procDefId": "1641730330114543616",
        "bpmnDefId": "wxygllc:1:1641730330965987328",
        "procDefKey": "wxygllc",
        "procDefName": "危险源管理流程",
        "status": "revokeToStart",
        "typeId": "1620348666721505280",
        "bpmnInstId": "1656836730440269824",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-05-12 09:40:34",
        "createOrgId": "1636743502009724928",
        "updateBy": "1",
        "updateTime": "2023-05-12 09:40:34",
        "isForbidden": 0,
        "createOrgPath": "1258608622670319616.1636743502009724928.",
        "isDele": 0,
        "supportMobile": 1,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1656836729970507776"
      },
      {
        "id": "1655494095985328128",
        "subject": "超级管理员在2023-05-08发起危险源管理流程",
        "procDefId": "1641730330114543616",
        "bpmnDefId": "wxygllc:1:1641730330965987328",
        "procDefKey": "wxygllc",
        "procDefName": "危险源管理流程",
        "status": "revokeToStart",
        "typeId": "1620348666721505280",
        "bpmnInstId": "1655494096278929408",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-05-08 16:45:25",
        "createOrgId": "1636743502009724928",
        "updateBy": "1",
        "updateTime": "2023-05-08 16:45:25",
        "isForbidden": 0,
        "createOrgPath": "1258608622670319616.1636743502009724928.",
        "isDele": 0,
        "supportMobile": 1,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1655494095985328128"
      },
      {
        "id": "1648589833527246848",
        "subject": "超级管理员在2023-04-19发起安环计划审批流程",
        "procDefId": "1641730331435749376",
        "bpmnDefId": "ahjhsplc:1:1641730332224278529",
        "procDefKey": "ahjhsplc",
        "procDefName": "安环计划审批流程",
        "status": "revokeToStart",
        "typeId": "1620348666721505280",
        "bpmnInstId": "1648589834097672192",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-04-19 15:30:20",
        "createOrgId": "1636743502009724928",
        "updateBy": "1",
        "updateTime": "2023-04-19 15:30:21",
        "isForbidden": 0,
        "createOrgPath": "1258608622670319616.1636743502009724928.",
        "isDele": 0,
        "supportMobile": 1,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1648589833527246848"
      },
      {
        "id": "1648588207085207552",
        "subject": "超级管理员在2023-04-19发起安环计划审批流程",
        "procDefId": "1641730331435749376",
        "bpmnDefId": "ahjhsplc:1:1641730332224278529",
        "procDefKey": "ahjhsplc",
        "procDefName": "安环计划审批流程",
        "status": "revokeToStart",
        "typeId": "1620348666721505280",
        "bpmnInstId": "1648588207383003136",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-04-19 15:23:53",
        "createOrgId": "1636743502009724928",
        "updateBy": "1",
        "updateTime": "2023-04-19 15:23:53",
        "isForbidden": 0,
        "createOrgPath": "1258608622670319616.1636743502009724928.",
        "isDele": 0,
        "supportMobile": 1,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1648588207085207552"
      },
      {
        "id": "1648579511143776256",
        "subject": "超级管理员在2023-04-19发起事故分析报告",
        "procDefId": "1641730313458962432",
        "bpmnDefId": "sgfxbg:1:1641730324196380672",
        "procDefKey": "sgfxbg",
        "procDefName": "事故分析报告",
        "status": "revokeToStart",
        "typeId": "1620348666721505280",
        "bpmnInstId": "1648579511357685760",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-04-19 14:49:19",
        "createOrgId": "1636743502009724928",
        "updateBy": "1",
        "updateTime": "2023-04-19 14:49:20",
        "isForbidden": 0,
        "createOrgPath": "1258608622670319616.1636743502009724928.",
        "isDele": 0,
        "supportMobile": 1,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1648579511143776256"
      },
      {
        "id": "1648246588741926912",
        "subject": "超级管理员在2023-04-18发起作业票",
        "procDefId": "1641730332836646912",
        "bpmnDefId": "zyp:1:1641730338356350976",
        "procDefKey": "zyp",
        "procDefName": "作业票",
        "status": "revokeToStart",
        "typeId": "1620348666721505280",
        "bpmnInstId": "1648246590579032064",
        "isFormmal": "N",
        "parentInstId": "0",
        "creator": "超级管理员",
        "createBy": "1",
        "createTime": "2023-04-18 16:46:24",
        "createOrgId": "1636743502009724928",
        "updateBy": "1",
        "updateTime": "2023-04-18 16:46:26",
        "isForbidden": 0,
        "createOrgPath": "1258608622670319616.1636743502009724928.",
        "isDele": 0,
        "supportMobile": 1,
        "dataMode": "bo",
        "taskName": "",
        "showModifyRecord": false,
        "updateSubjectWhenExist": false,
        "backToStart": false,
        "pkVal": "1648246588741926912"
      }
    ]);
  };
};


// 查询草稿列表
api.getDraftList = (page = 1, searchText) => {
  return tool.fakeListIO(page, [
    {
      "id": "1694562364138373120",
      "subject": "超级管理员在2023-08-24发起车牌号-，发货单位-，收货单位-的车辆预约",
      "procDefId": "1694547107646967808",
      "bpmnDefId": "clyysplc:3:1694547109316300800",
      "procDefKey": "clyysplc",
      "procDefName": "车辆预约审批",
      "status": "draft",
      "typeId": "31108",
      "isFormmal": "N",
      "parentInstId": "0",
      "creator": "超级管理员",
      "createBy": "1",
      "createAccount": "admin",
      "createTime": "2023-08-24 12:08:46",
      "createOrgId": "1637629630434766848",
      "isForbidden": 0,
      "createOrgPath": "1631530094096183296.1637629630434766848.",
      "isDele": 0,
      "supportMobile": 1,
      "dataMode": "bo",
      "taskName": "",
      "showModifyRecord": false,
      "updateSubjectWhenExist": false,
      "backToStart": false,
      "pkVal": "1694562364138373120"
    },
    {
      "id": "1692112488205090816",
      "subject": "超级管理员在2023-08-17发起作业检修执行",
      "procDefId": "1650688435837919232",
      "bpmnDefId": "zyjxzx:1:1650688435716284416",
      "procDefKey": "zyjxzx",
      "procDefName": "作业检修执行",
      "status": "draft",
      "typeId": "1689171839449186304",
      "isFormmal": "N",
      "parentInstId": "0",
      "creator": "超级管理员",
      "createBy": "1",
      "createAccount": "admin",
      "createTime": "2023-08-17 17:53:50",
      "createOrgId": "1637629630434766848",
      "isForbidden": 0,
      "createOrgPath": "1631530094096183296.1637629630434766848.",
      "isDele": 0,
      "supportMobile": 1,
      "dataMode": "bo",
      "taskName": "",
      "showModifyRecord": false,
      "updateSubjectWhenExist": false,
      "backToStart": false,
      "pkVal": "1692112488205090816"
    },
    {
      "id": "1678228382366973952",
      "subject": "超级管理员在2023-07-10发起作业检修执行",
      "procDefId": "1650688435837919232",
      "bpmnDefId": "zyjxzx:1:1650688435716284416",
      "procDefKey": "zyjxzx",
      "procDefName": "作业检修执行",
      "status": "draft",
      "typeId": "1641280546035712000",
      "isFormmal": "N",
      "parentInstId": "0",
      "creator": "超级管理员",
      "createBy": "1",
      "createAccount": "admin",
      "createTime": "2023-07-10 10:23:21",
      "isForbidden": 0,
      "createOrgPath": "",
      "isDele": 0,
      "supportMobile": 1,
      "dataMode": "bo",
      "taskName": "",
      "showModifyRecord": false,
      "updateSubjectWhenExist": false,
      "backToStart": false,
      "pkVal": "1678228382366973952"
    },
    {
      "id": "1654383014856507392",
      "subject": "超级管理员在2023-05-05发起设备变更审核",
      "procDefId": "1641633601042141184",
      "bpmnDefId": "sbbgsh:1:1641633600647876608",
      "procDefKey": "sbbgsh",
      "procDefName": "设备变更审核",
      "status": "draft",
      "typeId": "1641280546035712000",
      "isFormmal": "N",
      "parentInstId": "0",
      "creator": "超级管理员",
      "createBy": "1",
      "createAccount": "admin",
      "createTime": "2023-05-05 15:10:37",
      "createOrgId": "1636743502009724928",
      "updateBy": "1",
      "updateTime": "2023-05-05 15:10:37",
      "isForbidden": 0,
      "createOrgPath": "1258608622670319616.1636743502009724928.",
      "isDele": 0,
      "supportMobile": 1,
      "dataMode": "bo",
      "taskName": "",
      "showModifyRecord": false,
      "updateSubjectWhenExist": false,
      "backToStart": false,
      "pkVal": "1654383014856507392"
    }
  ])
};


export default api;