import{_ as r}from"./YesNoInput.vue_vue_type_script_setup_true_lang-bc207eda.js";import{d as i,m,y as d,o as p,e as u,f as c,t as f,g as _}from"./index-0a258dc9.js";import"./radio-group-7fa0f2a1.js";import"./hidden-678929e6.js";import"./description-13c92f53.js";import"./use-tree-walker-9beeebb9.js";import"./use-controllable-36e87213.js";const g={class:"flex flex-col gap-1 bg-neutral-50 p-2 rounded-lg dark:bg-slate-500 dark:text-slate-200"},N=i({__name:"YesNo",props:{question:null},emits:["answer"],setup(t,{emit:s}){const l=t,e=m();return d(e,a=>s("answer",{data:{value:a},id:l.question.id})),(a,o)=>(p(),u("div",g,[c("span",null,f(t.question.text),1),_(r,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=n=>e.value=n)},null,8,["modelValue"])]))}});export{N as default};
