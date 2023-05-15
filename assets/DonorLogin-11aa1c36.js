import{d as B,u as C,m as D,s as N,j as R,v as A,o as f,e as h,f as e,g as t,h as o,t as O,x as T,A as j,H as x,w as a,i as r,r as w,O as M,P as U,Q as $}from"./index-073928f1.js";import{_ as z}from"./DarkModeSwitch.vue_vue_type_script_setup_true_lang-a6e532ce.js";import{I as v}from"./Input-02bd9ab0.js";import{_ as y}from"./Button.vue_vue_type_script_setup_true_lang-327c2b55.js";import{L as E}from"./Logo-5a94e98e.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-e683d597.js";const b=n=>(M("data-v-507b5583"),n=n(),U(),n),G={class:"w-screen h-screen flex flex-col gap-3 items-center justify-center bg-primary dark:bg-slate-700"},q={class:"w-96 rounded-2xl px-3 py-6 bg-white shadow-lg dark:bg-slate-500 wrapper"},H={class:"w-full mb-5 text-xl select-none dark:text-white flex flex-col items-center gap-3"},P=b(()=>e("span",null,"Login",-1)),Q={key:0,class:"text-center italic text-sm text-red-600"},J={class:"space-y-7"},K={class:"flex flex-col"},W={class:"dark:text-white"},X={class:"text-center mt-6 dark:text-white"},Y={class:"bg-white p-4 rounded-lg shadow-lg flex flex-col gap-4"},Z=b(()=>e("div",{class:"w-60 border-gray-500 mx-auto text-center font-medium text-lg"}," Or continue with ",-1)),ee={class:"w-40 mx-auto text-center"},te=B({__name:"DonorLogin",setup(n){const i=C(),{googleLogin:L}=i,m=D(null),{login:k}=i,g=$(),{email:d,password:c,loading:V,errors:u}=N(i),I={client_id:"571464414316-e1jn29cv3hv9plb9sq9lnsiu72s0irb4.apps.googleusercontent.com",callback:p=>{L(p,g)}};return R(()=>{u.value="";try{window.google.accounts.id.initialize(I),window.google.accounts.id.renderButton(m.value,{type:"standard",size:"large",theme:"filled_blue"})}catch{A("Error","Google Login is not available","danger","CloseOutline")}}),(p,s)=>{const _=w("RouterLink"),S=w("ArrowThinLeft");return f(),h("div",G,[e("div",q,[e("div",H,[t(E,{class:"w-20 h-20"}),P]),o(u)?(f(),h("div",Q,O(o(u)),1)):T("",!0),e("form",{class:"space-y-6",onSubmit:s[2]||(s[2]=j(l=>o(k)(o(g)),["prevent"]))},[e("div",J,[t(o(v),{name:"email",type:"email",modelValue:o(d),"onUpdate:modelValue":s[0]||(s[0]=l=>x(d)?d.value=l:null),errorMsg:"this field must be a valid email"},null,8,["modelValue"]),t(o(v),{name:"password",type:"password",modelValue:o(c),"onUpdate:modelValue":s[1]||(s[1]=l=>x(c)?c.value=l:null)},null,8,["modelValue"])]),e("div",K,[e("div",W,[t(y,{class:"py-1 mx-auto w-11/12 text-lg grid place-items-center",type:"primary",loading:o(V)},{default:a(()=>[r("Login")]),_:1},8,["loading"]),t(_,{to:"#",class:"float-right mt-2 mr-4 underline"},{default:a(()=>[r("Forgot password?")]),_:1})]),e("div",X,[r(" Don't have an account? "),t(_,{to:"/donor/register",class:"underline"},{default:a(()=>[r("Sign up ")]),_:1})])])],32)]),e("div",Y,[Z,e("div",ee,[e("div",{ref_key:"googleButton",ref:m,class:"flex justify-center"},null,512)])]),t(z,{class:"absolute bottom-5 right-5"}),t(_,{to:"/"},{default:a(()=>[t(y,{type:"primary",class:"absolute top-5 left-5 p-2"},{default:a(()=>[t(S,{class:"w-5 h-5"})]),_:1})]),_:1})])}}});const de=F(te,[["__scopeId","data-v-507b5583"]]);export{de as default};