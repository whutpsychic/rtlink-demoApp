import { tilingTreeData } from "rtlink-core"

// 判断是否为必填项
const judgeIfRequired = (rules) => {
  let result = false
  rules.map((r) => {
    if (r.required) {
      result = true
    }
  })
  return result
}

// ---------------- 算法 ----------------
// 用于处理 casecader 型的数据
const calcer = (ops, v) => {
  // 第一步，赋值parentId
  setParentId(ops)

  function setParentId(arr, parentId) {
    arr.forEach((item) => {
      // 赋值
      item.parentId = parentId
      // 循环赋值
      if (item.children && item.children.length > 0) {
        setParentId(item.children, item.value)
      }
    })
  }

  // 第二步，找到目标
  // 展开所有项目
  let allops = tilingTreeData(ops)
  let result = []
  looper(v)

  // 第三步，往回推导
  function looper(v) {
    let target = allops.find((item) => { return item.value === v })
    if (target) {
      result.unshift(target)
      if (target.parentId) {
        looper(target.parentId)
      }
    }
  }

  return result
}
// ---------------- 算法 ----------------
// 针对 van-area 数据结构渲染文字
const areaCalcer = (ops, v) => {
  // 找到省
  let preDouble = v.split("")

  let provinceValue = `${preDouble[0]}${preDouble[1]}0000`
  let provinceText = ops.province_list[provinceValue]

  let cityValue = `${preDouble[0]}${preDouble[1]}${preDouble[2]}${preDouble[3]}00`
  let cityText = ops.city_list[cityValue]

  let areaText = ops.county_list[v]

  if (!areaText) {
    return ``
  }

  return `${provinceText} / ${cityText} / ${areaText}`
}


export { judgeIfRequired, calcer, areaCalcer }