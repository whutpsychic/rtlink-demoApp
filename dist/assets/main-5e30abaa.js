import{_ as I,o as l,c as g,b as s,t as p,d as c,r as u,e as f,w as y,a as v,h as b,F as D}from"./index-d8892eff.js";const F={class:"item-can"},N={class:"inner-can"},P={class:"title"},V={__name:"main",props:{title:{type:String,default:""},content:{type:String,default:""},date:{type:String,default:""}},setup(n){return(a,o)=>(l(),g("div",F,[s("div",N,[s("p",P,p(n.title),1),s("p",null,p(n.content),1),s("p",null,p(n.date),1)])]))}},j=I(V,[["__scopeId","data-v-703884f8"]]),$={};let e=0;$.getItems=()=>new Promise((n,a)=>{setTimeout(()=>{e++;let o=[{title:`标题${e}-1`,content:"一些内容",date:"2023-01-01"},{title:`标题${e}-2`,content:"一些内容",date:"2023-01-01"},{title:`标题${e}-3`,content:"一些内容",date:"2023-01-01"},{title:`标题${e}-4`,content:"一些内容",date:"2023-01-01"},{title:`标题${e}-5`,content:"一些内容",date:"2023-01-01"},{title:`标题${e}-6`,content:"一些内容",date:"2023-01-01"},{title:`标题${e}-7`,content:"一些内容",date:"2023-01-01"}],r=Math.random()*10>3;n(r?o:[])},1e3)});const H={__name:"main",setup(n){const a=c([]),o=c([]),r=c(["无量寿佛经书","嘻哈风","四成弦和豆腐坊","天地无极万里追踪","西天","王总","小蔡","老毕"]),m=c(null),x=()=>{a.value=[]},S=async()=>{let t=await $.getItems();t&&t.length>0?a.value=[...a.value,...t]:m.value.finish()},k=t=>{const h=t.split("").map((i,_)=>({text:i,type:_%2>0?"hot":"last"}));o.value=h},C=t=>{console.log(t)};return(t,h)=>{const i=u("rtm-top-searcher"),_=u("rtm-list"),w=u("rtm-app-container");return l(),f(w,{title:"带顶部搜索栏的两列式下拉刷新列表",canPop:""},{default:y(()=>[v(i,{placeholder:"搜索",history:r.value,predictions:o.value,onChange:k,onSearch:C},null,8,["history","predictions"]),v(_,{ref_key:"list",ref:m,doubleCol:"",load:S,empty:a.value.length===0,onRefresh:x},{default:y(()=>[(l(!0),g(D,null,b(a.value,(d,B)=>(l(),f(j,{key:B,title:d.title,content:d.content,date:d.date},null,8,["title","content","date"]))),128))]),_:1},8,["empty"])]),_:1})}}};export{H as default};
