import{t as v,H as g}from"./hidden-678929e6.js";import{m as l,K as h,G as j,d as b,j as D,M,h as O,N as x}from"./index-0a258dc9.js";let p=Symbol("DescriptionContext");function y(){let t=x(p,null);if(t===null)throw new Error("Missing parent");return t}function C({slot:t=l({}),name:s="Description",props:o={}}={}){let e=l([]);function i(r){return e.value.push(r),()=>{let n=e.value.indexOf(r);n!==-1&&e.value.splice(n,1)}}return h(p,{register:i,slot:t,name:s,props:o}),j(()=>e.value.length>0?e.value.join(" "):void 0)}b({name:"Description",props:{as:{type:[Object,String],default:"p"},id:{type:String,default:()=>`headlessui-description-${v()}`}},setup(t,{attrs:s,slots:o}){let e=y();return D(()=>M(e.register(t.id))),()=>{let{name:i="Description",slot:r=l({}),props:n={}}=e,{id:a,...u}=t,d={...Object.entries(n).reduce((c,[m,f])=>Object.assign(c,{[m]:O(f)}),{}),id:a};return g({ourProps:d,theirProps:u,slot:r.value,attrs:s,slots:o,name:i})}}});export{C as M};
