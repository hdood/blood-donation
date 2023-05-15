import{d as T,s as G,a7 as U,o as _,c as A,w as o,g as s,h as e,f as t,n as m,T as V,e as C,x as I,i as O,t as E,Q as R,r as y,m as j,j as J,v as W}from"./index-6e1d8700.js";import{_ as X}from"./DarkModeSwitch.vue_vue_type_script_setup_true_lang-1ea48ae1.js";import{_ as L,i as $,a as u,b as Y,c as Z,d as ee}from"./BirthDatePicker.vue_vue_type_script_setup_true_lang-28f467bd.js";import{H as k,a as D,S as P,_ as M,b as z,F as H,M as q}from"./GenderPicker.vue_vue_type_script_setup_true_lang-f3b3d0ba.js";import{I as g}from"./Input-b223a993.js";import{_ as B}from"./Button.vue_vue_type_script_setup_true_lang-6ba99829.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./index-f1959c8b.js";import"./hidden-81653952.js";import"./use-tracked-pointer-779b50f9.js";import"./use-resolve-button-type-ffffdf46.js";import"./use-outside-click-1a4722a5.js";import"./use-controllable-a6938e1b.js";import"./donors-8d537ba5.js";import"./typeof-f1c20273.js";import"./radio-group-cce11648.js";import"./description-94f22880.js";import"./use-tree-walker-001cd0ca.js";const te="/blood-donation/patient-register.jpg",se=t("div",{class:"text-xs"},"Personal",-1),le={class:"w-12 h-12 grid place-items-center rounded-lg transition-colors bg-indigo-400"},ae={class:"w-32 mt-2"},oe=t("div",{class:"h-1 w-32 absolute bg-gray-200"},null,-1),ne=t("div",{class:"text-xs text-center"},"Contact",-1),re={class:"w-32 mt-2"},ie=t("div",{class:"h-1 w-32 absolute bg-gray-200"},null,-1),de=t("div",{class:"text-xs text-center"},"Security",-1),ce={class:"flex flex-col gap-5"},ue={class:"space-y-2"},me=t("span",{class:"opacity-70 text-lg"}," Gender ",-1),pe={class:"space-y-2"},fe=t("label",{class:"opacity-70 text-lg",for:"dob"}," Date Of Birth ",-1),_e={class:"flex flex-col gap-5"},ve={class:"flex flex-col gap-5"},ge={class:"flex gap-8 justify-end"},he=["onClick"],ye=T({__name:"PatientRegisterForm",setup(N){const x=R(),{tempPatient:l,errors:n}=G(U()),{register:w}=U();function h(){n.value=!1;const r=$.validate(l.value,{name:[u()],gender:[u()],dob:[u()]});return r.passes()?!0:(n.value=r.errors(),!1)}function b(){n.value={};const r=$.validate(l.value,{phone:[u()],address:[u()],email:[u(),Y()]});return r.passes()?!0:(n.value=r.errors(),!1)}function v(){n.value={};const r=$.validate(l.value,{password:[u(),Z(8)],cpassword:[u(),ee("password")]},{cpassword:"Password confirmation"});return r.passes()?!0:(n.value=r.errors(),!1)}function p(){w(x)}return(r,i)=>{const F=y("User"),d=y("Phone"),f=y("Key");return _(),A(e(q),{class:"p-4 flex flex-col bg-white rounded-lg"},{default:o(()=>[s(e(D),{class:"flex"},{default:o(()=>[s(e(k),{class:"flex items-center"},{default:o(({active:a,passed:c})=>[t("div",null,[se,t("div",le,[s(F,{class:m(["w-6 h-6",[a|c&&["fill-white"]]])},null,8,["class"])])]),t("div",ae,[oe,t("div",{class:m(["h-1 w-32 absolute transition-transform origin-left bg-indigo-400 duration-200",[c?" scale-x-100":"scale-x-0"]])},null,2)])]),_:1}),s(e(k),{class:"flex items-center"},{default:o(({active:a,passed:c})=>[t("div",null,[ne,t("div",{class:m(["w-12 h-12 grid place-items-center rounded-lg",[a|c?"bg-indigo-400 transition-all delay-100":"bg-gray-200"]])},[s(d,{class:m(["w-6 h-6 transition-all delay-100",[a|c&&["fill-white"]]])},null,8,["class"])],2)]),t("div",re,[ie,t("div",{class:m(["h-1 w-32 absolute bg-indigo-400 transition-transform origin-left duration-200",[c?" scale-x-100":"scale-x-0"]])},null,2)])]),_:1}),s(e(k),{class:"flex items-center"},{default:o(({active:a,passed:c})=>[t("div",null,[de,t("div",{class:m(["w-12 h-12 grid place-items-center rounded-lg",[a|c?"bg-indigo-400 transition-all delay-100":"bg-gray-200"]])},[s(f,{class:m(["w-6 h-6 transition-all delay-100",[a|c&&["fill-white"]]])},null,8,["class"])],2)])]),_:1})]),_:1}),s(e(z),{class:"h-72 w-full relative mt-10"},{default:o(()=>[s(V,{enterActiveClass:"transition-all absolute duration-300 delay-300",leaveActiveClass:"transition-all absolute",leaveToClass:"translate-y-4 opacity-0",enterFromClass:"translate-y-4 opacity-0"},{default:o(()=>[s(e(P),{class:"w-full",validation:h},{default:o(()=>[t("form",ce,[s(e(g),{type:"text",name:"Name",modelValue:e(l).name,"onUpdate:modelValue":i[0]||(i[0]=a=>e(l).name=a),error:e(n).name},null,8,["modelValue","error"]),t("div",ue,[me,s(M,{modelValue:e(l).gender,"onUpdate:modelValue":i[1]||(i[1]=a=>e(l).gender=a)},null,8,["modelValue"])]),t("div",pe,[fe,s(L,{modelValue:e(l).dob,"onUpdate:modelValue":i[2]||(i[2]=a=>e(l).dob=a)},null,8,["modelValue"])])])]),_:1})]),_:1}),s(V,{enterActiveClass:"transition-all absolute duration-300 delay-300",leaveActiveClass:"transition-all absolute",leaveToClass:"translate-y-4 opacity-0",enterFromClass:"translate-y-4 opacity-0"},{default:o(()=>[s(e(P),{class:"w-full",validation:b},{default:o(()=>[t("form",_e,[s(e(g),{name:"Phone",type:"text",modelValue:e(l).phone,"onUpdate:modelValue":i[3]||(i[3]=a=>e(l).phone=a),error:e(n).phone},null,8,["modelValue","error"]),s(e(g),{name:"Address",type:"text",modelValue:e(l).address,"onUpdate:modelValue":i[4]||(i[4]=a=>e(l).address=a),error:e(n).address},null,8,["modelValue","error"]),s(e(g),{type:"email",name:"Email",modelValue:e(l).email,"onUpdate:modelValue":i[5]||(i[5]=a=>e(l).email=a),error:e(n).email},null,8,["modelValue","error"])])]),_:1})]),_:1}),s(V,{enterActiveClass:"transition-all absolute duration-300 delay-300",leaveActiveClass:"transition-all absolute",leaveToClass:"translate-y-4 opacity-0",enterFromClass:"translate-y-4 opacity-0"},{default:o(()=>[s(e(P),{class:"w-full",validation:v,submit:p},{default:o(()=>[t("form",ve,[s(e(g),{name:"Password",type:"password",modelValue:e(l).password,"onUpdate:modelValue":i[6]||(i[6]=a=>e(l).password=a),error:e(n).password},null,8,["modelValue","error"]),s(e(g),{name:"Password Confirmation",type:"password",modelValue:e(l).cpassword,"onUpdate:modelValue":i[7]||(i[7]=a=>e(l).cpassword=a),error:e(n).cpassword},null,8,["modelValue","error"])])]),_:1})]),_:1})]),_:1}),s(e(H),{class:"mt-10"},{default:o(({nextStep:a,previousStep:c,end:S,start:K,valid:Q})=>[t("div",ge,[K?I("",!0):(_(),C("button",{key:0,onClick:c,class:"dark:text-white"}," Previous ",8,he)),s(B,{class:"w-20 h-10",type:Q.value?S?"success":"primary":"disabled",onClick:a},{default:o(()=>[O(E(S?"Submit":"Next"),1)]),_:2},1032,["type","onClick"])])]),_:1})]),_:1})}}}),xe=t("div",{class:"text-xs"},"Personal",-1),we={class:"w-12 h-12 grid place-items-center rounded-lg transition-colors bg-indigo-400"},be={class:"w-32 mt-2"},Ve=t("div",{class:"h-1 w-32 absolute bg-gray-200"},null,-1),Ce=t("div",{class:"text-xs text-center"},"Contact",-1),$e={class:"flex flex-col gap-5"},ke={class:"space-y-2"},Pe=t("span",{class:"opacity-70 text-lg"}," Gender ",-1),Ue={class:"space-y-2"},Se=t("label",{class:"opacity-70 text-lg",for:"dob"}," Date Of Birth ",-1),Ae={class:"flex flex-col gap-5"},Fe={class:"flex gap-8 justify-end"},Te=["onClick"],Re=T({__name:"PatientGoogleRegisterForm",setup(N){const x=R(),{tempPatient:l,errors:n}=G(U()),{googleRegister:w}=U();function h(){n.value=!1;const p=$.validate(l.value,{gender:[u()],dob:[u()]});return p.passes()?!0:(n.value=p.errors(),!1)}function b(){n.value={};const p=$.validate(l.value,{phone:[u()],address:[u()]});return p.passes()?!0:(n.value=p.errors(),!1)}function v(){w(x)}return(p,r)=>{const i=y("User"),F=y("Phone");return _(),A(e(q),{class:"p-4 flex flex-col bg-white rounded-lg w-[30-rem]"},{default:o(()=>[s(e(D),{class:"flex w-[30-rem]"},{default:o(()=>[s(e(k),{class:"flex items-center"},{default:o(({active:d,passed:f})=>[t("div",null,[xe,t("div",we,[s(i,{class:m(["w-6 h-6",[d|f&&["fill-white"]]])},null,8,["class"])])]),t("div",be,[Ve,t("div",{class:m(["h-1 w-32 absolute transition-transform origin-left bg-indigo-400 duration-200",[f?" scale-x-100":"scale-x-0"]])},null,2)])]),_:1}),s(e(k),{class:"flex items-center"},{default:o(({active:d,passed:f})=>[t("div",null,[Ce,t("div",{class:m(["w-12 h-12 grid place-items-center rounded-lg",[d|f?"bg-indigo-400 transition-all delay-100":"bg-gray-200"]])},[s(F,{class:m(["w-6 h-6 transition-all delay-100",[d|f&&["fill-white"]]])},null,8,["class"])],2)])]),_:1})]),_:1}),s(e(z),{class:"h-72 relative mt-10 w-[30-rem]"},{default:o(()=>[s(V,{enterActiveClass:"transition-all absolute duration-300 delay-300",leaveActiveClass:"transition-all absolute",leaveToClass:"translate-y-4 opacity-0",enterFromClass:"translate-y-4 opacity-0"},{default:o(()=>[s(e(P),{class:"w-full",validation:h},{default:o(()=>[t("form",$e,[t("div",ke,[Pe,s(M,{modelValue:e(l).gender,"onUpdate:modelValue":r[0]||(r[0]=d=>e(l).gender=d)},null,8,["modelValue"])]),t("div",Ue,[Se,s(L,{modelValue:e(l).dob,"onUpdate:modelValue":r[1]||(r[1]=d=>e(l).dob=d)},null,8,["modelValue"])])])]),_:1})]),_:1}),s(V,{enterActiveClass:"transition-all absolute duration-300 delay-300",leaveActiveClass:"transition-all absolute",leaveToClass:"translate-y-4 opacity-0",enterFromClass:"translate-y-4 opacity-0"},{default:o(()=>[s(e(P),{class:"w-full",validation:b,submit:v},{default:o(()=>[t("form",Ae,[s(e(g),{name:"Phone",type:"text",modelValue:e(l).phone,"onUpdate:modelValue":r[2]||(r[2]=d=>e(l).phone=d),error:e(n).phone},null,8,["modelValue","error"]),s(e(g),{name:"Address",type:"text",modelValue:e(l).address,"onUpdate:modelValue":r[3]||(r[3]=d=>e(l).address=d),error:e(n).address},null,8,["modelValue","error"])])]),_:1})]),_:1})]),_:1}),s(e(H),{class:"mt-10"},{default:o(({nextStep:d,previousStep:f,end:a,start:c,valid:S})=>[t("div",Fe,[c?I("",!0):(_(),C("button",{key:0,onClick:f,class:"dark:text-white"}," Previous ",8,Te)),s(B,{class:"w-20 h-10",type:S.value?a?"success":"primary":"disabled",onClick:d},{default:o(()=>[O(E(a?"Submit":"Next"),1)]),_:2},1032,["type","onClick"])])]),_:1})]),_:1})}}}),Be={class:"w-screen h-screen flex items-center justify-center bg-primary"},Ne={class:"flex items-center justify-center bg-white rounded-lg"},je={class:"flex flex-col gap-4 mt-3 p-4 rounded-lg"},Ge=t("img",{src:te,class:"h-[20rem]",alt:"blood donation"},null,-1),Ie={key:0,class:"sm text-gray-700 text-center"},Oe={key:1},Ee=t("div",{class:"w-60 border-gray-500 mx-auto text-center font-medium text-lg"}," Or continue with ",-1),Le={class:"w-40 mx-auto text-center"},De={class:"flex pt-4 flex-col gap-4 bg-white pl-4"},Me=t("div",{class:"text-2xl font-medium"},"Register as a Patient",-1),it=T({__name:"PatientRegister",setup(N){const{saveCredential:x,checkGoogleUser:l}=U(),n=j(null),w=R(),h=j(!1),b={client_id:"571464414316-e1jn29cv3hv9plb9sq9lnsiu72s0irb4.apps.googleusercontent.com",callback:v=>{h.value=!0,x(v),l(v,w)}};return J(()=>{try{window.google.accounts.id.initialize(b),window.google.accounts.id.renderButton(n.value,{type:"standard",size:"large",theme:"filled_blue"})}catch{W("Error","Google Login is not available","danger","CloseOutline")}}),(v,p)=>{const r=y("ArrowThinLeft"),i=y("RouterLink");return _(),C("div",Be,[t("div",Ne,[t("div",je,[Ge,h.value?(_(),C("div",Ie," Enter your information's to complete the sign up precess ")):(_(),C("div",Oe,[Ee,t("div",Le,[t("div",{ref_key:"googleButton",ref:n,class:"flex justify-center"},null,512)])]))]),t("div",De,[Me,h.value?(_(),A(Re,{key:0})):(_(),A(ye,{key:1}))])]),s(X,{class:"absolute bottom-5 right-5"}),s(i,{to:"/"},{default:o(()=>[s(B,{type:"primary",class:"absolute top-5 left-5 p-2"},{default:o(()=>[s(r,{class:"w-5 h-5"})]),_:1})]),_:1})])}}});export{it as default};
