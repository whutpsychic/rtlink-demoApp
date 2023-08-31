import{au as s,aw as m,_ as d,av as f,g,o as w,h as y,w as o,l as c,j as l,B as P}from"./index-9d2fff7b.js";const r={};r.permissionList=["camera","storage"];r.status={denied:"PermissionStatus.denied",granted:"PermissionStatus.granted",restricted:"PermissionStatus.restricted",limited:"PermissionStatus.limited",permanentlyDenied:"PermissionStatus.permanentlyDenied"};r.openAppSettings=()=>{s.call("openAppSettings")};r.await=(e,a)=>{e==="camera"?s.register("aprcamera",a):e==="storage"&&s.register("aprstorage",a)};r.uninstall=e=>{e==="camera"?s.unregister("aprcamera"):e==="storage"&&s.unregister("aprstorage")};r.request=e=>{if(typeof e!="string")throw new Error("permissions.request函数中你传给flutter端的信息不是一个字符串,将无法识别!");{let a=!1;for(let i of r.permissionList)if(i===e){a=!0;break}if(!a)throw new Error("requestPermission函数中你请求的权限不存在!")}if(!window[`${m}requestPermission`]){console.error("你所在的位置于flutter端没有注册requestPermission函数,请先行注册方可使用,或者联系zbc!"),console.warn("如果你在非flutter端调试,那么requestPermission函数将不会产生任何作用,且不会影响你继续调试其他功能。");return}window[`${m}requestPermission`].postMessage(e)};const t={...r};const b={__name:"permissions",setup(e){const a=()=>{t.request("camera")},i=()=>{t.request("storage")},u=()=>{t.openAppSettings()};return t.await("camera",n=>{n===t.status.denied?s.toast("需要申请"):n===t.status.permanentlyDenied?s.toast("您申请的权限已被禁止，您需要在系统设置中设置此应用的权限"):n===t.status.granted&&s.toast("您申请的权限已获批准")}),t.await("storage",n=>{s.toast(n)}),f(()=>{t.uninstall("camera"),t.uninstall("storage")}),(n,S)=>{const p=P,_=g("rtm-app-container");return w(),y(_,{title:"权限请求",canPop:""},{body:o(()=>[c(p,{class:"btn-item",type:"primary",block:"",onClick:a},{default:o(()=>[l("请求照相机/摄像头权限")]),_:1}),c(p,{class:"btn-item",type:"primary",block:"",onClick:i},{default:o(()=>[l("请求读写数据权限")]),_:1}),c(p,{class:"btn-item",type:"primary",block:"",onClick:u},{default:o(()=>[l("打开 App 权限设置")]),_:1})]),_:1})}}},q=d(b,[["__scopeId","data-v-82c92e18"]]);export{q as default};
