import{bT as L,m as v,a_ as M}from"./COCpN0U9.js";var N=/\s/;function B(n){for(var r=n.length;r--&&N.test(n.charAt(r)););return r}var R=/^\s+/;function _(n){return n&&n.slice(0,B(n)+1).replace(R,"")}var k=NaN,$=/^[-+]0x[0-9a-f]+$/i,F=/^0b[01]+$/i,j=/^0o[0-7]+$/i,D=parseInt;function S(n){if(typeof n=="number")return n;if(L(n))return k;if(v(n)){var r=typeof n.valueOf=="function"?n.valueOf():n;n=v(r)?r+"":r}if(typeof n!="string")return n===0?n:+n;n=_(n);var t=F.test(n);return t||j.test(n)?D(n.slice(2),t?2:8):$.test(n)?k:+n}var h=function(){return M.Date.now()},H="Expected a function",P=Math.max,U=Math.min;function q(n,r,t){var u,c,l,s,i,f,d=0,b=!1,o=!1,T=!0;if(typeof n!="function")throw new TypeError(H);r=S(r)||0,v(t)&&(b=!!t.leading,o="maxWait"in t,l=o?P(S(t.maxWait)||0,r):l,T="trailing"in t?!!t.trailing:T);function x(e){var a=u,m=c;return u=c=void 0,d=e,s=n.apply(m,a),s}function W(e){return d=e,i=setTimeout(g,r),b?x(e):s}function O(e){var a=e-f,m=e-d,E=r-a;return o?U(E,l-m):E}function p(e){var a=e-f,m=e-d;return f===void 0||a>=r||a<0||o&&m>=l}function g(){var e=h();if(p(e))return y(e);i=setTimeout(g,O(e))}function y(e){return i=void 0,T&&u?x(e):(u=c=void 0,s)}function A(){i!==void 0&&clearTimeout(i),d=0,u=f=c=i=void 0}function C(){return i===void 0?s:y(h())}function I(){var e=h(),a=p(e);if(u=arguments,c=this,f=e,a){if(i===void 0)return W(f);if(o)return clearTimeout(i),i=setTimeout(g,r),x(f)}return i===void 0&&(i=setTimeout(g,r)),s}return I.cancel=A,I.flush=C,I}export{q as d};
