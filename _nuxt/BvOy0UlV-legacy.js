System.register(["./yL1tyur2-legacy.js"],(function(t,n){"use strict";var r,e,i;return{setters:[t=>{r=t.bT,e=t.m,i=t.a_}],execute:function(){t("d",(function(t,n,r){var i,u,o,a,f,c,v=0,s=!1,T=!1,g=!0;if("function"!=typeof t)throw new TypeError(d);function h(n){var r=i,e=u;return i=u=void 0,v=n,a=t.apply(e,r)}function x(t){var r=t-c;return void 0===c||r>=n||r<0||T&&t-v>=o}function b(){var t=m();if(x(t))return w(t);f=setTimeout(b,function(t){var r=n-(t-c);return T?y(r,o-(t-v)):r}(t))}function w(t){return f=void 0,g&&i?h(t):(i=u=void 0,a)}function $(){var t=m(),r=x(t);if(i=arguments,u=this,c=t,r){if(void 0===f)return function(t){return v=t,f=setTimeout(b,n),s?h(t):a}(c);if(T)return clearTimeout(f),f=setTimeout(b,n),h(c)}return void 0===f&&(f=setTimeout(b,n)),a}return n=l(n)||0,e(r)&&(s=!!r.leading,o=(T="maxWait"in r)?p(l(r.maxWait)||0,n):o,g="trailing"in r?!!r.trailing:g),$.cancel=function(){void 0!==f&&clearTimeout(f),v=0,i=c=u=f=void 0},$.flush=function(){return void 0===f?a:w(m())},$}));var n=/\s/,u=/^\s+/;function o(t){return t?t.slice(0,function(t){for(var r=t.length;r--&&n.test(t.charAt(r)););return r}(t)+1).replace(u,""):t}var a=NaN,f=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,v=/^0o[0-7]+$/i,s=parseInt;function l(t){if("number"==typeof t)return t;if(r(t))return a;if(e(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=e(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=o(t);var i=c.test(t);return i||v.test(t)?s(t.slice(2),i?2:8):f.test(t)?a:+t}var m=function(){return i.Date.now()},d="Expected a function",p=Math.max,y=Math.min}}}));
