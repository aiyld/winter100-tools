import{_ as I}from"./BseTxjEX.js";import{u as C,g as V,a as B}from"./BY7_mbVp.js";import{n as b,k as v,o as s,e as F,w as D,a as c,q as k,c as a,t as g,f as d,v as E,x as R,y as L,m as T,F as y,j as $,z as S,u as z,A as U,b as f}from"./D4RIon9W.js";import{u as A}from"./9BEdNj9-.js";import{_ as j,a as K}from"./DljI9-P-.js";import{_ as P}from"./v-kcrDAS.js";import"./CHqdzyQB.js";const q={class:"item-title"},O=["src"],G={key:1},J={class:"item-des"},N={__name:"FuncItem",props:{item:{type:Object,default:()=>{}}},setup(u){const o=u,l=C(),{likes:m}=b(l),h=v(()=>o.item.href?{is:"a",href:o.item.href,target:"_blank",rel:"noopener noreferrer"}:{is:I,to:V(o.item)}),p=v(()=>{const r=o.item.name||o.item.title;return m.value.includes(r)}),_=r=>{r.stopPropagation(),r.preventDefault();const e=o.item.name||o.item.title,t=m.value.findIndex(n=>n===e),i=m.value.concat();t>=0?i.splice(t,1):i.push(e),l.setLikes(i)};return(r,e)=>(s(),F(R(d(h).is),E(d(h),{class:"c-func-item"}),{default:D(()=>[c("div",q,[c("div",{class:k(["item-logo",{"has-icon":u.item.logo}])},[u.item.logo?(s(),a("img",{key:0,src:u.item.logo},null,8,O)):(s(),a("span",G,g(u.item.title[0].toUpperCase()),1))],2),c("span",null,g(u.item.title),1)]),c("p",J,g(u.item.description),1),c("i",{class:k(["iconfont for-store",d(p)?"icon-store":"icon-unstore"]),onClick:_},null,2)]),_:1},16))}},Q={"还没有收藏，快去_e17e":"There is no favorite yet, go and add it now"},W={"还没有收藏，快去_e17e":"还没有收藏，快去添加吧"},X={"还没有收藏，快去_e17e":"還沒有收藏，快去添加吧"},M={en_US:Q,zh_Hans_CN:W,zh_Hant_HK:X},Y={class:"c-common-like-func"},Z={key:0,class:"empty"},ee=["id"],te={class:"sub-items"},ne={__name:"LikeFunc",setup(u){const o=e=>{const i=z().$lang.value||"zh_Hans_CN",n=M[i]||M.zh_Hans_CN||{};return n[e]===void 0?e:n[e]},{menus:l}=A(),m=C(),{category:h,likes:p}=b(m);L();const _=v(()=>p.value.reduce((e,t)=>(e[t]=!0,e),{})),r=v(()=>{const e=[];for(let t=0;t<l.length;t++){const i=[];l[t].subMenus.forEach(n=>{const x=n.name||n.title;_.value[x]&&i.push(n)}),i.length>0&&e.push({...l[t],subMenus:i})}return e});return(e,t)=>{const i=N;return s(),a("div",Y,[d(r).length===0?(s(),a("div",Z,[t[0]||(t[0]=c("img",{src:j},null,-1)),c("p",null,g(o("还没有收藏，快去_e17e")),1)])):T("",!0),(s(!0),a(y,null,$(d(r),(n,x)=>(s(),a("div",{key:x,class:"category"},[c("p",{id:n.name,class:k(["title",{active:n.name===d(h)}])},g(n.title),11,ee),c("div",te,[(s(!0),a(y,null,$(n.subMenus,(H,w)=>(s(),F(i,{key:w,item:H,style:S({"--bg-color":n.color,"--logo-color":n.logoColor})},null,8,["item","style"]))),128))])]))),128))])}}},se={class:"c-common-all-func"},oe=["id"],ce={class:"sub-items"},ae={__name:"AllFunc",setup(u){const{menus:o}=A(),l=C(),{category:m}=b(l),h=L();return U(()=>{const p=h.hash.slice(1).toLowerCase();if(p){const _=document.getElementById(p);_&&_.scrollIntoView()}else l.setCategory("")}),(p,_)=>{const r=N;return s(),a("div",se,[(s(!0),a(y,null,$(d(o),(e,t)=>(s(),a("div",{key:t,class:"category"},[c("div",{id:e.name,class:"anchor"},null,8,oe),c("p",{class:k(["title",{active:e.name===d(m)}])},g(e.title),3),c("div",ce,[(s(!0),a(y,null,$(e.subMenus,(i,n)=>(s(),F(r,{key:n,item:i,style:S({"--bg-color":e.color,"--logo-color":e.logoColor})},null,8,["item","style"]))),128))])]))),128))])}}},ie={class:"p-index"},re={key:0,class:"page-stage pb-60"},le={key:1,class:"page-container pt-30 pb-60"},ue={class:"left-content"},me={class:"right-content"},ke={__name:"index",setup(u){const o=z();B({title:o.$brand.name,ogTitle:o.$brand.name,description:o.$brand.description,ogDescription:o.$brand.description});const l=C(),{nav:m}=b(l);return(h,p)=>{const _=ne,r=P,e=K,t=ae;return s(),a("div",ie,[d(m)==="like"?(s(),a("div",re,[f(_)])):(s(),a("div",le,[c("div",ue,[f(r),f(e)]),c("div",me,[f(t)])]))])}}};export{ke as default};
