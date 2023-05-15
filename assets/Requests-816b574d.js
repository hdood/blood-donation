var I=Object.defineProperty;var U=(i,l,a)=>l in i?I(i,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[l]=a;var v=(i,l,a)=>(U(i,typeof l!="symbol"?l+"":l,a),a);import{q as N,m as d,D as O,v as f,d as x,o as m,c as $,w as n,h as o,g as s,f as e,i as g,s as V,j as z,e as k}from"./index-073928f1.js";import"./donors-90049349.js";import{_ as G,a as Y}from"./TableRow.vue_vue_type_script_setup_true_lang-175a02ce.js";import{_ as y}from"./Button.vue_vue_type_script_setup_true_lang-327c2b55.js";import{h as w,S as R}from"./transition-59614b28.js";import{U as D,Y as S,q as A}from"./dialog-c72846de.js";import{i as F}from"./laravel-vue-pagination.es-a496865f.js";import{U as H,T as J}from"./index-983d1df5.js";import{u as K}from"./index-e683d597.js";import"./typeof-f1c20273.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./hidden-19e774a3.js";import"./use-event-listener-aa9ae3a3.js";import"./description-c0bd60a0.js";import"./use-outside-click-29068e2b.js";import"./vue.runtime.esm-bundler-7b681e4d.js";import"./_commonjsHelpers-edff4021.js";class L{constructor(){v(this,"requests",d([]));v(this,"paginationData",d({}));v(this,"fetchRequests",async(l=1,a="")=>{try{const{donors:t,data:r}=await O.fetchInactiveDonors(l,a);this.requests.value=t,this.paginationData.value=r}catch{f("Error","failed to fetch requests","danger","CloseOutline")}})}}const C=N("admin-requests",()=>new L),Q=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),W={class:"fixed inset-0 overflow-y-auto"},X={class:"flex min-h-full items-center justify-center p-4 text-center"},Z=e("div",{class:"mt-2"},[e("p",{class:"text-sm text-gray-500"}," Are you sure you want to delete this request ")],-1),ee={class:"mt-6 flex justify-end w-full space-x-5"},te=x({__name:"DeleteRequestModal",props:{show:{type:Boolean}},setup(i){const l=i;return(a,t)=>(m(),$(o(R),{appear:"",show:l.show,as:"template"},{default:n(()=>[s(o(A),{as:"div",onClose:t[2]||(t[2]=r=>a.$emit("close")),class:"relative z-10"},{default:n(()=>[s(o(w),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>[Q]),_:1}),e("div",W,[e("div",X,[s(o(w),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 translate-y-4",leave:"duration-300 ease-in","leave-to":"opacity-0 translate-y-4"},{default:n(()=>[s(o(D),{class:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:n(()=>[s(o(S),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:n(()=>[g(" Delete Request ")]),_:1}),Z,e("div",ee,[e("button",{type:"button",onClick:t[0]||(t[0]=r=>a.$emit("close"))}," Cancel "),s(y,{type:"danger",class:"w-20 h-10 text-center",onClick:t[1]||(t[1]=r=>a.$emit("delete"))},{default:n(()=>[g(" Delete ")]),_:1})])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]))}}),se=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),ae={class:"fixed inset-0 overflow-y-auto"},oe={class:"flex min-h-full items-center justify-center p-4 text-center"},le=e("div",{class:"mt-2"},[e("p",{class:"text-sm text-gray-500"}," Are you sure you want to accept this request ")],-1),ne={class:"mt-6 flex justify-end w-full space-x-5"},ie=x({__name:"AcceptRequestModal",props:{show:{type:Boolean}},setup(i){const l=i;return(a,t)=>(m(),$(o(R),{appear:"",show:l.show,as:"template"},{default:n(()=>[s(o(A),{as:"div",onClose:t[2]||(t[2]=r=>a.$emit("close")),class:"relative z-10"},{default:n(()=>[s(o(w),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>[se]),_:1}),e("div",ae,[e("div",oe,[s(o(w),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 translate-y-4",leave:"duration-300 ease-in","leave-to":"opacity-0 translate-y-4"},{default:n(()=>[s(o(D),{class:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:n(()=>[s(o(S),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:n(()=>[g(" Accept Request ")]),_:1}),le,e("div",ne,[e("button",{type:"button",onClick:t[0]||(t[0]=r=>a.$emit("close"))}," Cancel "),s(y,{type:"primary",class:"w-20 h-10 text-center",onClick:t[1]||(t[1]=r=>a.$emit("accept"))},{default:n(()=>[g(" Accept ")]),_:1})])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]))}}),re={class:"flex flex-col space-y-4 py-3 rounded-xl overflow-hidden bg-secondary px-4 dark:bg-slate-600"},ce={class:"w-full space-y-4"},ue={class:"flex rounded-xl gap-3 bg-white px-2 w-64 h-10"},de={class:"space-x-3"},pe={class:"flex justify-end w-full"},fe=x({__name:"RequestsTable",setup(i){const l=d(!1),a=d(!1);d("");const t=d({}),{paginationData:r,requests:j}=V(C()),{fetchRequests:p}=C(),_=()=>l.value=!l.value,h=()=>a.value=!a.value;function M(c){t.value=c,_()}function B(c){t.value=c,h()}const q=K(c=>p(void 0,c.target.value),500);async function P(){try{await t.value.toggleActiveState(),h(),await p(r.value.current_page),f("Success","Request Accepted Successfully","success","Checkmark")}catch{h(),f("Error","failed to accept request","danger","CloseOutline")}}async function T(){try{await t.value.delete(),_(),await p(r.value.current_page),f("Success","Request Deleted Successfully","success","Checkmark")}catch{_(),f("Error","failed to delete request","danger","CloseOutline")}}return z(async()=>{await p()}),(c,b)=>(m(),k("div",re,[e("div",ce,[e("div",ue,[e("input",{type:"text",name:"request-search",id:"request-search",class:"focus:outline-none p-1 w-full",placeholder:"search for request",onInput:b[0]||(b[0]=(...u)=>o(q)&&o(q)(...u))},null,32)]),s(G,{data:o(j),fields:["name","age","bloodGroup","address",""],class:"w-full"},{default:n(({row:u})=>[(m(),$(Y,{row:u,key:u.id,fields:["name","age","bloodGroupString","address"]},{default:n(()=>[e("td",de,[s(y,{type:"primary",class:"p-1",onClick:E=>B(u)},{default:n(()=>[s(o(H),{class:"w-6 h-6"})]),_:2},1032,["onClick"]),s(y,{class:"p-1 rounded-sm",type:"danger-light",onClick:E=>M(u)},{default:n(()=>[s(o(J),{class:"w-6 h-6"})]),_:2},1032,["onClick"])])]),_:2},1032,["row"]))]),_:1},8,["data"]),e("div",pe,[s(o(F),{class:"self-end gap-6 items-center space-x-3 dark:text-white",data:o(r),onPaginationChangePage:o(p),"item-classes":"border-indigo-600  rounded-lg","active-classes":"bg-indigo-600 border-indigo-600  rounded-lg text-white"},null,8,["data","onPaginationChangePage"])]),s(te,{onClose:_,show:l.value,onDelete:T},null,8,["show"]),s(ie,{show:a.value,onClose:h,onAccept:P},null,8,["show"])])]))}}),me={class:"flex-col flex mt-10"},_e=e("div",{class:"w-11/12 mx-auto flex justify-between"},[e("h1",{class:"text-lg font-medium opacity-80 dark:text-white"}," Donors Requests ")],-1),he={class:"flex w-11/12 mx-auto mt-5 gap-4"},Te=x({__name:"Requests",setup(i){return(l,a)=>(m(),k("div",me,[_e,e("div",he,[s(fe,{class:"basis-full"})])]))}});export{Te as default};