(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[49528],{70646:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>N});var r=t(93379),o=t.n(r),i=t(89010);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var a=t(27418),p=t.n(a),c=t(71703),s=t(22222),u=t(75263),l=t.n(u),f=t(24852),b=t.n(f),d=t(72986),m=t.n(d);function g(n){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},g(n)}function y(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,j(r.key),r)}}function h(n,e,t){return e=w(e),function(n,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}(n,v()?Reflect.construct(e,t||[],w(n).constructor):e.apply(n,t))}function v(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(n){}return(v=function(){return!!n})()}function w(n){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},w(n)}function x(n,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},x(n,e)}function O(n,e,t){return(e=j(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function j(n){var e=function(n,e){if("object"!=g(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var r=t.call(n,"string");if("object"!=g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==g(e)?e:e+""}t.e(79509).then(t.bind(t,79509));var P=function(n){function e(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),h(this,e,arguments)}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&x(n,e)}(e,n),t=e,(r=[{key:"render",value:function(){return this.props.loading?b().createElement("div",{className:this.props.className,id:this.props.id},b().createElement(m(),{noFadeIn:!0,overrideSpinnerClassName:"spinner",spinnerName:this.props.spinner})):null}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,r}(b().Component);O(P,"propTypes",{id:l().string,loading:l().bool,className:l().string,spinner:l().string}),O(P,"defaultProps",{id:"mapstore-globalspinner",loading:!1,className:"ms2-loading",spinner:"circle"});const _=P;var k=t(75110),S=(0,s.P1)([k.l2],(function(n){return{loading:n&&n.some((function(n){return n.loading}))}})),E=(0,c.connect)(S)(_);const N={MapLoadingPlugin:p()(E,{Toolbar:{name:"maploading",position:1,tool:!0,priority:1}}),reducers:{}}},89010:(n,e,t)=>{"use strict";t.d(e,{Z:()=>i});var r=t(23645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,".msgapi #mapstore-globalspinner  {\n    width: 28px;\n    height: 28px;\n    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.2);\n    background-color: white;\n    background-size: 80px 80px;\n    background-repeat: no-repeat;\n    border-radius: 4px;\n    border: 1px solid #999;\n    z-index: 10;\n    top: 90px;\n    left: 2px;\n    position: absolute;\n    margin: 8px;\n}\n\n.msgapi #mapstore-globalspinner .circle-wrapper {\n    margin-left: 2px;\n    margin-top: 1px;\n}\n\n.msgapi #mapstore-toolbar #mapstore-globalspinner {\n    position: static;\n    width: 42px;\n    margin: 0;\n    margin-top: 0;\n    height: 35px;\n    box-shadow: none;\n}\n\n.msgapi .ms2-loading .sk-circle-wrapper {\n     width: 30px;\n     height: 30px;\n }\n",""]);const i=o}}]);