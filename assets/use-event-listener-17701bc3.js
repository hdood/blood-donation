import{j as o}from"./hidden-678929e6.js";import{L as a,m as s}from"./index-0a258dc9.js";function d(e,r,t){o.isServer||a(n=>{window.addEventListener(e,r,t),n(()=>window.removeEventListener(e,r,t))})}var w=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(w||{});function c(){let e=s(0);return d("keydown",r=>{r.key==="Tab"&&(e.value=r.shiftKey?1:0)}),e}function m(e,r,t,n){o.isServer||a(i=>{e=e??window,e.addEventListener(r,t,n),i(()=>e.removeEventListener(r,t,n))})}export{m as E,w as d,c as n};
