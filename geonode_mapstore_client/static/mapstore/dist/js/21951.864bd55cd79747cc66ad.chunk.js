(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[21951],{15047:(e,t,r)=>{"use strict";r.d(t,{b:()=>m});var n=r(27418),o=r.n(n);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){var n,o,a,s;n=e,o=t,a=r[t],s=function(e,t){if("object"!=i(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==i(s)?s:s+"")in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=r(59286),p=r(32420),u=["url","typeName","queriableAttributes","outputFormat","predicate","staticFilter","blacklist","item","fromTextToFilter","returnFullData"];var c=function(e){var t,r=e.searchText,n=e.staticFilter,o=e.blacklist,i=e.item,a=e.queriableAttributes,s=e.predicate,p=(0,l.generateTemplateString)(n||"")(i),u=r.split(" ").filter((function(e){return e})).filter((function(e){return o.indexOf(e.toLowerCase())<0}));return 0===u.length&&(u=r?[r]:[]),u.length>0&&(t="(".concat(u.map((function(e){return a.map((function(t){return"".concat(t," ").concat(s," '%").concat(e.replace("'","''"),"%'")})).join(" OR ")})).join(") AND (")).concat(")")),t?t.concat(p):p||null},f={nominatim:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{returnFullData:!1};return r(47310).Z.geocode(e,t).then((function(e){return t.returnFullData?e:null===(r=e.data)?[]:r.map((function(e){return{properties:s({},e),id:e.osm_id,type:"Feature",bbox:e.boundingbox.map((function(e){return parseFloat(e)})).reduce((function(e,t,r){return e[function(e){switch(e){case 0:return 1;case 1:return 3;case 2:return 0;case 3:return 2;default:return-1}}(r)]=t,e}),[]),geometry:e.geojson||{type:"Point",coordinates:[parseFloat(e.lon),parseFloat(e.lat)]}}}));var r}))},wfs:function(e,t){var r=t.url,n=t.typeName,i=t.queriableAttributes,a=void 0===i?[]:i,s=t.outputFormat,l=void 0===s?"application/json":s,f=t.predicate,b=void 0===f?"ILIKE":f,m=t.staticFilter,y=void 0===m?"":m,d=t.blacklist,w=void 0===d?[]:d,g=t.item,v=t.fromTextToFilter,h=void 0===v?c:v,P=t.returnFullData,O=void 0!==P&&P,j=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,u),x=h({searchText:e,staticFilter:y,blacklist:w,item:g,queriableAttributes:a,predicate:b});return p.DH(r,o()({maxFeatures:10,typeName:n,outputFormat:l,cql_filter:x},j)).then((function(e){return O?e:e.features}))}},b={setService:function(e,t){f[e]=t},getService:function(e){return f[e]?f[e]:null}},m={Services:f,Utils:b}},48384:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var n=r(24852),o=r.n(n),i=r(75263),a=r.n(i);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,b(n.key),n)}}function p(e,t,r){return t=c(t),function(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,u()?Reflect.construct(t,r||[],c(e).constructor):t.apply(e,r))}function u(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(u=function(){return!!e})()}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function b(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}var m,y,d,w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props.item;return e.pagination?o().createElement("span",null,e[this.props.textField]," ",e.pagination," "):o().createElement("span",null,e[this.props.textField])}}])&&l(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);m=w,y="propTypes",d={item:a().object,textField:a().string,valueField:a().string},(y=b(y))in m?Object.defineProperty(m,y,{value:d,enumerable:!0,configurable:!0,writable:!0}):m[y]=d;const g=w},49902:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(75263),o=r.n(n),i=r(24852),a=r.n(i),s=r(20),l=r(80681),p=r(86638),u=r(50966),c=r(48384);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,h(n.key),n)}}function y(e,t,r){return t=w(t),function(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,d()?Reflect.construct(t,r||[],w(e).constructor):t.apply(e,r))}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function v(e,t,r){return(t=h(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(t)?t:t+""}var P=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return v(e=y(this,t,[].concat(n)),"renderWithTooltip",(function(t){if(e.props.tooltip.customizedTooltip){var r=e.props.tooltip.customizedTooltip;return a().createElement(r,null,t)}var n=a().createElement(l.Tooltip,{id:e.props.tooltip.id},e.props.tooltip.message);return a().createElement(u.Z,{key:e.props.tooltip.overlayTriggerKey,placement:e.props.tooltip.placement,overlay:n},t)})),v(e,"renderPagination",(function(){var t=e.props.pagination.firstPage,r=e.props.pagination.lastPage;return a().createElement("div",{className:"autocomplete-toolbar"},!t&&a().createElement(l.Glyphicon,{className:e.props.prevPageIcon,glyph:e.props.prevPageIcon,onClick:function(t){e.props.stopPropagation&&t.stopPropagation(),e.props.pagination.loadPrevPage()}}),!r&&a().createElement(l.Glyphicon,{className:e.props.nextPageIcon,glyph:e.props.nextPageIcon,onClick:function(t){e.props.stopPropagation&&t.stopPropagation(),e.props.pagination.loadNextPage()}}))})),v(e,"renderField",(function(){var t={emptyList:(0,p.S$)(e.context.messages,"queryform.attributefilter.autocomplete.emptyList"),open:(0,p.S$)(e.context.messages,"queryform.attributefilter.autocomplete.open"),emptyFilter:(0,p.S$)(e.context.messages,"queryform.attributefilter.autocomplete.emptyFilter")},r=[];e.props.data&&e.props.data.length>0&&(r=e.props.data.map((function(e){return e}))),e.props.pagination&&e.props.pagination.paginated&&r.length>0&&r.push(v(v(v(v({},e.props.textField,""),e.props.valueField,""),"disabled",!0),"pagination",e.renderPagination()));var n=e.props.loading?[]:r,o=e.props.itemComponent,i=a().createElement(s.Combobox,{placeholder:e.props.placeholder,dropUp:e.props.dropUp,busy:e.props.busy,data:n,disabled:e.props.disabled,itemComponent:function(t){return a().createElement(o,b({textField:e.props.textField,valueField:e.props.valueField},t))},messages:e.props.messages||t,open:e.props.open,filter:e.props.filter,onChange:function(t){return e.props.onChange(t)},onFocus:function(){return e.props.onFocus(e.props.data)},onSelect:function(t){return e.props.onSelect(t)},onToggle:function(t){return e.props.onToggle(t)},textField:e.props.textField,valueField:e.props.valueField,value:e.props.selectedValue});return e.props.tooltip&&e.props.tooltip.enabled?e.renderWithTooltip(i):i})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(t,e),r=t,(n=[{key:"componentDidUpdate",value:function(e){var t=this.props.attribute;t!==e.attribute&&this.props.onChangeAttribute(t)}},{key:"render",value:function(){var e=this.props,t=e.selectedValue,r=e.disabled,n=e.onReset,o=e.label,i=e.clearable,s=o?a().createElement("label",null,o):a().createElement("span",null);return a().createElement("div",{className:"autocompleteField"},s,i?a().createElement("div",{className:"rw-combo-clearable ".concat(r?"disabled":"")},this.renderField(),a().createElement("span",{className:"rw-combo-clear ".concat(t?"":"hidden"),onClick:n},"x")):this.renderField())}}])&&m(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(a().Component);v(P,"propTypes",{busy:o().bool,data:o().array,disabled:o().bool,dropUp:o().bool,itemComponent:o().oneOfType([o().object,o().func]),label:o().string,loading:o().bool,filter:o().oneOfType([o().string,o().bool]),messages:o().object,onChange:o().func,onFocus:o().func,onSelect:o().func,onToggle:o().func,onChangeAttribute:o().func,open:o().bool,pagination:o().object,nextPageIcon:o().string,prevPageIcon:o().string,selectedValue:o().string,textField:o().string,tooltip:o().object,valueField:o().string,placeholder:o().string,stopPropagation:o().bool,clearable:o().bool,onReset:o().func,attribute:o().string}),v(P,"contextTypes",{messages:o().object}),v(P,"defaultProps",{stopPropagation:!1,dropUp:!1,itemComponent:c.Z,loading:!1,label:null,filter:"",pagination:{paginated:!0,firstPage:!1,lastPage:!1,loadPrevPage:function(){},loadNextPage:function(){}},nextPageIcon:"chevron-right",prevPageIcon:"chevron-left",onFocus:function(){},onToggle:function(){},onChange:function(){},onSelect:function(){},onReset:function(){},onChangeAttribute:function(){},textField:"label",tooltip:{customizedTooltip:void 0,enabled:!1,id:"",message:void 0,overlayTriggerKey:"",placement:"top"},valueField:"value",clearable:!1});const O=P},76364:(e,t,r)=>{"use strict";r.d(t,{Vd:()=>O,Vj:()=>j});var n=r(72500),o=r.n(n),i=r(66654),a=r.n(i),s=r(91175),l=r.n(s),p=r(14293),u=r.n(p),c=r(27418),f=r.n(c),b=r(49977),m=r.n(b),y=r(15047),d=r(75875),w=r.n(d),g=r(84069);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var P=function(e){var t=e.searchText,r=void 0===t?"":t,n=e.queriableAttributes,o=void 0===n?[]:n,i=e.predicate,a=void 0===i?"ILIKE":i,s=l()(o),p=r.toLowerCase(),c="strToLowerCase(".concat(s,") ").concat(a," '%").concat(p,"%'");return u()(s)?"":"("+c+")"},O=function(e){return e.distinctUntilChanged((function(e){var t=e.value,r=e.currentPage,n=e.attribute,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return!(o.value!==t||o.currentPage!==r||o.attribute!==n)})).throttle((function(e){return m().Observable.timer(e.delayDebounce||0)})).merge(e.debounce((function(e){return m().Observable.timer(e.delayDebounce||0)}))).distinctUntilChanged().switchMap((function(e){if(e.performFetch){var t=(0,g.getWpsPayload)({attribute:e.attribute,layerName:e.typeName,maxFeatures:e.maxFeatures,startIndex:(e.currentPage-1)*e.maxFeatures,value:e.value});return m().Observable.fromPromise(w().post(e.url,t,{timeout:6e4,headers:{Accept:"application/json","Content-Type":"application/xml"}}).then((function(e){return{fetchedData:e.data,busy:!1}}))).catch((function(){return m().Observable.of({fetchedData:{values:[],size:0},busy:!1})})).startWith({busy:!0})}return m().Observable.of({fetchedData:{values:[],size:0},busy:!1})})).startWith({})},j=function(e){return m().Observable.merge(e.distinctUntilChanged((function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).value===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).value})).debounce((function(e){return m().Observable.timer(e.delayDebounce||0)})),e.distinctUntilChanged((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.filterProps,r=e.currentPage,n=arguments.length>1?arguments[1]:void 0,o=n.filterProps,i=n.currentPage;return t===o&&r===i}))).switchMap((function(e){if(e.performFetch){var t=o().parse(e.url,!0),r="";(a()(t.pathname,"wfs")||a()(t.pathname,"wms")||a()(t.pathname,"ows")||a()(t.pathname,"wps"))&&(r=t.pathname.replace(/(wms|ows|wps|wfs)$/,"wfs")),t.query&&t.query.service&&delete t.query.service;var n=o().format(f()({},t,{search:null,pathname:r})),i=f()({},function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){var n,o,i,a;n=e,o=t,i=r[t],a=function(e,t){if("object"!=v(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==v(a)?a:a+"")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({url:n,typeName:e.filterProps&&e.filterProps.typeName||"",predicate:e.filterProps&&e.filterProps.predicate||"ILIKE",blacklist:e.filterProps&&e.filterProps.blacklist||[],maxFeatures:e.filterProps&&e.filterProps.maxFeatures||3,queriableAttributes:e.filterProps&&e.filterProps.queriableAttributes||[],returnFullData:!0,startIndex:((e.currentPage||1)-1)*(e.filterProps&&e.filterProps.maxFeatures||3),outputFormat:"application/json",staticFilter:"",fromTextToFilter:P,item:{},timeout:6e4,headers:{Accept:"application/json","Content-Type":"application/xml"},srsName:e.filterProps&&e.filterProps.srsName||"EPSG:4326"},t.query));return m().Observable.fromPromise(y.b.Utils.getService("wfs")(e.value,i).then((function(t){return{fetchedData:{values:t.features.map((function(e){return e.properties})),size:t.totalFeatures,features:t.features,crs:e.filterProps&&e.filterProps.srsName||"EPSG:4326"},busy:!1}}))).catch((function(){return m().Observable.of({fetchedData:{values:[],size:0,features:[]},busy:!1})})).startWith({busy:!0})}return m().Observable.of({fetchedData:{values:[],size:0,features:[]},busy:!1})})).startWith({})}},84069:(e,t,r)=>{function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var o=r(47805),i=o.isFilterValid,a=o.toOGCFilterParts,s=r(2245)({}).and;e.exports={getWpsPayload:function(e){var t,r=e.layerName,o=e.layerFilter,l=e.attribute,p=e.maxFeatures,u=e.startIndex,c=e.value,f=c?'<ogc:PropertyIsLike matchCase="false" wildCard="*" singleChar="." escapeChar="!">   <ogc:PropertyName>'+l+"</ogc:PropertyName>   <ogc:Literal>*"+c+"*</ogc:Literal></ogc:PropertyIsLike>":"",b=o&&!o.disabled&&i(o)?a(o,"1.1.0","ogc"):[];return'<wps:Execute xmlns:wps="http://www.opengis.net/wps/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.0.0" service="WPS" xsi:schemaLocation="http://www.opengis.net/wps/1.0.0 http://schemas.opengis.net/wps/1.0.0/wpsAll.xsd">  <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">gs:PagedUnique</ows:Identifier>  <wps:DataInputs>    <wps:Input>      <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">features</ows:Identifier>      <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">features</ows:Title>      <wps:Data />      <wps:Reference xmlns:xlink="http://www.w3.org/1999/xlink" mimeType="text/xml" xlink:href="http://geoserver/wfs" method="POST">        <wps:Body>         <wfs:GetFeature xmlns:wfs="http://www.opengis.net/wfs" service="WFS" version="1.0.0">           <wfs:Query typeName="'+r+'">'+(f.length>0||b.length>0?'<ogc:Filter xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml">'+s.apply(void 0,(t=b,function(e){if(Array.isArray(e))return n(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).concat([f]))+"</ogc:Filter>":"")+'             <ogc:SortBy xmlns:ogc="http://www.opengis.net/ogc">               <ogc:SortProperty>                 <ogc:PropertyName>'+l+'</ogc:PropertyName>               </ogc:SortProperty>             </ogc:SortBy>           </wfs:Query>         </wfs:GetFeature>       </wps:Body>     </wps:Reference>   </wps:Input>   <wps:Input>     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">fieldName</ows:Identifier>     <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">fieldName</ows:Title>     <wps:Data>       <wps:LiteralData>'+l+'</wps:LiteralData>     </wps:Data>   </wps:Input>   <wps:Input>     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">maxFeatures</ows:Identifier>     <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">maxFeatures</ows:Title>     <wps:Data>       <wps:LiteralData>'+p+'</wps:LiteralData>     </wps:Data>   </wps:Input>   <wps:Input>     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">startIndex</ows:Identifier>     <ows:Title xmlns:ows="http://www.opengis.net/ows/1.1">startIndex</ows:Title>     <wps:Data>       <wps:LiteralData>'+u+'</wps:LiteralData>     </wps:Data>   </wps:Input> </wps:DataInputs> <wps:ResponseForm>   <wps:RawDataOutput mimeType="application/json">     <ows:Identifier xmlns:ows="http://www.opengis.net/ows/1.1">result</ows:Identifier>   </wps:RawDataOutput> </wps:ResponseForm></wps:Execute>'}}}}]);