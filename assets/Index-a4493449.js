import{A as V}from"./default-56501bb2.js";import{d as k,s as B,a7 as $,m as p,o as m,c as h,w as o,g as t,h as n,f as e,i as x,p as y,v as f,j as C,e as R,t as q,D as S}from"./index-0a258dc9.js";import{_ as w}from"./Button.vue_vue_type_script_setup_true_lang-2234cba1.js";import{_ as G,a as U}from"./RhFactorInput.vue_vue_type_script_setup_true_lang-cdc9bf47.js";import{I as A}from"./Input-0fad6083.js";import{h as b,S as D}from"./transition-84382b01.js";import{U as E,Y as I,q as M}from"./dialog-1e2090d3.js";import{a as j,_ as F}from"./TableRow.vue_vue_type_script_setup_true_lang-054d3682.js";import{e as L}from"./index-3a6d9d60.js";import"./Logo-2d6cb5f9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DarkModeSwitch.vue_vue_type_script_setup_true_lang-479c006b.js";import"./index-1b27f5b2.js";import"./hidden-678929e6.js";import"./use-tracked-pointer-55ab9cce.js";import"./use-tree-walker-9beeebb9.js";import"./use-resolve-button-type-02c8b485.js";import"./use-outside-click-f29d9e15.js";import"./dynamic-import-helper-be004503.js";import"./index-7b20c85e.js";import"./vue.runtime.esm-bundler-4da7d40c.js";import"./_commonjsHelpers-edff4021.js";import"./use-event-listener-17701bc3.js";import"./radio-group-7fa0f2a1.js";import"./description-13c92f53.js";import"./use-controllable-36e87213.js";const O=e("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),Y={class:"fixed inset-0 overflow-y-auto"},N={class:"flex min-h-full items-center justify-center p-4 text-center"},T=e("div",{class:"opacity-70 text-lg dark:text-white dark:opacity-100 mt-2 mb-1"}," Blood Group ",-1),P={class:"flex flex-col gap-1 items-center"},z={class:"mt-6 flex justify-end w-full space-x-5"},H=k({__name:"MakeRequestModal",props:{show:{type:Boolean}},emits:["close","success"],setup(g,{emit:r}){const i=g,{currentUser:_}=B($()),a=p(""),v=p(""),c=p("");async function d(){const l=new FormData;l.append("bloodGroup",a.value),l.append("rhFactor",v.value),l.append("patient_id",_.value.id),l.append("description",c.value);try{await y.post("not_implementd/patient/make-request",l),f("Success","Request published successfully","success","Checkmark"),r("success")}catch{f("Error","failed to publish request","danger","CloseOutline")}r("close")}return(l,s)=>(m(),h(n(D),{appear:"",show:i.show,as:"template"},{default:o(()=>[t(n(M),{as:"div",onClose:s[4]||(s[4]=u=>r("close")),class:"relative z-10"},{default:o(()=>[t(n(b),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:o(()=>[O]),_:1}),e("div",Y,[e("div",N,[t(n(b),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 translate-y-4",leave:"duration-300 ease-in","leave-to":"opacity-0 translate-y-4"},{default:o(()=>[t(n(E),{class:"w-full flex flex-col gap-7 max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:o(()=>[t(n(I),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:o(()=>[x(" Book Appointment ")]),_:1}),e("div",null,[t(n(A),{as:"textarea",name:"Description",modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=u=>c.value=u)},null,8,["modelValue"]),T,e("div",P,[t(G,{class:"",modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=u=>a.value=u)},null,8,["modelValue"]),t(U,{class:"mt-4 mx-auto",modelValue:v.value,"onUpdate:modelValue":s[2]||(s[2]=u=>v.value=u)},null,8,["modelValue"])])]),e("div",z,[e("button",{type:"button",onClick:s[3]||(s[3]=u=>r("close"))}," Cancel "),t(w,{type:"primary",class:"px-2 h-10 text-center",onClick:d},{default:o(()=>[x(" Publish Request ")]),_:1})])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]))}}),J={class:"flex flex-col gap-4 py-3 rounded-xl overflow-hidden bg-secondary px-4 dark:bg-slate-600"},K=e("div",{class:"dark:text-white text-xl font-medium"},"Requests",-1),Q={class:"w-full space-y-4"},W={class:"pl-5"},X=k({__name:"BloodRequestsTable",setup(g){const r=p([]);return C(async()=>{try{const i=await y.get("not_implementd/patient/requests");r.value=i.data}catch{f("Error","failed to fetch requests","danger","CloseOutline")}}),(i,_)=>(m(),R("div",J,[K,e("div",Q,[t(F,{data:r.value,fields:["description","Blood Group","status"],"header-class":"bg-gradient-to-r from-teal-400 to-teal-500",class:"w-full"},{default:o(({row:a})=>[(m(),h(j,{class:"h-12",row:a,key:a.id,fields:["description"]},{default:o(()=>[e("td",W,q(n(S).parseBloodGroup(a.bloodGroup,a.rhFactor)),1),e("td",null,q(a.accepted?"accepted":"pending"),1)]),_:2},1032,["row"]))]),_:1},8,["data"])])]))}}),Z={class:"p-16 flex flex-col gap-2"},ee={key:1,class:"bg-gradient-to-l from-blue-400 to-blue-500 p-4 rounded-lg space-y-4 w-full flex justify-between items-center"},te={class:"flex flex-col gap-3"},se={class:"text-2xl font-medium text-white flex items-center gap-2"},ae=e("div",{class:"font-medium text-white"}," Your Request is pending you'll receive a notification when it's accepted. ",-1),Se=k({__name:"Index",setup(g){const r=$(),i=p(!1),_=p(""),a=p({});async function v(){try{const d=y.delete(`not_implementd/patient/request/${a.value.id}`);await c(),f("Success","request deleted successfully","success","Checkmark")}catch{f("Error","failed to delete request","danger","CloseOutline")}}async function c(){try{const d=await y.get("not_implementd/patient/last-request");_.value=d.data.state,a.value=d.data.request}catch{f("Error","failed to fetch last request state","danger","CloseOutline")}}return C(async()=>{await c()}),(d,l)=>(m(),h(V,{store:n(r),"no-side-bar":""},{default:o(()=>[e("div",Z,[_.value===""?(m(),h(w,{key:0,onClick:l[0]||(l[0]=s=>i.value=!0),type:"primary",class:"h-10 px-2 self-end"},{default:o(()=>[x("Make A Request")]),_:1})):(m(),R("div",ee,[e("div",te,[e("div",se,[t(n(L),{class:"w-8 h-8"}),x(" Your Last Request Is Pending ")]),ae]),t(w,{class:"w-40 h-10",type:"card-danger",onClick:v},{default:o(()=>[x("Cancel Request")]),_:1})])),e("div",null,[t(X)])]),t(H,{onClose:l[1]||(l[1]=s=>i.value=!1),show:i.value,onSuccess:c},null,8,["show"])]),_:1},8,["store"]))}});export{Se as default};
