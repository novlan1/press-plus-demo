(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-act-list-act-benefit-item-act-benefit-item"],{"0cea":function(e,t,i){"use strict";i("ba1f"),Object.defineProperty(t,"__esModule",{value:!0}),t.STYLE_LIST=void 0;var a=["pvp-vertical"];t.STYLE_LIST=a},"0f38":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:[e.getActClass("benefit"),{"press-act--hidden-tip":e.hideTipStyle||e.globalHideTipStyle},"press-act","press-act-benefit-item"]},[e.mercInfo?i("div",{class:[e.getActClass("top")],on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.onClickMerc.apply(void 0,arguments)}}},[e.mercInfo.icon?i("img",{class:[e.getActClass("shop-icon")],attrs:{src:e.mercInfo.icon,"lazy-load":!0}}):e._e(),i("div",{class:[e.getActClass("shop-name")]},[e._v(e._s(e.mercInfo.name))]),e.showDistance?i("div",{class:[e.getActClass("shop-desc")]},[e._v(e._s(e.actshowcolumn.custom_info||""))]):e._e()]):e._e(),e._l(e.actshowcolumn.actshowlist,(function(t,a){var n;return i("div",{key:t.merc_task_info.task_info.taskid,class:[e.getActClass("main")],on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.onClickGiftDetail({actshow:t,actshowIndex:a,index:e.index})}}},[i("div",{class:[e.getActClass("goods-img")]},[i("img",{attrs:{src:t.merc_task_info.task_info.condition[0].gift.picurl,"lazy-load":!0}})]),i("div",{class:[e.getActClass("info")]},[i("div",{class:[e.getActClass("goods-name")]},[e._v(e._s(t.merc_task_info.task_info.condition[0].gift.name))]),i("div",{class:[e.getActClass("goods-desc")]},[e._v(e._s(t.merc_task_info.task_info.condition[0].gift.benefittag))]),t.merc_task_info.task_info.condition[1]&&t.merc_task_info.task_info.condition[1].gift.name?i("div",{class:[e.getActClass("tip-line")]},[i("div",{class:[e.getActClass("tip-wrap")]},[i("div",{class:[e.getActClass("tip")]},[e._v(e._s(t.merc_task_info.task_info.condition[1].gift.cyc_introduct||"用券后返")),i("em",[e._v(e._s(t.merc_task_info.task_info.condition[1].gift.name))])]),t.merc_task_info.task_info.condition[1].gift.picurl?i("img",{attrs:{src:t.merc_task_info.task_info.condition[1].gift.picurl,"lazy-load":!0}}):e._e()])]):e._e()]),i("div",{class:[e.getActClass("buttons")]},[t.merc_task_info.task_info.condition[0].desc?i("div",{class:[e.getActClass("process")]},[e._v(e._s(t.merc_task_info.task_info.condition[0].desc))]):e._e(),i("div",{class:[e.getActClass("",(n={},n[e.getActClass("benefit-btn")]=1===t.merc_task_info.acquire_status,n[e.getActClass("benefit-btn--use")]=3===t.merc_task_info.acquire_status,n[e.getActClass("benefit-btn--out")]=2===t.merc_task_info.acquire_status,n))],on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.onClickGetTaskReward({actshow:t,actshowIndex:a,index:e.index})}}},[3===t.merc_task_info.acquire_status?[e._v("去使用")]:2===t.merc_task_info.acquire_status?[e._v("已领完")]:[e._v("领取")]],2)])])}))],2)},s=[]},"0f9f":function(e,t,i){"use strict";i.r(t);var a=i("da05"),n=i("dee6");for(var s in n)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(s);var r,c=i("6b9f"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"0fc3e694",null,!1,a["a"],r);t["default"]=o.exports},"115e":function(e,t,i){"use strict";i("ba1f"),Object.defineProperty(t,"__esModule",{value:!0}),t.MOCK_ACT_BENEFIT_ITEM=void 0;var a="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2024/1/own_mike_b4dd7d92644d642238.png",n={treport:[],custom_info:"自定义信息",brandinfo:{brandName:"品牌名称",brandicon:a},actshowlist:[{treport:[],merc_task_info:{task_info:{taskid:1693469987,condition:[{gift:{name:"奖品名称",picurl:a,benefittag:"满20减10"}},{gift:{name:"自选福利宝箱",picurl:a}}]},acquire_status:1}}]};t.MOCK_ACT_BENEFIT_ITEM=n},1352:function(e,t,i){"use strict";var a=i("89c6"),n=i("97c8"),s=i("1d31").f,r=i("385f"),c=i("a269"),o=i("eb20"),p=i("fd6a"),d=i("c568"),f=i("57bb"),l=n("".endsWith),u=n("".slice),m=Math.min,v=d("endsWith"),h=!f&&!v&&!!function(){var e=s(String.prototype,"endsWith");return e&&!e.writable}();a({target:"String",proto:!0,forced:!h&&!v},{endsWith:function(e){var t=c(p(this));o(e);var i=arguments.length>1?arguments[1]:void 0,a=t.length,n=void 0===i?a:m(r(i),a),s=c(e);return l?l(t,s,n):u(t,n-s.length,n)===s}})},1615:function(e,t,i){"use strict";i("ba1f"),Object.defineProperty(t,"__esModule",{value:!0}),t.camelize=n,t.hyphenate=r,t.padZero=s,i("2ff4"),i("7e1b");var a=/-(\w)/g;function n(e){return e.replace(a,(function(e,t){return t.toUpperCase()}))}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,i="".concat(e);while(i.length<t)i="0".concat(i);return i}function r(e){var t=/\B([A-Z])/g;return e.replace(t,"-$1").toLowerCase()}},"1fef":function(e,t,i){var a=i("d227");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("7537").default;n("5847b6e2",a,!0,{sourceMap:!1,shadowMode:!1})},"30a3":function(e,t,i){"use strict";var a=i("e2d7"),n=i.n(a);n.a},"344c":function(e,t,i){"use strict";i("ba1f");var a=i("de9e").default;Object.defineProperty(t,"__esModule",{value:!0}),t.getActCustomStyleMixin=u,i("f9f6"),i("a707"),i("fc56"),i("e291"),i("a8dc"),i("1352");var n=a(i("ef56")),s=i("101f"),r=i("1615"),c=i("f0f2"),o=a(i("a493")),p=a(i("8295")),d=a(i("9d1c")),f="default";function l(e){var t=[{label:"默认",value:f}];return t.push.apply(t,(0,n.default)(e.map((function(e){return{label:e,value:e}})))),t}function u(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"pvp";return{components:{PressCell:o.default,PressPicker:p.default,PressPopupCell:d.default},data:function(){return{customStyle:i,CUSTOM_STYLE_DEFAULT:f,styleList:l(t),FUNCTIONAL_ID_MAP:c.FUNCTIONAL_ID_MAP,hideTipStyle:!1,useTipClass:!1}},computed:{styleMap:function(){var e=this.styleList;return e.reduce((function(e,t){return e[t.value]=t,e}),{})},curGameClass:function(){var t=this.customStyle,i=e;Array.isArray(i)||(i=[i]);var a=i.map((function(e){return"".concat((0,r.hyphenate)(e),"--type-").concat(t)})).join(" ");return a}},watch:{customStyle:{handler:function(e){e.endsWith("vertical")?(0,s.sendMessageToTop)(s.IFRAME_MESSAGE_TYPE_MAP.CHANGE_DEMO_PAGE_DIRECTION,s.DEMO_PAGE_DIRECTION.VERT):(this.showHeader&&this.onToggleShowHeader(),(0,s.sendMessageToTop)(s.IFRAME_MESSAGE_TYPE_MAP.CHANGE_DEMO_PAGE_DIRECTION,s.DEMO_PAGE_DIRECTION.HOR))},immediate:!0}},methods:{onCustom:function(){var e=this,t=this.customStyle,i=!1;i=document.documentElement.clientHeight<420,(0,c.showPicker)({context:this,title:"样式类型",closeIcon:!0,horizontal:i,list:this.styleList,current:{value:t}}).then((function(t){var i=t.item;e.customStyle=i.value,e.show=!0,e.onGTip("设置成功")})).catch((function(){}))},onShowDialog:function(){this.show=!this.show}}}}},3993:function(e,t,i){"use strict";i.r(t);var a=i("f978"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a},5101:function(e,t,i){"use strict";i("ba1f");var a=i("de9e").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("5b9e")),s=i("0c47"),r={i18n:{"zh-CN":{show:"显示",hideHead:"隐藏",showHead:"显示"},"en-US":{show:"Show",hideHead:"Hide",showHead:"Show"}},components:{PressSwitch:n.default},mixins:[(0,s.getHideHeaderMixin)()],props:{customStyleStr:{type:String,default:""},hideTipStyle:{type:Boolean,default:!1},useTipClass:{type:Boolean,default:!1},showBasicUsage:{type:Boolean,default:!0},show:{type:Boolean,default:!1}},data:function(){return{}},methods:{onCustom:function(){this.$emit("onCustom")},onShowDialog:function(){this.$emit("update:show",!0)}}};t.default=r},6030:function(e,t,i){"use strict";var a=i("1fef"),n=i.n(a);n.a},"6dbf":function(e,t,i){"use strict";i("ba1f"),Object.defineProperty(t,"__esModule",{value:!0}),t.TIP_CLASS_MAP=void 0,t.getActClass=s;var a=i("c03e"),n={benefit:"tip-act-welfare-item",top:"tip-act-welfare-top","shop-icon":"tip-act-welfare-shop-icon","shop-name":"tip-act-welfare-shop","shop-desc":"tip-act-welfare-range",main:"tip-act-welfare-main","goods-img":"tip-act-welfare-img",info:"tip-act-welfare-info","goods-name":"tip-act-welfare-detail","goods-desc":"tip-act-welfare-name","tip-line":"tip-act-welfare-tip-con","tip-wrap":"tip-act-welfare-tip-wrap",tip:"tip-act-welfare-tip",buttons:"tip-act-welfare-btn-wrap",process:"tip-act-welfare-process","benefit-btn":"tip-act-welfare-btn","benefit-btn--use":"tip-act-use-btn","benefit-btn--out":"tip-act-out-btn"};function s(e,t){return(0,a.getActClass)(e,n,t)}t.TIP_CLASS_MAP=n},7285:function(e,t,i){"use strict";i.r(t);var a=i("0f38"),n=i("3993");for(var s in n)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("6030");var r,c=i("6b9f"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"fcf57356",null,!1,a["a"],r);t["default"]=o.exports},8124:function(e,t,i){"use strict";i.r(t);var a=i("9f27"),n=i("bb78");for(var s in n)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("30a3");var r,c=i("6b9f"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"420b0094",null,!1,a["a"],r);t["default"]=o.exports},9873:function(e,t,i){var a=i("a8d8");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.component-wrap[data-v-420b0094]{margin:20px 0 50px}',""]),e.exports=t},"9f27":function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"demo-wrap",class:e.curGameClass},[i("div",{staticClass:"component-wrap"},[i("PressActBenefitItem",{attrs:{"hide-tip-style":e.hideTipStyle,"use-tip-class":e.useTipClass,actshowcolumn:e.MOCK_ACT_BENEFIT_ITEM},on:{"update:hideTipStyle":function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.hideTipStyle=t}.apply(void 0,arguments)},"update:useTipClass":function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.useTipClass=t}.apply(void 0,arguments)},clickGiftDetail:function(t){arguments[0]=t=e.$handleEvent(t),e.clickGiftDetail.apply(void 0,arguments)},clickGetTaskReward:function(t){arguments[0]=t=e.$handleEvent(t),e.clickGetTaskReward.apply(void 0,arguments)},clickMerc:function(t){arguments[0]=t=e.$handleEvent(t),e.clickMerc.apply(void 0,arguments)}}})],1),i("ActDemo",{attrs:{"custom-style-str":e.styleMap[e.customStyle]&&e.styleMap[e.customStyle].label,"hide-tip-style":e.hideTipStyle,"use-tip-class":e.useTipClass,"show-basic-usage":!1},on:{"update:hideTipStyle":function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.hideTipStyle=t}.apply(void 0,arguments)},"update:useTipClass":function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.useTipClass=t}.apply(void 0,arguments)},onCustom:function(t){arguments[0]=t=e.$handleEvent(t),e.onCustom.apply(void 0,arguments)}}}),i("PressPopupCell",{ref:e.FUNCTIONAL_ID_MAP.POPUP_CELL,attrs:{id:e.FUNCTIONAL_ID_MAP.POPUP_CELL,mode:"functional"}}),i("PressPicker",{ref:e.FUNCTIONAL_ID_MAP.PICKER,attrs:{id:e.FUNCTIONAL_ID_MAP.PICKER,mode:"functional"}})],1)},s=[]},bb78:function(e,t,i){"use strict";i.r(t);var a=i("c907"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a},c03e:function(e,t,i){"use strict";i("ba1f");var a=i("de9e").default;Object.defineProperty(t,"__esModule",{value:!0}),t.getActClass=o;var n=a(i("3eee")),s=a(i("ef56"));i("fc56"),i("e291"),i("f9f6"),i("a707"),i("3b71"),i("3639"),i("bac3"),i("2ff4"),i("1120"),i("477e"),i("6bba"),i("a8dc");var r="press__";function c(e){var t=e.reduce((function(e,t){return Array.isArray(t)?e.push.apply(e,(0,s.default)(t)):e.push(t),e}),[]),i=t.reduce((function(e,t){return"string"===typeof t?e.push(t):"object"===(0,n.default)(t)&&Object.keys(t).map((function(i){t[i]&&e.push(i)})),e}),[]);return i}function o(e,t,i){var a=c(i),n=a.map((function(e){return e&&t[e]||""})),o=a.map((function(e){var t=new RegExp("^".concat(r));return e?t.test(e)?e:"".concat(r).concat(e):""}));return e?[].concat((0,s.default)(o),(0,s.default)(n)).join(" "):o.join(" ")}},c907:function(e,t,i){"use strict";i("ba1f");var a=i("de9e").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("7285")),s=i("344c"),r=i("0cea"),c=a(i("0f9f")),o=i("115e"),p={components:{PressActBenefitItem:n.default,ActDemo:c.default},mixins:[(0,s.getActCustomStyleMixin)("PressActBenefitItem",r.STYLE_LIST,"pvp-vertical")],data:function(){return{MOCK_ACT_BENEFIT_ITEM:o.MOCK_ACT_BENEFIT_ITEM}},mounted:function(){},methods:{clickGiftDetail:function(){this.onGTip("[clickGiftDetail]")},clickGetTaskReward:function(){this.onGTip("[clickGetTaskReward]")},clickMerc:function(){this.onGTip("[clickMerc]")}}};t.default=p},d227:function(e,t,i){var a=i("a8d8");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act[data-v-fcf57356]:not(.press-act--hidden-tip){\n  /*! 商家信息 */}.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip).press__benefit[data-v-fcf57356]{width:4.4rem;height:1.67rem;margin-bottom:.08rem;background:url(https://image-1251917893.file.myqcloud.com/2022/a20220408wwkhActivity/img/list_box.png) no-repeat;background-size:100%}.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__top[data-v-fcf57356]{position:relative;display:flex;align-items:center;width:100%;height:.42rem;padding:.06rem .08rem;box-sizing:border-box}.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__shop-icon[data-v-fcf57356]{width:.32rem;height:.32rem;margin-right:.08rem;background-color:#fff}.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__shop-name[data-v-fcf57356]{max-width:65%;font-size:.24rem;color:#fff;padding-right:.14rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__shop-desc[data-v-fcf57356]{font-size:.2rem;color:#fff}.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__main[data-v-fcf57356]{display:flex;align-items:center;padding-left:.1rem;padding-right:.1rem;padding-top:.1rem}.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__goods-img[data-v-fcf57356]{width:1rem;height:1rem;margin-right:.08rem;background:#fff}.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__goods-img img[data-v-fcf57356]{display:block;max-width:1rem;width:1rem;height:1rem;border:.02rem solid #fff8d5}.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__info[data-v-fcf57356]{flex:1;display:flex;flex-direction:column;justify-content:center}.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__main .press__goods-name[data-v-fcf57356]{color:#fff}.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__main .press__goods-desc[data-v-fcf57356]{color:#fbdca1}.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__main .press__tip[data-v-fcf57356]{color:#ffeded}.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__goods-name[data-v-fcf57356]{max-width:1.7rem;font-size:.24rem;line-height:.34rem;color:#fbdca1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all}.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__goods-desc[data-v-fcf57356]{max-width:1.7rem;font-size:.2rem;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all}.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__tip-line[data-v-fcf57356]{position:relative;height:.3rem;margin-top:.1rem}.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__tip-wrap[data-v-fcf57356]{display:flex;align-items:center;width:1.6rem;height:.3rem;padding:0 .09rem;border-radius:.3rem;background:rgba(68,96,170,.4)}.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__tip[data-v-fcf57356]{font-size:.2rem;color:#a6d4ff;max-width:1.4rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all;line-height:.3rem}.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__tip-wrap img[data-v-fcf57356]{width:.3rem;height:.3rem;margin-left:.06rem;object-fit:cover}.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__buttons[data-v-fcf57356]{display:flex;flex-direction:column;justify-content:flex-end;align-items:center;overflow:hidden}.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__process[data-v-fcf57356]{max-width:2.2rem;font-size:.2rem;line-height:.4rem;color:#fff;text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__benefit-btn--out[data-v-fcf57356],\n.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__benefit-btn--use[data-v-fcf57356],\n.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__benefit-btn[data-v-fcf57356]{width:1.1rem;height:.37rem;margin-top:.02rem;font-size:0;background:url(https://image-1251917893.file.myqcloud.com/2021/act/pvp/a20211009anniversary/images/btn-sprites.png) no-repeat;background-size:3.47rem auto}.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__benefit-btn[data-v-fcf57356]{width:1.12rem!important;height:.38rem!important;margin:0 auto;background:url(https://image-1251917893.file.myqcloud.com/2022/a20220408wwkhActivity/img/btn-samll-receive.png) no-repeat!important;background-size:100% auto!important}@media screen and (orientation:portrait){.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip).press__benefit[data-v-fcf57356]{width:6.76rem;height:1.67rem;margin:0 auto .08rem;background:url(https://image-1251917893.file.myqcloud.com/2022/a20220408wwkhActivity/img/slist-bg.png) no-repeat;background-size:100% 100%}.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__main[data-v-fcf57356]{padding:.1rem .2rem .1rem .1rem}.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__goods-name[data-v-fcf57356],\n.demo-wrap.press-act-benefit-item--type-pvp-vertical .press-act:not(.press-act--hidden-tip) .press__goods-desc[data-v-fcf57356]{max-width:3.6rem}}',""]),e.exports=t},da05:function(e,t,i){"use strict";var a;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.showBasicUsage?i("demo-block",{attrs:{title:e.t("basicUsage")}},[i("press-cell",{attrs:{title:e.t("show"),"is-link":!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onShowDialog.apply(void 0,arguments)}}})],1):e._e(),i("demo-block",{attrs:{title:e.t("custom")}},[i("press-cell",{attrs:{title:"样式类型","is-link":!0,value:e.customStyleStr},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onCustom.apply(void 0,arguments)}}}),i("ToggleHeader"),i("press-cell",{attrs:{title:"隐藏Tip样式",center:!0,border:!1},scopedSlots:e._u([{key:"right-icon",fn:function(){return[i("press-switch",{attrs:{"custom-class":"press-switch--e-sport",checked:e.hideTipStyle},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.$emit("update:hideTipStyle",!e.hideTipStyle)}}})]},proxy:!0}])}),i("press-cell",{attrs:{title:"使用Tip类名",center:!0,border:!1},scopedSlots:e._u([{key:"right-icon",fn:function(){return[i("press-switch",{attrs:{"custom-class":"press-switch--e-sport",checked:e.useTipClass},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.$emit("update:useTipClass",!e.useTipClass)}}})]},proxy:!0}])}),e._t("custom")],2),e._t("default")],2)},s=[]},dee6:function(e,t,i){"use strict";i.r(t);var a=i("5101"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a},e2d7:function(e,t,i){var a=i("9873");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("7537").default;n("0840d18c",a,!0,{sourceMap:!1,shadowMode:!1})},f978:function(e,t,i){"use strict";i("ba1f"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("d7e5"),i("a8dc");var a=i("6dbf"),n={name:"PressActBenefitItem",options:{virtualHost:!0,styleIsolation:"shared"},inject:{globalHideTipStyle:{default:!1}},props:{index:{type:Number,default:-1},actshowcolumn:{type:Object,default:function(){return{}}},showDistance:{type:Boolean,default:!0},useTipClass:{type:Boolean,default:!1},hideTipStyle:{type:Boolean,default:!1}},computed:{mercInfo:function(){var e=this.actshowcolumn,t=e.brandinfo,i=e.mercinfo;return t?{icon:t.brandicon,name:t.brandName}:i?{icon:i.merclogo,name:i.storename}:null}},methods:{onClickGiftDetail:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];this.$emit.apply(this,["clickGiftDetail"].concat(t))},onClickGetTaskReward:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];this.$emit.apply(this,["clickGetTaskReward"].concat(t))},onClickMerc:function(){this.$emit("clickMerc")},getActClass:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,a.getActClass)(this.useTipClass,t)}}};t.default=n}}]);