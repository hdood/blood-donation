import{d as L,k as b,s as V,o as _,e as u,f as s,g as e,h as t,t as S,x as I,A as R,H as f,w as a,i as n,r as g,O as A,P as C,Q as N}from"./index-0a258dc9.js";import{_ as T}from"./DarkModeSwitch.vue_vue_type_script_setup_true_lang-479c006b.js";import{I as h}from"./Input-0fad6083.js";import{_ as x}from"./Button.vue_vue_type_script_setup_true_lang-2234cba1.js";import{L as B}from"./Logo-2d6cb5f9.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-1b27f5b2.js";const D=l=>(A("data-v-ac80a31e"),l=l(),C(),l),M={class:"w-full h-screen grid place-items-center bg-primary dark:bg-slate-700"},U={class:"w-96 rounded-2xl px-3 py-6 bg-white shadow-lg dark:bg-slate-500 wrapper"},E={class:"w-full mb-5 text-xl select-none dark:text-white flex flex-col items-center gap-3"},F=D(()=>s("span",null,"Login",-1)),H={key:0,class:"text-center italic text-sm text-red-600"},O={class:"space-y-7"},P={class:"flex flex-col"},Q={class:"dark:text-white"},j={class:"text-center mt-14 dark:text-white"},q=L({__name:"Login",setup(l){const p=b(),{login:w}=p,v=N(),{email:i,password:d,loading:y,error:m}=V(p);return(z,o)=>{const c=g("RouterLink"),k=g("ArrowThinLeft");return _(),u("div",M,[s("div",U,[s("div",E,[e(B,{class:"w-20 h-20"}),F]),t(m)?(_(),u("div",H,S(t(m)),1)):I("",!0),s("form",{class:"space-y-6",onSubmit:o[2]||(o[2]=R(r=>t(w)(t(v)),["prevent"]))},[s("div",O,[e(t(h),{name:"email",type:"email",modelValue:t(i),"onUpdate:modelValue":o[0]||(o[0]=r=>f(i)?i.value=r:null),errorMsg:"this field must be a valid email"},null,8,["modelValue"]),e(t(h),{name:"password",type:"password",modelValue:t(d),"onUpdate:modelValue":o[1]||(o[1]=r=>f(d)?d.value=r:null)},null,8,["modelValue"])]),s("div",P,[s("div",Q,[e(x,{class:"py-1 mx-auto w-11/12 text-lg grid place-items-center",type:"primary",loading:t(y)},{default:a(()=>[n("Login")]),_:1},8,["loading"]),e(c,{to:"#",class:"float-right mt-2 mr-4 underline"},{default:a(()=>[n("Forgot password?")]),_:1})]),s("div",j,[n(" Don't have an account? "),e(c,{to:"/admin/register",class:"underline"},{default:a(()=>[n("Sign up ")]),_:1})])])],32)]),e(T,{class:"absolute bottom-5 right-5"}),e(c,{to:"/"},{default:a(()=>[e(x,{type:"primary",class:"absolute top-5 left-5 p-2"},{default:a(()=>[e(k,{class:"w-5 h-5"})]),_:1})]),_:1})])}}});const ee=$(q,[["__scopeId","data-v-ac80a31e"]]);export{ee as default};
