import{bx as y,bI as x,bA as m,bB as A,bH as g,bg as P,ci as c,bi as O,q as h,bk as I,v as T}from"./DPmu9rr2.js";function E(n){return n}function N(n,r,e){switch(e.length){case 0:return n.call(r);case 1:return n.call(r,e[0]);case 2:return n.call(r,e[0],e[1]);case 3:return n.call(r,e[0],e[1],e[2])}return n.apply(r,e)}var $=800,C=16,F=Date.now;function G(n){var r=0,e=0;return function(){var i=F(),t=C-(i-e);if(e=i,t>0){if(++r>=$)return arguments[0]}else r=0;return n.apply(void 0,arguments)}}function H(n){return function(){return n}}var f=function(){try{var n=y(Object,"defineProperty");return n({},"",{}),n}catch(r){}}(),M=f?function(n,r){return f(n,"toString",{configurable:!0,enumerable:!1,value:H(r),writable:!0})}:E,R=G(M),L=9007199254740991,q=/^(?:0|[1-9]\d*)$/;function S(n,r){var e=typeof n;return r=r==null?L:r,!!r&&(e=="number"||e!="symbol"&&q.test(n))&&n>-1&&n%1==0&&n<r}function z(n,r,e){r=="__proto__"&&f?f(n,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):n[r]=e}var B=Object.prototype,U=B.hasOwnProperty;function X(n,r,e){var i=n[r];(!(U.call(n,r)&&x(i,e))||e===void 0&&!(r in n))&&z(n,r,e)}var p=Math.max;function D(n,r,e){return r=p(r===void 0?n.length-1:r,0),function(){for(var i=arguments,t=-1,u=p(i.length-r,0),s=Array(u);++t<u;)s[t]=i[r+t];t=-1;for(var a=Array(r+1);++t<r;)a[t]=i[t];return a[r]=e(s),N(n,this,a)}}var K=9007199254740991;function J(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=K}var Q="[object Arguments]";function v(n){return m(n)&&A(n)==Q}var _=Object.prototype,W=_.hasOwnProperty,Y=_.propertyIsEnumerable,w=v(function(){return arguments}())?v:function(n){return m(n)&&W.call(n,"callee")&&!Y.call(n,"callee")};function Z(n,r){for(var e=-1,i=r.length,t=n.length;++e<i;)n[t+e]=r[e];return n}var b=g?g.isConcatSpreadable:void 0;function V(n){return P(n)||w(n)||!!(b&&n&&n[b])}function k(n,r,e,i,t){var u=-1,s=n.length;for(e||(e=V),t||(t=[]);++u<s;){var a=n[u];e(a)?Z(t,a):t[t.length]=a}return t}function j(n){var r=n==null?0:n.length;return r?k(n):[]}function nn(n){return R(D(n,void 0,j),n+"")}function rn(n,r){return n!=null&&r in Object(n)}function en(n,r,e){r=c(r,n);for(var i=-1,t=r.length,u=!1;++i<t;){var s=O(r[i]);if(!(u=n!=null&&e(n,s)))break;n=n[s]}return u||++i!=t?u:(t=n==null?0:n.length,!!t&&J(t)&&S(s,t)&&(P(n)||w(n)))}function tn(n,r){return n!=null&&en(n,r,rn)}function an(n,r,e,i){if(!h(n))return n;r=c(r,n);for(var t=-1,u=r.length,s=u-1,a=n;a!=null&&++t<u;){var l=O(r[t]),o=e;if(l==="__proto__"||l==="constructor"||l==="prototype")return n;if(t!=s){var d=a[l];o=void 0,o===void 0&&(o=h(d)?d:S(r[t+1])?[]:{})}X(a,l,o),a=a[l]}return n}function un(n,r,e){for(var i=-1,t=r.length,u={};++i<t;){var s=r[i],a=I(n,s);e(a,s)&&an(u,c(s,n),a)}return u}function sn(n,r){return un(n,r,function(e,i){return tn(n,i)})}var ln=nn(function(n,r){return n==null?{}:sn(n,r)});const on=T({ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical","undefined"]},ariaControls:String}),cn=n=>ln(on,n);export{J as a,w as b,S as c,Z as d,j as f,tn as h,E as i,ln as p,cn as u};
