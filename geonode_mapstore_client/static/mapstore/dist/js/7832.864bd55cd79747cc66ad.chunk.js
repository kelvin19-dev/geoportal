(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7832],{11766:(e,t,r)=>{"use strict";r.d(t,{H:()=>P,Z:()=>E});var n=r(24852),o=r.n(n),c=r(83717),i=r(13218),a=r.n(i),u=r(17621),l=r.n(u),s=r(80681),f=r(38560),p=r(25288),m=r(45869),d=r(5346),y=r(15402),b=r(15135),g=["boxShadow","MozBoxShadow","WebkitBoxShadow"];function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){var n;return n=function(e,t){if("object"!=v(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==v(n)?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=(0,b.Z)(f.Z);function w(e){var t=e.themeStyle,r=e.disableBackgroundPicker,i=void 0!==r&&r,a=e.disableBackgroundAlpha,u=e.disableTextColor,f=e.disableShadow,b=e.onChange,v=void 0===b?function(){}:b,h=e.onOpen,S=void 0===h?function(){}:h,w=e.placement,P=(0,n.useRef)(),E=null==t?void 0:t.backgroundColor,k=null==t?void 0:t.color,C=!u&&E&&k&&!l().isReadable(k,E)?l().mostReadable(E,[k,"#000000","#ffffff"],{includeFallbackColors:!0}).toHexString():null;return o().createElement(o().Fragment,null,!i&&o().createElement("div",{className:"ms-custom-theme-picker-field"},o().createElement("div",null,o().createElement(d.Z,{msgId:"geostory.customizeTheme.backgroundColorLabel"})),o().createElement("div",null,o().createElement(c.Z,{placement:w,key:E,onOpen:S,color:E,format:a?"hex":"rgb",disableAlpha:a,presetColors:[],onChangeColor:function(e){var r=l()(e).isLight()?l()(e).darken(10).toHexString():l()(e).lighten(15).toHexString(),n=!u&&!(null!=t&&t.color)&&{color:l().mostReadable(e,["#000000","#ffffff"],{includeFallbackColors:!0}).toHexString()};v(O(O({},t),{},{backgroundColor:e,borderColor:r},!u&&n))}}))),!u&&o().createElement("div",{className:"ms-custom-theme-picker-field"},o().createElement("div",null,o().createElement("div",null,o().createElement(d.Z,{msgId:"geostory.customizeTheme.textColorLabel"})),o().createElement(p.Z,{className:"ms-custom-theme-picker-popover",ref:function(e){e&&(P.current=e.trigger)},placement:"top",content:o().createElement(o().Fragment,null,o().createElement(y.Z,{msgId:"geostory.customizeTheme.alternativeTextColorPopover",msgParams:{color:C}}),o().createElement(j,{bsSize:"xs",bsStyle:"primary",style:{margin:"auto",display:"block"},onClick:function(){var e,r;v(O(O({},t),{},{color:C})),null===(e=P.current)||void 0===e||null===(r=e.hide)||void 0===r||r.call(e)}},o().createElement(d.Z,{msgId:"geostory.customizeTheme.useAlternativeTextColor"})))},C&&o().createElement(j,{className:"square-button-md no-border",style:{display:C?"block":"none"}},o().createElement(s.Glyphicon,{glyph:"exclamation-mark"}))||o().createElement("div",null))),o().createElement("div",null,o().createElement(c.Z,{placement:w,key:k,color:k,onOpen:S,format:"hex",disableAlpha:!0,presetColors:[],onChangeColor:function(e){v(O(O({},t),{},{color:e}))}}))),!f&&o().createElement("div",{className:"ms-custom-theme-picker-field"},o().createElement("div",null,o().createElement(d.Z,{msgId:"geostory.customizeTheme.shadowLabel"})),o().createElement("div",null,o().createElement(m.Z,{checked:null==t?void 0:t.boxShadow,onChange:function(){var e=t||{},r=e.boxShadow,n=(e.MozBoxShadow,e.WebkitBoxShadow,function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,g));v(r?O({},n):O(O({},n),{},{boxShadow:"0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"}))}}))))}function P(e){var t=e.selected,r=e.value,n=e.storyTheme,c=e.onUpdate,i=e.onActive,u=e.disableBackgroundAlpha,l=e.disableTextColor,f=e.disableShadow,p=function(e,n){var o=a()(t)&&t;return c("theme",O(O({},o),{},n?S({value:e},r,O({},n)):{value:e}))},m=n||{},y=m.color,b=m.backgroundColor,g=b&&{backgroundColor:b},v=O(O({},!l&&y&&{color:y}),g),h=(null==t?void 0:t.value)===r,P=(null==t?void 0:t[r])||v;return o().createElement(o().Fragment,null,h?o().createElement("div",{className:"ms-custom-theme-picker-menuitem-header"},o().createElement("div",null,o().createElement(d.Z,{msgId:"geostory.contentToolbar.customizeThemeLabel"})),o().createElement(j,{tooltipId:"geostory.contentToolbar.customizeThemeRemoveLabel",className:"square-button-md no-border",onClick:function(e){e.stopPropagation(),p("")}},o().createElement(s.Glyphicon,{glyph:"trash"}))):o().createElement(o().Fragment,null,o().createElement(s.MenuItem,{active:h,onClick:function(){return p(r,P)}},o().createElement(d.Z,{msgId:"geostory.contentToolbar.customizeThemeLabel"}))),h&&o().createElement("div",{className:"ms-custom-theme-picker-menuitem"},o().createElement(w,{disableBackgroundAlpha:u,disableTextColor:l,disableShadow:f,themeStyle:P,onChange:function(e){return p(r,e)},onOpen:i})))}const E=w},25288:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(24852),o=r.n(n),c=r(75263),i=r.n(c),a=r(80681),u=r(37275);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,b(n.key),n)}}function f(e,t,r){return t=m(t),function(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,p()?Reflect.construct(t,r||[],m(e).constructor):t.apply(e,r))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function y(e,t,r){return(t=b(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){var t=function(e,t){if("object"!=l(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:t+""}var g=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return y(e=f(this,t,[].concat(n)),"getContainerNode",(function(t){return t?document.body:e.parentNode||document.querySelector("."+(u.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this,t=this.getContainerNode(this.props.useBody);return o().createElement("div",{ref:function(t){e.parentNode=t&&t.parentNode},className:this.props.className,style:this.props.style},o().createElement(a.OverlayTrigger,{ref:function(t){e.trigger=t},trigger:["click"],container:t,placement:this.props.placement,rootClose:!0,overlay:o().createElement(a.Popover,{id:this.props.id,title:this.props.title,className:this.props.popoverClassName},this.props.content)},this.props.children))}}])&&s(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);y(g,"propTypes",{id:i().string,style:i().object,className:i().string,popoverClassName:i().string,placement:i().string,title:i().node,content:i().node,useBody:i().bool}),y(g,"defaultProps",{id:"",useBody:!1});const v=g},25311:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(24852),o=r.n(n),c=r(90937),i=r(67076),a=["connectDragSource","connectDragPreview","connectDropTarget","isDragging","isOver"];function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var f={beginDrag:function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){var n,o,c,i;n=e,o=t,c=r[t],i=function(e,t){if("object"!=u(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==u(i)?i:i+"")in n?Object.defineProperty(n,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[o]=c})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)}};const p=(0,i.branch)((function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).isDraggable}),(0,i.compose)((0,c.Ej)("row",f,(function(e,t){return{connectDragSource:e.dragSource(),connectDragPreview:e.dragPreview(),isDragging:t.isDragging(),draggingItem:t.getItem()||null}})),(0,c.GR)("row",{drop:function(e,t){var r=t.getItem();r.sortId!==e.sortId&&e.onSort(e.sortId,r.sortId,{id:e.id,containerId:e.containerId},{id:r.id,containerId:r.containerId})}},(function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver()}})),(function(e){return function(t){var r=t.connectDragSource,n=t.connectDragPreview,c=t.connectDropTarget,i=t.isDragging,u=t.isOver,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,a),f=s.draggingItem&&s.draggingItem.sortId<s.sortId,p=s.draggingItem&&s.draggingItem.containerId===s.containerId,m=p&&i?" ms-dragging":"",d=p&&u?" ms-over":"",y=p&&f?" ms-above":" ms-below";return n(c(o().createElement("div",{className:"ms-dragg".concat(m).concat(d," ").concat(y)},o().createElement("div",null,o().createElement(e,l({},s,{connectDragSource:r,isDragging:i,isOver:u,onDrop:function(e){return e.stopPropagation()}}))))))}})))},45567:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(24852),o=r.n(n),c=r(67076);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var a=["onSort","isDraggable","items","containerId"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){var n,o,c,a;n=e,o=t,c=r[t],a=function(e,t){if("object"!=i(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==i(a)?a:a+"")in n?Object.defineProperty(n,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[o]=c})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const f=(0,c.compose)((0,c.branch)((function(e){var t=e.isDraggable;return void 0===t||t}),(function(e){return function(t){var r=t.onSort,n=t.isDraggable,c=t.items,i=void 0===c?[]:c,l=t.containerId,f=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,a),p=i.map((function(e,t){return s(s({},e),{},{onSort:r,isDraggable:n,sortId:t,key:e.id||t,containerId:l})}));return o().createElement(e,u({},s(s({},f),{},{isDraggable:n}),{items:p}))}})))},45869:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(24852),o=r.n(n),c=r(75263),i=r.n(c);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,d(n.key),n)}}function l(e,t,r){return t=f(t),function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,s()?Reflect.construct(t,r||[],f(e).constructor):t.apply(e,r))}function s(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(s=function(){return!!e})()}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function m(e,t,r){return(t=d(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==a(t)?t:t+""}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this;return o().createElement("label",{className:"mapstore-switch-btn ".concat(this.props.className)},o().createElement("input",{type:"checkbox",disabled:this.props.disabled,checked:this.props.checked,onChange:function(){return e.props.onChange(!e.props.checked)}}),o().createElement("span",{onClick:function(){return e.props.onClick(!e.props.checked)},className:"m-slider"}))}}])&&u(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);m(y,"propTypes",{disabled:i().bool,className:i().string,checked:i().bool,onChange:i().func,onClick:i().func}),m(y,"defaultProps",{className:"",checked:!1,onChange:function(){},onClick:function(){}});const b=y},66190:(e,t,r)=>{"use strict";r.d(t,{Z:()=>N});var n=r(27361),o=r.n(n),c=r(47037),i=r.n(c),a=r(81763),u=r.n(a),l=r(30998),s=r.n(l),f=r(13311),p=r.n(f),m=r(68630),d=r.n(m),y=r(1469),b=r.n(y),g=r(84596),v=r.n(g),h=r(19155),O=r.n(h),S=r(61868),j=r(92579),w=r(34990);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function C(e,t,r){var n;return n=function(e,t){if("object"!=P(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==P(n)?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function I(e){return function(e){if(Array.isArray(e))return D(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var T=function e(t,r,n){var o=n.contents,c=n.background,i=n.id,a=n.resourceId,u=[],l=r+'{"id": "'.concat(i,'"}]');return a===t?[l]:(c&&c.resourceId===t&&u.push(l+".background"),o?o.reduce((function(r,n){return[].concat(I(r),I(e(t,l+".contents[",n)))}),u):u)},x={mode:"view",isCollapsed:!1,focusedContent:{},currentPage:{},settings:{},oldSettings:{},updateUrlOnScroll:!1};const N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.D7:var r=t.id,n=t.path,c=t.position,a=t.element,l=(0,j.Ll)("currentStory.".concat(n),e),f=o()(e,l,[]),m=function(e,t){var r=e.length,n=0;return t||0===t||(n=r),i()(t)?n=s()(e,{id:t})+1:u()(t)&&(n=Math.min(t,e.length)),n}(f,c),y=f.slice();return y.splice(m,0,k({id:r},a)),(0,S.t8)(l,y,e);case w.mN:var g=t.id,h=t.mediaType,P=t.data;return(0,S.t8)("currentStory.resources",O()([{id:g,type:h,data:P}].concat(I(e.currentStory&&e.currentStory.resources||[])),"id"),e);case w.vb:return(0,S.t8)("mode",t.mode,e);case w.QK:var E=t.id,D=t.mediaType,N=t.data,Z=(0,S.cc)("currentStory.resources",{id:E,type:D,data:N},{id:E},e);return D===j.Tr.MAP&&e.currentStory.sections.filter((function(e){return e.type!==j.ID.CAROUSEL})).reduce((function(e,t){return[].concat(I(e),I(T(E,"sections[",t)))}),[]).map((function(t){var r=(0,j.Ll)("currentStory.".concat(t,".map"),e);Z=(0,S.t8)(r,void 0,Z)})),Z;case w.Ro:var _=t.id,A=t.mediaType,z=(0,S.z6)("currentStory.resources",{id:_},e);return e.currentStory.sections.reduce((function(e,t){return[].concat(I(e),I(T(_,"sections[",t)))}),[]).map((function(t){var r=(0,j.Ll)("currentStory.".concat(t,".resourceId"),e);if(z=(0,S.zN)(r,z),A===j.Tr.MAP){var n=(0,j.Ll)("currentStory.".concat(t,".map"),e);z=(0,S.zN)(n,z)}})),z;case w.lX:return(0,S.t8)("loading"===t.name?"loading":"loadFlags.".concat(t.name),t.value,(0,S.t8)("loading",t.value,e));case w.Dq:var B=t.path,L=(0,j.Ll)("currentStory.".concat(B),e),R=I(L),F=R.pop(),M=o()(e,R);return b()(M)?(i()(F)&&(F=parseInt(F,10)),(0,S.t8)(R,[].concat(I(M.slice(0,F)),I(M.slice(F+1))),e)):(0,S.zN)(L,e);case w.ij:var q,U,H,W,G,K=e.defaultSettings||{},Q=t.story.settings||K,Y=(null===(q=Q)||void 0===q||null===(U=q.theme)||void 0===U?void 0:U.fontFamilies)||[],$=null===(H=e.currentStory)||void 0===H||null===(W=H.settings)||void 0===W||null===(G=W.theme)||void 0===G?void 0:G.fontFamilies;return $&&$.length>0&&(Q=(0,S.t8)("theme.fontFamilies",O()([].concat(I($),I(Y)),"family"),Q)),(0,S.t8)("currentStory",k(k({},t.story),{},{settings:Q}),e);case w.i2:return(0,S.t8)("selectedCard",e.selectedCard===t.card?"":t.card,e);case w.IY:var X=t.control,J=t.value;return(0,S.t8)("controls.".concat(X),J,e);case w.Zf:var V=t.resource,ee=e.currentStory&&e.currentStory.settings||{};return(0,S.qC)((0,S.t8)("resource",V),(0,S.t8)("currentStory.settings.storyTitle",ee.storyTitle||V.name))(e);case w.si:case w.KT:return(0,S.zN)("errors.save",e);case w.SW:return(0,S.t8)("errors.save",v()(t.error),e);case w.Mk:return(0,S.t8)("isCollapsed",!e.isCollapsed,e);case w.NZ:var te=o()(e,"currentStory.settings.".concat(t.option));return(0,S.t8)("currentStory.settings.".concat(t.option),!te,e);case w.c:var re=!e.isSettingsEnabled,ne=e.currentStory&&e.currentStory.settings||{};return(0,S.qC)((0,S.t8)("isSettingsEnabled",re),(0,S.t8)("oldSettings",re?ne:{}),(0,S.t8)("currentStory.settings",re?k({},ne):t.withSave?ne:e.oldSettings))(e);case w.wb:var oe=t.path,ce=t.mode,ie=t.element,ae=(0,j.Ll)("currentStory.".concat(oe),e),ue=o()(e,ae);return d()(ue)&&d()(ie)&&"merge"===ce&&(ie=k(k({},ue),ie)),b()(ue)&&b()(ie)&&"merge"===ce&&(ie=[].concat(I(ue),I(ie))),(0,S.t8)(ae,ie,e);case w.km:return(0,S.t8)("currentStory.settings.".concat(t.prop),t.value,e);case w.un:if(t.columnId){var le=p()(e.currentStory.sections,(function(e){return p()(e.contents,{id:t.columnId})}));return le&&p()(le.contents,{id:t.columnId})?(0,S.t8)("currentPage",k(k({},e.currentPage),{},{columns:k(k({},e.currentPage.columns),{},C({},le.id,t.columnId))}),e):e}return(0,S.t8)("currentPage",k(k({},e.currentPage),{},{sectionId:t.sectionId}),e);case w.Cx:var se=t.status,fe=t.target,pe=t.selector,me=void 0===pe?"":pe,de=t.hideContent,ye=void 0!==de&&de,be=t.path,ge=se?{target:fe,selector:me,hideContent:ye,path:be}:void 0;return(0,S.t8)("focusedContent",ge,e);case w.jr:return(0,S.t8)("pendingChanges",t.value,e);case w.ZY:return(0,S.t8)("updateUrlOnScroll",t.value,e);case w.EQ:return(0,S.t8)("mediaEditorSettings",t.mediaEditorSettings,e);case w.W$:if(t.sectionId){var ve=p()(e.currentStory.sections,(function(e){return p()(e.contents,{id:t.showContentId})}));return ve&&p()(ve.contents,{id:t.showContentId})?(0,S.t8)("currentStory",k(k({},e.currentStory),{},{sections:(0,j.eI)(e.currentStory.sections,t)}),e):e}return e;case w.mk:return(0,S.t8)("drawOptions",t.drawOptions,e);default:return e}}},31398:(e,t,r)=>{"use strict";r.d(t,{d:()=>o});var n=r(97395),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.title,r=void 0===t?"notification.warning":t,o=e.autoDismiss,c=void 0===o?6:o,i=e.position,a=void 0===i?"tc":i,u=e.message,l=void 0===u?"Error":u;return(0,n.vU)({title:r,autoDismiss:c,position:a,message:l})}}}]);