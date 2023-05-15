var G=Object.defineProperty;var J=(p,e,s)=>e in p?G(p,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):p[e]=s;var r=(p,e,s)=>(J(p,typeof e!="symbol"?e+"":e,s),s);import{q as z,m as h,G as j,p as D,u as R,v as A,d as B,s as T,j as Y,o as d,e as y,x as q,F as W,z as K,c as N,l as X,h as o,f as t,g as a,w as i,i as _,I as Z,_ as F,y as ee,H as I,t as k,D as te}from"./index-0a258dc9.js";import{_ as S}from"./Button.vue_vue_type_script_setup_true_lang-2234cba1.js";import{_ as oe}from"./dynamic-import-helper-be004503.js";import{h as E,S as U}from"./transition-84382b01.js";import{U as H,Y as P,q as L}from"./dialog-1e2090d3.js";import{e as se,B as ae,E as ne}from"./index-3a6d9d60.js";import{_ as le}from"./ConfirmModal.vue_vue_type_script_setup_true_lang-48ee0845.js";import{Q as ie,_ as re,a as ce,g as de,b as pe}from"./HoursInput.vue_vue_type_script_setup_true_lang-6f877b96.js";import{_ as ue,a as me}from"./TableRow.vue_vue_type_script_setup_true_lang-054d3682.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./hidden-678929e6.js";import"./use-event-listener-17701bc3.js";import"./description-13c92f53.js";import"./use-outside-click-f29d9e15.js";import"./vue.runtime.esm-bundler-4da7d40c.js";import"./_commonjsHelpers-edff4021.js";import"./typeof-f1c20273.js";import"./defineProperty-2c53d74b.js";import"./radio-group-7fa0f2a1.js";import"./use-tree-walker-9beeebb9.js";import"./use-controllable-36e87213.js";class fe{constructor(){r(this,"questions",h([]));r(this,"answers",h([]));r(this,"lastAppointment",h({}));r(this,"state",h(""));r(this,"freeHours",h([]));r(this,"tempTime",h(""));r(this,"tempDate",h(""));r(this,"formattedDate",j(()=>{var e,s,l,n,c,m;return`${(s=(e=this.tempDate.value)==null?void 0:e.getFullYear)==null?void 0:s.call(e)}-${((n=(l=this.tempDate.value)==null?void 0:l.getMonth)==null?void 0:n.call(l))+1}-${(m=(c=this.tempDate.value)==null?void 0:c.getDate)==null?void 0:m.call(c)}`}));r(this,"bookModal",h(!1));r(this,"toggleBookModal",()=>this.bookModal.value=!this.bookModal.value);r(this,"fetchAppointmentState",async()=>{try{const{data:e}=await D.get("not_implementd/donor/appointment/state");this.state.value=e.state,this.lastAppointment.value=e==null?void 0:e.appointment}catch{}});r(this,"bookAppointment",async()=>{const{currentUser:e}=R(),s=e.id,l=new FormData;l.append("donor_id",s),l.append("answers",JSON.stringify(this.answers.value)),l.append("date",this.formattedDate.value),l.append("time",this.tempTime.value);try{const n=D.post("not_implementd/donor/appointment/book",l);A("Success","Appointment booked successfully","success","Checkmark"),this.fetchAppointmentState()}catch{A("Error","failed to book appointment please try again","danger","CloseOutline")}});r(this,"fetchQuestions",async()=>{try{const e=await D.get("not_implementd/donor/questions/appointment");this.questions.value=e.data}catch{A("Error","failed to fetch questions","danger","CloseOutline")}});r(this,"cancelAppointment",async()=>{try{await D.delete("not_implementd/donor/appointment/cancel "),A("Success","Appointment cancelled successfully","success","Checkmark"),await this.fetchAppointmentState()}catch{A("Error","failed to cancel appointment","danger","CloseOutline")}});r(this,"fetchFreeHours",async e=>{try{const s=await D.get(`not_implementd/donor/appointment/free-hours/${e}`);this.freeHours.value=s.data}catch{A("Error","failed to load free hours","danger","CloseOutline")}})}}const C=z("donor-appointments",()=>new fe),_e={class:"flex flex-col gap-4 p-2"},he={key:0,class:"text-lg italic text-red-700 dark:text-rose-300"},ve={class:"mt-6 w-[55rem] flex justify-end space-x-5"},ge=B({__name:"QuestionPanel",emits:["close"],setup(p,{emit:e}){const{fetchQuestions:s,toggleBookModal:l}=C(),{questions:n,answers:c}=T(C()),m=h({}),v=h(!1);function b(u){try{return Z(()=>oe(Object.assign({"./questions/Standard.vue":()=>F(()=>import("./Standard-ad8a31a6.js"),["assets/Standard-ad8a31a6.js","assets/Input-0fad6083.js","assets/index-0a258dc9.js","assets/index-97d21172.css"]),"./questions/YesNo.vue":()=>F(()=>import("./YesNo-044725f1.js"),["assets/YesNo-044725f1.js","assets/YesNoInput.vue_vue_type_script_setup_true_lang-bc207eda.js","assets/index-0a258dc9.js","assets/index-97d21172.css","assets/radio-group-7fa0f2a1.js","assets/hidden-678929e6.js","assets/description-13c92f53.js","assets/use-tree-walker-9beeebb9.js","assets/use-controllable-36e87213.js"]),"./questions/YesNoIfYes.vue":()=>F(()=>import("./YesNoIfYes-5675d178.js"),["assets/YesNoIfYes-5675d178.js","assets/YesNoInput.vue_vue_type_script_setup_true_lang-bc207eda.js","assets/index-0a258dc9.js","assets/index-97d21172.css","assets/radio-group-7fa0f2a1.js","assets/hidden-678929e6.js","assets/description-13c92f53.js","assets/use-tree-walker-9beeebb9.js","assets/use-controllable-36e87213.js","assets/Input-0fad6083.js"])}),`./questions/${u}.vue`))}catch{return{template:`could not resolve ${u}.vue are you sure this component exists`}}}Y(async()=>{Object.keys(n.value).length==0&&await s()});async function g(){if(console.log(Object.keys(n.value).length),console.log(Object.keys(c.value).length),Object.keys(n.value).length!=Object.keys(c.value).length){v.value="complete all the answers please";return}e("close"),l()}function f(u){m.value[u.id]=u,c.value=Object.values(m.value)}return(u,$)=>(d(),y("div",_e,[v.value?(d(),y("span",he,"please answer all the questions")):q("",!0),(d(!0),y(W,null,K(o(n),O=>(d(),y("div",null,[(d(),N(X(b(O.type)),{question:O,onAnswer:f},null,40,["question"]))]))),256)),t("div",ve,[a(S,{type:"primary",class:"px-2 h-10 text-center",onClick:g},{default:i(()=>[_(" Book Appointment ")]),_:1})])]))}}),ye=t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),xe={class:"fixed inset-0 overflow-y-auto"},we={class:"flex min-h-full items-center justify-center p-4 text-center"},ke=t("div",{class:"dark:text-white"}," Please answer the following question carefully. ",-1),be=B({__name:"BookAppointmentSurvey",props:{show:{type:Boolean}},emits:["close"],setup(p,{emit:e}){const s=p;function l(){e("close")}return(n,c)=>(d(),N(o(U),{appear:"",show:s.show,as:"template"},{default:i(()=>[a(o(L),{as:"div",onClose:l,class:"relative z-10"},{default:i(()=>[a(o(E),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>[ye]),_:1}),t("div",xe,[t("div",we,[a(o(E),{as:"template",class:"w-[60rem]",enter:"duration-300 ease-out","enter-from":"opacity-0 translate-y-4",leave:"duration-300 ease-in","leave-to":"opacity-0 translate-y-4"},{default:i(()=>[a(o(H),{class:"flex dark:bg-slate-600 w-[60rem] flex-col gap-4 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:i(()=>[a(o(P),{as:"h3",class:"text-lg dark:text-white font-medium leading-6 text-gray-900"},{default:i(()=>[_(" Ask For Appointment ")]),_:1}),ke,a(ge,{onClose:l})]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]))}}),Ae={class:"flex flex-col gap-3"},Ce={class:"flex flex-col gap-2"},$e=t("span",{class:"opacity-70 text-lg dark:text-white dark:opacity-100"}," Appointment Date ",-1),De={class:"flex flex-col gap-2"},Se=t("span",{class:"opacity-70 text-lg dark:text-white dark:opacity-100"}," Appointment Time ",-1),Be=B({__name:"BookAppointmentForm",setup(p){const{tempDate:e,tempTime:s,freeHours:l,formattedDate:n}=T(C()),{fetchFreeHours:c}=C();ee(e,()=>{c(n.value)});const m=g=>{var f=g.getUTCMonth()+1,u=g.getUTCDate(),$=g.getUTCFullYear();return $+"-"+f+"-"+u},v=j(()=>new Date),b=j(()=>ce(new Date(de(new Date),pe(new Date)),2));return(g,f)=>(d(),y("div",Ae,[t("div",Ce,[$e,a(o(ie),{modelValue:o(e),"onUpdate:modelValue":f[0]||(f[0]=u=>I(e)?e.value=u:null),format:m,"preview-format":m,"min-date":o(v),"max-date":o(b)},null,8,["modelValue","min-date","max-date"])]),t("div",De,[Se,a(re,{hours:o(l),modelValue:o(s),"onUpdate:modelValue":f[1]||(f[1]=u=>I(s)?s.value=u:null)},null,8,["hours","modelValue"])])]))}}),Me=t("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),qe={class:"fixed inset-0 overflow-y-auto"},Oe={class:"flex min-h-full items-center justify-center p-4 text-center"},je={class:"mt-6 flex justify-end w-full space-x-5"},Te=B({__name:"BookAppointmentModal",props:{show:{type:Boolean}},emits:["close"],setup(p,{emit:e}){const s=p,{bookAppointment:l,fetchAppointmentState:n}=C();async function c(){await l(),e("close"),await n()}return(m,v)=>(d(),N(o(U),{appear:"",show:s.show,as:"template"},{default:i(()=>[a(o(L),{as:"div",onClose:v[1]||(v[1]=b=>m.$emit("close")),class:"relative z-10"},{default:i(()=>[a(o(E),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>[Me]),_:1}),t("div",qe,[t("div",Oe,[a(o(E),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 translate-y-4",leave:"duration-300 ease-in","leave-to":"opacity-0 translate-y-4"},{default:i(()=>[a(o(H),{class:"w-full flex flex-col gap-7 max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:i(()=>[a(o(P),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:i(()=>[_(" Book Appointment ")]),_:1}),t("div",null,[a(Be)]),t("div",je,[t("button",{type:"button",onClick:v[0]||(v[0]=b=>m.$emit("close"))}," Cancel "),a(S,{type:"primary",class:"w-20 h-10 text-center",onClick:c},{default:i(()=>[_(" Book ")]),_:1})])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]))}}),Ee={class:"flex flex-col gap-4 py-3 rounded-xl overflow-hidden bg-secondary px-4 dark:bg-slate-600"},Ne=t("div",{class:"dark:text-white text-2xl font-medium"},"Requests",-1),Ve={class:"w-full space-y-4"},Fe={class:"pl-5"},Ye=t("td",null,"Setif",-1),Ie=B({__name:"BloodRequestsTable",setup(p){const e=h([]);return Y(async()=>{try{const s=await D.get("not_implementd/donor/requests");e.value=s.data}catch{A("Error","failed to fetch requests","danger","CloseOutline")}}),(s,l)=>(d(),y("div",Ee,[Ne,t("div",Ve,[a(ue,{data:e.value,fields:["name","description","Blood Group","location"],"header-class":"bg-gradient-to-r from-teal-400 to-teal-500",class:"w-full"},{default:i(({row:n})=>[(d(),N(me,{class:"h-12",row:n.patient,key:n.id,fields:["name"]},{default:i(()=>[t("td",null,k(n.description),1),t("td",Fe,k(o(te).parseBloodGroup(n.bloodGroup,n.rhFactor)),1),Ye]),_:2},1032,["row"]))]),_:1},8,["data"])])]))}}),Re={class:"p-20 w-11/12 mx-auto flex flex-col gap-5"},Ue={class:"text-2xl dark:text-white"},He={class:"font-medium"},Pe={class:"w-full h-full flex gap-48"},Le={key:0,class:"bg-gradient-to-l from-indigo-400 to-indigo-500 p-4 rounded-lg gap-4 w-screen flex justify-between items-center"},Qe=t("div",{class:"text-white space-y-1"},[t("div",{class:"text-2xl"}," Book an appointment and save lives! "),t("div",null," After taking the survey the admin will consult it and decide if your eligible to donate. ")],-1),Ge={key:1,class:"bg-gradient-to-l from-blue-400 to-blue-500 p-4 rounded-lg space-y-4 w-full flex justify-between items-center"},Je={class:"flex flex-col gap-3"},ze={class:"text-2xl font-medium text-white flex items-center gap-2"},We=t("div",{class:"font-medium text-white"}," Your appointment is pending you'll receive a notification when it's scheduled. ",-1),Ke={key:2,class:"bg-gradient-to-l from-teal-400 to-teal-500 p-4 rounded-lg space-y-4 w-screen flex justify-between items-center"},Xe={class:"flex flex-col gap-3"},Ze={class:"text-3xl font-medium text-white flex items-center gap-2"},et={class:"text-lg font-medium text-white"},tt={key:3,class:"bg-gradient-to-l from-orange-400 flex justify-between to-orange-500 p-4 rounded-lg w-screen items-center"},ot={class:"flex flex-col gap-3"},st={class:"text-2xl font-medium text-white flex items-center gap-4"},at={class:"text-lg text-white"},nt={class:"my-7"},St=B({__name:"Dashboard",setup(p){const e=h(!1),s=h(!1),l=()=>e.value=!e.value,n=()=>s.value=!s.value,{currentUser:c}=T(R()),{cancelAppointment:m,fetchAppointmentState:v,toggleBookModal:b}=C(),{state:g,lastAppointment:f,bookModal:u}=T(C());function $(x,w){return new Date(x).toLocaleDateString(w,{weekday:"long"})}function O(x){const w=["January","February","March","April","May","June","July","August","September","October","November","December"],M=new Date(x);return w[M.getMonth()]}const V=x=>$(x,"us-US")+" "+new Date(x).getDate()+" "+O(x)+" "+new Date(x).getFullYear(),Q=j(()=>{var M;const w=c.value.name.split(" ");return w[0]+"."+((M=w==null?void 0:w[1])==null?void 0:M[0])});return Y(async()=>{await v()}),(x,w)=>(d(),y("div",Re,[t("div",Ue,[_(" Welcome "),t("span",He,k(o(Q)),1),_(" today is "+k(V(new Date)),1)]),t("div",null,[t("div",Pe,[o(g)==""?(d(),y("div",Le,[Qe,a(S,{type:"card-info",class:"h-10 px-2",onClick:l},{default:i(()=>[_("Take the survey")]),_:1})])):q("",!0),o(g)=="pending"?(d(),y("div",Ge,[t("div",Je,[t("div",ze,[a(o(se),{class:"w-8 h-8"}),_(" Your Appointment Is Pending ")]),We]),a(S,{class:"w-40 h-10",type:"card-danger",onClick:n},{default:i(()=>[_("Cancel Appointment")]),_:1})])):q("",!0),o(g)=="accepted"?(d(),y("div",Ke,[t("div",Xe,[t("div",Ze,[a(o(ae),{class:"w-8 h-8"}),_(" Reminder ")]),t("div",et," You Have an appointment in "+k(V(o(f).date))+" at "+k(o(f).time),1)]),a(S,{class:"w-40 h-10",type:"card-danger",onClick:n},{default:i(()=>[_("Cancel Appointment")]),_:1})])):q("",!0),o(g)=="rescheduled"?(d(),y("div",tt,[t("div",ot,[t("div",st,[a(o(ne),{class:"w-8 h-8"}),_(" Appointment Rescheduled! ")]),t("div",at," your appointment is rescheduled to "+k(V(o(f).date))+" at "+k(o(f).time),1)]),a(S,{class:"w-40 h-10",type:"card-danger",onClick:n},{default:i(()=>[_("Cancel Appointment")]),_:1})])):q("",!0)]),t("div",nt,[a(Ie)]),a(be,{onClose:l,show:e.value},null,8,["show"]),a(le,{title:"Cancel Appointment",body:`Are you sure you want
			to cancel the appointment?`,positive:"Cancel The Appointment",show:s.value,negative:"back",onClose:n,onConfirm:o(m)},null,8,["show","onConfirm"]),a(Te,{show:o(u),onClose:o(b)},null,8,["show","onClose"])])]))}});export{St as default};
