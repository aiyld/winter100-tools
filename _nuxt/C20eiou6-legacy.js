System.register(["./BSYTNnra-legacy.js","./BlLOEeBA-legacy.js","./C8HoX38f-legacy.js","./7Fi050vo-legacy.js","./D2cymQ5H-legacy.js","./tNL1f5v8-legacy.js","./JJ3lJUVU-legacy.js"],(function(e,t){"use strict";var o,i,n,c,l,a,r,s,m,p,g,u,d,f,x,h,y,b,v,w,k,_,z,C,j,H,$,F;return{setters:[e=>{o=e._},e=>{i=e.u,n=e.g,c=e.a},e=>{l=e.n,a=e.k,r=e.o,s=e.e,m=e.w,p=e.a,g=e.q,u=e.c,d=e.t,f=e.f,x=e.v,h=e.x,y=e.y,b=e.m,v=e.F,w=e.j,k=e.z,_=e.u,z=e.A,C=e.b},e=>{j=e.u},e=>{H=e._,$=e.a},e=>{F=e._},null],execute:function(){var t=document.createElement("style");t.textContent='.c-func-item{background-color:var(--bg-color);border-radius:8px;cursor:pointer;margin-bottom:12px;min-height:72px;padding:12px 16px;position:relative}.c-func-item:nth-child(3n+1){margin-left:0}.c-func-item .item-title{align-items:center;color:#22262a;display:flex;font-weight:500}.c-func-item .item-title .item-logo{background-color:var(--logo-color);border-radius:9999px;font-size:12px;height:20px;line-height:20px;margin-right:8px;text-align:center;width:20px;--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.c-func-item .item-title .item-logo.has-icon{background-color:transparent;padding:1px}.c-func-item .item-title .item-logo.has-icon img{height:18px;width:18px}.c-func-item .item-des{color:#9299a6;font-size:12px;line-height:20px;margin-top:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.c-func-item:hover{box-shadow:0 0 3px 0 var(--logo-color)}.c-func-item .for-store{position:absolute;right:20px;top:8px;z-index:1}.c-func-item .for-store:hover{text-shadow:0 0 10px #22262a}.c-func-item .icon-store{--tw-text-opacity:1;color:rgb(243 139 44/var(--tw-text-opacity))}.c-common-like-func{border-radius:10px;margin-top:30px;--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));min-height:300px;padding:20px}.c-common-like-func .empty{color:#5e6773;padding-bottom:80px;padding-top:80px;text-align:center}.c-common-like-func .empty img{height:200px;margin-left:auto;margin-right:auto;width:200px}.c-common-like-func .category{margin-top:8px}.c-common-like-func .category .title{align-items:center;color:#22262a;display:flex;font-size:16px;line-height:24px;position:relative}.c-common-like-func .category .title.active{font-weight:500}.c-common-like-func .category .title.active:before{border-radius:9999px;content:" ";display:block;height:3px;margin-right:8px;width:3px;--tw-bg-opacity:1;background-color:rgb(94 103 115/var(--tw-bg-opacity))}.c-common-like-func .category .sub-items{display:flex;flex-wrap:wrap;margin-top:12px}.c-common-like-func .category .sub-items .c-func-item{margin-left:10px;width:calc(25% - 8.5px)}.c-common-like-func .category .sub-items .c-func-item:nth-child(4n+1){margin-left:0}.c-common-like-func .category:first-child{margin-top:0}.c-common-all-func{padding:20px}.c-common-all-func .category{margin-top:8px;position:relative}.c-common-all-func .category .anchor{position:absolute;top:-160px}.c-common-all-func .category .title{align-items:center;color:#3d424a;display:flex;font-size:16px;font-weight:500;line-height:24px;position:relative}.c-common-all-func .category .title.active{color:#22262a;font-weight:500}.c-common-all-func .category .title.active:before{border-radius:9999px;content:" ";display:block;height:3px;margin-right:8px;width:3px;--tw-bg-opacity:1;background-color:rgb(94 103 115/var(--tw-bg-opacity))}.c-common-all-func .category .sub-items{display:flex;flex-wrap:wrap;margin-top:12px}.c-common-all-func .category .sub-items .c-func-item{margin-left:10px;width:calc(33.33333% - 7.66667px)}.c-common-all-func .category .sub-items .c-func-item:nth-child(3n+1){margin-left:0}.c-common-all-func .category:first-child{margin-top:0}@media (max-width:767px){.c-common-all-func .category .sub-items{flex-direction:column}.c-common-all-func .category .sub-items .c-func-item{margin-left:0;width:100%}}.p-index .page-stage{margin-left:auto;margin-right:auto;width:1200px}@media (max-width:767px){.p-index .left-content{display:none}.p-index .page-stage{padding-left:20px;padding-right:20px;width:100%}}\n',document.head.appendChild(t);const I={class:"item-title"},M=["src"],E={key:1},L={class:"item-des"},N={__name:"FuncItem",props:{item:{type:Object,default:()=>{}}},setup(e){const t=e,c=i(),{likes:y}=l(c),b=a((()=>t.item.href?{is:"a",href:t.item.href,target:"_blank",rel:"noopener noreferrer"}:{is:o,to:n(t.item)})),v=a((()=>{const e=t.item.name||t.item.title;return y.value.includes(e)})),w=e=>{e.stopPropagation(),e.preventDefault();const o=t.item.name||t.item.title,i=y.value.findIndex((e=>e===o)),n=y.value.concat();i>=0?n.splice(i,1):n.push(o),c.setLikes(n)};return(t,o)=>(r(),s(h(f(b).is),x(f(b),{class:"c-func-item"}),{default:m((()=>[p("div",I,[p("div",{class:g(["item-logo",{"has-icon":e.item.logo}])},[e.item.logo?(r(),u("img",{key:0,src:e.item.logo},null,8,M)):(r(),u("span",E,d(e.item.title[0].toUpperCase()),1))],2),p("span",null,d(e.item.title),1)]),p("p",L,d(e.item.description),1),p("i",{class:g(["iconfont for-store",f(v)?"icon-store":"icon-unstore"]),onClick:w},null,2)])),_:1},16))}},A={en_US:{"还没有收藏，快去_e17e":"There is no favorite yet, go and add it now"},zh_Hans_CN:{"还没有收藏，快去_e17e":"还没有收藏，快去添加吧"},zh_Hant_HK:{"还没有收藏，快去_e17e":"還沒有收藏，快去添加吧"}},D={class:"c-common-like-func"},S={key:0,class:"empty"},T=["id"],U={class:"sub-items"},q={__name:"LikeFunc",setup(e){const t=e=>{const t=_().$lang.value||"zh_Hans_CN",o=A[t]||A.zh_Hans_CN||{};return void 0===o[e]?e:o[e]},{menus:o}=j(),n=i(),{category:c,likes:m}=l(n);y();const x=a((()=>m.value.reduce(((e,t)=>(e[t]=!0,e)),{}))),h=a((()=>{const e=[];for(let t=0;t<o.length;t++){const i=[];o[t].subMenus.forEach((e=>{const t=e.name||e.title;x.value[t]&&i.push(e)})),i.length>0&&e.push({...o[t],subMenus:i})}return e}));return(e,o)=>{const i=N;return r(),u("div",D,[0===f(h).length?(r(),u("div",S,[o[0]||(o[0]=p("img",{src:H},null,-1)),p("p",null,d(t("还没有收藏，快去_e17e")),1)])):b("",!0),(r(!0),u(v,null,w(f(h),((e,t)=>(r(),u("div",{key:t,class:"category"},[p("p",{id:e.name,class:g(["title",{active:e.name===f(c)}])},d(e.title),11,T),p("div",U,[(r(!0),u(v,null,w(e.subMenus,((t,o)=>(r(),s(i,{key:o,item:t,style:k({"--bg-color":e.color,"--logo-color":e.logoColor})},null,8,["item","style"])))),128))])])))),128))])}}},B={class:"c-common-all-func"},K=["id"],O={class:"sub-items"},P={__name:"AllFunc",setup(e){const{menus:t}=j(),o=i(),{category:n}=l(o),c=y();return z((()=>{const e=c.hash.slice(1).toLowerCase();if(e){const t=document.getElementById(e);t&&t.scrollIntoView()}else o.setCategory("")})),(e,o)=>{const i=N;return r(),u("div",B,[(r(!0),u(v,null,w(f(t),((e,t)=>(r(),u("div",{key:t,class:"category"},[p("div",{id:e.name,class:"anchor"},null,8,K),p("p",{class:g(["title",{active:e.name===f(n)}])},d(e.title),3),p("div",O,[(r(!0),u(v,null,w(e.subMenus,((t,o)=>(r(),s(i,{key:o,item:t,style:k({"--bg-color":e.color,"--logo-color":e.logoColor})},null,8,["item","style"])))),128))])])))),128))])}}},V={class:"p-index"},G={key:0,class:"page-stage pb-60"},J={key:1,class:"page-container pt-30 pb-60"},Q={class:"left-content"},R={class:"right-content"};e("default",{__name:"index",setup(e){const t=_();c({title:t.$brand.name,ogTitle:t.$brand.name,description:t.$brand.description,ogDescription:t.$brand.description});const o=i(),{nav:n}=l(o);return(e,t)=>{const o=q,i=F,c=$,l=P;return r(),u("div",V,["like"===f(n)?(r(),u("div",G,[C(o)])):(r(),u("div",J,[p("div",Q,[C(i),C(c)]),p("div",R,[C(l)])]))])}}})}}}));
