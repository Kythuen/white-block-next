import{d as f,a2 as b,a3 as m,q as h,o as w,c as v,j as a,k as s,a0 as y,n as k,N as $}from"./framework.uyLDs8jX.js";import{q as C,r as B,E as D,C as _}from"./theme.f1I71pQ3.js";import{S as x,D as V,R as z}from"./api.DwkIGh4A.js";import S from"./api.W-32ahHZ.js";const P={...x,...V,...z,...S},R=["bg"],j=["flex"],N=f({name:"WbToggle",__name:"toggle",props:b({theme:{},color:{},shape:{},readonly:{type:Boolean},onClick:{type:Function},size:{},disabled:{type:Boolean},value:{type:Boolean},modelValue:{type:Boolean},defaultValue:{type:Boolean},onChange:{type:Function}},P),emits:["click"],setup(r,{emit:i}){const e=r,c=i,u=C({valueProps:["theme","shape","size"]}),g=B(()=>{if(e.color){const t=_(e.color),{color:l,valpha:d}=t.rgb();return{"--wb-toggle-color":`rgb(${l.join(" ")} / ${d})`}}}),[o,n]=D({props:m(e)});function p(){n(!o.value),c("click",o.value)}return h(()=>e.value,t=>{n(t)}),(t,l)=>(w(),v("div",{h:"$wb-toggle-height",flex:"~ row",items:"center",class:k(s(u)),style:$(s(g))},[a("button",{w:"[calc(var(--wb-toggle-height-content)*1.8)]",h:"$wb-toggle-height-content",bg:s(o)?"$wb-toggle-background-active":"$wb-toggle-background",rounded:"$wb-toggle-radius",flex:"inline shrink-0",border:"2 solid transparent",cursor:"disabled:not-allowed",op:"disabled:50","focus-visible":"rounded-full outline outline-2 outline-offset-2 outline-$wb-color-primary",transition:"colors ease-in-out duration-200",onClick:y(p,["stop"])},[a("span",{flex:s(o)?"1":"0","pointer-events":"none",transition:"all ease-in-out duration-200"},null,8,j),l[0]||(l[0]=a("span",{"inline-block":"",w:"[calc(var(--wb-toggle-height-content)-0.25rem)]",h:"full",rounded:"$wb-toggle-radius",bg:"$wb-toggle-indicator",shadow:"md","pointer-events":"none"},null,-1))],8,R)],6))}});export{N as default};
