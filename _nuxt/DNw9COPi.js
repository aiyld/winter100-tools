import{n as ze,K as _,r as H,L as X,a3 as Z,ax as xe,aI as je,M as F,z as we,v as We,ao as Ue,x as ee,bp as Ce,y as Ye,ac as te,A as ke,a7 as _e,aE as Xe,k as m,H as Se,bm as Ge,cg as Qe,ch as qe,cc as Je,bl as Ze,N as et,aF as tt,o as v,c as C,m as h,F as oe,O as y,f as t,a1 as W,a as T,e as E,w as A,X as U,E as R,aa as ae,b as ot,an as at,Q as nt,a_ as st,t as Y,P as lt,a2 as it,b9 as Ee,a6 as rt}from"./DPmu9rr2.js";import{u as ut}from"./DqHt4eWn.js";import{u as ct}from"./DSUL-po3.js";import{u as dt,c as pt,a as ft,b as vt}from"./CvXu3E1F.js";const mt=()=>ze&&/firefox/i.test(window.navigator.userAgent);class ht extends Error{constructor(s){super(s),this.name="ElementPlusError"}}function Bt(a,s){throw new ht("[".concat(a,"] ").concat(s))}function Mt(a,s){}const ne="update:modelValue",At="change",gt=a=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(a);function yt(a){let s;function r(){if(a.value==null)return;const{selectionStart:i,selectionEnd:c,value:p}=a.value;if(i==null||c==null)return;const l=p.slice(0,Math.max(0,i)),u=p.slice(Math.max(0,c));s={selectionStart:i,selectionEnd:c,value:p,beforeTxt:l,afterTxt:u}}function o(){if(a.value==null||s==null)return;const{value:i}=a.value,{beforeTxt:c,afterTxt:p,selectionStart:l}=s;if(c==null||p==null||l==null)return;let u=i.length;if(i.endsWith(p))u=i.length-p.length;else if(i.startsWith(c))u=c.length;else{const b=c[l-1],x=i.indexOf(b,l-1);x!==-1&&(u=x+1)}a.value.setSelectionRange(u,u)}return[r,o]}function bt(a,{beforeFocus:s,afterFocus:r,beforeBlur:o,afterBlur:i}={}){const c=je(),{emit:p}=c,l=_(),u=H(!1),b=g=>{xe(s)&&s(g)||u.value||(u.value=!0,p("focus",g),r==null||r())},x=g=>{var I;xe(o)&&o(g)||g.relatedTarget&&((I=l.value)!=null&&I.contains(g.relatedTarget))||(u.value=!1,p("blur",g),i==null||i())},f=()=>{var g,I;(g=l.value)!=null&&g.contains(document.activeElement)&&l.value!==document.activeElement||(I=a.value)==null||I.focus()};return X(l,g=>{g&&g.setAttribute("tabindex","-1")}),Z(l,"focus",b,!0),Z(l,"blur",x,!0),Z(l,"click",f,!0),{isFocused:u,wrapperRef:l,handleFocus:b,handleBlur:x}}function xt({afterComposition:a,emit:s}){const r=H(!1),o=l=>{s==null||s("compositionstart",l),r.value=!0},i=l=>{var u;s==null||s("compositionupdate",l);const b=(u=l.target)==null?void 0:u.value,x=b[b.length-1]||"";r.value=!gt(x)},c=l=>{s==null||s("compositionend",l),r.value&&(r.value=!1,F(()=>a(l)))};return{isComposing:r,handleComposition:l=>{l.type==="compositionend"?c(l):i(l)},handleCompositionStart:o,handleCompositionUpdate:i,handleCompositionEnd:c}}let w;const wt="\n  height:0 !important;\n  visibility:hidden !important;\n  ".concat(mt()?"":"overflow:hidden !important;","\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n"),Ct=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function St(a){const s=window.getComputedStyle(a),r=s.getPropertyValue("box-sizing"),o=Number.parseFloat(s.getPropertyValue("padding-bottom"))+Number.parseFloat(s.getPropertyValue("padding-top")),i=Number.parseFloat(s.getPropertyValue("border-bottom-width"))+Number.parseFloat(s.getPropertyValue("border-top-width"));return{contextStyle:Ct.map(p=>"".concat(p,":").concat(s.getPropertyValue(p))).join(";"),paddingSize:o,borderSize:i,boxSizing:r}}function Ie(a,s=1,r){var o;w||(w=document.createElement("textarea"),document.body.appendChild(w));const{paddingSize:i,borderSize:c,boxSizing:p,contextStyle:l}=St(a);w.setAttribute("style","".concat(l,";").concat(wt)),w.value=a.value||a.placeholder||"";let u=w.scrollHeight;const b={};p==="border-box"?u=u+c:p==="content-box"&&(u=u-i),w.value="";const x=w.scrollHeight-i;if(we(s)){let f=x*s;p==="border-box"&&(f=f+i+c),u=Math.max(f,u),b.minHeight="".concat(f,"px")}if(we(r)){let f=x*r;p==="border-box"&&(f=f+i+c),u=Math.min(f,u)}return b.height="".concat(u,"px"),(o=w.parentNode)==null||o.removeChild(w),w=void 0,b}const Et=We({id:{type:String,default:void 0},size:Ue,disabled:Boolean,modelValue:{type:ee([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ee([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:Boolean,clearable:Boolean,showPassword:Boolean,showWordLimit:Boolean,suffixIcon:{type:Ce},prefixIcon:{type:Ce},containerRole:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ee([Object,Array,String]),default:()=>Ye({})},autofocus:Boolean,rows:{type:Number,default:2},...ut(["ariaLabel"])}),It={[ne]:a=>te(a),input:a=>te(a),change:a=>te(a),focus:a=>a instanceof FocusEvent,blur:a=>a instanceof FocusEvent,clear:()=>!0,mouseleave:a=>a instanceof MouseEvent,mouseenter:a=>a instanceof MouseEvent,keydown:a=>a instanceof Event,compositionstart:a=>a instanceof CompositionEvent,compositionupdate:a=>a instanceof CompositionEvent,compositionend:a=>a instanceof CompositionEvent},zt=ke({name:"ElInput",inheritAttrs:!1}),kt=ke({...zt,props:Et,emits:It,setup(a,{expose:s,emit:r}){const o=a,i=_e(),c=Xe(),p=m(()=>{const e={};return o.containerRole==="combobox"&&(e["aria-haspopup"]=i["aria-haspopup"],e["aria-owns"]=i["aria-owns"],e["aria-expanded"]=i["aria-expanded"]),e}),l=m(()=>[o.type==="textarea"?se.b():n.b(),n.m(I.value),n.is("disabled",z.value),n.is("exceed",$e.value),{[n.b("group")]:c.prepend||c.append,[n.m("prefix")]:c.prefix||o.prefixIcon,[n.m("suffix")]:c.suffix||o.suffixIcon||o.clearable||o.showPassword,[n.bm("suffix","password-clear")]:j.value&&Q.value,[n.b("hidden")]:o.type==="hidden"},i.class]),u=m(()=>[n.e("wrapper"),n.is("focus",K.value)]),b=ct({excludeKeys:m(()=>Object.keys(p.value))}),{form:x,formItem:f}=dt(),{inputId:g}=pt(o,{formItemContext:f}),I=ft(),z=vt(),n=Se("input"),se=Se("textarea"),L=_(),S=_(),G=H(!1),O=H(!1),le=H(),D=_(o.inputStyle),P=m(()=>L.value||S.value),{wrapperRef:Fe,isFocused:K,handleFocus:Pe,handleBlur:Ne}=bt(P,{beforeFocus(){return z.value},afterBlur(){var e;o.validateEvent&&((e=f==null?void 0:f.validate)==null||e.call(f,"blur").catch(d=>void 0))}}),ie=m(()=>{var e;return(e=x==null?void 0:x.statusIcon)!=null?e:!1}),$=m(()=>(f==null?void 0:f.validateState)||""),re=m(()=>$.value&&Ge[$.value]),Ve=m(()=>O.value?Qe:qe),Te=m(()=>[i.style]),ue=m(()=>[o.inputStyle,D.value,{resize:o.resize}]),k=m(()=>Je(o.modelValue)?"":String(o.modelValue)),j=m(()=>o.clearable&&!z.value&&!o.readonly&&!!k.value&&(K.value||G.value)),Q=m(()=>o.showPassword&&!z.value&&!o.readonly&&!!k.value&&(!!k.value||K.value)),N=m(()=>o.showWordLimit&&!!o.maxlength&&(o.type==="text"||o.type==="textarea")&&!z.value&&!o.readonly&&!o.showPassword),q=m(()=>k.value.length),$e=m(()=>!!N.value&&q.value>Number(o.maxlength)),Be=m(()=>!!c.suffix||!!o.suffixIcon||j.value||o.showPassword||N.value||!!$.value&&ie.value),[Me,Ae]=yt(L);Ze(S,e=>{if(Re(),!N.value||o.resize!=="both")return;const d=e[0],{width:V}=d.contentRect;le.value={right:"calc(100% - ".concat(V+15+6,"px)")}});const B=()=>{const{type:e,autosize:d}=o;if(!(!ze||e!=="textarea"||!S.value))if(d){const V=Ee(d)?d.minRows:void 0,ye=Ee(d)?d.maxRows:void 0,be=Ie(S.value,V,ye);D.value={overflowY:"hidden",...be},F(()=>{S.value.offsetHeight,D.value=be})}else D.value={minHeight:Ie(S.value).minHeight}},Re=(e=>{let d=!1;return()=>{var V;if(d||!o.autosize)return;((V=S.value)==null?void 0:V.offsetParent)===null||(e(),d=!0)}})(B),M=()=>{const e=P.value,d=o.formatter?o.formatter(k.value):k.value;!e||e.value===d||(e.value=d)},J=async e=>{Me();let{value:d}=e.target;if(o.formatter&&(d=o.parser?o.parser(d):d),!de.value){if(d===k.value){M();return}r(ne,d),r("input",d),await F(),M(),Ae()}},ce=e=>{r("change",e.target.value)},{isComposing:de,handleCompositionStart:pe,handleCompositionUpdate:fe,handleCompositionEnd:ve}=xt({emit:r,afterComposition:J}),He=()=>{O.value=!O.value,me()},me=async()=>{var e;await F(),(e=P.value)==null||e.focus()},Le=()=>{var e;return(e=P.value)==null?void 0:e.blur()},Oe=e=>{G.value=!1,r("mouseleave",e)},De=e=>{G.value=!0,r("mouseenter",e)},he=e=>{r("keydown",e)},Ke=()=>{var e;(e=P.value)==null||e.select()},ge=()=>{r(ne,""),r("change",""),r("clear"),r("input","")};return X(()=>o.modelValue,()=>{var e;F(()=>B()),o.validateEvent&&((e=f==null?void 0:f.validate)==null||e.call(f,"change").catch(d=>void 0))}),X(k,()=>M()),X(()=>o.type,async()=>{await F(),M(),B()}),et(()=>{!o.formatter&&o.parser,M(),F(B)}),s({input:L,textarea:S,ref:P,textareaStyle:ue,autosize:tt(o,"autosize"),isComposing:de,focus:me,blur:Le,select:Ke,clear:ge,resizeTextarea:B}),(e,d)=>(v(),C("div",ae(t(p),{class:[t(l),{[t(n).bm("group","append")]:e.$slots.append,[t(n).bm("group","prepend")]:e.$slots.prepend}],style:t(Te),role:e.containerRole,onMouseenter:De,onMouseleave:Oe}),[h(" input "),e.type!=="textarea"?(v(),C(oe,{key:0},[h(" prepend slot "),e.$slots.prepend?(v(),C("div",{key:0,class:y(t(n).be("group","prepend"))},[W(e.$slots,"prepend")],2)):h("v-if",!0),T("div",{ref_key:"wrapperRef",ref:Fe,class:y(t(u))},[h(" prefix slot "),e.$slots.prefix||e.prefixIcon?(v(),C("span",{key:0,class:y(t(n).e("prefix"))},[T("span",{class:y(t(n).e("prefix-inner"))},[W(e.$slots,"prefix"),e.prefixIcon?(v(),E(t(R),{key:0,class:y(t(n).e("icon"))},{default:A(()=>[(v(),E(U(e.prefixIcon)))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0),T("input",ae({id:t(g),ref_key:"input",ref:L,class:t(n).e("inner")},t(b),{minlength:e.minlength,maxlength:e.maxlength,type:e.showPassword?O.value?"text":"password":e.type,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.ariaLabel,placeholder:e.placeholder,style:e.inputStyle,form:e.form,autofocus:e.autofocus,onCompositionstart:t(pe),onCompositionupdate:t(fe),onCompositionend:t(ve),onInput:J,onChange:ce,onKeydown:he}),null,16,["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus","onCompositionstart","onCompositionupdate","onCompositionend"]),h(" suffix slot "),t(Be)?(v(),C("span",{key:1,class:y(t(n).e("suffix"))},[T("span",{class:y(t(n).e("suffix-inner"))},[!t(j)||!t(Q)||!t(N)?(v(),C(oe,{key:0},[W(e.$slots,"suffix"),e.suffixIcon?(v(),E(t(R),{key:0,class:y(t(n).e("icon"))},{default:A(()=>[(v(),E(U(e.suffixIcon)))]),_:1},8,["class"])):h("v-if",!0)],64)):h("v-if",!0),t(j)?(v(),E(t(R),{key:1,class:y([t(n).e("icon"),t(n).e("clear")]),onMousedown:nt(t(st),["prevent"]),onClick:ge},{default:A(()=>[ot(t(at))]),_:1},8,["class","onMousedown"])):h("v-if",!0),t(Q)?(v(),E(t(R),{key:2,class:y([t(n).e("icon"),t(n).e("password")]),onClick:He},{default:A(()=>[(v(),E(U(t(Ve))))]),_:1},8,["class"])):h("v-if",!0),t(N)?(v(),C("span",{key:3,class:y(t(n).e("count"))},[T("span",{class:y(t(n).e("count-inner"))},Y(t(q))+" / "+Y(e.maxlength),3)],2)):h("v-if",!0),t($)&&t(re)&&t(ie)?(v(),E(t(R),{key:4,class:y([t(n).e("icon"),t(n).e("validateIcon"),t(n).is("loading",t($)==="validating")])},{default:A(()=>[(v(),E(U(t(re))))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0)],2),h(" append slot "),e.$slots.append?(v(),C("div",{key:1,class:y(t(n).be("group","append"))},[W(e.$slots,"append")],2)):h("v-if",!0)],64)):(v(),C(oe,{key:1},[h(" textarea "),T("textarea",ae({id:t(g),ref_key:"textarea",ref:S,class:[t(se).e("inner"),t(n).is("focus",t(K))]},t(b),{minlength:e.minlength,maxlength:e.maxlength,tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(ue),"aria-label":e.ariaLabel,placeholder:e.placeholder,form:e.form,autofocus:e.autofocus,rows:e.rows,onCompositionstart:t(pe),onCompositionupdate:t(fe),onCompositionend:t(ve),onInput:J,onFocus:t(Pe),onBlur:t(Ne),onChange:ce,onKeydown:he}),null,16,["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus","rows","onCompositionstart","onCompositionupdate","onCompositionend","onFocus","onBlur"]),t(N)?(v(),C("span",{key:0,style:lt(le.value),class:y(t(n).e("count"))},Y(t(q))+" / "+Y(e.maxlength),7)):h("v-if",!0)],64))],16,["role"]))}});var Ft=it(kt,[["__file","input.vue"]]);const Rt=rt(Ft);export{At as C,Rt as E,ne as U,bt as a,Mt as d,Bt as t,xt as u};
