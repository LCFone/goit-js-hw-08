!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return s.Date.now()};function y(e,t,n){var r,i,u,a,f,l,c=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function O(e){return c=e,f=setTimeout(T,t),d?y(e):a}function j(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function T(){var e=g();if(j(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return s?p(n,u-(e-c)):n}(e))}function h(e){return f=void 0,m&&r?y(e):(r=i=void 0,a)}function w(){var e=g(),n=j(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return O(l);if(s)return f=setTimeout(T,t),y(l)}return void 0===f&&(f=setTimeout(T,t)),a}return t=S(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(S(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},w.flush=function(){return void 0===f?a:h(g())},w}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var O,j={form:document.querySelector(".feedback-form"),inputEmail:document.querySelector("input"),textares:document.querySelector("textarea")},T="feedback-form-state",h=JSON.parse(localStorage.getItem(T))||{};(O=JSON.parse(localStorage.getItem(T)))&&(O.email&&(j.inputEmail.value=""),O.message&&(j.textares.value="")),j.form.addEventListener("input",e(t)((function(e){var t=e.target;h[t.name]=t.value,localStorage.setItem(T,JSON.stringify(h))}),500)),j.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(JSON.parse(localStorage.getItem(T))),localStorage.removeItem(T)}))}();
//# sourceMappingURL=03-feedback.28da6881.js.map
