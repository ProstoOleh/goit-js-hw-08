function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var o,r,i,f,a,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function h(e){return c=e,a=setTimeout(T,t),l?y(e):f}function S(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function T(){var e=v();if(S(e))return j(e);a=setTimeout(T,function(e){var n=t-(e-u);return s?m(n,i-(e-c)):n}(e))}function j(e){return a=void 0,g&&o?y(e):(o=r=void 0,f)}function w(){var e=v(),n=S(e);if(o=arguments,r=this,u=e,n){if(void 0===a)return h(u);if(s)return a=setTimeout(T,t),y(u)}return void 0===a&&(a=setTimeout(T,t)),f}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=r=a=void 0},w.flush=function(){return void 0===a?f:j(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};let y=localStorage.getItem("feedback-form-state")?JSON.parse(localStorage.getItem("feedback-form-state")):{};const h={form:document.querySelector(".feedback-form")};h.form.addEventListener("submit",(function(e){e.preventDefault(),console.log("The form has been sent",y),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),y={}})),h.form.addEventListener("input",e(t)((function(e){y[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),function(){if(y){const e=document.querySelector(".feedback-form input"),t=document.querySelector(".feedback-form textarea");e.value=y.email,t.value=y.message}}();
//# sourceMappingURL=03-feedback.2e552fa6.js.map
