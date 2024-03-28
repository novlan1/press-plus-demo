(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-press-q-r-code-popup-q-r-code-popup"],{"0146":function(e,t,a){var n=a("fdb5");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("7537").default;r("d47a7646",n,!0,{sourceMap:!1,shadowMode:!1})},"015e":function(e,t,a){"use strict";a.r(t);var n=a("2f8f"),r=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=r.a},"13be":function(e,t,a){"use strict";a("ba1f"),Object.defineProperty(t,"__esModule",{value:!0}),t.TIP_CLASS_MAP=void 0,t.getActClass=o;var n=a("c03e"),r={popup:"tip-match-bottom-popup-wrap",mask:"tip-match-mask","mask--fade-in":"tip-match-fade-in","mask--fade-out":"tip-match-fade-out",content:"tip-match-popup-content","content--bottom-enter":"tip-match-bottom-enter","content--bottom-leave":"tip-match-bottom-leave","title-wrap":"tip-match-popup-title-wrap","title-line":"tip-match-popup-title-line",back:"tip-match-popup-back",title:"tip-match-popup-title",close:"tip-match-popup-close","qr-code":"tip-match-wx-code",save:"tip-match-code-save",tip:"tip-match-code-tip"};function o(e,t){return(0,n.getActClass)(e,r,t)}t.TIP_CLASS_MAP=r},"1ba0":function(e,t,a){"use strict";a.r(t);var n=a("ea19"),r=a("015e");for(var o in r)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(o);a("73c8");var s,i=a("6b9f"),c=Object(i["a"])(r["default"],n["b"],n["c"],!1,null,"4a37722e",null,!1,n["a"],s);t["default"]=c.exports},"2ba9":function(e,t,a){var n=a("4174");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("7537").default;r("08efe48b",n,!0,{sourceMap:!1,shadowMode:!1})},"2f24":function(e,t,a){"use strict";a("ba1f");var n=a("de9e").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("d7e5"),a("a8dc"),a("2ff4");var r=n(a("88af")),o={name:"PressQRCode",components:{PressQRCodeWeb:r.default},props:{value:{type:String,default:"",required:!0},size:{type:Number,default:287,required:!1},margin:{type:Number,default:0}},emits:["result"],data:function(){return{codeImg:"",wxCanvasId:"pressWxQRcode",canvasId:"pressQRcode"}},computed:{style:function(){return"width: ".concat(this.size,"px; height: ").concat(this.size,"px;")}},watch:{value:{handler:function(){var e=this;this.codeImg="",setTimeout((function(){e.genQRCode()}))}}},mounted:function(){this.genQRCode()},methods:{genQRCode:function(){},codeMpWx:function(){var e=this,t=this.createSelectorQuery();t.select("#".concat(this.wxCanvasId)).fields({node:!0,size:!0}).exec((function(t){var a=t[0].node;drawWxQRcode({canvas:a,canvasId:e.wxCanvasId,width:e.size,background:"#ffffff",foreground:"#000000",text:e.value}),wx.canvasToTempFilePath({canvasId:e.wxCanvasId,canvas:a,x:0,y:0,width:e.size,height:e.size,destWidth:e.size,destHeight:e.size,success:function(t){console.log("[二维码临时路径]",t.tempFilePath),e.codeImg=t.tempFilePath,e.$emit("result",e.codeImg)},fail:function(e){console.error(e)}})}))},codeMpQQ:function(){var e=this,t=new UQRCode;t.data=this.value,t.size=this.size,t.margin=Math.round(this.size/20),t.make();var a=uni.createCanvasContext(this.canvasId,this);t.canvasContext=a,t.drawCanvas(),setTimeout((function(){uni.canvasToTempFilePath({canvasId:e.canvasId,fileType:"png",width:e.size,height:e.size,success:function(t){console.log("[codeMpQQ]",t),e.codeImg=t.tempFilePath,e.$emit("result",e.codeImg)},fail:function(e){console.log(e)}},e)}),300)}}};t.default=o},"2f8f":function(e,t,a){"use strict";a("ba1f");var n=a("de9e").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("d7e5");var r=a("13be"),o=n(a("8bd4")),s={name:"PressQRCodePopup",components:{PressQRCode:o.default},props:{qrCodeUrl:{type:String,default:"",require:!0},type:{type:Number,default:2,require:!1},title:{type:String,default:""},description:{type:String,default:"截图或长按保存图片"},tip:{type:String,default:""},useTipClass:{type:Boolean,default:!1}},emits:["onCancel"],data:function(){return{isShowPopup:!0}},computed:{typeName:function(){return 1===this.type?"QQ":"微信"},innerTitle:function(){var e=this.typeName,t=this.title;return t||"请使用".concat(e,"扫码打开活动")},innerTip:function(){var e=this.typeName,t=this.tip;return t||"使用".concat(e,"扫码打开访问页面")}},methods:{clickCancel:function(){var e=this;this.isShowPopup=!1,this.timer=setTimeout((function(){e.$emit("onCancel")}),400)},getActClass:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.getActClass)(this.useTipClass,t)}}};t.default=s},4174:function(e,t,a){var n=a("a8d8");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.press__popup[data-v-4a37722e]{position:absolute;left:0;right:0;top:0;bottom:0;display:flex;align-items:flex-end;justify-content:center;z-index:99}.press__popup .press__mask[data-v-4a37722e]{position:absolute;left:0;right:0;top:0;bottom:0;background-color:rgba(0,0,0,.5)}.press__popup .press__mask--fade-in[data-v-4a37722e]{-webkit-animation:fade-in-data-v-4a37722e .3s ease-out both;animation:fade-in-data-v-4a37722e .3s ease-out both}.press__popup .press__mask--fade-out[data-v-4a37722e]{-webkit-animation:fade-out-data-v-4a37722e .3s ease-in both;animation:fade-out-data-v-4a37722e .3s ease-in both}.press__popup .press__content[data-v-4a37722e]{position:relative;width:100%;border-top-left-radius:.3rem;border-top-right-radius:.3rem;background-color:#fff;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);overflow:hidden}.press__popup .press__content--bottom-leave[data-v-4a37722e]{-webkit-animation:down-leave-data-v-4a37722e .3s ease-in both;animation:down-leave-data-v-4a37722e .3s ease-in both}.press__popup .press__content--bottom-enter[data-v-4a37722e]{-webkit-animation:up-enter-data-v-4a37722e .3s ease-out both;animation:up-enter-data-v-4a37722e .3s ease-out both}.press__popup .press__title-wrap[data-v-4a37722e]{position:relative;display:flex;align-items:center;justify-content:center;height:1.2rem;padding-top:.24rem}.press__popup .press__title-wrap[data-v-4a37722e]::after{position:absolute;left:0;right:0;bottom:0;content:"";height:1px;background-color:#dfe2ea;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.press__popup .press__title-line[data-v-4a37722e]{position:absolute;left:0;right:0;top:.16rem;margin:auto;width:.64rem;height:.08rem;border-radius:.08rem;background:#e9ecf3;transition:all .3s}.press__popup .press__title-line[data-v-4a37722e]::before{position:absolute;left:0;right:0;top:-.14rem;content:"";height:.16rem}.press__popup .press__title-line[data-v-4a37722e]::after{position:absolute;left:0;right:0;top:.06rem;content:"";height:.16rem}.press__popup .press__title[data-v-4a37722e]{font-size:.32rem;color:#0f2128;line-height:.48rem}.press__popup .press__close[data-v-4a37722e]{position:absolute;right:0;top:.24rem;width:1.04rem;height:.96rem;background:url(https://image-1251917893.file.myqcloud.com/Esports/user/img/close-popup.png) no-repeat 50%;background-size:.4rem .4rem}.press__popup .press__back[data-v-4a37722e]{position:absolute;left:0;top:.24rem;width:1.04rem;height:.96rem;background:url(https://image-1251917893.file.myqcloud.com/Esports/user/img/back-arrow.png) no-repeat 50%;background-size:.4rem .4rem}@-webkit-keyframes down-leave-data-v-4a37722e{from{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes down-leave-data-v-4a37722e{from{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@-webkit-keyframes up-enter-data-v-4a37722e{from{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes up-enter-data-v-4a37722e{from{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes fade-in-data-v-4a37722e{from{opacity:0}to{opacity:1}}@keyframes fade-in-data-v-4a37722e{from{opacity:0}to{opacity:1}}@-webkit-keyframes fade-out-data-v-4a37722e{from{opacity:1}to{opacity:0}}@keyframes fade-out-data-v-4a37722e{from{opacity:1}to{opacity:0}}.press__qr-code[data-v-4a37722e]{width:2.4rem;height:2.4rem;margin:.4rem auto .24rem;border:.01rem solid #ececec;display:flex;align-items:center;justify-content:center}.press__save[data-v-4a37722e]{font-size:.28rem;color:#0f2128;margin:0 auto .08rem;text-align:center;line-height:.34rem}.press__tip[data-v-4a37722e]{font-size:.28rem;color:#838c8f;margin:0 auto 1.04rem;text-align:center;line-height:.4rem}',""]),e.exports=t},"73c8":function(e,t,a){"use strict";var n=a("2ba9"),r=a.n(n);r.a},"775d":function(e,t,a){"use strict";a.r(t);var n=a("ae59"),r=a("8e26");for(var o in r)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(o);var s,i=a("6b9f"),c=Object(i["a"])(r["default"],n["b"],n["c"],!1,null,"515c0a92",null,!1,n["a"],s);t["default"]=c.exports},"7c2e":function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"press-q-r-code"},[e.value?a("PressQRCodeWeb",{attrs:{value:e.value}}):e._e(),e.codeImg?e._e():void 0,e.codeImg?a("img",{style:e.style,attrs:{src:e.codeImg,"show-menu-by-longpress":!0}}):e._e()],2)},o=[]},"88af":function(e,t,a){"use strict";a("ba1f");var n=a("de9e").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=n(a("e233"));r=o.default;var s=r;t.default=s},"8bd4":function(e,t,a){"use strict";a.r(t);var n=a("7c2e"),r=a("e785");for(var o in r)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(o);a("bfed");var s,i=a("6b9f"),c=Object(i["a"])(r["default"],n["b"],n["c"],!1,null,"7705cbb6",null,!1,n["a"],s);t["default"]=c.exports},"8e26":function(e,t,a){"use strict";a.r(t);var n=a("d966"),r=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=r.a},ae59:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"demo-wrap"},[a("demo-block",{attrs:{title:e.t("basicUsage")}},[a("press-cell",{attrs:{title:"展示","is-link":!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showDialog.apply(void 0,arguments)}}})],1),e.show?a("PressQRCodePopup",{attrs:{"qr-code-url":e.currentUrl,type:e.type},on:{onCancel:function(t){arguments[0]=t=e.$handleEvent(t),e.show=!1}}}):e._e()],1)},o=[]},bfed:function(e,t,a){"use strict";var n=a("0146"),r=a.n(n);r.a},c03e:function(e,t,a){"use strict";a("ba1f");var n=a("de9e").default;Object.defineProperty(t,"__esModule",{value:!0}),t.getActClass=c;var r=n(a("3eee")),o=n(a("ef56"));a("fc56"),a("e291"),a("f9f6"),a("a707"),a("3b71"),a("3639"),a("bac3"),a("2ff4"),a("1120"),a("477e"),a("6bba"),a("a8dc");var s="press__";function i(e){var t=e.reduce((function(e,t){return Array.isArray(t)?e.push.apply(e,(0,o.default)(t)):e.push(t),e}),[]),a=t.reduce((function(e,t){return"string"===typeof t?e.push(t):"object"===(0,r.default)(t)&&Object.keys(t).map((function(a){t[a]&&e.push(a)})),e}),[]);return a}function c(e,t,a){var n=i(a),r=n.map((function(e){return e&&t[e]||""})),c=n.map((function(e){var t=new RegExp("^".concat(s));return e?t.test(e)?e:"".concat(s).concat(e):""}));return e?[].concat((0,o.default)(c),(0,o.default)(r)).join(" "):c.join(" ")}},d966:function(e,t,a){"use strict";a("ba1f");var n=a("de9e").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("1ba0")),o={components:{PressQRCodePopup:r.default},data:function(){var e="https://baidu.com",t=!1;return e=document.location.href,t=!0,{currentUrl:e,show:t,type:1}},methods:{showDialog:function(){this.show=!0}}};t.default=o},e233:function(e,t,a){"use strict";a.r(t),a.d(t,"LEVELS",(function(){return s})),a.d(t,"MASK_PATTERNS",(function(){return i})),a.d(t,"MODES",(function(){return c})),a.d(t,"TYPES",(function(){return u}));function n(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}Object.create;Object.create;var r=a("32f0"),o=a.n(r);const s=["low","medium","quartile","high","L","M","Q","H"],i=[0,1,2,3,4,5,6,7],c=["alphanumeric","numeric","kanji","byte"],u=["image/png","image/jpeg","image/webp"],d=40;t["default"]={props:{version:{type:Number,validator:e=>e===Number.parseInt(String(e),10)&&e>=1&&e<=d},errorCorrectionLevel:{type:String,validator:e=>s.includes(e)},maskPattern:{type:Number,validator:e=>i.includes(e)},toSJISFunc:Function,margin:Number,scale:Number,width:Number,color:{type:Object,validator:e=>["dark","light"].every(t=>["string","undefined"].includes(typeof e[t]))},type:{type:String,validator:e=>u.includes(e)},quality:{type:Number,validator:e=>e===Number.parseFloat(String(e))&&e>=0&&e<=1},value:{type:[String,Array],required:!0,validator(e){return"string"===typeof e||e.every(({data:e,mode:t})=>"string"===typeof e&&(null==t||c.includes(t)))}}},data(){return{dataUrl:""}},watch:{$props:{deep:!0,immediate:!0,handler:"toDataURL"}},methods:{toDataURL(){const e=this.$props,{quality:t}=e,a=n(e,["quality"]);return o.a.toDataURL(this.value,Object.assign(a,null==t||{renderOptions:{quality:t}})).then(e=>this.dataUrl=e).catch(e=>this.$emit("error",e))}},render(){return this.$createElement("img",{domProps:Object.assign(Object.assign({},this.$attrs),{src:this.dataUrl})})}}},e785:function(e,t,a){"use strict";a.r(t);var n=a("2f24"),r=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);t["default"]=r.a},ea19:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return n}));var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:[e.getActClass("popup")]},[a("div",{class:[e.getActClass("mask"),e.isShowPopup?e.getActClass("mask--fade-in"):e.getActClass("mask--fade-out")],on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.clickCancel.apply(void 0,arguments)}}}),a("div",{class:[e.getActClass("content"),e.isShowPopup?e.getActClass("content--bottom-enter"):e.getActClass("content--bottom-leave")]},[a("div",{class:[e.getActClass("title-wrap")]},[a("div",{class:[e.getActClass("title-line")],on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.clickCancel.apply(void 0,arguments)}}}),a("div",{class:[e.getActClass("back")],on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.clickCancel.apply(void 0,arguments)}}}),a("p",{class:[e.getActClass("title")]},[e._v(e._s(e.innerTitle))]),e._e()]),a("PressQRCode",{class:[e.getActClass("qr-code")],attrs:{value:e.qrCodeUrl,size:120}}),a("p",{class:[e.getActClass("save")]},[e._v(e._s(e.description))]),a("p",{class:[e.getActClass("tip")]},[e._v(e._s(e.innerTip))])],1)])},o=[]},fdb5:function(e,t,a){var n=a("a8d8");t=n(!1),t.push([e.i,".press-q-r-code[data-v-7705cbb6]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;margin:0 auto}",""]),e.exports=t}}]);