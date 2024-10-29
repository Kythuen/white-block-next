import{y as f,z as p,A as B,D as O}from"./theme.f1I71pQ3.js";import{d as V,p as d,v as $,$ as z,o as H,c as j,j as c,N as k}from"./framework.uyLDs8jX.js";const P=V({name:"ColorPickerSaturation",__name:"color-picker-saturation",props:{defaultValue:{type:Object,default:()=>({x:0,y:0})},selectedColor:{type:String,default:"#ff0000"},panelColor:{type:String,default:"#ff0000"}},emits:["change"],setup(m,{emit:x}){const v=m,g=x,r=d(),R=d();let e=null,u=!1,h=0,w=0,i=0,s=0;const l=d(0),o=d(0);function y(n){n.stopPropagation(),u=!0,h=n.clientX,w=n.clientY,l.value=n.clientX-e.right,o.value=n.clientY-e.top,i=l.value,s=o.value,g("change",{x:-(l.value/e.width)*100,y:o.value/e.height*100}),f(document.body,"mousemove",C)}function X(n){if(!u)return;u=!0;let t=n.clientX-h+i,a=n.clientY-w+s;t<-e.width?t=-e.width:t>0&&(t=0),a<0?a=0:a>e.height&&(a=e.height),l.value=t,o.value=a,g("change",{x:-(l.value/e.width)*100,y:o.value/e.height*100})}const C=B(X,21);function Y(){u=!1,i=l.value,s=o.value,p(document.body,"mousemove",C)}function b(){e=r.value.getBoundingClientRect()}const S=O(b,300);return $(()=>{b(),v.defaultValue&&(l.value=-e.width*(v.defaultValue.x/100),i=l.value,o.value=e.height*(v.defaultValue.y/100),s=o.value),f(r.value,"mousedown",y),f(document.body,"mouseup",Y),f(window,"resize",S)}),z(()=>{p(r.value,"mousedown",y),p(window,"resize",S)}),(n,t)=>(H(),j("div",{ref_key:"ColorSaturationRef",ref:r,relative:"",w:"full",h:"40",rounded:"$comp-radius-sm",overflow:"hidden",select:"none",style:k({background:m.panelColor})},[t[1]||(t[1]=c("div",{absolute:"",inset:"0",w:"full",h:"full",style:{background:"linear-gradient(90deg, #fff, transparent)"}},null,-1)),t[2]||(t[2]=c("div",{absolute:"",inset:"0",w:"full",h:"full",style:{background:"linear-gradient(0deg, #000, transparent)"}},null,-1)),c("div",{ref_key:"ColorSaturationHandlerRef",ref:R,absolute:"",top:"-2",right:"-2",shadow:"sm black",rounded:"full",select:"none",style:k({transform:`translate3d(${l.value}px, ${o.value}px, 0)`})},t[0]||(t[0]=[c("div",{w:"4",h:"4",rounded:"full",ring:"2 inset $wb-color-foreground",cursor:"pointer"},null,-1)]),4)],4))}});export{P as _};
