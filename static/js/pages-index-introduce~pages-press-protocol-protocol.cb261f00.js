(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-introduce~pages-press-protocol-protocol"],{"0f40":function(t,e,r){"use strict";r("ba1f");var n=r("de9e").default;Object.defineProperty(e,"__esModule",{value:!0}),e.parseProtocol=a;var o=n(r("6d7c"));function i(t){var e=[];return e=Array.isArray(t)?t.map((function(t){return"string"===typeof t?{text:t}:t})):[{text:t}],e}function a(t){return t.map((function(t,e){return(0,o.default)((0,o.default)({},t),{},{uniqueKey:"first-key-".concat(e),list:(t.list||[]).map((function(t,e){var r=i(t);return{uniqueKey:"second-key-".concat(e),list:r.map((function(t,e){return(0,o.default)((0,o.default)({},t),{},{uniqueKey:"third-key-".concat(e)})}))}}))})}))}r("a707")},"15d9":function(t,e,r){"use strict";var n;r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"press-protocol demo-wrap--e-sport",class:t.customClass,style:t.customStyle},[r("div",{staticClass:"press-protocol__layout"},t._l(t.list,(function(e){return r("div",{key:e.uniqueKey,staticClass:"press-protocol__item"},[e.title?r("div",{staticClass:"press-protocol__item__title"},[t._v(t._s(e.title))]):t._e(),r("div",{staticClass:"press-protocol__item__infos"},t._l(e.list,(function(e){return r("div",{key:e.uniqueKey,staticClass:"press-protocol__info"},t._l(e.list,(function(e){return r("span",{key:e.uniqueKey,staticClass:"press-protocol__info__item"},[r("span",{staticClass:"press-protocol__text ",class:{"press-protocol__text--light":e.light,"press-protocol__text--underline":e.underline},on:{click:function(r){r.stopPropagation(),arguments[0]=r=t.$handleEvent(r),t.clickProtocol(e)}}},[t._v(t._s(e.text))])])})),0)})),0)])})),0)])},i=[]},"1ac0":function(t,e,r){"use strict";function n(t){return new Promise((function(e,r){wx?wx.setClipboardData({data:"".concat(t),success:function(){e()},fail:function(t){console.log(t),r()}}):r()}))}Object.defineProperty(e,"__esModule",{value:!0}),e.clipboardMp=n},"43e8":function(t,e,r){"use strict";r("ba1f");var n=r("de9e").default;Object.defineProperty(e,"__esModule",{value:!0}),e.DEFAULT_PRESS_UI_INTRODUCE=void 0,e.getPressUIIntroduce=s,r("dafe");var o=n(r("c452")),i=r("0f40"),a=r("d257"),c="https://tip-components-1251917893.cos.ap-guangzhou.myqcloud.com/rb/front-open-config__match__default__press_ui_introduce_config.json",u=[{title:"一、开始",list:[["1、“Press UI 组件库”（以下简称 Press UI）是基于 uni-app 的跨端组件库，旨在",{text:"提升开发效率、沉淀业务组件",light:!0},"，为开发者提供易用、灵活、高性能的组件库。"],"2、Press UI 包含三部分内容，基础组件、业务组件、通用逻辑。"]},{title:"二、功能介绍",list:["1. 70+ 基础组件，覆盖移动端主流场景","2. 支持基于 uni-app 的 H5、微信小程序、QQ小程序",["3. 支持非 uni-app 环境的",{text:"普通 Vue 项目",light:!0}],["4. 支持 ",{text:"Vue2 和 Vue3",light:!0}],["5. 基础组件",{text:"零外部依赖",light:!0,underline:!0},"，不依赖三方 npm 包"],"6. 提供丰富的中英文文档和组件示例","7. 支持主题定制，内置 600+ 个主题变量","8. 支持国际化，内置 16+ 种语言包"]},{title:"三、解决痛点",list:[" Press UI 作为基础组件库，解决了以下痛点：","1. 支持包含 vant 的 H5 项目平滑迁移至 uni-app 项目，仅需改下引用地址和组件名称","2. 丰富的组件类型，以及易用的API，让 uni-app 开发变得简单","3. 支持国际化、主题定制等，组件灵活性更强","4. 支持普通Vue项目，达到一套代码 n+1 端复用","同时，将项目中业务组件沉淀到 Press UI 中，有以下好处：",["1. ",{light:!0,text:"减少业务和组件的耦合，降低各自复杂度"},"，并减少bug"],["2. ",{light:!0,text:"增强组件可维护性"},"，提升开发效率"],"  通过整理代码，合并属性，分离业务逻辑等，让组件变纯粹，增强可维护性，进而提升效率",["3. ",{light:!0,text:"封装核心逻辑，控制变化"}],"  不用担心外部合作人员改乱代码，以及解决冲突时的覆盖问题",["4. ",{light:!0,text:"UI问题定位简单"}],"  三端代码同时发布，以及多种类型的示例，覆盖面全，容易发现UI问题，以及三端表现不一致问题","5. 可提升性能","  通过示例中的自定义变量，可定位性能瓶颈，并解决性能问题","6. 提高可复用性，可应用到其他项目","7. 技术沉淀，技术积累，不断打磨组件细节"]},{title:"四、普通 Vue 项目",list:["Press UI 支持非 uni-app 环境的普通 Vue 项目，已应用于多个项目中。",["体验地址：",{text:"点击此处",light:!0,link:"https://novlan1.github.io/press-ui-pure/"}]]},{title:"四、Vue3",list:[["Press UI 同时支持 Vue2 和 Vue3，具体使用方法请",{text:"参考文档",light:!0,link:"https://h5.igame.qq.com/pmd-mobile.support.press-ui.press-ui/quickstart.html#vue3-%E9%A1%B9%E7%9B%AE"},"。"],["体验地址：",{text:"点击此处",light:!0,link:"https://novlan1.github.io/press-ui-v3/"}]]}];function s(){return l.apply(this,arguments)}function l(){return l=(0,o.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,a.fetchData)(c);case 2:return e=t.sent,t.abrupt("return",(0,i.parseProtocol)(e));case 4:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}e.DEFAULT_PRESS_UI_INTRODUCE=u},"534d":function(t,e,r){"use strict";var n=r("e1db"),o=r.n(n);o.a},"53cb":function(t,e,r){"use strict";r("ba1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.setClipboardData=o;var n=r("6332");function o(t){var e=n.clipboardMp;return e=n.clipboardWeb,e("".concat(t))}},"5cfa":function(t,e,r){"use strict";r.r(e);var n=r("f8b3"),o=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},6332:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("1ac0"),o=r("e47c");e.clipboardMp=n.clipboardMp,e.clipboardWeb=o.clipboardWeb},"99ab":function(t,e,r){"use strict";r.r(e);var n=r("15d9"),o=r("5cfa");for(var i in o)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(i);r("534d");var a,c=r("6b9f"),u=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"c29afb9e",null,!1,n["a"],a);e["default"]=u.exports},c452:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r("ba1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o,r("e291")},dafe:function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"===typeof t,l=e.regeneratorRuntime;if(l)s&&(t.exports=l);else{l=e.regeneratorRuntime=s?t.exports:{},l.wrap=b;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",v={},y={};y[a]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(M([])));g&&g!==n&&o.call(g,a)&&(y=g);var _=E.prototype=x.prototype=Object.create(y);P.prototype=_.constructor=E,E.constructor=P,E[u]=P.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===P||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(_),t},l.awrap=function(t){return{__await:t}},k(L.prototype),L.prototype[c]=function(){return this},l.AsyncIterator=L,l.async=function(t,e,r,n){var o=new L(b(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(_),_[u]="Generator",_[a]=function(){return this},_.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=M,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(U),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),U(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;U(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:M(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function b(t,e,r,n){var o=e&&e.prototype instanceof x?e:x,i=Object.create(o.prototype),a=new C(n||[]);return i._invoke=O(t,r,a),i}function w(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function x(){}function P(){}function E(){}function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){function e(r,n,i,a){var c=w(t[r],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"===typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(s).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function O(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return S()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=w(t,e,r);if("normal"===u.type){if(n=r.done?d:p,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=w(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function U(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function M(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},e1db:function(t,e,r){var n=r("f5ac");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("7537").default;o("58e98ece",n,!0,{sourceMap:!1,shadowMode:!1})},f5ac:function(t,e,r){var n=r("a8d8");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 字号 */\n/* color */\n/* 字号 */\n/* color */\n/* 主按钮 */\n/* 次按钮 */\n/* 不可点击按钮 */\n/* 线框按钮 */\n/* 常规按钮背景 */\n/* 特长按钮背景 */\n/* 主理人特长按钮背景 */\n/* 文字超长处理单行 */\n/* 文字超长处理多行 */\n/* 0.5px边框--横向上边框(通过伪元素控制显示) */\n/* 0.5px边框--横向下边框(通过伪元素控制显示) */\n/* 0.5px边框--纵向左边框(通过伪元素控制显示) */\n/* 0.5px边框--纵向右边框(通过伪元素控制显示) */\n/* 0.5px边框--四边框(通过伪元素控制显示) */\n/* 红点单个数字样式 */\n/* 红点多个数字样式 */\n/* 红点提醒样式--不带数字 */uni-page-body[data-v-c29afb9e]{background:#f5f6fa}body.?%PAGE?%[data-v-c29afb9e]{background:#f5f6fa}.press-protocol[data-v-c29afb9e]{position:relative;flex:1;overflow:hidden}.press-protocol *[data-v-c29afb9e]{-webkit-user-select:auto;user-select:auto}.press-protocol__layout[data-v-c29afb9e]{height:100%;overflow:auto}.press-protocol__item[data-v-c29afb9e]{margin:0 .32rem .4rem}.press-protocol__item__title[data-v-c29afb9e]{font-size:.32rem;color:#09134e;font-weight:700;margin-bottom:.24rem}.press-protocol__info[data-v-c29afb9e]{font-size:.28rem;color:#596297;margin-bottom:.24rem;line-height:.44rem}.press-protocol__text--light[data-v-c29afb9e]{color:#1181d7;display:inline}.press-protocol__text--underline[data-v-c29afb9e]{text-decoration:underline}',""]),t.exports=e},f8b3:function(t,e,r){"use strict";r("ba1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"PressProtocol",options:{},components:{},props:{list:{type:Array,default:function(){return[]}},customStyle:{type:String,default:""},customClass:{type:String,default:""}},emits:["click"],data:function(){return{}},computed:{},mounted:function(){},methods:{clickProtocol:function(t){t.link&&this.$emit("click",t)}}};e.default=n}}]);