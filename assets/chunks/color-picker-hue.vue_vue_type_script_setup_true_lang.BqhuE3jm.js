import{y as f,z as d,A as R,D as x}from"./theme.f1I71pQ3.js";import{d as B,p as s,v as X,$ as S,o as z,c as V,j as n,N as _}from"./framework.uyLDs8jX.js";const N={absolute:"",inset:"0",w:"full",h:"full",rounded:"full",flex:"",items:"center"},P=B({name:"ColorPickerHue",__name:"color-picker-hue",props:{defaultValue:{type:Number,default:1},selectedColor:{type:String,default:"#ff0000"}},emits:["change"],setup(i,{emit:b}){const c=i,m=b,a=s(),v=s(),H=s();let t=null,u=!1,p=0,r=0;const l=s(0);function C(o){o.stopPropagation(),u=!0,p=o.clientX,l.value=o.clientX-t.left,r=l.value,m("change",l.value/t.width*360),f(document.body,"mousemove",w)}function y(o){if(!u)return;u=!0;let e=o.clientX-p+r;e<0?e=0:e>t.width&&(e=t.width),l.value=e,m("change",l.value/t.width*360)}const w=R(y,18);function k(){u=!1,r=l.value,d(document.body,"mousemove",w)}function g(){t=v.value.getBoundingClientRect()}const h=x(g,300);return X(()=>{g(),c.defaultValue&&(l.value=t.width*c.defaultValue/360,r=l.value),f(a.value,"mousedown",C),f(document.body,"mouseup",k),f(window,"resize",h)}),S(()=>{d(a.value,"mousedown",C),d(window,"resize",h)}),(o,e)=>(z(),V("div",{ref_key:"ColorHueRef",ref:a,relative:"",w:"full",h:"2.5",select:"none"},[n("div",N,[e[0]||(e[0]=n("div",{w:"2",h:"full",bg:"#f00",rounded:"l-2",flex:"none"},null,-1)),n("div",{ref_key:"ColorHueContentRef",ref:v,w:"full",h:"full",flex:"1",select:"none",cursor:"pointer",style:{background:`linear-gradient(
            90deg,
            #f00,
            #ff0 17%,
            #0f0 33%,
            #0ff 50%,
            #00f 67%,
            #f0f 83%,
            #f00
          )`}},null,512),e[1]||(e[1]=n("div",{w:"2",h:"full",bg:"#f00",rounded:"r-2",flex:"none"},null,-1))]),n("div",{ref_key:"ColorHueHandlerRef",ref:H,absolute:"",top:"50%",left:"0",w:"4",h:"4",rounded:"full",shadow:"sm black",cursor:"pointer",select:"none",style:_({background:i.selectedColor,transform:`translate3d(${l.value}px, -50%, 0)`})},e[2]||(e[2]=[n("div",{w:"full",h:"full",rounded:"full",ring:"2 inset $wb-color-foreground"},null,-1)]),4)],512))}});export{P as _};
