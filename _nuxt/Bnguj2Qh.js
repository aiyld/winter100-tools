import{bq as _,bB as w,bt as v,bu as I,bA as g,b9 as y,cf as c,bb as P,q as m,bd as A,v as T}from"./CxsFvqzA.js";function C(n){return n}function E(n,r,e){switch(e.length){case 0:return n.call(r);case 1:return n.call(r,e[0]);case 2:return n.call(r,e[0],e[1]);case 3:return n.call(r,e[0],e[1],e[2])}return n.apply(r,e)}var N=800,K=16,$=Date.now;function F(n){var r=0,e=0;return function(){var i=$(),t=K-(i-e);if(e=i,t>0){if(++r>=N)return arguments[0]}else r=0;return n.apply(void 0,arguments)}}function G(n){return function(){return n}}var f=function(){try{var n=_(Object,"defineProperty");return n({},"",{}),n}catch(r){}}(),M=f?function(n,r){return f(n,"toString",{configurable:!0,enumerable:!1,value:G(r),writable:!0})}:C,R=F(M),q=9007199254740991,H=/^(?:0|[1-9]\d*)$/;function S(n,r){var e=typeof n;return r=r==null?q:r,!!r&&(e=="number"||e!="symbol"&&H.test(n))&&n>-1&&n%1==0&&n<r}function L(n,r,e){r=="__proto__"&&f?f(n,r,{configurable:!0,enumerable:!0,value:e,writable:!0}):n[r]=e}var z=Object.prototype,B=z.hasOwnProperty;function U(n,r,e){var i=n[r];(!(B.call(n,r)&&w(i,e))||e===void 0&&!(r in n))&&L(n,r,e)}var b=Math.max;function X(n,r,e){return r=b(r===void 0?n.length-1:r,0),function(){for(var i=arguments,t=-1,u=b(i.length-r,0),o=Array(u);++t<u;)o[t]=i[r+t];t=-1;for(var a=Array(r+1);++t<r;)a[t]=i[t];return a[r]=e(o),E(n,this,a)}}var D=9007199254740991;function J(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=D}var Q="[object Arguments]";function h(n){return v(n)&&I(n)==Q}var x=Object.prototype,W=x.hasOwnProperty,Y=x.propertyIsEnumerable,O=h(function(){return arguments}())?h:function(n){return v(n)&&W.call(n,"callee")&&!Y.call(n,"callee")};function Z(n,r){for(var e=-1,i=r.length,t=n.length;++e<i;)n[t+e]=r[e];return n}var p=g?g.isConcatSpreadable:void 0;function V(n){return y(n)||O(n)||!!(p&&n&&n[p])}function k(n,r,e,i,t){var u=-1,o=n.length;for(e||(e=V),t||(t=[]);++u<o;){var a=n[u];e(a)?Z(t,a):t[t.length]=a}return t}function j(n){var r=n==null?0:n.length;return r?k(n):[]}function nn(n){return R(X(n,void 0,j),n+"")}function rn(n,r){return n!=null&&r in Object(n)}function en(n,r,e){r=c(r,n);for(var i=-1,t=r.length,u=!1;++i<t;){var o=P(r[i]);if(!(u=n!=null&&e(n,o)))break;n=n[o]}return u||++i!=t?u:(t=n==null?0:n.length,!!t&&J(t)&&S(o,t)&&(y(n)||O(n)))}function tn(n,r){return n!=null&&en(n,r,rn)}function an(n,r,e,i){if(!m(n))return n;r=c(r,n);for(var t=-1,u=r.length,o=u-1,a=n;a!=null&&++t<u;){var s=P(r[t]),l=e;if(s==="__proto__"||s==="constructor"||s==="prototype")return n;if(t!=o){var d=a[s];l=void 0,l===void 0&&(l=m(d)?d:S(r[t+1])?[]:{})}U(a,s,l),a=a[s]}return n}function un(n,r,e){for(var i=-1,t=r.length,u={};++i<t;){var o=r[i],a=A(n,o);e(a,o)&&an(u,c(o,n),a)}return u}function on(n,r){return un(n,r,function(e,i){return tn(n,i)})}var sn=nn(function(n,r){return n==null?{}:on(n,r)});const ln=T({ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical","undefined"]},ariaControls:String}),cn=n=>sn(ln,n),dn=Symbol("formContextKey"),gn=Symbol("formItemContextKey");export{J as a,O as b,S as c,Z as d,gn as e,j as f,dn as g,tn as h,C as i,sn as p,cn as u};
