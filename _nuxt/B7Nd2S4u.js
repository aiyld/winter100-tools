import{u as g,_ as v}from"./zIRQTjH_.js";import{E as C}from"./CAJ_Da60.js";import{_ as N}from"./BG9jpAHc.js";import{r as j,l as m,c as H,b as r,f as o,a as t,t as _,i as x,u as z,o as V}from"./Cec3Jj1h.js";import{p as b}from"./BkBIgDtl.js";import{S}from"./D_bNlW7Y.js";import"./1O02zk81.js";import"./B_SkkEQ-.js";import"./Btn-js0G.js";const $={待格式化内容:"Content to be formatted",格式化结果:"Formatted result",请输入内容:"Please enter content",非法内容:"Illegal content"},w={待格式化内容:"待格式化内容",格式化结果:"格式化结果",请输入内容:"请输入内容",非法内容:"非法内容"},y={待格式化内容:"待格式化內容",格式化结果:"格式化結果",请输入内容:"請輸入內容",非法内容:"非法內容"},p={en_US:$,zh_Hans_CN:w,zh_Hant_HK:y},A={class:"p-jsonformat"},B={class:"jsonformat"},E={class:"label"},F={class:"label mt-20"},O={class:"output-result"},q={__name:"jsonformat",setup(U){const s=n=>{const c=z().$lang.value||"zh_Hans_CN",a=p[c]||p.zh_Hans_CN||{};return a[n]===void 0?n:a[n]},{currentFunc:i}=g(),e=j(""),u=m(()=>b(e.value,s("非法内容"))),d=m(()=>{try{return JSON.stringify(u.value,null,4)}catch(n){return""}});return(n,l)=>{const c=v,a=C,f=N;return V(),H("div",A,[r(c,{"current-func":o(i)},null,8,["current-func"]),t("div",B,[t("div",E,[t("span",null,_(s("待格式化内容")),1)]),r(a,{modelValue:o(e),"onUpdate:modelValue":l[0]||(l[0]=h=>x(e)?e.value=h:null),type:"textarea",placeholder:s("请输入内容"),resize:"none"},null,8,["modelValue","placeholder"]),t("div",F,[t("span",null,_(s("格式化结果")),1),r(f,{msg:o(d)},null,8,["msg"])]),t("div",O,[r(o(S),{data:o(u),"show-length":"","show-line":"","show-line-number":"","show-icon":""},null,8,["data"])])])])}}};export{q as default};
