import{X as r}from"./index-7b20c85e.js";import{E as c}from"./index-3a6d9d60.js";import{d,o as l,e as m,f as e,g as i,h as s,t as p}from"./index-0a258dc9.js";import"./vue.runtime.esm-bundler-4da7d40c.js";import"./_commonjsHelpers-edff4021.js";const f={class:"bg-gradient-to-l from-red-400 to-red-500 rounded-lg py-4 px-3 flex items-center gap-4 relative"},u={class:"bg-white text-red-400 h-10 w-10 grid rounded-lg place-items-center"},h={class:"text-white"},_=e("div",{class:"font-medium"},"Appointment Cancelled",-1),g={class:"text-sm"},y=d({__name:"AppointmentCancelled",props:{notification:null},setup(n){const t=n;return(a,o)=>(l(),m("div",f,[e("div",u,[i(s(c),{class:"w-6 h-6"})]),e("div",h,[_,e("div",g,p(t.notification.data.user.name)+" Cancelled his appointment ",1)]),e("div",{class:"absolute right-4 top-6.5 cursor-pointer flex items-center justify-center text-white",onClick:o[0]||(o[0]=x=>a.$emit("delete",{id:t.notification.id,guard:"admin"}))},[i(s(r),{class:"w-6 h-6"})])]))}});export{y as default};
