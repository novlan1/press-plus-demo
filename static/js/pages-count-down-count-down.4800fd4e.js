(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-count-down-count-down"],{4377:function(t,e,n){"use strict";n("ba1f");var o=n("de9e").default;Object.defineProperty(e,"__esModule",{value:!0}),e.addCountDown=p,e.deleteCountDown=g,e.getCountDownDetail=w,e.getCountDownList=v,e.modifyCountDown=_;var i=o(n("6d7c"));n("aa2f"),n("c402"),n("f9f6"),n("e291"),n("a707"),n("ea98"),n("21dd");var a=n("d257"),r=n("a32b");function s(){return"".concat(parseInt("".concat(1e10*Math.random()),10))}var c={PRESS_COUNT_DOWN_LIST:"PRESS_COUNT_DOWN_LIST",PRESS_UID:"PRESS_UID"},f="";function d(){return f=a.storageUtil.get(c.PRESS_UID)||"",f||(f=s(),a.storageUtil.set(c.PRESS_UID,f)),f}function l(){var t=a.storageUtil.get(c.PRESS_COUNT_DOWN_LIST)||"[]";try{t=JSON.parse(t)}catch(e){}return t}function u(t){a.storageUtil.set(c.PRESS_COUNT_DOWN_LIST,JSON.stringify(t))}function p(t){var e=t.name,n=t.time,o=l(),i=s();return o.push({name:e,time:n,id:i}),a.storageUtil.set(c.PRESS_COUNT_DOWN_LIST,JSON.stringify(o)),Promise.resolve()}d();var h=function(t){return new Date((0,r.timeStampFormat)(t,"yyyy-MM-dd")).getTime()};function b(t){var e=(h(t)-h(Date.now()))/864e5;return Math.floor(e)}function v(){var t=l(),e=t.map((function(t){var e=t.name,n=t.time,o=b(n);return(0,i.default)((0,i.default)({},t),{},{title:e,label:(0,r.timeStampFormat)(n,"yyyy.MM.dd"),value:"还有 ".concat(o," 天")})}));return e}function g(t){var e=l(),n=e.filter((function(e){return e.id!=t}));return u(n),Promise.resolve()}function w(t){var e=l(),n=e.find((function(e){return e.id==t}))||{};return Promise.resolve(n)}function _(t,e){var n=l(),o=n.map((function(n){return n.id==t?(0,i.default)((0,i.default)({},n),e):n}));return u(o),Promise.resolve()}},"45a75":function(t,e,n){var o=n("a8d8");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */[data-v-fd004bc8] .uni-fab__plus,[data-v-fd004bc8] .press-fab__plus{width:38px;height:38px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}[data-v-fd004bc8] .fab-circle-icon,[data-v-fd004bc8] .press-fab-circle-icon{font-size:20px}',""]),t.exports=e},"4e57":function(t,e,n){"use strict";n("ba1f");var o=n("de9e").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("dfbb")),a=o(n("528c")),r=n("d257"),s=n("4377"),c={components:{PressFab:i.default,PressEmpty:a.default},data:function(){var t=12;return t=65,{list:(0,s.getCountDownList)(),fabIconStyles:{iconFontSize:20},initX:12,initY:t}},activated:function(){this.list=(0,s.getCountDownList)()},onShow:function(){this.list=(0,s.getCountDownList)()},methods:{fabClick:function(){r.routerPush.call(this,"/pages/count-down/new","/pages/press/count-down/new")},clickCountDown:function(t){r.routerPush.call(this,"/pages/count-down/new?id=".concat(t.id),"/pages/press/count-down/new?id=".concat(t.id))}}};e.default=c},5210:function(t,e,n){var o=n("953d");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("7537").default;i("c7bbfb68",o,!0,{sourceMap:!1,shadowMode:!1})},"666e":function(t,e,n){var o=n("45a75");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("7537").default;i("ca4c8be2",o,!0,{sourceMap:!1,shadowMode:!1})},"67b3":function(t,e,n){"use strict";n.r(e);var o=n("f0ba"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},7396:function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"press-cursor-point"},[t.popMenu&&(t.leftBottom||t.rightBottom||t.leftTop||t.rightTop)&&t.content.length>0?n("div",{staticClass:"press-fab",class:{"press-fab--leftBottom":t.leftBottom,"press-fab--rightBottom":t.rightBottom,"press-fab--leftTop":t.leftTop,"press-fab--rightTop":t.rightTop},style:{right:t.btnSwitchPos.x+"px",bottom:t.btnSwitchPos.y+"px"}},[n("div",{staticClass:"press-fab__content",class:{"press-fab__content--left":"left"===t.horizontal,"press-fab__content--right":"right"===t.horizontal,"press-fab__content--flexDirection":"vertical"===t.direction,"press-fab__content--flexDirectionStart":t.flexDirectionStart,"press-fab__content--flexDirectionEnd":t.flexDirectionEnd,"press-fab__content--other-platform":!t.isAndroidNVue},style:{width:t.boxWidth,height:t.boxHeight,backgroundColor:t.styles.backgroundColor},attrs:{elevation:"5"}},[t.flexDirectionStart||t.horizontalLeft?n("div",{staticClass:"press-fab__item press-fab__item--first"}):t._e(),t._l(t.content,(function(e,o){return n("div",{key:o,staticClass:"press-fab__item",class:{"press-fab__item--active":t.isShow},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onItemClick(o,e)}}},[n("img",{staticClass:"press-fab__item-image",attrs:{src:e.active?e.selectedIconPath:e.iconPath,mode:"aspectFit"}}),n("span",{staticClass:"press-fab__item-text",style:{color:e.active?t.styles.selectedColor:t.styles.color}},[t._v(t._s(e.text))])])})),t.flexDirectionEnd||t.horizontalRight?n("div",{staticClass:"press-fab__item press-fab__item--first"}):t._e()],2)]):t._e(),n("div",{staticClass:"press-fab__circle press-fab__plus",class:{"press-fab__content--other-platform":!t.isAndroidNVue},style:{"background-color":t.styles.buttonColor,right:t.btnSwitchPos.x+"px",bottom:t.btnSwitchPos.y+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.onTouchStart.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.onTouchEnd.apply(void 0,arguments)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.onTouchMove.apply(void 0,arguments)}}},[n("press-icon-plus",{staticClass:"press-fab-circle-icon",class:{"press-fab__plus--active":t.isShow&&t.content.length>0},attrs:{name:"cross",color:t.styles.iconColor,size:t.styles.iconFontSize}})],1)])},a=[]},"854a":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.list.length?t._l(t.list,(function(e,o){return n("press-cell",{key:o,attrs:{center:!0,title:e.title,value:e.value,label:e.label},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickCountDown(e)}}})})):n("PressEmpty",{attrs:{description:"暂无数据"}}),n("PressFab",{attrs:{"bottom-threshold":2,"init-y":t.initY,"init-x":t.initX,pattern:t.fabIconStyles},on:{fabClick:function(e){arguments[0]=e=t.$handleEvent(e),t.fabClick.apply(void 0,arguments)}}})],2)},a=[]},"930f":function(t,e,n){"use strict";var o=n("5210"),i=n.n(o);i.a},"953d":function(t,e,n){var o=n("a8d8");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.press-cursor-point[data-v-3aff3d8d]{cursor:pointer}.press-fab[data-v-3aff3d8d]{position:fixed;display:flex;justify-content:center;align-items:center;z-index:10;border-radius:45px;box-shadow:0 1px 5px 2px rgba(0,0,0,.3)}.press-fab--active[data-v-3aff3d8d]{opacity:1}.press-fab--leftBottom[data-v-3aff3d8d]{left:15px;bottom:30px;left:calc(15px + var(--window-left));bottom:calc(30px + var(--window-bottom))}.press-fab--leftTop[data-v-3aff3d8d]{left:15px;top:30px;left:calc(15px + var(--window-left));top:calc(30px + var(--window-top))}.press-fab--rightBottom[data-v-3aff3d8d]{right:15px;bottom:30px;right:calc(15px + var(--window-right));bottom:calc(30px + var(--window-bottom))}.press-fab--rightTop[data-v-3aff3d8d]{right:15px;top:30px;right:calc(15px + var(--window-right));top:calc(30px + var(--window-top))}.press-fab__circle[data-v-3aff3d8d]{position:fixed;display:flex;justify-content:center;align-items:center;width:55px;height:55px;background-color:#3c3e49;border-radius:45px;z-index:11}.press-fab__circle--leftBottom[data-v-3aff3d8d]{left:15px;bottom:30px;left:calc(15px + var(--window-left));bottom:calc(30px + var(--window-bottom))}.press-fab__circle--leftTop[data-v-3aff3d8d]{left:15px;top:30px;left:calc(15px + var(--window-left));top:calc(30px + var(--window-top))}.press-fab__circle--rightBottom[data-v-3aff3d8d]{right:15px;bottom:30px;right:calc(15px + var(--window-right));bottom:calc(30px + var(--window-bottom))}.press-fab__circle--rightTop[data-v-3aff3d8d]{right:15px;top:30px;right:calc(15px + var(--window-right));top:calc(30px + var(--window-top))}.press-fab__circle--left[data-v-3aff3d8d]{left:0}.press-fab__circle--right[data-v-3aff3d8d]{right:0}.press-fab__circle--top[data-v-3aff3d8d]{top:0}.press-fab__circle--bottom[data-v-3aff3d8d]{bottom:0}.press-fab__plus[data-v-3aff3d8d]{font-weight:700}.press-fab__plus--active[data-v-3aff3d8d]{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.press-fab .press-fab-circle-icon[data-v-3aff3d8d]{-webkit-transform:rotate(0deg);transform:rotate(0deg);transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;font-weight:200}.press-fab__content[data-v-3aff3d8d]{box-sizing:border-box;display:flex;flex-direction:row;border-radius:55px;overflow:hidden;transition-property:width,height;transition-duration:.2s;width:55px;border-color:#ddd;border-width:%?1?%;border-style:solid}.press-fab__content--other-platform[data-v-3aff3d8d]{border-width:0;box-shadow:0 1px 5px 2px rgba(0,0,0,.3)}.press-fab__content--left[data-v-3aff3d8d]{justify-content:flex-start}.press-fab__content--right[data-v-3aff3d8d]{justify-content:flex-end}.press-fab__content--flexDirection[data-v-3aff3d8d]{flex-direction:column;justify-content:flex-end}.press-fab__content--flexDirectionStart[data-v-3aff3d8d]{flex-direction:column;justify-content:flex-start}.press-fab__content--flexDirectionEnd[data-v-3aff3d8d]{flex-direction:column;justify-content:flex-end}.press-fab__item[data-v-3aff3d8d]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:55px;height:55px;opacity:0;transition:opacity .2s}.press-fab__item--active[data-v-3aff3d8d]{opacity:1}.press-fab__item-image[data-v-3aff3d8d]{width:20px;height:20px;margin-bottom:4px}.press-fab__item-text[data-v-3aff3d8d]{color:#fff;font-size:12px;line-height:12px;margin-top:2px}.press-fab__item--first[data-v-3aff3d8d]{width:55px}',""]),t.exports=e},a808:function(t,e,n){"use strict";n.r(e);var o=n("854a"),i=n("db11");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("c53e");var r,s=n("6b9f"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"fd004bc8",null,!1,o["a"],r);e["default"]=c.exports},c53e:function(t,e,n){"use strict";var o=n("666e"),i=n.n(o);i.a},db11:function(t,e,n){"use strict";n.r(e);var o=n("4e57"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},dfbb:function(t,e,n){"use strict";n.r(e);var o=n("7396"),i=n("67b3");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("930f");var r,s=n("6b9f"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"3aff3d8d",null,!1,o["a"],r);e["default"]=c.exports},f0ba:function(t,e,n){"use strict";n("ba1f");var o=n("de9e").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("2c6b"));n("d7e5");var a=n("8777"),r=o(n("bc07")),s={hasMoved:!1,x:0,y:0,startX:0,startY:0,endX:0,endY:0},c={name:"PressFab",components:{PressIconPlus:r.default},props:{pattern:{type:Object,default:function(){return{}}},horizontal:{type:String,default:"right"},vertical:{type:String,default:"bottom"},direction:{type:String,default:"horizontal"},content:{type:Array,default:function(){return[]}},show:{type:Boolean,default:!1},popMenu:{type:Boolean,default:!0},top:{type:Number,default:0},bottomThreshold:{type:Number,default:20},initX:{type:Number,default:12},initY:{type:Number,default:62}},emits:["fabClick","trigger"],data:function(){var t="other";return{fabShow:!1,isShow:!1,isAndroidNVue:"android"===t,styles:{color:"#3c3e49",selectedColor:"#007AFF",backgroundColor:"#fff",buttonColor:"#007AFF",iconColor:"#fff",iconFontSize:32},btnSwitchPos:{x:0,y:0},fabSize:{width:55,height:55}}},computed:{contentWidth:function(){return"".concat(55*(this.content.length+1)+15,"px")},contentWidthMin:function(){return"55px"},boxWidth:function(){return this.getPosition(3,"horizontal")},boxHeight:function(){return this.getPosition(3,"vertical")},leftBottom:function(){return this.getPosition(0,"left","bottom")},rightBottom:function(){return this.getPosition(0,"right","bottom")},leftTop:function(){return this.getPosition(0,"left","top")},rightTop:function(){return this.getPosition(0,"right","top")},flexDirectionStart:function(){return this.getPosition(1,"vertical","top")},flexDirectionEnd:function(){return this.getPosition(1,"vertical","bottom")},horizontalLeft:function(){return this.getPosition(2,"horizontal","left")},horizontalRight:function(){return this.getPosition(2,"horizontal","right")}},watch:{pattern:{handler:function(t){this.styles=Object.assign({},this.styles,t)},deep:!0}},created:function(){this.isShow=this.show,0===this.top&&(this.fabShow=!0),this.styles=Object.assign({},this.styles,this.pattern),this.btnSwitchPos={x:this.initX,y:this.initY},s.x=this.btnSwitchPos.x,s.y=this.btnSwitchPos.y},mounted:function(){var t=this;(0,a.getRect)(this,".press-fab__plus").then((function(e){t.fabSize.width=e.width,t.fabSize.height=e.height}))},methods:{getSwitchButtonSafeAreaXY:function(t,e){var n=this.fabSize,o=this.top,i=this.bottomThreshold,r=(0,a.getWindowWidth)(),s=r.windowWidth,c=r.windowHeight,f=r.windowTop,d=r.windowBottom,l=s,u=c-o;return t+n.width>l&&(t=l-n.width),e+n.height-f>u&&(e=u-n.height+f),t<0&&(t=0),e<i+d&&(e=i+d),[t,e]},onClick:function(){this.$emit("fabClick"),this.popMenu&&(this.isShow=!this.isShow)},open:function(){this.isShow=!0},close:function(){this.isShow=!1},onItemClick:function(t,e){this.isShow&&this.$emit("trigger",{index:t,item:e})},getPosition:function(t,e,n){return 0===t?this.horizontal===e&&this.vertical===n:1===t?this.direction===e&&this.vertical===n:2===t?this.direction===e&&this.horizontal===n:this.isShow&&this.direction===e?this.contentWidth:this.contentWidthMin},onTouchStart:function(t){s.startX=t.touches[0].pageX,s.startY=t.touches[0].pageY},onTouchEnd:function(){s.hasMoved&&(s.startX=0,s.startY=0,s.hasMoved=!1,this.setSwitchPosition(s.endX,s.endY))},onTouchMove:function(t){if(!(t.touches.length<=0)){var e=t.touches[0].pageX-s.startX,n=t.touches[0].pageY-s.startY,o=Math.floor(s.x-e),a=Math.floor(s.y-n),r=this.getSwitchButtonSafeAreaXY(o,a),c=(0,i.default)(r,2);o=c[0],a=c[1],this.btnSwitchPos.x=o,this.btnSwitchPos.y=a,s.endX=o,s.endY=a,s.hasMoved=!0,t.preventDefault(),t.stopPropagation()}},setSwitchPosition:function(t,e){var n=this.getSwitchButtonSafeAreaXY(t,e),o=(0,i.default)(n,2);t=o[0],e=o[1],s.x=t,s.y=e,this.btnSwitchPos.x=t,this.btnSwitchPos.y=e}}};e.default=c}}]);