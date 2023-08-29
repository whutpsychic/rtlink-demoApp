import { request } from "@/utils";
import { pageSize, fakeIOTimeout } from "@/appConfig";

const api = {};

let num = 0;
// ------------------------------------------------------
// 查询待办列表
api.getList = (page = 1, searchText) => {
  // const querys = searchText ? [
  //   { property: "xxxxxxx", value: searchText, operation: "LIKE", relation: "OR" },
  // ] : [];

  // const data = {
  //   pageBean: { page, pageSize },
  //   querys
  // };

  // const bpmRunTime = apiContext.bpmRunTime;
  // return request({
  //   url: `${bpmRunTime}/runtime/task/v1/getTodoList`,
  //   method: 'POST',
  //   data
  // }).then((res) => {
  //   if (res.rows && res.rows.length > 0) {
  //     return res.rows;
  //   } else {
  //     return [];
  //   }
  // });

  return new Promise((resolve) => {
    setTimeout(() => {
      const r = Math.random() > 0.35;
      if (r) {
        num++;
        resolve([
          { title: `数据标题${num}-1`, content: "内容内容内容内容内容内容内容内容内容内容", date: "2023-08-20" },
          { title: `数据标题${num}-2`, content: "内容内容内容内容内容内容内容内容内容内容", date: "2023-08-20" },
          { title: `数据标题${num}-3`, content: "内容内容内容内容内容内容内容内容内容内容", date: "2023-08-20" },
          { title: `数据标题${num}-4`, content: "内容内容内容内容内容内容内容内容内容内容", date: "2023-08-20" },
          { title: `数据标题${num}-5`, content: "内容内容内容内容内容内容内容内容内容内容", date: "2023-08-20" },
          { title: `数据标题${num}-6`, content: "内容内容内容内容内容内容内容内容内容内容", date: "2023-08-20" },
        ]);
      } else {
        resolve([]);
      }
    }, fakeIOTimeout);
  })
};

export default api;