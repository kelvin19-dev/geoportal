(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[46906],{80416:(e,t,n)=>{"use strict";n.d(t,{yS:()=>r,Zz:()=>o,ms:()=>i,ih:()=>u,OX:()=>l,sb:()=>s,K$:()=>p,k7:()=>a,cX:()=>f,x9:()=>y,vs:()=>b,oE:()=>E,Po:()=>m,qv:()=>d,cI:()=>O,g6:()=>v,I4:()=>S,l$:()=>h,Xv:()=>R,k3:()=>g,CQ:()=>A,R8:()=>_,HN:()=>T,sH:()=>P,c7:()=>j,_7:()=>w,eF:()=>D,O6:()=>L,ED:()=>C,RP:()=>N,sF:()=>Y,VP:()=>I,He:()=>k,vO:()=>x,WO:()=>G,bh:()=>H,pV:()=>B,MK:()=>Z,ZF:()=>F,tV:()=>M,Dv:()=>U,Yz:()=>z,kI:()=>V,XG:()=>X,A4:()=>$,Rp:()=>W,$o:()=>K,ct:()=>q,oh:()=>Q,$h:()=>J,ud:()=>ee,Qr:()=>te,LR:()=>ne,nN:()=>re,UG:()=>oe,F5:()=>ie,c9:()=>ue,Jh:()=>ce,Xy:()=>le});var r="CHANGE_LAYER_PROPERTIES",o="LAYERS:CHANGE_LAYER_PARAMS",i="CHANGE_GROUP_PROPERTIES",u="TOGGLE_NODE",c="CONTEXT_NODE",l="SORT_NODE",s="REMOVE_NODE",p="UPDATE_NODE",a="MOVE_NODE",f="LAYER_LOADING",y="LAYER_LOAD",b="LAYER_ERROR",E="ADD_LAYER",m="ADD_GROUP",d="REMOVE_LAYER",O="SHOW_SETTINGS",v="HIDE_SETTINGS",S="UPDATE_SETTINGS",h="REFRESH_LAYERS",R="LAYERS:UPDATE_LAYERS_DIMENSION",g="LAYERS_REFRESHED",A="LAYERS_REFRESH_ERROR",_="LAYERS:BROWSE_DATA",T="LAYERS:DOWNLOAD",P="LAYERS:CLEAR_LAYERS",j="LAYERS:SELECT_NODE",w="LAYERS:FILTER_LAYERS",D="LAYERS:SHOW_LAYER_METADATA",L="LAYERS:HIDE_LAYER_METADATA",C="LAYERS:UPDATE_SETTINGS_PARAMS";function N(e,t,n){return{type:O,node:e,nodeType:t,options:n}}function Y(){return{type:v}}function I(e){return{type:S,options:e}}function k(e,t){return{type:r,newProperties:t,layer:e}}function x(e,t){return{type:o,layer:e,params:t}}function G(e,t){return{type:i,newProperties:t,group:e}}function H(e,t,n){return{type:u,node:e,nodeType:t,status:!n}}function B(e){return{type:c,node:e}}function Z(e,t){return{type:l,node:e,order:t,sortLayers:arguments.length>2&&void 0!==arguments[2]?arguments[2]:null}}function F(e,t){return{type:s,node:e,nodeType:t,removeEmpty:arguments.length>2&&void 0!==arguments[2]&&arguments[2]}}function M(e,t,n){return{type:p,node:e,nodeType:t,options:n}}function U(e,t,n){return{type:a,node:e,groupId:t,index:n}}function z(e){return{type:f,layerId:e}}function V(e,t){return{type:y,layerId:e,error:t}}function X(e,t,n){return{type:b,layerId:e,tilesCount:t,tilesErrorCount:n}}function $(e){return{type:E,layer:e,foreground:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}}function W(e,t,n){return{type:m,group:e,parent:t,options:n}}function K(e){return{type:d,layerId:e}}function q(e,t){return{type:r,layer:e,newProperties:{_v_:t||(new Date).getTime()}}}function Q(e){return{type:g,layers:e}}function J(e,t){return{type:A,layers:e,error:t}}function ee(e,t,n,r){return{type:R,dimension:e,value:t,options:n,layers:r}}function te(e){return{type:_,layer:e}}function ne(e){return{type:T,layer:e}}function re(){return{type:P}}function oe(e,t,n){return{type:j,id:e,nodeType:t,ctrlKey:n}}function ie(e){return{type:w,text:e}}function ue(e,t){return{type:D,metadataRecord:e,maskLoading:t}}function ce(){return{type:L}}function le(e,t){return{type:C,newParams:e,update:t}}},72688:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(24852),o=n.n(r),i=n(75263),u=n.n(i),c=n(38560),l=n(43614),s=n(72986),p=n.n(s);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function b(e,t,n){return t=m(t),function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,E()?Reflect.construct(t,n||[],m(e).constructor):t.apply(e,n))}function E(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(E=function(){return!!e})()}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function O(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==a(t)?t:t+""}var S=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return O(e=b(this,t,[].concat(r)),"onConfirm",(function(){e.props.onConfirm()})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this,t=o().createElement("span",{role:"footer"},o().createElement("div",{style:{float:"left"}}),o().createElement(c.Z,{ref:"confirmButton",disabled:this.props.running,className:this.props.className,key:"confirmButton",bsStyle:"primary",bsSize:this.props.buttonSize,onClick:function(){e.onConfirm()}},this.props.running?o().createElement(p(),{spinnerName:"circle",overrideSpinnerClassName:"spinner",noFadeIn:!0}):null,this.props.confirmText),this.props.includeCloseButton?o().createElement(c.Z,{key:"cancelButton",ref:"cancelButton",bsSize:this.props.buttonSize,onClick:this.props.onClose},this.props.cancelText):o().createElement("span",null)),n=this.props.body;return o().createElement(l.Z,f({},this.props.options,{show:this.props.show,onHide:this.props.onClose}),o().createElement(l.Z.Header,{key:"dialogHeader",closeButton:!0},o().createElement(l.Z.Title,null,this.props.titleText)),o().createElement(l.Z.Body,null,n),o().createElement(l.Z.Footer,null,t))}}])&&y(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(o().Component);O(S,"propTypes",{className:u().string,show:u().bool,options:u().object,onConfirm:u().func,onClose:u().func,closeGlyph:u().string,style:u().object,buttonSize:u().string,includeCloseButton:u().bool,body:u().oneOfType([u().string,u().element]),titleText:u().oneOfType([u().string,u().element]),confirmText:u().oneOfType([u().string,u().element]),cancelText:u().oneOfType([u().string,u().element]),running:u().bool}),O(S,"defaultProps",{onConfirm:function(){},onClose:function(){},options:{animation:!1},className:"",closeGlyph:"",style:{},includeCloseButton:!0,body:"",titleText:"Confirm Delete",confirmText:"Delete",cancelText:"Cancel"});const h=S},1036:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(18446),o=n.n(r);const i=(0,n(67076).shouldUpdate)((function(e,t){return!o()(e.start,t.start)||e.disabled!==t.disabled}))(n(85552))},93451:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var r=n(86638),o=n(75263),i=n.n(o),u=n(84596),c=n.n(u),l=n(1469),s=n.n(l),p=n(14293),a=n.n(p),f=n(47037),y=n.n(f),b=n(67076),E=["messages"];function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){var r;return r=function(e,t){if("object"!=m(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==m(r)?r:r+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return(0,b.compose)((0,b.getContext)({messages:i().object}),(0,b.mapProps)((function(n){var o=n.messages,i=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(n,E);return O(O({},i),c()(e).reduce(function(e,t,n){return function(){var o=arguments.length>1?arguments[1]:void 0;return O(O({},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),{},v({},o,e[o]&&function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(s()(t))return t.map((function(o){var i=(0,r.S$)(e,o[n]||y()(o)&&o||"");return O(O({},o),{},v({},n,a()(i)?t:i))}));var o=(0,r.S$)(e,t);return a()(o)?t:o}(t,e[o],n)))}}(i,o,t),{}))})))}},74621:(e,t,n)=>{"use strict";n.d(t,{np:()=>r,L3:()=>o,jl:()=>i,y8:()=>u,qg:()=>c}),n(27418),n(27361);var r=function(e){return e&&e.security&&e.security.user},o=function(e){return r(e)&&r(e).role},i=function(e){return e&&e.security&&e.security.user},u=function(e){return e.security&&e.security.token},c=function(e){return"ADMIN"===o(e)}}}]);