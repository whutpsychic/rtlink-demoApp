import{y as T,z as D,b as I,$ as U,A as M,E as S,l as o,I as O,J as h,K as W,M as G,L as J,N as p,a0 as V,B as k,a1 as Y,G as j,a2 as q,a3 as Q,a4 as X,a5 as Z,P as N,a6 as ee,C as te,a7 as ne,a8 as oe,a9 as A,aa as ae,ab as le,D as se,ac as ce,ad as re,ae as ie,af as ue}from"./index-9d2fff7b.js";const[R,_]=T("action-bar"),F=Symbol(R),de={placeholder:Boolean,safeAreaInsetBottom:S};var fe=D({name:R,props:de,setup(e,{slots:a}){const n=I(),s=U(n,_),{linkChildren:c}=M(F);c();const f=()=>{var m;return o("div",{ref:n,class:[_(),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[(m=a.default)==null?void 0:m.call(a)])};return()=>e.placeholder?s(f):f()}});const me=O(fe),[Be,ge]=T("action-bar-button"),he=h({},W,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var Ce=D({name:Be,props:he,setup(e,{slots:a}){const n=G(),{parent:s,index:c}=J(F),f=p(()=>{if(s){const r=s.children[c.value-1];return!(r&&"isButton"in r)}}),m=p(()=>{if(s){const r=s.children[c.value+1];return!(r&&"isButton"in r)}});return V({isButton:!0}),()=>{const{type:r,icon:B,text:g,color:w,loading:v,disabled:y}=e;return o(k,{class:ge([r,{last:m.value,first:f.value}]),size:"large",type:r,icon:B,color:w,loading:v,disabled:y,onClick:n},{default:()=>[a.default?a.default():g]})}}});const E=O(Ce),[be,i,b]=T("dialog"),we=h({},Y,{title:String,theme:String,width:j,message:[String,Function],callback:Function,allowHtml:Boolean,className:q,transition:Q("van-dialog-bounce"),messageAlign:String,closeOnPopstate:S,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:S,closeOnClickOverlay:Boolean}),ve=[...X,"transition","closeOnPopstate"];var K=D({name:be,props:we,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:a,slots:n}){const s=I(),c=Z({confirm:!1,cancel:!1}),f=t=>a("update:show",t),m=t=>{var l;f(!1),(l=e.callback)==null||l.call(e,t)},r=t=>()=>{e.show&&(a(t),e.beforeClose?(c[t]=!0,ce(e.beforeClose,{args:[t],done(){m(t),c[t]=!1},canceled(){c[t]=!1}})):m(t))},B=r("cancel"),g=r("confirm"),w=oe(t=>{var l,u;if(t.target!==((u=(l=s.value)==null?void 0:l.popupRef)==null?void 0:u.value))return;({Enter:e.showConfirmButton?g:A,Escape:e.showCancelButton?B:A})[t.key](),a("keydown",t)},["enter","esc"]),v=()=>{const t=n.title?n.title():e.title;if(t)return o("div",{class:i("header",{isolated:!e.message&&!n.default})},[t])},y=t=>{const{message:l,allowHtml:u,messageAlign:d}=e,C=i("message",{"has-title":t,[d]:d}),P=ae(l)?l():l;return u&&typeof P=="string"?o("div",{class:C,innerHTML:P},null):o("div",{class:C},[P])},$=()=>{if(n.default)return o("div",{class:i("content")},[n.default()]);const{title:t,message:l,allowHtml:u}=e;if(l){const d=!!(t||n.title);return o("div",{key:u?1:0,class:i("content",{isolated:!d})},[y(d)])}},H=()=>o("div",{class:[se,i("footer")]},[e.showCancelButton&&o(k,{size:"large",text:e.cancelButtonText||b("cancel"),class:i("cancel"),style:{color:e.cancelButtonColor},loading:c.cancel,disabled:e.cancelButtonDisabled,onClick:B},null),e.showConfirmButton&&o(k,{size:"large",text:e.confirmButtonText||b("confirm"),class:[i("confirm"),{[le]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:c.confirm,disabled:e.confirmButtonDisabled,onClick:g},null)]),L=()=>o(me,{class:i("footer")},{default:()=>[e.showCancelButton&&o(E,{type:"warning",text:e.cancelButtonText||b("cancel"),class:i("cancel"),color:e.cancelButtonColor,loading:c.cancel,disabled:e.cancelButtonDisabled,onClick:B},null),e.showConfirmButton&&o(E,{type:"danger",text:e.confirmButtonText||b("confirm"),class:i("confirm"),color:e.confirmButtonColor,loading:c.confirm,disabled:e.confirmButtonDisabled,onClick:g},null)]}),z=()=>n.footer?n.footer():e.theme==="round-button"?L():H();return()=>{const{width:t,title:l,theme:u,message:d,className:C}=e;return o(ne,N({ref:s,role:"dialog",class:[i([u]),C],style:{width:te(t)},tabindex:0,"aria-labelledby":l||d,onKeydown:w,"onUpdate:show":f},ee(e,ve)),{default:()=>[v(),$(),z()]})}}});let x;const ye={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let Pe=h({},ye);function Se(){({instance:x}=ie({setup(){const{state:a,toggle:n}=ue();return()=>o(K,N(a,{"onUpdate:show":n}),null)}}))}function ke(e){return re?new Promise((a,n)=>{x||Se(),x.open(h({},Pe,e,{callback:s=>{(s==="confirm"?a:n)(s)}}))}):Promise.resolve()}const Te=e=>ke(h({showCancelButton:!0},e));O(K);export{Te as a,ke as s};