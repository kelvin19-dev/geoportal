(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[41547],{41547:(t,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>k});var e=n(92742),o=n.n(e),i=n(47037),c=n.n(i),a=n(17621),l=n.n(a);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function f(t,r){for(var n=0;n<r.length;n++){var e=r[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,p(e.key),e)}}function s(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),n.push.apply(n,e)}return n}function y(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){var e,o,i;e=t,o=r,i=n[r],(o=p(o))in e?Object.defineProperty(e,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}function p(t){var r=function(t,r){if("object"!=u(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var e=n.call(t,"string");if("object"!=u(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==u(r)?r:r+""}function b(t){return function(t){if(Array.isArray(t))return h(t)}(t)||O(t)||d(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,r){return g(t)||function(t,r){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,o,i,c,a=[],l=!0,u=!1;try{if(i=(n=n.call(t)).next,0===r){if(Object(n)!==n)return;l=!1}else for(;!(l=(e=i.call(n)).done)&&(a.push(e.value),a.length!==r);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(u)throw o}}return a}}(t,r)||d(t,r)||v()}function v(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t,r){if(t){if("string"==typeof t)return h(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,r):void 0}}function h(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function O(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function g(t){if(Array.isArray(t))return t}function w(t){var r,n=g(r=t)||O(r)||d(r)||v(),e=n[0],o=n.slice(1);switch(e){case"||":case"&&":return"(".concat(o.map((function(t){return w(t)})).join(" ".concat(e," ")),")");case">":case"<":case">=":case"<=":case"!=":case"==":case"*=":var i=m(o,2),a=i[0],l=i[1];return function(t,r,n){var e="!(${".concat(t,"} === undefined").concat(null===n?"":" || ${".concat(t,"} === null"),")");return"=~"===r?"(".concat(e," && regExp('").concat(n,"').test(${").concat(t,"}) === true)"):"(".concat(e," && ${").concat(t,"} ").concat(r," ").concat(c()(n)?"'".concat(n,"'"):n,")")}(a,{"==":"===",">":">",">=":">=","<":"<","<=":"<=","!=":"!==","*=":"=~"}[e],l);default:return""}}function j(t){return!t||w(t)}function S(t){var r=t.conditions;return 1===r.length&&!0===r[0][0]?r[0][1]:{conditions:r}}function P(t){if(/rgb\(|rgba\(|hsl\(|hsla\(/.test(t)){var r=l()(t);return{color:r.toHexString(),fillOpacity:r.getAlpha()}}if(/color\(/.test(t)){var n=m(t.replace(/color\(|\)/g,"").split(","),2),e=n[0],o=n[1];return{color:e.replace(/\'/g,""),fillOpacity:parseFloat(void 0!==o?o:1)}}return{color:"#ffffff",fillOpacity:1}}const k=function(){return t=function t(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t)},r=[{key:"readStyle",value:function(t){return new Promise((function(r,n){try{var e=function(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=r.color,e=r.pointSize,i=r.meta,a=null!=i&&i.names?o()(i.names,"'").split(","):[],l=c()(n)?[{filter:void 0,name:a[0]||"",symbolizers:[y({kind:e?"Mark":"Fill"},P(n))]}]:null==n||null===(t=n.conditions)||void 0===t?void 0:t.map((function(t,r){var n=t[1];return{filter:void 0,name:a[r]||"",symbolizers:[y({kind:e?"Mark":"Fill"},P(n))]}}));return{name:null!=i&&i.title?o()(i.title,"'"):"",rules:b(l).reverse()}}(t);r(e)}catch(t){n(t)}}))}},{key:"writeStyle",value:function(t){return new Promise((function(r,n){try{var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.name,n=t.rules,e=b(void 0===n?[]:n).reverse(),o=e.find((function(t){return"Mark"===t.symbolizers[0].kind})),i=e.map((function(t){var r=t.filter,n=t.symbolizers;return[j(r),o&&0===(n[0].fillOpacity||0)?"${COLOR}":"color('".concat(n[0].color,"', ").concat(n[0].fillOpacity,")")]})),c=i.find((function(t){return!0===m(t,1)[0]})),a=!c&&{show:i.filter((function(t){return!0!==t})).map((function(t){return m(t,1)[0]})).join(" || ")},l=e.map((function(t){var r=t.filter,n=t.symbolizers;return[j(r),n[0].radius||1]})),u=e.map((function(t){return t.name})),f=!!u.find((function(t){return!!t}));return y(y(y({},a),{},{color:S({conditions:c?i:[].concat(b(i),[[!0,"color('#ffffff', 1)"]])})},o&&{pointSize:S({conditions:c?l:[].concat(b(l),[[!0,1]])})}),(r||f)&&{meta:y(y({},r&&{title:"'".concat(r,"'")}),f&&{names:"'".concat(u.join(","),"'")})})}(t);r(e)}catch(t){n(t)}}))}}],r&&f(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,r}()}}]);