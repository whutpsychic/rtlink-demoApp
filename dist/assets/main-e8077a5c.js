import{_ as C,g as l,o as i,c as _,a,l as p,k as B,t as d,q as S,p as D,n as F,v as g,b as r,h,w as b,x as L,F as N,s as O,f as z}from"./index-c59e3292.js";import{s as E}from"./index-0937d9bb.js";const H=e=>(D("data-v-e3a1101e"),e=e(),F(),e),$={class:"left-icon"},q={key:0,class:"badger"},A={class:"main-content"},G={class:"title"},J={class:"content"},K={class:"execute"},M=H(()=>a("span",null,d("立即处理"),-1)),Q={__name:"main",props:{read:{type:Boolean,default:!0},data:{type:Object,default:()=>({})}},setup(e){return(t,o)=>{const c=l("rt-icon");return i(),_("div",{class:S(e.read?"item-can read":"item-can")},[a("div",$,[p(c,{name:e.read?"read-already-m":"read-wait-m",color:e.read?"#aaa":"#30c4fd"},null,8,["name","color"]),e.read?B("",!0):(i(),_("div",q))]),a("div",A,[a("p",G,d(e.data.subject),1),a("p",J,[a("span",null,d(e.data.owner),1),a("span",null,d(e.data.createTime),1)]),a("p",K,[M,p(c,{name:"arrow-right-m",size:"16",color:e.read?"#aaa":"#30c4fd"},null,8,["color"])])])],2)}}},U=C(Q,[["__scopeId","data-v-e3a1101e"]]),u={};u.getItems=(e=1,t)=>g.fakeListIO(e,[{createTime:"2023-08-29 16:45:03",id:"1696443832519356416",subject:"审批提醒",owner:"超级管理员",messageType:"inner",canReply:0,isPublic:0,rid:"1696443832674545664",pkVal:"1696443832519356416"},{createTime:"2023-08-29 16:02:24",id:"1696433102000746496",subject:"审批提醒",owner:"超级管理员",messageType:"inner",canReply:0,isPublic:0,rid:"1696433102264987648",pkVal:"1696433102000746496"},{createTime:"2023-08-29 15:06:44",id:"1696419091645460480",subject:"审批提醒",owner:"超级管理员",messageType:"inner",canReply:0,isPublic:0,rid:"1696419092031336448",pkVal:"1696419091645460480"},{createTime:"2023-08-25 15:22:09",id:"1694973419343835136",subject:"审批提醒",owner:"超级管理员",messageType:"inner",canReply:0,isPublic:0,rid:"1694973419473858560",pkVal:"1694973419343835136"},{createTime:"2023-08-25 15:19:55",id:"1694972856237551616",subject:"审批提醒",owner:"超级管理员",messageType:"inner",canReply:0,isPublic:0,rid:"1694972856329826304",pkVal:"1694972856237551616"},{createTime:"2023-08-25 15:16:58",id:"1694972115770929152",subject:"审批提醒",owner:"超级管理员",messageType:"inner",canReply:0,isPublic:0,rid:"1694972115942895616",pkVal:"1694972115770929152"},{createTime:"2023-08-25 15:13:51",id:"1694971329972269056",subject:"审批提醒",owner:"超级管理员",messageType:"inner",canReply:0,isPublic:0,rid:"1694971330320396288",pkVal:"1694971329972269056"},{createTime:"2023-08-25 14:31:14",id:"1694960606412009472",subject:"审批提醒",owner:"超级管理员",messageType:"inner",canReply:0,isPublic:0,rid:"1694960606961463296",pkVal:"1694960606412009472"},{createTime:"2023-08-25 14:29:47",id:"1694960242195427328",subject:"审批提醒",owner:"超级管理员",messageType:"inner",canReply:0,isPublic:0,rid:"1694960242648412160",pkVal:"1694960242195427328"},{createTime:"2023-08-25 14:26:45",id:"1694959476986605568",subject:"审批提醒",owner:"超级管理员",messageType:"inner",canReply:0,isPublic:0,rid:"1694959477171154944",pkVal:"1694959476986605568"}]);u.executeItem=e=>g.fakeIO({createTime:"2023-08-29 16:45:03",id:"1696443832519356416",subject:"审批提醒",ownerId:"1",owner:"超级管理员",messageType:"inner",canReply:0,isPublic:0,content:'<p>审批提醒：<br/>您有新的工作流需要审批<a href="http://192.168.0.213:8280/front/matter/approvalForm?taskId=1696443830073966592&instId=1696443824990470144&isGetApprovalBtn=true" target="_self">超级管理员在2023-08-29发起劳保用品管理-采购订单管理</a></p>',pkVal:"1696443832519356416"});const Z={__name:"main",setup(e){const t=r([]),o=r(null),c=r(1),y=r(""),T=r([]),f=r([]),v=s=>{},k=s=>{y.value=s,o.value.reloadData()},w=()=>{c.value=1,t.value=[]},x=async()=>{const s=y.value;let n=await u.getItems(c.value,s);n&&n.length>0?t.value=[...t.value,...n]:o.value.finish(),c.value++},j=s=>{O({message:"请稍后...",forbidClick:!0,duration:0}),u.executeItem(s.id).then(n=>{E({allowHtml:!0,title:n.subject,message:n.content})}).finally(()=>{z()})};return(s,n)=>{const I=l("rtm-top-searcher"),V=l("rtm-list"),R=l("rtm-app-container");return i(),h(R,{title:"消息"},{default:b(()=>[p(I,{placeholder:"搜索",history:T.value,predictions:f.value,onChange:v,onSearch:k},null,8,["history","predictions"]),p(V,{ref_key:"list",ref:o,load:x,empty:t.value.length===0,onRefresh:w},{default:b(()=>[(i(!0),_(N,null,L(t.value,(m,P)=>(i(),h(U,{key:P,data:m,read:!!m.receiveTime,onClick:W=>j(m)},null,8,["data","read","onClick"]))),128))]),_:1},8,["empty"])]),_:1})}}};export{Z as default};
