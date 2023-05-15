import{m as Y,f as ee,a as te,H as T,h as A,o as h,u as G,O as V,d as F,c as $e,t as B,p as Le,l as W,N as re,b as De}from"./hidden-678929e6.js";import{n as Fe,E as ie,d as U}from"./use-event-listener-17701bc3.js";import{t as se,r as Oe}from"./transition-84382b01.js";import{d as $,m,G as c,j as L,M as k,J as S,F as Re,L as _,y as J,K as z,N as j,Z as Ae,S as ke,a8 as Ce,a1 as Me}from"./index-0a258dc9.js";import{M as He}from"./description-13c92f53.js";import{y as Be}from"./use-outside-click-f29d9e15.js";function je(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function de(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let l=new Set;for(let t of e.value){let n=h(t);n instanceof HTMLElement&&l.add(n)}return l}var ce=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(ce||{});let M=Object.assign($({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:m(new Set)}},inheritAttrs:!1,setup(e,{attrs:l,slots:t,expose:n}){let a=m(null);n({el:a,$el:a});let o=c(()=>Y(a)),r=m(!1);L(()=>r.value=!0),k(()=>r.value=!1),Ne({ownerDocument:o},c(()=>r.value&&Boolean(e.features&16)));let u=Ie({ownerDocument:o,container:a,initialFocus:c(()=>e.initialFocus)},c(()=>r.value&&Boolean(e.features&2)));We({ownerDocument:o,container:a,containers:e.containers,previousActiveElement:u},c(()=>r.value&&Boolean(e.features&8)));let i=Fe();function s(f){let y=h(a);y&&(w=>w())(()=>{G(i.value,{[U.Forwards]:()=>{V(y,F.First,{skipElements:[f.relatedTarget]})},[U.Backwards]:()=>{V(y,F.Last,{skipElements:[f.relatedTarget]})}})})}let p=m(!1);function P(f){f.key==="Tab"&&(p.value=!0,requestAnimationFrame(()=>{p.value=!1}))}function E(f){if(!r.value)return;let y=de(e.containers);h(a)instanceof HTMLElement&&y.add(h(a));let w=f.relatedTarget;w instanceof HTMLElement&&w.dataset.headlessuiFocusGuard!=="true"&&(fe(y,w)||(p.value?V(h(a),G(i.value,{[U.Forwards]:()=>F.Next,[U.Backwards]:()=>F.Previous})|F.WrapAround,{relativeTo:f.target}):f.target instanceof HTMLElement&&A(f.target)))}return()=>{let f={},y={ref:a,onKeydown:P,onFocusout:E},{features:w,initialFocus:K,containers:oe,...N}=e;return S(Re,[Boolean(w&4)&&S(ee,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:te.Focusable}),T({ourProps:y,theirProps:{...l,...N},slot:f,attrs:l,slots:t,name:"FocusTrap"}),Boolean(w&4)&&S(ee,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:te.Focusable})])}}}),{features:ce}),O=[];if(typeof window<"u"&&typeof document<"u"){let e=function(l){l.target instanceof HTMLElement&&l.target!==document.body&&O[0]!==l.target&&(O.unshift(l.target),O=O.filter(t=>t!=null&&t.isConnected),O.splice(10))};window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})}function xe(e){let l=m(O.slice());return J([e],([t],[n])=>{n===!0&&t===!1?se(()=>{l.value.splice(0)}):n===!1&&t===!0&&(l.value=O.slice())},{flush:"post"}),()=>{var t;return(t=l.value.find(n=>n!=null&&n.isConnected))!=null?t:null}}function Ne({ownerDocument:e},l){let t=xe(l);L(()=>{_(()=>{var n,a;l.value||((n=e.value)==null?void 0:n.activeElement)===((a=e.value)==null?void 0:a.body)&&A(t())},{flush:"post"})}),k(()=>{A(t())})}function Ie({ownerDocument:e,container:l,initialFocus:t},n){let a=m(null),o=m(!1);return L(()=>o.value=!0),k(()=>o.value=!1),L(()=>{J([l,t,n],(r,u)=>{if(r.every((s,p)=>(u==null?void 0:u[p])===s)||!n.value)return;let i=h(l);i&&se(()=>{var s,p;if(!o.value)return;let P=h(t),E=(s=e.value)==null?void 0:s.activeElement;if(P){if(P===E){a.value=E;return}}else if(i.contains(E)){a.value=E;return}P?A(P):V(i,F.First|F.NoScroll)===$e.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.value=(p=e.value)==null?void 0:p.activeElement})},{immediate:!0,flush:"post"})}),a}function We({ownerDocument:e,container:l,containers:t,previousActiveElement:n},a){var o;ie((o=e.value)==null?void 0:o.defaultView,"focus",r=>{if(!a.value)return;let u=de(t);h(l)instanceof HTMLElement&&u.add(h(l));let i=n.value;if(!i)return;let s=r.target;s&&s instanceof HTMLElement?fe(u,s)?(n.value=s,A(s)):(r.preventDefault(),r.stopPropagation(),A(i)):A(n.value)},!0)}function fe(e,l){for(let t of e)if(t.contains(l))return!0;return!1}let X=new Map,H=new Map;function ue(e,l=m(!0)){_(t=>{var n;if(!l.value)return;let a=h(e);if(!a)return;t(function(){var r;if(!a)return;let u=(r=H.get(a))!=null?r:1;if(u===1?H.delete(a):H.set(a,u-1),u!==1)return;let i=X.get(a);i&&(i["aria-hidden"]===null?a.removeAttribute("aria-hidden"):a.setAttribute("aria-hidden",i["aria-hidden"]),a.inert=i.inert,X.delete(a))});let o=(n=H.get(a))!=null?n:0;H.set(a,o+1),o===0&&(X.set(a,{"aria-hidden":a.getAttribute("aria-hidden"),inert:a.inert}),a.setAttribute("aria-hidden","true"),a.inert=!0)})}let pe=Symbol("ForcePortalRootContext");function Ue(){return j(pe,!1)}let le=$({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:l,attrs:t}){return z(pe,e.force),()=>{let{force:n,...a}=e;return T({theirProps:a,ourProps:{},slot:{},slots:l,attrs:t,name:"ForcePortalRoot"})}}});function qe(e){let l=Y(e);if(!l){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let t=l.getElementById("headlessui-portal-root");if(t)return t;let n=l.createElement("div");return n.setAttribute("id","headlessui-portal-root"),l.body.appendChild(n)}let ve=$({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:l,attrs:t}){let n=m(null),a=c(()=>Y(n)),o=Ue(),r=j(me,null),u=m(o===!0||r==null?qe(n.value):r.resolveTarget());return _(()=>{o||r!=null&&(u.value=r.resolveTarget())}),k(()=>{var i,s;let p=(i=a.value)==null?void 0:i.getElementById("headlessui-portal-root");p&&u.value===p&&u.value.children.length<=0&&((s=u.value.parentElement)==null||s.removeChild(u.value))}),()=>{if(u.value===null)return null;let i={ref:n,"data-headlessui-portal":""};return S(Ae,{to:u.value},T({ourProps:i,theirProps:e,slot:{},attrs:t,slots:l,name:"Portal"}))}}}),me=Symbol("PortalGroupContext"),Ve=$({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:l,slots:t}){let n=ke({resolveTarget(){return e.target}});return z(me,n),()=>{let{target:a,...o}=e;return T({theirProps:o,ourProps:{},slot:{},attrs:l,slots:t,name:"PortalGroup"})}}}),ge=Symbol("StackContext");var ae=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ae||{});function Ge(){return j(ge,()=>{})}function Ye({type:e,enabled:l,element:t,onUpdate:n}){let a=Ge();function o(...r){n==null||n(...r),a(...r)}L(()=>{J(l,(r,u)=>{r?o(0,e,t):u===!0&&o(1,e,t)},{immediate:!0,flush:"sync"})}),k(()=>{l.value&&o(1,e,t)}),z(ge,o)}function _e(e){let l=Ce(e.getSnapshot());return k(e.subscribe(()=>{l.value=e.getSnapshot()})),l}function Je(e,l){let t=e(),n=new Set;return{getSnapshot(){return t},subscribe(a){return n.add(a),()=>n.delete(a)},dispatch(a,...o){let r=l[a].call(t,...o);r&&(t=r,n.forEach(u=>u()))}}}function ze(){let e;return{before({doc:l}){var t;let n=l.documentElement;e=((t=l.defaultView)!=null?t:window).innerWidth-n.clientWidth},after({doc:l,d:t}){let n=l.documentElement,a=n.clientWidth-n.offsetWidth,o=e-a;t.style(n,"paddingRight",`${o}px`)}}}function Ke(){if(!je())return{};let e;return{before(){e=window.pageYOffset},after({doc:l,d:t,meta:n}){function a(r){return n.containers.flatMap(u=>u()).some(u=>u.contains(r))}t.style(l.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let o=null;t.addEventListener(l,"click",r=>{if(r.target instanceof HTMLElement)try{let u=r.target.closest("a");if(!u)return;let{hash:i}=new URL(u.href),s=l.querySelector(i);s&&!a(s)&&(o=s)}catch{}},!0),t.addEventListener(l,"touchmove",r=>{r.target instanceof HTMLElement&&!a(r.target)&&r.preventDefault()},{passive:!1}),t.add(()=>{window.scrollTo(0,window.pageYOffset+e),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})}}}function Qe(){return{before({doc:e,d:l}){l.style(e.documentElement,"overflow","hidden")}}}function Ze(e){let l={};for(let t of e)Object.assign(l,t(l));return l}let R=Je(()=>new Map,{PUSH(e,l){var t;let n=(t=this.get(e))!=null?t:{doc:e,count:0,d:Oe(),meta:new Set};return n.count++,n.meta.add(l),this.set(e,n),this},POP(e,l){let t=this.get(e);return t&&(t.count--,t.meta.delete(l)),this},SCROLL_PREVENT({doc:e,d:l,meta:t}){let n={doc:e,d:l,meta:Ze(t)},a=[Ke(),ze(),Qe()];a.forEach(({before:o})=>o==null?void 0:o(n)),a.forEach(({after:o})=>o==null?void 0:o(n))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});R.subscribe(()=>{let e=R.getSnapshot(),l=new Map;for(let[t]of e)l.set(t,t.documentElement.style.overflow);for(let t of e.values()){let n=l.get(t.doc)==="hidden",a=t.count!==0;(a&&!n||!a&&n)&&R.dispatch(t.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",t),t.count===0&&R.dispatch("TEARDOWN",t)}});function Xe(e,l,t){let n=_e(R),a=c(()=>{let o=e.value?n.value.get(e.value):void 0;return o?o.count>0:!1});return J([e,l],([o,r],[u],i)=>{if(!o||!r)return;R.dispatch("PUSH",o,t);let s=!1;i(()=>{s||(R.dispatch("POP",u??o,t),s=!0)})},{immediate:!0}),a}var et=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(et||{});let ne=Symbol("DialogContext");function x(e){let l=j(ne,null);if(l===null){let t=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,x),t}return l}let q="DC8F892D-2EBD-447C-A4C8-A03058436FF4",ut=$({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:q},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${B()}`}},emits:{close:e=>!0},setup(e,{emit:l,attrs:t,slots:n,expose:a}){var o;let r=m(!1);L(()=>{r.value=!0});let u=m(0),i=Le(),s=c(()=>e.open===q&&i!==null?(i.value&W.Open)===W.Open:e.open),p=m(null),P=m(null),E=c(()=>Y(p));if(a({el:p,$el:p}),!(e.open!==q||i!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof s.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s.value===q?void 0:e.open}`);let f=c(()=>r.value&&s.value?0:1),y=c(()=>f.value===0),w=c(()=>u.value>1),K=j(ne,null)!==null,oe=c(()=>w.value?"parent":"leaf"),N=c(()=>i!==null?(i.value&W.Closing)===W.Closing:!1),he=c(()=>K||N.value?!1:y.value),ye=c(()=>{var d,v,b;return(b=Array.from((v=(d=E.value)==null?void 0:d.querySelectorAll("body > *"))!=null?v:[]).find(g=>g.id==="headlessui-portal-root"?!1:g.contains(h(P))&&g instanceof HTMLElement))!=null?b:null});ue(ye,he);let we=c(()=>w.value?!0:y.value),be=c(()=>{var d,v,b;return(b=Array.from((v=(d=E.value)==null?void 0:d.querySelectorAll("[data-headlessui-portal]"))!=null?v:[]).find(g=>g.contains(h(P))&&g instanceof HTMLElement))!=null?b:null});ue(be,we),Ye({type:"Dialog",enabled:c(()=>f.value===0),element:p,onUpdate:(d,v)=>{if(v==="Dialog")return G(d,{[ae.Add]:()=>u.value+=1,[ae.Remove]:()=>u.value-=1})}});let Ee=He({name:"DialogDescription",slot:c(()=>({open:s.value}))}),I=m(null),D={titleId:I,panelRef:m(null),dialogState:f,setTitleId(d){I.value!==d&&(I.value=d)},close(){l("close",!1)}};z(ne,D);function Q(){var d,v,b;return[...Array.from((v=(d=E.value)==null?void 0:d.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?v:[]).filter(g=>!(g===document.body||g===document.head||!(g instanceof HTMLElement)||g.contains(h(P))||D.panelRef.value&&g.contains(D.panelRef.value))),(b=D.panelRef.value)!=null?b:p.value]}let Se=c(()=>!(!y.value||w.value));Be(()=>Q(),(d,v)=>{D.close(),Me(()=>v==null?void 0:v.focus())},Se);let Pe=c(()=>!(w.value||f.value!==0));ie((o=E.value)==null?void 0:o.defaultView,"keydown",d=>{Pe.value&&(d.defaultPrevented||d.key===De.Escape&&(d.preventDefault(),d.stopPropagation(),D.close()))});let Te=c(()=>!(N.value||f.value!==0||K));return Xe(E,Te,d=>{var v;return{containers:[...(v=d.containers)!=null?v:[],Q]}}),_(d=>{if(f.value!==0)return;let v=h(p);if(!v)return;let b=new ResizeObserver(g=>{for(let Z of g){let C=Z.target.getBoundingClientRect();C.x===0&&C.y===0&&C.width===0&&C.height===0&&D.close()}});b.observe(v),d(()=>b.disconnect())}),()=>{let{id:d,open:v,initialFocus:b,...g}=e,Z={...t,ref:p,id:d,role:"dialog","aria-modal":f.value===0?!0:void 0,"aria-labelledby":I.value,"aria-describedby":Ee.value},C={open:f.value===0};return S(le,{force:!0},()=>[S(ve,()=>S(Ve,{target:p.value},()=>S(le,{force:!1},()=>S(M,{initialFocus:b,containers:Q,features:y.value?G(oe.value,{parent:M.features.RestoreFocus,leaf:M.features.All&~M.features.FocusLock}):M.features.None},()=>T({ourProps:Z,theirProps:g,slot:C,attrs:t,slots:n,visible:f.value===0,features:re.RenderStrategy|re.Static,name:"Dialog"}))))),S(ee,{features:te.Hidden,ref:P})])}}});$({name:"DialogOverlay",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-overlay-${B()}`}},setup(e,{attrs:l,slots:t}){let n=x("DialogOverlay");function a(o){o.target===o.currentTarget&&(o.preventDefault(),o.stopPropagation(),n.close())}return()=>{let{id:o,...r}=e;return T({ourProps:{id:o,"aria-hidden":!0,onClick:a},theirProps:r,slot:{open:n.dialogState.value===0},attrs:l,slots:t,name:"DialogOverlay"})}}});$({name:"DialogBackdrop",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-backdrop-${B()}`}},inheritAttrs:!1,setup(e,{attrs:l,slots:t,expose:n}){let a=x("DialogBackdrop"),o=m(null);return n({el:o,$el:o}),L(()=>{if(a.panelRef.value===null)throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.")}),()=>{let{id:r,...u}=e,i={id:r,ref:o,"aria-hidden":!0};return S(le,{force:!0},()=>S(ve,()=>T({ourProps:i,theirProps:{...l,...u},slot:{open:a.dialogState.value===0},attrs:l,slots:t,name:"DialogBackdrop"})))}}});let it=$({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${B()}`}},setup(e,{attrs:l,slots:t,expose:n}){let a=x("DialogPanel");n({el:a.panelRef,$el:a.panelRef});function o(r){r.stopPropagation()}return()=>{let{id:r,...u}=e,i={id:r,ref:a.panelRef,onClick:o};return T({ourProps:i,theirProps:u,slot:{open:a.dialogState.value===0},attrs:l,slots:t,name:"DialogPanel"})}}}),st=$({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:()=>`headlessui-dialog-title-${B()}`}},setup(e,{attrs:l,slots:t}){let n=x("DialogTitle");return L(()=>{n.setTitleId(e.id),k(()=>n.setTitleId(null))}),()=>{let{id:a,...o}=e;return T({ourProps:{id:a},theirProps:o,slot:{open:n.dialogState.value===0},attrs:l,slots:t,name:"DialogTitle"})}}});export{it as U,st as Y,ut as q};
