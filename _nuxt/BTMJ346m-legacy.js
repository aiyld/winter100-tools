System.register(["./DhBJJpac-legacy.js","./BYts_2BR-legacy.js","./CDrG93M0-legacy.js","./yL1tyur2-legacy.js"],(function(e,t){"use strict";var n,o,i,c,s,a,r,l,m,u,g,d,p,f,h,x,y,w;return{setters:[e=>{n=e._},e=>{o=e.u},e=>{i=e.u},e=>{c=e.ac,s=e.ae,a=e.aL,r=e.K,l=e.M,m=e.o,u=e.c,g=e.F,d=e.j,p=e.e,f=e.w,h=e.a,x=e.N,y=e.t,w=e.f}],execute:function(){var t=document.createElement("style");t.textContent=".c-common-left-menu{border-radius:10px;width:200px;--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));padding-bottom:20px;padding-top:20px}.c-common-left-menu .menu-item{align-items:center;display:flex}.c-common-left-menu .menu-item>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(8px*(1 - var(--tw-space-x-reverse)));margin-right:calc(8px*var(--tw-space-x-reverse))}.c-common-left-menu .menu-item{color:#5e6773;cursor:pointer;margin-left:16px;margin-right:16px;padding:8px 16px;white-space:nowrap}.c-common-left-menu .menu-item .iconfont{font-size:13px;font-weight:300;line-height:22px}.c-common-left-menu .menu-item.active{border-radius:10px;--tw-bg-opacity:1;background-color:rgb(239 241 245/var(--tw-bg-opacity))}\n",document.head.appendChild(t),e("u",(function(e){const t=()=>{if(!e)return;const t=e.value||e;if(!t||!t.getElementsByClassName)return;const n=t.getElementsByClassName("left-content")[0],o=t.getElementsByClassName("right-content")[0],i=n.getElementsByClassName("fixed-area")[0];if(i&&i.clientHeight&&i.clientWidth>0)if(o.offsetHeight-50>i.offsetHeight){const e=n.getBoundingClientRect(),t=i.getBoundingClientRect(),o=e.top,c=i.clientHeight+o;if(o<0&&c<window.innerHeight){const n=t.width;i.setAttribute("fixed",!0),i.style.width=n+"px";const o=()=>Math.min(e.bottom,window.innerHeight)-80>t.height&&(i.style.bottom="auto",i.style.top="80px",!0);e.bottom<window.innerHeight?o()||(i.style.top="auto",i.style.bottom=window.innerHeight-e.bottom+"px"):o()||(i.style.top="auto",i.style.bottom="10px")}else i.removeAttribute("fixed")}else o.offsetHeight-50<=i.offsetHeight&&i.removeAttribute("fixed")};l((()=>{document.addEventListener("scroll",t)}))}));const b={class:"c-common-left-menu"};e("_",{__name:"LeftMenu",setup(e){const{menus:t}=o(),v=i(),{category:C}=c(v),H=s();return a(),r((()=>H.hash),(e=>{v.setCategory(e.replace("#","").toLowerCase())})),l((()=>{})),(e,o)=>{const i=n;return m(),u("div",b,[(m(!0),u(g,null,d(w(t),((e,t)=>(m(),p(i,{key:t,class:x(["menu-item",{active:w(C)===e.name}]),to:"/#"+e.name,onClick:t=>(e=>{v.setCategory(e.name)})(e)},{default:f((()=>[h("i",{class:x(["iconfont",e.icon])},null,2),h("p",null,y(e.title),1)])),_:2},1032,["to","class","onClick"])))),128))])}}})}}}));
