(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/about/about"],{1647:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=u(e("a34a")),o=e("8492");function u(t){return t&&t.__esModule?t:{default:t}}function r(t,n,e,i,o,u,r){try{var a=t[u](r),c=a.value}catch(f){return void e(f)}a.done?n(c):Promise.resolve(c).then(i,o)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(i,o){var u=t.apply(n,e);function a(t){r(u,i,o,a,c,"next",t)}function c(t){r(u,i,o,a,c,"throw",t)}a(void 0)}))}}var c=function(){return e.e("components/uni-list/uni-list").then(e.bind(null,"7f33"))},f=function(){return e.e("components/rf-image/rf-image").then(e.bind(null,"b19a"))},l=function(){return e.e("components/uni-list-item/uni-list-item").then(e.bind(null,"4c2b"))},s={data:function(){return{aboutInfo:{},navList:[{title:"商城介绍",url:""},{title:"注册协议",url:"protocol_register"},{title:"充值协议",url:"protocol_recharge"},{title:"隐私协议",url:"protocol_privacy"}]}},components:{uniList:c,uniListItem:l,rfImage:f},onLoad:function(){this.initData()},methods:{initData:function(){this.token=t.getStorageSync("accessToken")||void 0,this.token&&this.getConfigList()},getConfigList:function(){var n=a(i.default.mark((function n(){var e,u=this;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e=t.getStorageSync("userInfo"),e){n.next=3;break}return n.abrupt("return");case 3:return t.showLoading({title:"加载中..."}),n.next=6,this.$get("".concat(o.merchantView),{id:e.merchant_id,field:"web_qrcode"}).then((function(t){u.aboutInfo=t.data})).catch((function(t){console.log(t)}));case 6:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),navTo:function(n){t.navigateTo({url:n})}}};n.default=s}).call(this,e("a821")["default"])},"28e3":function(t,n,e){},"63f9":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return o}))},"7c9d":function(t,n,e){"use strict";e.r(n);var i=e("63f9"),o=e("9476");for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);e("e518");var r=e("2877"),a=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,null,null);n["default"]=a.exports},9476:function(t,n,e){"use strict";e.r(n);var i=e("1647"),o=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=o.a},a88b:function(t,n,e){"use strict";(function(t){e("6cdc"),e("921b");i(e("66fd"));var n=i(e("7c9d"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("a821")["createPage"])},e518:function(t,n,e){"use strict";var i=e("28e3"),o=e.n(i);o.a}},[["a88b","common/runtime","common/vendor"]]]);