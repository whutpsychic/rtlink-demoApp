// 由于本 app 与后台联动，包括图标内容均由后台返回，同时又弃用了原来的 <ht-icon />但是后台数据未变，这里对名称进行转换。

const transferIconName = (name, bool) => {
  switch (name) {
    case "icon-application": return "save"
    case "icon-che": return "logistics-vehicle-m"
    case "icon-document": return "detail-template"
    default: return bool ? "save" : name
  }
}

export { transferIconName }