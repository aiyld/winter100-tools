import{k as ne,d as oe,b as re,A as ae,ag as le,r as ce,L as ie,ah as ue}from"./BLPhlhhM.js";var B={d:(e,t)=>{for(var n in t)B.o(t,n)&&!B.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},_={};function H(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function G(e,t){if(e){if(typeof e=="string")return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}function E(e){return function(t){if(Array.isArray(t))return H(t)}(e)||function(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||G(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}B.d(_,{Z:()=>fe});const r=(Z={computed:()=>ne,createTextVNode:()=>oe,createVNode:()=>re,defineComponent:()=>ae,reactive:()=>le,ref:()=>ce,watch:()=>ie,watchEffect:()=>ue},K={},B.d(K,Z),K),de=(0,r.defineComponent)({props:{data:{required:!0,type:String},onClick:Function},render:function(){var e=this.data,t=this.onClick;return(0,r.createVNode)("span",{class:"vjs-tree-brackets",onClick:t},[e])}}),se=(0,r.defineComponent)({emits:["change","update:modelValue"],props:{checked:{type:Boolean,default:!1},isMultiple:Boolean,onChange:Function},setup:function(e,t){var n=t.emit;return{uiType:(0,r.computed)(function(){return e.isMultiple?"checkbox":"radio"}),model:(0,r.computed)({get:function(){return e.checked},set:function(l){return n("update:modelValue",l)}})}},render:function(){var e=this.uiType,t=this.model,n=this.$emit;return(0,r.createVNode)("label",{class:["vjs-check-controller",t?"is-checked":""],onClick:function(l){return l.stopPropagation()}},[(0,r.createVNode)("span",{class:"vjs-check-controller-inner is-".concat(e)},null),(0,r.createVNode)("input",{checked:t,class:"vjs-check-controller-original is-".concat(e),type:e,onChange:function(){return n("change",t)}},null)])}}),pe=(0,r.defineComponent)({props:{nodeType:{required:!0,type:String},onClick:Function},render:function(){var e=this.nodeType,t=this.onClick,n=e==="objectStart"||e==="arrayStart";return n||e==="objectCollapsed"||e==="arrayCollapsed"?(0,r.createVNode)("span",{class:"vjs-carets vjs-carets-".concat(n?"open":"close"),onClick:t},[(0,r.createVNode)("svg",{viewBox:"0 0 1024 1024",focusable:"false","data-icon":"caret-down",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},[(0,r.createVNode)("path",{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"},null)])]):null}});var Z,K;function M(e){return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(e)}function X(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function O(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"root",n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,l=arguments.length>3?arguments[3]:void 0,p=l||{},y=p.key,C=p.index,s=p.type,b=s===void 0?"content":s,f=p.showComma,N=f!==void 0&&f,k=p.length,S=k===void 0?1:k,V=X(e);if(V==="array"){var T=$(e.map(function(v,u,o){return O(v,"".concat(t,"[").concat(u,"]"),n+1,{index:u,showComma:u!==o.length-1,length:S,type:b})}));return[O("[",t,n,{showComma:!1,key:y,length:e.length,type:"arrayStart"})[0]].concat(T,O("]",t,n,{showComma:N,length:e.length,type:"arrayEnd"})[0])}if(V==="object"){var j=Object.keys(e),x=$(j.map(function(v,u,o){return O(e[v],/^[a-zA-Z_]\w*$/.test(v)?"".concat(t,".").concat(v):"".concat(t,'["').concat(v,'"]'),n+1,{key:v,showComma:u!==o.length-1,length:S,type:b})}));return[O("{",t,n,{showComma:!1,key:y,index:C,length:j.length,type:"objectStart"})[0]].concat(x,O("}",t,n,{showComma:N,length:j.length,type:"objectEnd"})[0])}return[{content:e,level:n,key:y,index:C,path:t,showComma:N,length:S,type:b}]}function $(e){if(typeof Array.prototype.flat=="function")return e.flat();for(var t=E(e),n=[];t.length;){var l=t.shift();Array.isArray(l)?t.unshift.apply(t,E(l)):n.push(l)}return n}function Q(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new WeakMap;if(e==null)return e;if(e instanceof Date)return new Date(e);if(e instanceof RegExp)return new RegExp(e);if(M(e)!=="object")return e;if(t.get(e))return t.get(e);if(Array.isArray(e)){var n=e.map(function(y){return Q(y,t)});return t.set(e,n),n}var l={};for(var p in e)l[p]=Q(e[p],t);return t.set(e,l),l}function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),n.push.apply(n,l)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?W(Object(n),!0).forEach(function(l){D(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}var ee={showLength:{type:Boolean,default:!1},showDoubleQuotes:{type:Boolean,default:!0},renderNodeKey:Function,renderNodeValue:Function,selectableType:String,showSelectController:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},showLineNumber:{type:Boolean,default:!1},selectOnClickNode:{type:Boolean,default:!0},nodeSelectable:{type:Function,default:function(){return!0}},highlightSelectedNode:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!1},theme:{type:String,default:"light"},showKeyValueSpace:{type:Boolean,default:!0},editable:{type:Boolean,default:!1},editableTrigger:{type:String,default:"click"},onNodeClick:{type:Function},onBracketsClick:{type:Function},onIconClick:{type:Function},onValueChange:{type:Function}};const he=(0,r.defineComponent)({name:"TreeNode",props:J(J({},ee),{},{node:{type:Object,required:!0},collapsed:Boolean,checked:Boolean,style:Object,onSelectedChange:{type:Function}}),emits:["nodeClick","bracketsClick","iconClick","selectedChange","valueChange"],setup:function(e,t){var n=t.emit,l=(0,r.computed)(function(){return X(e.node.content)}),p=(0,r.computed)(function(){return"vjs-value vjs-value-".concat(l.value)}),y=(0,r.computed)(function(){return e.showDoubleQuotes?'"'.concat(e.node.key,'"'):e.node.key}),C=(0,r.computed)(function(){return e.selectableType==="multiple"}),s=(0,r.computed)(function(){return e.selectableType==="single"}),b=(0,r.computed)(function(){return e.nodeSelectable(e.node)&&(C.value||s.value)}),f=(0,r.reactive)({editing:!1}),N=function(u){var o,a,c=(a=(o=u.target)===null||o===void 0?void 0:o.value)==="null"?null:a==="undefined"?void 0:a==="true"||a!=="false"&&(a[0]+a[a.length-1]==='""'||a[0]+a[a.length-1]==="''"?a.slice(1,-1):typeof Number(a)=="number"&&!isNaN(Number(a))||a==="NaN"?Number(a):a);n("valueChange",c,e.node.path)},k=(0,r.computed)(function(){var u,o=(u=e.node)===null||u===void 0?void 0:u.content;return o===null?o="null":o===void 0&&(o="undefined"),l.value==="string"?'"'.concat(o,'"'):o+""}),S=function(){var u=e.renderNodeValue;return u?u({node:e.node,defaultValue:k.value}):k.value},V=function(){n("bracketsClick",!e.collapsed,e.node)},T=function(){n("iconClick",!e.collapsed,e.node)},j=function(){n("selectedChange",e.node)},x=function(){n("nodeClick",e.node),b.value&&e.selectOnClickNode&&n("selectedChange",e.node)},v=function(u){if(e.editable&&!f.editing){f.editing=!0;var o=function a(c){var i;c.target!==u.target&&((i=c.target)===null||i===void 0?void 0:i.parentElement)!==u.target&&(f.editing=!1,document.removeEventListener("click",a))};document.removeEventListener("click",o),document.addEventListener("click",o)}};return function(){var u,o=e.node;return(0,r.createVNode)("div",{class:{"vjs-tree-node":!0,"has-selector":e.showSelectController,"has-carets":e.showIcon,"is-highlight":e.highlightSelectedNode&&e.checked,dark:e.theme==="dark"},onClick:x,style:e.style},[e.showLineNumber&&(0,r.createVNode)("span",{class:"vjs-node-index"},[o.id+1]),e.showSelectController&&b.value&&o.type!=="objectEnd"&&o.type!=="arrayEnd"&&(0,r.createVNode)(se,{isMultiple:C.value,checked:e.checked,onChange:j},null),(0,r.createVNode)("div",{class:"vjs-indent"},[Array.from(Array(o.level)).map(function(a,c){return(0,r.createVNode)("div",{key:c,class:{"vjs-indent-unit":!0,"has-line":e.showLine}},null)}),e.showIcon&&(0,r.createVNode)(pe,{nodeType:o.type,onClick:T},null)]),o.key&&(0,r.createVNode)("span",{class:"vjs-key"},[(u=e.renderNodeKey,u?u({node:e.node,defaultKey:y.value||""}):y.value),(0,r.createVNode)("span",{class:"vjs-colon"},[":".concat(e.showKeyValueSpace?" ":"")])]),(0,r.createVNode)("span",null,[o.type!=="content"&&o.content?(0,r.createVNode)(de,{data:o.content.toString(),onClick:V},null):(0,r.createVNode)("span",{class:p.value,onClick:!e.editable||e.editableTrigger&&e.editableTrigger!=="click"?void 0:v,onDblclick:e.editable&&e.editableTrigger==="dblclick"?v:void 0},[e.editable&&f.editing?(0,r.createVNode)("input",{value:k.value,onChange:N,style:{padding:"3px 8px",border:"1px solid #eee",boxShadow:"none",boxSizing:"border-box",borderRadius:5,fontFamily:"inherit"}},null):S()]),o.showComma&&(0,r.createVNode)("span",null,[","]),e.showLength&&e.collapsed&&(0,r.createVNode)("span",{class:"vjs-comment"},[(0,r.createTextVNode)(" // "),o.length,(0,r.createTextVNode)(" items ")])])])}}});function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),n.push.apply(n,l)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?U(Object(n),!0).forEach(function(l){D(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}const fe=(0,r.defineComponent)({name:"Tree",props:g(g({},ee),{},{data:{type:[String,Number,Boolean,Array,Object],default:null},collapsedNodeLength:{type:Number,default:1/0},deep:{type:Number,default:1/0},pathCollapsible:{type:Function,default:function(){return!1}},rootPath:{type:String,default:"root"},virtual:{type:Boolean,default:!1},height:{type:Number,default:400},itemHeight:{type:Number,default:20},selectedValue:{type:[String,Array],default:function(){return""}},collapsedOnClickBrackets:{type:Boolean,default:!0},style:Object,onSelectedChange:{type:Function},theme:{type:String,default:"light"}}),slots:["renderNodeKey","renderNodeValue"],emits:["nodeClick","bracketsClick","iconClick","selectedChange","update:selectedValue","update:data"],setup:function(e,t){var n=t.emit,l=t.slots,p=(0,r.ref)(),y=(0,r.computed)(function(){return O(e.data,e.rootPath)}),C=function(o,a){return y.value.reduce(function(c,i){var d,h=i.level>=o||i.length>=a,m=(d=e.pathCollapsible)===null||d===void 0?void 0:d.call(e,i);return i.type!=="objectStart"&&i.type!=="arrayStart"||!h&&!m?c:g(g({},c),{},D({},i.path,1))},{})},s=(0,r.reactive)({translateY:0,visibleData:null,hiddenPaths:C(e.deep,e.collapsedNodeLength)}),b=(0,r.computed)(function(){for(var o=null,a=[],c=y.value.length,i=0;i<c;i++){var d=g(g({},y.value[i]),{},{id:i}),h=s.hiddenPaths[d.path];if(o&&o.path===d.path){var m=o.type==="objectStart",A=g(g(g({},d),o),{},{showComma:d.showComma,content:m?"{...}":"[...]",type:m?"objectCollapsed":"arrayCollapsed"});o=null,a.push(A)}else{if(h&&!o){o=d;continue}if(o)continue;a.push(d)}}return a}),f=(0,r.computed)(function(){var o=e.selectedValue;return o&&e.selectableType==="multiple"&&Array.isArray(o)?o:[o]}),N=(0,r.computed)(function(){return!e.selectableType||e.selectOnClickNode||e.showSelectController?"":"When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail."}),k=function(){var o=b.value;if(e.virtual){var a,c=e.height/e.itemHeight,i=((a=p.value)===null||a===void 0?void 0:a.scrollTop)||0,d=Math.floor(i/e.itemHeight),h=d<0?0:d+c>o.length?o.length-c:d;h<0&&(h=0);var m=h+c;s.translateY=h*e.itemHeight,s.visibleData=o.filter(function(A,L){return L>=h&&L<m})}else s.visibleData=o},S=function(){k()},V=function(o){var a,c,i=o.path,d=e.selectableType;if(d==="multiple"){var h=f.value.findIndex(function(w){return w===i}),m=E(f.value);h!==-1?m.splice(h,1):m.push(i),n("update:selectedValue",m),n("selectedChange",m,E(f.value))}else if(d==="single"&&f.value[0]!==i){var A=(a=f.value,c=1,function(w){if(Array.isArray(w))return w}(a)||function(w,Y){var P=w==null?null:typeof Symbol<"u"&&w[Symbol.iterator]||w["@@iterator"];if(P!=null){var q,z,F=[],I=!0,R=!1;try{for(P=P.call(w);!(I=(q=P.next()).done)&&(F.push(q.value),!Y||F.length!==Y);I=!0);}catch(te){R=!0,z=te}finally{try{I||P.return==null||P.return()}finally{if(R)throw z}}return F}}(a,c)||G(a,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],L=i;n("update:selectedValue",L),n("selectedChange",L,A)}},T=function(o){n("nodeClick",o)},j=function(o,a){if(o)s.hiddenPaths=g(g({},s.hiddenPaths),{},D({},a,1));else{var c=g({},s.hiddenPaths);delete c[a],s.hiddenPaths=c}},x=function(o,a){e.collapsedOnClickBrackets&&j(o,a.path),n("bracketsClick",o,a)},v=function(o,a){j(o,a.path),n("iconClick",o,a)},u=function(o,a){var c=Q(e.data),i=e.rootPath;new Function("data","val","data".concat(a.slice(i.length),"=val"))(c,o),n("update:data",c)};return(0,r.watchEffect)(function(){N.value&&function(o){throw new Error("[VueJSONPretty] ".concat(o))}(N.value)}),(0,r.watchEffect)(function(){b.value&&k()}),(0,r.watch)(function(){return e.deep},function(o){o&&(s.hiddenPaths=C(o,e.collapsedNodeLength))}),(0,r.watch)(function(){return e.collapsedNodeLength},function(o){o&&(s.hiddenPaths=C(e.deep,o))}),function(){var o,a,c=(o=e.renderNodeKey)!==null&&o!==void 0?o:l.renderNodeKey,i=(a=e.renderNodeValue)!==null&&a!==void 0?a:l.renderNodeValue,d=s.visibleData&&s.visibleData.map(function(h){return(0,r.createVNode)(he,{key:h.id,node:h,collapsed:!!s.hiddenPaths[h.path],theme:e.theme,showDoubleQuotes:e.showDoubleQuotes,showLength:e.showLength,checked:f.value.includes(h.path),selectableType:e.selectableType,showLine:e.showLine,showLineNumber:e.showLineNumber,showSelectController:e.showSelectController,selectOnClickNode:e.selectOnClickNode,nodeSelectable:e.nodeSelectable,highlightSelectedNode:e.highlightSelectedNode,editable:e.editable,editableTrigger:e.editableTrigger,showIcon:e.showIcon,showKeyValueSpace:e.showKeyValueSpace,renderNodeKey:c,renderNodeValue:i,onNodeClick:T,onBracketsClick:x,onIconClick:v,onSelectedChange:V,onValueChange:u,style:e.itemHeight&&e.itemHeight!==20?{lineHeight:"".concat(e.itemHeight,"px")}:{}},null)});return(0,r.createVNode)("div",{ref:p,class:{"vjs-tree":!0,"is-virtual":e.virtual,dark:e.theme==="dark"},onScroll:e.virtual?S:void 0,style:e.showLineNumber?g({paddingLeft:"".concat(12*Number(y.value.length.toString().length),"px")},e.style):e.style},[e.virtual?(0,r.createVNode)("div",{class:"vjs-tree-list",style:{height:"".concat(e.height,"px")}},[(0,r.createVNode)("div",{class:"vjs-tree-list-holder",style:{height:"".concat(b.value.length*e.itemHeight,"px")}},[(0,r.createVNode)("div",{class:"vjs-tree-list-holder-inner",style:{transform:"translateY(".concat(s.translateY,"px)")}},[d])])]):d])}}});var ge=_.Z;export{ge as S};
