import { tool } from "@/utils";

const api = {};

// 查询主列表
api.getItems = (page = 1, searchText) => {
  return tool.fakeListIO(page, [
    {
      "createTime": "2023-08-29 16:45:03",
      "id": "1696443832519356416",
      "subject": "审批提醒",
      "owner": "超级管理员",
      "messageType": "inner",
      "canReply": 0,
      "isPublic": 0,
      "rid": "1696443832674545664",
      "pkVal": "1696443832519356416"
    },
    {
      "createTime": "2023-08-29 16:02:24",
      "id": "1696433102000746496",
      "subject": "审批提醒",
      "owner": "超级管理员",
      "messageType": "inner",
      "canReply": 0,
      "isPublic": 0,
      "rid": "1696433102264987648",
      "pkVal": "1696433102000746496"
    },
    {
      "createTime": "2023-08-29 15:06:44",
      "id": "1696419091645460480",
      "subject": "审批提醒",
      "owner": "超级管理员",
      "messageType": "inner",
      "canReply": 0,
      "isPublic": 0,
      "rid": "1696419092031336448",
      "pkVal": "1696419091645460480"
    },
    {
      "createTime": "2023-08-25 15:22:09",
      "id": "1694973419343835136",
      "subject": "审批提醒",
      "owner": "超级管理员",
      "messageType": "inner",
      "canReply": 0,
      "isPublic": 0,
      "rid": "1694973419473858560",
      "pkVal": "1694973419343835136"
    },
    {
      "createTime": "2023-08-25 15:19:55",
      "id": "1694972856237551616",
      "subject": "审批提醒",
      "owner": "超级管理员",
      "messageType": "inner",
      "canReply": 0,
      "isPublic": 0,
      "rid": "1694972856329826304",
      "pkVal": "1694972856237551616"
    },
    {
      "createTime": "2023-08-25 15:16:58",
      "id": "1694972115770929152",
      "subject": "审批提醒",
      "owner": "超级管理员",
      "messageType": "inner",
      "canReply": 0,
      "isPublic": 0,
      "rid": "1694972115942895616",
      "pkVal": "1694972115770929152"
    },
    {
      "createTime": "2023-08-25 15:13:51",
      "id": "1694971329972269056",
      "subject": "审批提醒",
      "owner": "超级管理员",
      "messageType": "inner",
      "canReply": 0,
      "isPublic": 0,
      "rid": "1694971330320396288",
      "pkVal": "1694971329972269056"
    },
    {
      "createTime": "2023-08-25 14:31:14",
      "id": "1694960606412009472",
      "subject": "审批提醒",
      "owner": "超级管理员",
      "messageType": "inner",
      "canReply": 0,
      "isPublic": 0,
      "rid": "1694960606961463296",
      "pkVal": "1694960606412009472"
    },
    {
      "createTime": "2023-08-25 14:29:47",
      "id": "1694960242195427328",
      "subject": "审批提醒",
      "owner": "超级管理员",
      "messageType": "inner",
      "canReply": 0,
      "isPublic": 0,
      "rid": "1694960242648412160",
      "pkVal": "1694960242195427328"
    },
    {
      "createTime": "2023-08-25 14:26:45",
      "id": "1694959476986605568",
      "subject": "审批提醒",
      "owner": "超级管理员",
      "messageType": "inner",
      "canReply": 0,
      "isPublic": 0,
      "rid": "1694959477171154944",
      "pkVal": "1694959476986605568"
    }
  ]);
};

// 立即处理
api.executeItem = (id) => {
  return tool.fakeIO({
    "createTime": "2023-08-29 16:45:03",
    "id": "1696443832519356416",
    "subject": "审批提醒",
    "ownerId": "1",
    "owner": "超级管理员",
    "messageType": "inner",
    "canReply": 0,
    "isPublic": 0,
    "content": "<p>审批提醒：<br/>您有新的工作流需要审批<a href=\"http://192.168.0.213:8280/front/matter/approvalForm?taskId=1696443830073966592&instId=1696443824990470144&isGetApprovalBtn=true\" target=\"_self\">超级管理员在2023-08-29发起劳保用品管理-采购订单管理</a></p>",
    "pkVal": "1696443832519356416"
  });
};

export default api;