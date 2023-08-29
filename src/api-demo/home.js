import { Base64 } from 'js-base64';
import { request, tool } from "@/utils";

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
  return tool.fakeIO({
    "myTaks": {
      "icon": "fa-pencil-square-o",
      "color": "wood",
      "dataText": "365",
      "dataContent": "我的待办",
      "type": 0,
      "url": "/v-flow/v-todo"
    },
    "myAccordingMatters": {
      "icon": "fa-share",
      "color": "pink",
      "dataText": "0",
      "dataContent": "转办代理",
      "type": 0,
      "url": "/v-flow/v-todo"
    },
    "role": {
      "roleName": "系统管理员|能源管理员|物流管理-计量基础数据修改|物流管理-计量过磅数据修改|物流管理"
    },
    "post": {
      "1683282276948262912": {
        "pathName": "行政维度/江铜国兴公司/设备能源部",
        "orgName": "设备能源部",
        "orgCode": "014511",
        "isMaster": 0,
        "postName": "测试岗位",
        "demName": "行政维度",
        "isCharge": 0,
        "postCode": "csgw",
        "postId": "1683282276948262912",
        "orgId": "1668222928651976704"
      }
    },
    "org": [
      {
        "pathName": "生产实绩维度/江铜国兴公司（生产维度）",
        "orgName": "江铜国兴公司（生产维度）",
        "orgCode": "jtgxgsscwd",
        "isMaster": 1,
        "demName": "生产实绩维度",
        "orgId": "1637629630434766848"
      }
    ],
    "myRequest": {
      "icon": "fa-hand-o-up",
      "color": "blue2",
      "dataText": "603",
      "dataContent": "我的请求",
      "type": 0,
      "url": "/v-flow/v-request"
    },
    "myAlready": {
      "icon": "fa-flag",
      "color": "red",
      "dataText": "193",
      "dataContent": "已办事宜",
      "type": 0,
      "url": "/v-flow/v-done"
    },
    "curPost": "江铜国兴公司（生产维度） - 暂未分配岗位",
    "user": {
      "isDelete": "0",
      "version": 31,
      "id": "1",
      "fullname": "超级管理员",
      "account": "admin",
      "password": "jZae727K08KaOmKSgOaGzww/XVqGr/PKEgIMkjrcbJI=",
      "email": "",
      "mobile": "18888888888",
      "address": "",
      "photo": "1675709047069167616",
      "sex": "",
      "from": "system",
      "status": 1,
      "groupId": "",
      "hasSyncToWx": 1,
      "userNumber": "1",
      "idCard": "",
      "phone": "",
      "education": "",
      "tenantId": "-1",
      "isInner": 1,
      "attributes": {},
      "enabled": true,
      "username": "admin",
      "accountNonLocked": true,
      "credentialsNonExpired": true,
      "accountNonExpired": true,
      "enable": true,
      "userId": "1",
      "admin": true,
      "identityType": "user",
      "pkVal": "1"
    },
    "myNoticeRead": {
      "icon": "fa-comments",
      "color": "blue3",
      "dataText": "1",
      "dataContent": "我的待阅",
      "type": 0,
      "url": "/v-flow/v-todoRead"
    }
  });
};

// 获取未读消息数量
api.getUnreadMsgNumber = () => {
  return tool.fakeIO({ "state": true, "message": "获取成功", "value": 215917, "code": 200 }).then((res) => {
    return res.value || 0;
  });
};

// 获取工作台菜单
api.getMenu = () => {
  return tool.fakeIO([
    {
      "typeId": "1293129463957164032",
      "typeName": "默认分类",
      "pid": "1285867753718288384",
      "appList": [
        {
          "id": "1688479034078806016",
          "name": "检化验及质量",
          "content": "/inspect",
          "icon": "icon-application",
          "iconColor": "#1FBD42",
          "typeId": "1293129463957164032",
          "typeName": "默认分类",
          "enable": 1,
          "mode": 1,
          "sn": 11,
          "createBy": "1",
          "createTime": "2023-08-07 17:15:47",
          "updateBy": "1",
          "updateTime": "2023-08-07 17:17:03",
          "pkVal": "1688479034078806016"
        }
      ],
      "children": [],
      "isParent": "false",
      "id": "1293129463957164032",
      "parentId": "1285867753718288384",
      "text": "默认分类"
    },
    {
      "typeId": "1633003927965777920",
      "typeName": "物流管理",
      "pid": "1285867753718288384",
      "appList": [
        {
          "id": "1633004502593814528",
          "name": "车辆预约",
          "content": "/reservationManage",
          "icon": "icon-che",
          "iconColor": "#4F9296",
          "typeId": "1633003927965777920",
          "typeName": "物流管理",
          "enable": 1,
          "mode": 1,
          "sn": 0,
          "createBy": "1",
          "createTime": "2023-03-07 15:19:48",
          "pkVal": "1633004502593814528"
        }
      ],
      "children": [],
      "isParent": "false",
      "id": "1633003927965777920",
      "parentId": "1285867753718288384",
      "text": "物流管理"
    },
    {
      "typeId": "1678318342772260864",
      "typeName": "生产管理",
      "pid": "1285867753718288384",
      "appList": [
        {
          "id": "1678320474434994176",
          "name": "生产计划",
          "content": "/production/plan",
          "icon": "icon-application",
          "iconColor": "#FA9EE4",
          "typeId": "1678318342772260864",
          "typeName": "生产管理",
          "enable": 1,
          "mode": 1,
          "sn": 0,
          "createBy": "1",
          "createTime": "2023-07-10 16:29:17",
          "updateBy": "1",
          "updateTime": "2023-08-29 15:32:19",
          "pkVal": "1678320474434994176"
        },
        {
          "id": "1681096058781212672",
          "name": "生产实绩管理",
          "content": "/production/performance",
          "icon": "icon-application",
          "iconColor": "#0075CA",
          "typeId": "1678318342772260864",
          "typeName": "生产管理",
          "enable": 1,
          "mode": 1,
          "sn": 1,
          "createBy": "1",
          "createTime": "2023-07-18 08:18:28",
          "updateBy": "1",
          "updateTime": "2023-07-18 08:19:09",
          "pkVal": "1681096058781212672"
        },
        {
          "id": "1683765283031236608",
          "name": "交接班日志",
          "content": "/production/shiftLog",
          "icon": "icon-application",
          "iconColor": "#89BFF8",
          "typeId": "1678318342772260864",
          "typeName": "生产管理",
          "enable": 1,
          "mode": 1,
          "sn": 2,
          "createBy": "1",
          "createTime": "2023-07-25 17:05:01",
          "pkVal": "1683765283031236608"
        },
        {
          "id": "1684134417820696576",
          "name": "调度指令管理",
          "content": "/production/cmdManage",
          "icon": "icon-application",
          "iconColor": "#F93EB4",
          "typeId": "1678318342772260864",
          "typeName": "生产管理",
          "enable": 1,
          "mode": 1,
          "sn": 3,
          "createBy": "1",
          "createTime": "2023-07-26 17:31:50",
          "pkVal": "1684134417820696576"
        },
        {
          "id": "1684490219240701952",
          "name": "调度指令执行",
          "content": "/production/cmdReceive",
          "icon": "icon-application",
          "iconColor": "#2C1AD2",
          "typeId": "1678318342772260864",
          "typeName": "生产管理",
          "enable": 1,
          "mode": 1,
          "sn": 4,
          "createBy": "1",
          "createTime": "2023-07-27 17:05:39",
          "pkVal": "1684490219240701952"
        },
        {
          "id": "1684820089187483648",
          "name": "调度交接班日志",
          "content": "/production/dispatchShiftLog",
          "icon": "icon-application",
          "iconColor": "#62FDC8",
          "typeId": "1678318342772260864",
          "typeName": "生产管理",
          "enable": 1,
          "mode": 1,
          "sn": 5,
          "createBy": "1",
          "createTime": "2023-07-28 14:56:26",
          "pkVal": "1684820089187483648"
        },
        {
          "id": "1685566025048145920",
          "name": "设备监控",
          "content": "/production/dispatchMonitor",
          "icon": "icon-application",
          "iconColor": "#A21075",
          "typeId": "1678318342772260864",
          "typeName": "生产管理",
          "enable": 1,
          "mode": 1,
          "sn": 6,
          "createBy": "1",
          "createTime": "2023-07-30 16:20:31",
          "pkVal": "1685566025048145920"
        },
        {
          "id": "1685909459042713600",
          "name": "报警记录",
          "content": "/production/alarmRecordProduction",
          "icon": "icon-application",
          "iconColor": "#680382",
          "typeId": "1678318342772260864",
          "typeName": "生产管理",
          "enable": 1,
          "mode": 1,
          "sn": 7,
          "createBy": "1",
          "createTime": "2023-07-31 15:05:12",
          "pkVal": "1685909459042713600"
        },
        {
          "id": "1686180595584352256",
          "name": "配料单管理",
          "content": "/production/ingredient",
          "icon": "icon-application",
          "iconColor": "#B16263",
          "typeId": "1678318342772260864",
          "typeName": "生产管理",
          "enable": 1,
          "mode": 1,
          "sn": 8,
          "createBy": "1",
          "createTime": "2023-08-01 09:02:36",
          "pkVal": "1686180595584352256"
        }
      ],
      "children": [],
      "isParent": "false",
      "id": "1678318342772260864",
      "parentId": "1285867753718288384",
      "text": "生产管理"
    },
    {
      "typeId": "1690960514042445824",
      "typeName": "设备管理",
      "pid": "1285867753718288384",
      "appList": [
        {
          "id": "1690973386759880704",
          "name": "点检统计",
          "content": "/equipment/cruiseStatistics",
          "icon": "icon-application",
          "iconColor": "#7B140F",
          "typeId": "1690960514042445824",
          "typeName": "设备管理",
          "enable": 1,
          "mode": 1,
          "sn": 0,
          "createBy": "1",
          "createTime": "2023-08-14 14:27:27",
          "pkVal": "1690973386759880704"
        },
        {
          "id": "1690973842055774208",
          "name": "点检记录",
          "content": "/equipment/cruiseRecord",
          "icon": "icon-application",
          "iconColor": "#7FEE9E",
          "typeId": "1690960514042445824",
          "typeName": "设备管理",
          "enable": 1,
          "mode": 1,
          "sn": 1,
          "createBy": "1",
          "createTime": "2023-08-14 14:29:15",
          "pkVal": "1690973842055774208"
        },
        {
          "id": "1690973971793985536",
          "name": "润滑统计",
          "content": "/equipment/lubricationStatistics",
          "icon": "icon-application",
          "iconColor": "#DF7185",
          "typeId": "1690960514042445824",
          "typeName": "设备管理",
          "enable": 1,
          "mode": 1,
          "sn": 2,
          "createBy": "1",
          "createTime": "2023-08-14 14:29:46",
          "pkVal": "1690973971793985536"
        },
        {
          "id": "1690974054048481280",
          "name": "润滑记录",
          "content": "/equipment/lubricationRecord",
          "icon": "icon-application",
          "iconColor": "#64ED27",
          "typeId": "1690960514042445824",
          "typeName": "设备管理",
          "enable": 1,
          "mode": 1,
          "sn": 3,
          "createBy": "1",
          "createTime": "2023-08-14 14:30:06",
          "pkVal": "1690974054048481280"
        },
        {
          "id": "1690974410744676352",
          "name": "库存查询",
          "content": "/equipment/eamsparepartsInventory",
          "icon": "icon-application",
          "iconColor": "#6EA573",
          "typeId": "1690960514042445824",
          "typeName": "设备管理",
          "enable": 1,
          "mode": 1,
          "sn": 4,
          "createBy": "1",
          "createTime": "2023-08-14 14:31:31",
          "updateBy": "1",
          "updateTime": "2023-08-14 14:32:05",
          "pkVal": "1690974410744676352"
        },
        {
          "id": "1690974631599947776",
          "name": "采购查询",
          "content": "/equipment/eamsparepartsProcure",
          "icon": "icon-application",
          "iconColor": "#0F5C3C",
          "typeId": "1690960514042445824",
          "typeName": "设备管理",
          "enable": 1,
          "mode": 1,
          "sn": 5,
          "createBy": "1",
          "createTime": "2023-08-14 14:32:24",
          "pkVal": "1690974631599947776"
        },
        {
          "id": "1690974851373088768",
          "name": "设备故障",
          "content": "/equipment/eamdownEquipFault",
          "icon": "icon-application",
          "iconColor": "#F7CBF7",
          "typeId": "1690960514042445824",
          "typeName": "设备管理",
          "enable": 1,
          "mode": 1,
          "sn": 6,
          "createBy": "1",
          "createTime": "2023-08-14 14:33:16",
          "pkVal": "1690974851373088768"
        },
        {
          "id": "1690975038711676928",
          "name": "设备缺陷",
          "content": "/equipment/eamdownEquipDefect",
          "icon": "icon-application",
          "iconColor": "#4B8204",
          "typeId": "1690960514042445824",
          "typeName": "设备管理",
          "enable": 1,
          "mode": 1,
          "sn": 7,
          "createBy": "1",
          "createTime": "2023-08-14 14:34:01",
          "pkVal": "1690975038711676928"
        }
      ],
      "children": [],
      "isParent": "false",
      "id": "1690960514042445824",
      "parentId": "1285867753718288384",
      "text": "设备管理"
    },
    {
      "typeId": "1693177817156960256",
      "typeName": "检化验及质量管理",
      "pid": "1285867753718288384",
      "appList": [
        {
          "id": "1693187872925302784",
          "name": "委托检测合同",
          "content": "/inspectAndQuality/sampleManageExchange",
          "icon": "icon-application",
          "iconColor": "#2C7379",
          "typeId": "1693177817156960256",
          "typeName": "检化验及质量管理",
          "enable": 1,
          "mode": 1,
          "sn": 0,
          "createBy": "1",
          "createTime": "2023-08-20 17:07:01",
          "pkVal": "1693187872925302784"
        },
        {
          "id": "1696424515513872384",
          "name": "检验任务列表",
          "content": "/inspect/task",
          "icon": "icon-application",
          "iconColor": "#66F97A",
          "typeId": "1693177817156960256",
          "typeName": "检化验及质量管理",
          "enable": 1,
          "mode": 1,
          "sn": 1,
          "createBy": "1",
          "createTime": "2023-08-29 15:28:17",
          "pkVal": "1696424515513872384"
        },
        {
          "id": "1696424612867862528",
          "name": "样品检验结果查询",
          "content": "/inspect/result",
          "icon": "icon-application",
          "iconColor": "#C8A4C8",
          "typeId": "1693177817156960256",
          "typeName": "检化验及质量管理",
          "enable": 1,
          "mode": 1,
          "sn": 2,
          "createBy": "1",
          "createTime": "2023-08-29 15:28:40",
          "pkVal": "1696424612867862528"
        },
        {
          "id": "1696424723123531776",
          "name": "检验审核管理",
          "content": "/inspect/result",
          "icon": "icon-application",
          "iconColor": "#483D5A",
          "typeId": "1693177817156960256",
          "typeName": "检化验及质量管理",
          "enable": 1,
          "mode": 1,
          "sn": 3,
          "createBy": "1",
          "createTime": "2023-08-29 15:29:07",
          "pkVal": "1696424723123531776"
        },
        {
          "id": "1693207016714420224",
          "name": "检验报告管理",
          "content": "/inspectAndQuality/inspectReport",
          "icon": "icon-application",
          "iconColor": "#A6F6C9",
          "typeId": "1693177817156960256",
          "typeName": "检化验及质量管理",
          "enable": 1,
          "mode": 1,
          "sn": 4,
          "createBy": "1",
          "createTime": "2023-08-20 18:23:06",
          "updateBy": "1",
          "updateTime": "2023-08-29 15:27:07",
          "pkVal": "1693207016714420224"
        },
        {
          "id": "1696424851666366464",
          "name": "设备校准",
          "content": "/inspect/device/calibration",
          "icon": "icon-application",
          "iconColor": "#913148",
          "typeId": "1693177817156960256",
          "typeName": "检化验及质量管理",
          "enable": 1,
          "mode": 1,
          "sn": 5,
          "createBy": "1",
          "createTime": "2023-08-29 15:29:37",
          "pkVal": "1696424851666366464"
        },
        {
          "id": "1696424923758063616",
          "name": "库存预警",
          "content": "/inspect/storage/alert",
          "icon": "icon-application",
          "iconColor": "#106828",
          "typeId": "1693177817156960256",
          "typeName": "检化验及质量管理",
          "enable": 1,
          "mode": 1,
          "sn": 6,
          "createBy": "1",
          "createTime": "2023-08-29 15:29:55",
          "pkVal": "1696424923758063616"
        }
      ],
      "children": [],
      "isParent": "false",
      "id": "1693177817156960256",
      "parentId": "1285867753718288384",
      "text": "检化验及质量管理"
    },
    {
      "typeId": "1693479873570816000",
      "typeName": "能源管理",
      "pid": "1285867753718288384",
      "appList": [
        {
          "id": "1693491703471030272",
          "name": "用能同比",
          "content": "/energy/yearBasis",
          "icon": "icon-application",
          "iconColor": "#F53377",
          "typeId": "1693479873570816000",
          "typeName": "能源管理",
          "enable": 1,
          "mode": 1,
          "sn": 0,
          "createBy": "1",
          "createTime": "2023-08-21 13:14:20",
          "pkVal": "1693491703471030272"
        },
        {
          "id": "1693491805598138368",
          "name": "用能环比",
          "content": "/energy/ratio",
          "icon": "icon-application",
          "iconColor": "#6BF03B",
          "typeId": "1693479873570816000",
          "typeName": "能源管理",
          "enable": 1,
          "mode": 1,
          "sn": 1,
          "createBy": "1",
          "createTime": "2023-08-21 13:14:45",
          "pkVal": "1693491805598138368"
        },
        {
          "id": "1693492672946651136",
          "name": "实时监控",
          "content": "/energy/monitoring",
          "icon": "icon-application",
          "iconColor": "#6FF42F",
          "typeId": "1693479873570816000",
          "typeName": "能源管理",
          "enable": 1,
          "mode": 1,
          "sn": 2,
          "createBy": "1",
          "createTime": "2023-08-21 13:18:11",
          "pkVal": "1693492672946651136"
        }
      ],
      "children": [],
      "isParent": "false",
      "id": "1693479873570816000",
      "parentId": "1285867753718288384",
      "text": "能源管理"
    }
  ]);
}

// 获取当前用户信息(详细)
api.getUserInfo = () => {
  return tool.fakeIO({
    "role": {
      "roleName": "系统管理员|能源管理员|物流管理-计量基础数据修改|物流管理-计量过磅数据修改|物流管理"
    },
    "post": {
      "1683282276948262912": {
        "pathName": "行政维度/江铜国兴公司/设备能源部",
        "orgName": "设备能源部",
        "orgCode": "014511",
        "isMaster": 0,
        "postName": "测试岗位",
        "demName": "行政维度",
        "isCharge": 0,
        "postCode": "csgw",
        "postId": "1683282276948262912",
        "orgId": "1668222928651976704"
      }
    },
    "org": [
      {
        "pathName": "生产实绩维度/江铜国兴公司（生产维度）",
        "orgName": "江铜国兴公司（生产维度）",
        "orgCode": "jtgxgsscwd",
        "isMaster": 1,
        "postName": null,
        "demName": "生产实绩维度",
        "isCharge": null,
        "postCode": null,
        "postId": null,
        "orgId": "1637629630434766848",
        "parentId": null
      }
    ],
    "curPost": "江铜国兴公司（生产维度） - 暂未分配岗位",
    "user": {
      "isDelete": "0",
      "version": 31,
      "id": "1",
      "fullname": "超级管理员",
      "account": "admin",
      "password": "jZae727K08KaOmKSgOaGzww/XVqGr/PKEgIMkjrcbJI=",
      "email": "",
      "mobile": "18888888888",
      "address": "",
      "photo": "1675709047069167616",
      "sex": "",
      "from": "system",
      "status": 1,
      "groupId": "",
      "hasSyncToWx": 1,
      "userNumber": "1",
      "idCard": "",
      "phone": "",
      "education": "",
      "tenantId": "-1",
      "isInner": 1,
      "attributes": {},
      "enabled": true,
      "username": "admin",
      "accountNonLocked": true,
      "credentialsNonExpired": true,
      "accountNonExpired": true,
      "enable": true,
      "userId": "1",
      "admin": true,
      "identityType": "user",
      "pkVal": "1"
    }
  });
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
  return tool.fakeIO({
    "createTime": "2023-08-17 17:48:04",
    "id": "1692111037202309120",
    "userId": "1",
    "fileId": "1692111033876234240",
    "password": "",
    "isUse": 0,
    "pkVal": "1692111037202309120"
  });
}

// 保存签名绑定的图片 id
api.saveSignature = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  })
}

export default api
