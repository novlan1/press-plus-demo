(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-introduce"],{"1a93":function(n,t,e){var o=e("a8d8");t=o(!1),t.push([n.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.demo-wrap[data-v-5f06e34e]{display:flex;margin-top:10px}press-protocol[data-v-5f06e34e]{display:flex;flex-direction:column;flex:1}',""]),n.exports=t},"1e99":function(n,t,e){var o=e("1a93");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var r=e("7537").default;r("626ceeb6",o,!0,{sourceMap:!1,shadowMode:!1})},"3c1e":function(n,t,e){"use strict";e("ba1f");var o=e("de9e").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(e("41a1")),a={components:{PressProtocolDemo:r.default},data:function(){return{}},mounted:function(){},methods:{}};t.default=a},"41a1":function(n,t,e){"use strict";e.r(t);var o=e("6e878"),r=e("ca01");for(var a in r)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(a);e("9182");var c,u=e("6b9f"),i=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,"5f06e34e",null,!1,o["a"],c);t["default"]=i.exports},"6e878":function(n,t,e){"use strict";var o;e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return o}));var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"demo-wrap demo-wrap--gap"},[e("PressProtocol",{attrs:{list:n.list},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.onClickProtocol.apply(void 0,arguments)}}})],1)},a=[]},9182:function(n,t,e){"use strict";var o=e("1e99"),r=e.n(o);r.a},b641:function(n,t,e){"use strict";e.r(t);var o=e("cd74"),r=e("cfc2");for(var a in r)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(a);var c,u=e("6b9f"),i=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,"13ae32c0",null,!1,o["a"],c);t["default"]=i.exports},ca01:function(n,t,e){"use strict";e.r(t);var o=e("f6a1"),r=e.n(o);for(var a in o)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(a);t["default"]=r.a},cd74:function(n,t,e){"use strict";var o;e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return o}));var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("PressProtocolDemo")},a=[]},cfc2:function(n,t,e){"use strict";e.r(t);var o=e("3c1e"),r=e.n(o);for(var a in o)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(a);t["default"]=r.a},f6a1:function(n,t,e){"use strict";e("ba1f");var o=e("de9e").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(e("99ab")),a=e("43e8"),c=e("0f40"),u=(e("53cb"),{components:{PressProtocol:r.default},data:function(){return{list:(0,c.parseProtocol)(a.DEFAULT_PRESS_UI_INTRODUCE)}},mounted:function(){this.onFetchData()},methods:{onFetchData:function(){var n=this;(0,a.getPressUIIntroduce)().then((function(t){n.list=t}))},onClickProtocol:function(n){window.location.href=n.link}}});t.default=u}}]);