import{q as h,r as v,E as w}from"./theme.f1I71pQ3.js";import{S as C,D as k,R as $,C as B}from"./api.DwkIGh4A.js";import D from"./api.-QaM6gCa.js";import{d as z,a2 as V,a3 as P,B as S,o as t,c as n,j as F,F as R,C as _,b as G,K as N,k as a,N as d,e as j,n as E}from"./framework.uyLDs8jX.js";const I={...C,...k,...$,...B,...D},M={relative:"",flex:"~ row nowrap"},L=z({name:"WbRadioGroup",__name:"radio-group",props:V({options:{},type:{},tabType:{},theme:{},shape:{},vertical:{type:Boolean},radioProps:{},onClick:{type:Function},default:{type:[String,Object,Function]},size:{},disabled:{type:Boolean},readonly:{type:Boolean},clearable:{type:Boolean},value:{},modelValue:{},defaultValue:{},onChange:{type:Function}},I),emits:["click","change","update:value","update:modelValue"],setup(c){const s=c,b=h({valueProps:["type","tabType","theme","shape","size","disabled"],nameProps:["vertical"]}),f=v(),[r,l]=w({props:P(s)}),i={};if(s.options)for(let e=0;e<s.options.length;e++)i[s.options[e].value]=e;function g(e,p){if(e){l(p);return}l("")}return(e,p)=>{var u;const m=S("wb-radio");return t(),n("div",{p:"$wb-radio-group-padding",bg:"$wb-radio-group-background",rounded:"$wb-radio-group-radius",ring:"1 inset $wb-radio-group-border",color:"$wb-radio-group-text",class:E(a(b)),style:d(a(f))},[F("div",M,[(t(!0),n(R,null,_(e.options,o=>(t(),G(m,N({key:o.value,rounded:"$wb-radio-group-radius",ring:"1 $wb-radio-group-item-border hover:$wb-radio-group-item-border-active",flex:"inline 1",class:{"wb-radio--checked":a(r)===o.value},size:e.size,type:e.type,shape:e.shape,cancelable:e.clearable,content:o.label,ref_for:!0},e.radioProps??{},{value:a(r)===o.value,checked:a(r)===o.value,onChange:y=>g(y,o.value)}),null,16,["class","size","type","shape","cancelable","content","value","checked","onChange"]))),128)),e.type==="tab"&&a(r)?(t(),n("div",{key:0,absolute:"",inset:"0",h:"full",bg:"$wb-radio-group-indicator",rounded:"$wb-radio-group-radius",class:"active-indicator",style:d({width:`calc(100% / ${(u=e.options)==null?void 0:u.length})`,transform:`translateX(calc(${100*i[a(r)]}%))`,transition:"var(--transition-ease)"})},null,4)):j("",!0)])],6)}}});export{L as default};
