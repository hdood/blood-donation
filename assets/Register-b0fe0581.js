import{d as k,m as c,k as S,o as f,e as _,f as l,g as a,A as R,h as d,t as U,x as I,i as u,w as p,r as v,O as L,P as A,Q as C}from"./index-0a258dc9.js";import{_ as N}from"./DarkModeSwitch.vue_vue_type_script_setup_true_lang-479c006b.js";import{I as n}from"./Input-0fad6083.js";import{_ as w}from"./Button.vue_vue_type_script_setup_true_lang-2234cba1.js";import{_ as $,i as B,b as E,a as r,c as T,d as D}from"./BirthDatePicker.vue_vue_type_script_setup_true_lang-84f141c8.js";import{L as M}from"./Logo-2d6cb5f9.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-1b27f5b2.js";import"./hidden-678929e6.js";import"./use-tracked-pointer-55ab9cce.js";import"./use-resolve-button-type-02c8b485.js";import"./use-outside-click-f29d9e15.js";import"./use-controllable-36e87213.js";const x=i=>(L("data-v-1abd8f98"),i=i(),A(),i),P={class:"w-full grid place-items-center bg-primary dark:bg-slate-700"},j={class:"rounded-2xl p-3 bg-white shadow-lg dark:bg-slate-500 wrapper"},q={class:"w-full mb-5 text-xl select-none dark:text-white flex flex-col items-center gap-3"},z=x(()=>l("span",null,"Register",-1)),H=["onSubmit"],Q={class:"space-y-2"},F=x(()=>l("label",{class:"opacity-70 text-lg",for:"dob"}," Date Of Birth ",-1)),G={class:"flex flex-col"},J={class:"h-10 self-center z-50"},K={key:0,class:"mt-3 text-sm italic text-red-600"},W={class:"w-full flex justify-between mt-7 px-4"},X=k({__name:"Register",setup(i){const e=c({name:"",email:"",password:"",cpassword:"",phone:"",address:"",dob:""}),{register:V}=S(),b=C(),t=c({});function g(){t.value={};const m=B.validate(e.value,{email:[E(),r()],name:[r()],dob:[r()],phone:[r()],password:[r(),T(8)],cpassword:[r(),D("password")],address:[r()]},{cpassword:"password confirmation"});if(!m.passes()){t.value=m.errors();return}V(e.value,b)}return(m,s)=>{const h=v("RouterLink"),y=v("ArrowThinLeft");return f(),_("div",P,[l("div",j,[l("div",q,[a(M,{class:"w-20 h-20"}),z]),l("form",{class:"flex flex-col gap-5",onSubmit:R(g,["prevent"])},[a(d(n),{type:"text",name:"Name",modelValue:e.value.name,"onUpdate:modelValue":s[0]||(s[0]=o=>e.value.name=o),error:t.value.name},null,8,["modelValue","error"]),a(d(n),{type:"email",name:"Email",modelValue:e.value.email,"onUpdate:modelValue":s[1]||(s[1]=o=>e.value.email=o),error:t.value.email},null,8,["modelValue","error"]),l("div",Q,[F,l("div",G,[l("div",J,[a($,{class:"self-center",modelValue:e.value.dob,"onUpdate:modelValue":s[2]||(s[2]=o=>e.value.dob=o)},null,8,["modelValue"])]),t.value.dob?(f(),_("span",K,U(t.value.dob),1)):I("",!0)])]),a(d(n),{name:"Phone",type:"text",modelValue:e.value.phone,"onUpdate:modelValue":s[3]||(s[3]=o=>e.value.phone=o),error:t.value.phone},null,8,["modelValue","error"]),a(d(n),{name:"Address",type:"text",modelValue:e.value.address,"onUpdate:modelValue":s[4]||(s[4]=o=>e.value.address=o),error:t.value.address},null,8,["modelValue","error"]),a(d(n),{name:"password",type:"password",error:t.value.password,modelValue:e.value.password,"onUpdate:modelValue":s[5]||(s[5]=o=>e.value.password=o)},null,8,["error","modelValue"]),a(d(n),{name:"password confirmation",type:"password",error:t.value.cpassword,modelValue:e.value.cpassword,"onUpdate:modelValue":s[6]||(s[6]=o=>e.value.cpassword=o)},null,8,["error","modelValue"]),l("div",W,[l("span",null,[u(" Have an account? "),a(h,{class:"underline",to:"/admin/login"},{default:p(()=>[u("sign in")]),_:1})]),a(w,{type:"primary",class:"w-20 h-10"},{default:p(()=>[u(" Submit ")]),_:1})])],40,H)]),a(N,{class:"fixed bottom-5 right-5"}),a(w,{type:"primary",class:"absolute top-5 left-5 p-2",onClick:s[7]||(s[7]=o=>m.$router.go(-1))},{default:p(()=>[a(y,{class:"w-5 h-5"})]),_:1})])}}});const ue=O(X,[["__scopeId","data-v-1abd8f98"]]);export{ue as default};
