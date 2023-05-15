var P=Object.defineProperty;var G=(p,e,t)=>e in p?P(p,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):p[e]=t;var o=(p,e,t)=>(G(p,typeof e!="symbol"?e+"":e,t),t);import{_ as H,a as L}from"./TableRow.vue_vue_type_script_setup_true_lang-054d3682.js";import{q as Q,m as d,G as z,p as f,v as u,d as I,s as w,o as _,c as q,w as l,h as n,g as s,f as i,i as S,e as D,F as U,z as J,l as K,I as W,_ as R,j as X,t as C,D as O}from"./index-0a258dc9.js";import{_ as k}from"./Button.vue_vue_type_script_setup_true_lang-2234cba1.js";import{d as Z,T as ee,D as te}from"./index-3a6d9d60.js";import{h as b,S as M}from"./transition-84382b01.js";import{U as B,Y as N,q as Y}from"./dialog-1e2090d3.js";import{_ as se}from"./dynamic-import-helper-be004503.js";import{_ as ne}from"./ConfirmModal.vue_vue_type_script_setup_true_lang-48ee0845.js";class ae{constructor(){o(this,"appointmentsRequests",d([]));o(this,"acceptedAppointments",d([]));o(this,"scheduledAppointments",d([]));o(this,"cancelledAppointments",d([]));o(this,"answeredQuestions",d([]));o(this,"tempId",d(""));o(this,"tempDate",d());o(this,"tempTime",d());o(this,"freeHours",d([]));o(this,"formattedDate",z(()=>{var e,t,a,r,c,h;return`${(t=(e=this.tempDate.value)==null?void 0:e.getFullYear)==null?void 0:t.call(e)}-${((r=(a=this.tempDate.value)==null?void 0:a.getMonth)==null?void 0:r.call(a))+1}-${(h=(c=this.tempDate.value)==null?void 0:c.getDate)==null?void 0:h.call(c)}`}));o(this,"fetchTodayAppointments",async()=>{try{const e=await f.get("not_implementd/admin/appointment/today");this.acceptedAppointments.value=e.data}catch{u("Error","failed to load appointments requests","danger","CloseOutline")}});o(this,"fetchAppointmentsRequests",async()=>{try{const e=await f.get("not_implementd/admin/appointment/requests");this.appointmentsRequests.value=e.data}catch{u("Error","failed to load appointments requests","danger","CloseOutline")}});o(this,"fetchAcceptedAppointments",async()=>{try{const e=await f.get("not_implementd/admin/appointment/accepted");this.scheduledAppointments.value=e.data}catch{u("Error","failed to load scheduled appointments","danger","CloseOutline")}});o(this,"acceptAppointment",async()=>{var e,t;try{await f.post("not_implementd/admin/appointment/accept",{id:this.tempId.value}),await this.fetchAppointmentsRequests(),u("Success","Appointment accepted successfully","success","Checkmark")}catch(a){u("Error",(t=(e=a==null?void 0:a.response)==null?void 0:e.data)==null?void 0:t.error,"danger","CloseOutline")}});o(this,"rescheduleAppointment",async()=>{try{await f.put(`not_implementd/admin/appointment/${this.tempId.value}`,{date:`${this.tempDate.value.getFullYear()}-${this.tempDate.value.getMonth()+1}-${this.tempDate.value.getDate()}`,time:this.tempTime.value}),u("Success","Appointment rescheduled successfully","success","Checkmark"),await this.fetchAcceptedAppointments()}catch{u("Error","something went wrong","danger","CloseOutline")}});o(this,"deleteAppointment",async e=>{try{const t=await f.delete(`not_implementd/admin/appointment/${e}`);u("Success","Appointment deleted successfully","success","Checkmark")}catch{u("Error","failed to delete appointment","danger","CloseOutline")}});o(this,"fetchCancelledAppointments",async()=>{try{const e=await f.get("not_implementd/admin/appointment/cancelled");this.cancelledAppointments.value=e.data}catch{u("Error","failed to load cancelled appointments","danger","CloseOutline")}});o(this,"fetchFreeHours",async e=>{const t=await f.get(`not_implementd/admin/appointment/free-hours/${e}`);this.freeHours.value=t.data})}}const v=Q("admin-appointments",()=>new ae),oe=i("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),le={class:"fixed inset-0 overflow-y-auto"},ie={class:"flex min-h-full items-center justify-center p-4 text-center"},re=i("div",{class:"mt-2"},[i("p",{class:"text-sm text-gray-500"}," Are you sure you want to delete this appointment ")],-1),ce={class:"mt-6 flex justify-end w-full space-x-5"},pe=I({__name:"DeleteAppointmentModel",props:{show:{type:Boolean}},emits:["close"],setup(p,{emit:e}){const t=p,{tempTime:a,tempId:r,tempDate:c}=w(v()),{deleteAppointment:h,fetchAppointmentsRequests:A}=v();function x(){e("close"),h(r.value),A()}return($,y)=>(_(),q(n(M),{appear:"",show:t.show,as:"template"},{default:l(()=>[s(n(Y),{as:"div",onClose:y[1]||(y[1]=E=>$.$emit("close")),class:"relative z-10"},{default:l(()=>[s(n(b),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>[oe]),_:1}),i("div",le,[i("div",ie,[s(n(b),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 translate-y-4",leave:"duration-300 ease-in","leave-to":"opacity-0 translate-y-4"},{default:l(()=>[s(n(B),{class:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:l(()=>[s(n(N),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:l(()=>[S(" Delete Appointment ")]),_:1}),re,i("div",ce,[i("button",{type:"button",onClick:y[0]||(y[0]=E=>$.$emit("close"))}," Cancel "),s(k,{type:"danger",class:"w-20 h-10 text-center",onClick:x},{default:l(()=>[S(" Delete ")]),_:1})])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]))}}),de={class:"flex flex-col gap-4 p-2 w-[30rem]"},me=I({__name:"AnswersPanel",setup(p){const{answeredQuestions:e}=w(v());function t(a){try{return W(()=>se(Object.assign({"./answers/StandardAnswer.vue":()=>R(()=>import("./StandardAnswer-82c621c9.js"),["assets/StandardAnswer-82c621c9.js","assets/index-0a258dc9.js","assets/index-97d21172.css"]),"./answers/YesNoAnswer.vue":()=>R(()=>import("./YesNoAnswer-70e3c2bc.js"),["assets/YesNoAnswer-70e3c2bc.js","assets/index-0a258dc9.js","assets/index-97d21172.css"]),"./answers/YesNoIfYesAnswer.vue":()=>R(()=>import("./YesNoIfYesAnswer-2e5937ca.js"),["assets/YesNoIfYesAnswer-2e5937ca.js","assets/index-0a258dc9.js","assets/index-97d21172.css"])}),`./answers/${a}Answer.vue`))}catch{return{template:`could not resolve ${a}Answer.vue are you sure this component exists`}}}return(a,r)=>(_(),D("div",de,[(_(!0),D(U,null,J(n(e),c=>(_(),D("div",null,[(_(),q(K(t(c.type)),{question:c},null,8,["question"]))]))),256))]))}}),ue=i("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1),fe={class:"fixed inset-0 overflow-y-auto"},_e={class:"flex min-h-full items-center justify-center p-4 text-center"},he=I({__name:"AppointmentInfos",props:{show:{type:Boolean}},emits:["close"],setup(p,{emit:e}){const t=p;return w(v()),(a,r)=>(_(),q(n(M),{appear:"",show:t.show,as:"template"},{default:l(()=>[s(n(Y),{as:"div",onClose:r[0]||(r[0]=c=>a.$emit("close")),class:"relative z-10"},{default:l(()=>[s(n(b),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>[ue]),_:1}),i("div",fe,[i("div",_e,[s(n(b),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 translate-y-4",leave:"duration-300 ease-in","leave-to":"opacity-0 translate-y-4"},{default:l(()=>[s(n(B),{class:"w-[50rem]transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"},{default:l(()=>[s(n(N),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:l(()=>[S(" Questionnaire Answers ")]),_:1}),s(me)]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]))}}),ve={class:"flex flex-col gap-4 py-3 rounded-xl overflow-hidden bg-secondary px-4 dark:bg-slate-600"},ye=i("div",{class:"dark:text-white text-xl font-medium"}," Appointments Requests ",-1),ge={class:"w-full space-y-4"},we={class:"gap-3 flex justify-center py-2 items-center"},Re=I({__name:"AppointmentsRequestsTable",setup(p){const{tempId:e,answeredQuestions:t}=w(v()),a=d(!1),r=d(!1),c=d(!1),h=()=>a.value=!a.value,A=()=>r.value=!r.value,x=()=>c.value=!c.value;function $(g){e.value=g,h()}function y(g){e.value=g,A()}function E(g){t.value=g,x()}const{fetchAppointmentsRequests:j,acceptAppointment:F}=v(),{appointmentsRequests:V}=w(v());return X(async()=>{await j()}),(g,Ae)=>(_(),D("div",ve,[ye,i("div",ge,[s(H,{data:n(V),fields:["Name","Blood Group","age","date","time",""],class:"w-full"},{default:l(({row:m})=>[(_(),q(L,{class:"h-12",row:m.donor,key:m.id,fields:["name"]},{default:l(()=>[i("td",null,C(n(O).parseBloodGroup(m.donor.bloodGroup,m.donor.rhFactor)),1),i("td",null,C(n(O).parseAge(m.donor.dob)),1),i("td",null,C(m.date),1),i("td",null,C(m.time),1),i("td",we,[s(k,{type:"light-success",class:"p-1",onClick:T=>$(m.id)},{default:l(()=>[s(n(Z),{class:"w-6 h-6"})]),_:2},1032,["onClick"]),s(k,{class:"p-1 rounded-sm",type:"danger-light",onClick:T=>y(m.id)},{default:l(()=>[s(n(ee),{class:"w-6 h-6"})]),_:2},1032,["onClick"]),s(k,{type:"info",class:"p-1",onClick:T=>E(m.questions)},{default:l(()=>[s(n(te),{class:"w-6 h-6"})]),_:2},1032,["onClick"])])]),_:2},1032,["row"]))]),_:1},8,["data"]),s(ne,{show:a.value,onClose:h,onConfirm:n(F),title:"Accept Appointment",body:"Are you sure you want to accept this appointment?",positive:"Accept"},null,8,["show","onConfirm"]),s(pe,{onClose:A,show:r.value},null,8,["show"]),s(he,{onClose:x,show:c.value},null,8,["show"])])]))}});export{Re as _,v as u};
