(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/product"],{"26dd":function(t,e,n){"use strict";var a=n("d93b"),r=n.n(a);r.a},2718:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(n("a34a")),r=n("c4c8"),i=n("2b74"),c=u(n("6bf2")),s=u(n("c7c7")),o=n("802d");function u(t){return t&&t.__esModule?t:{default:t}}function l(t){return d(t)||h(t)||p()}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function d(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function f(t,e,n,a,r,i,c){try{var s=t[i](c),o=s.value}catch(u){return void n(u)}s.done?e(o):Promise.resolve(o).then(a,r)}function g(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var i=t.apply(e,n);function c(t){f(i,a,r,c,s,"next",t)}function s(t){f(i,a,r,c,s,"throw",t)}c(void 0)}))}}var _=function(){return n.e("components/share").then(n.bind(null,"ca19"))},m=function(){return n.e("components/uni-number-box").then(n.bind(null,"7ce1"))},v=function(){return n.e("components/empty").then(n.bind(null,"d138"))},b=function(){return n.e("components/rf-rate/rf-rate").then(n.bind(null,"6c8d"))},y={components:{share:_,rfRate:b,uniNumberBox:m,empty:v},filters:{formatRichText:function(t){if(t){var e=t.replace(/<img[^>]*>/gi,(function(t,e){return t=t.replace(/style="[^"]+"/gi,"").replace(/style='[^']+'/gi,""),t=t.replace(/width="[^"]+"/gi,"").replace(/width='[^']+'/gi,""),t=t.replace(/height="[^"]+"/gi,"").replace(/height='[^']+'/gi,""),t}));return e=e.replace(/style="[^"]+"/gi,(function(t,e){return t=t.replace(/width:[^;]+;/gi,"max-width:100%;").replace(/width:[^;]+;/gi,"max-width:100%;"),t})),e=e.replace(/<br[^>]*\/>/gi,""),e=e.replace(/\<img/gi,'<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"'),e}return"暂无商品详情"},time:function(t){return(0,c.default)(1e3*t).format("YYYY-MM-DD HH:mm")},maxBuyFilter:function(t){return 0===parseInt(t,10)?"不限购":"限购：".concat(t)},pointExchangeTypeFilter:function(t){var e=["","非积分兑换","积分加现金","积分兑换或直接购买","只支持积分兑换"];return e[parseInt(t,10)]},integralGiveTypeFilter:function(t){var e=["固定积分","百分比"];return e[parseInt(t,10)]},givePointFilter:function(t){return 1===parseInt(t.integral_give_type,10)?"".concat(Math.round(parseInt(t.give_point,10)/100*parseInt(t.minSkuPrice,10))," 积分"):parseInt(t.integral_give_type,10)}},data:function(){return{errorImg:s.default,serviceClass:"none",ladderPreferentialClass:"none",attributeValueClass:"none",cartType:null,maskState:0,couponList:[],productDetail:{},styleObject:{},showTypeImage:null,specClass:"none",specSelected:[],favorite:!1,shareList:[],currentStock:null,specList:[],specChildList:[],cartCount:1,product_id:null,isShowProduct:!0,evaluateList:[],token:null}},onLoad:function(){var t=g(a.default.mark((function t(e){var n=this;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.initData(e.id),this.specList.forEach((function(t){var e=!0,a=!1,r=void 0;try{for(var i,c=n.specChildList[Symbol.iterator]();!(e=(i=c.next()).done);e=!0){var s=i.value;if(s.pid===t.id){n.$set(s,"selected",!0),n.specSelected.push(s);break}}}catch(o){a=!0,r=o}finally{try{e||null==c.return||c.return()}finally{if(a)throw r}}})),this.product_id=e.id;case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onShareAppMessage:function(t){return{title:this.productDetail.name,path:"/pages/product/product?id="+this.product_id}},methods:{showService:function(){0!==this.productDetail.tags.length&&(this.serviceClass="show")},showLadderPreferential:function(){0!==this.productDetail.ladderPreferential.length&&(this.ladderPreferentialClass="show")},showAttributeValue:function(){0!==this.productDetail.attributeValue.length&&(this.attributeValueClass="show")},hideService:function(){var t=this;this.serviceClass="hide",this.ladderPreferentialClass="hide",this.attributeValueClass="hide",setTimeout((function(){t.serviceClass="none",t.ladderPreferentialClass="none",t.attributeValueClass="none"}),200)},getCoupon:function(){var e=g(a.default.mark((function e(n){var r=this;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.token){e.next=4;break}return this.maskState=0,t.showModal({content:"会话已过期，是否跳转登录页面？",success:function(e){e.confirm&&(t.clearStorage(),t.reLaunch({url:"/pages/public/login"}))}}),e.abrupt("return");case 4:return t.showLoading({title:"领取中..."}),e.next=7,this.$post("".concat(o.couponReceive),{id:n.id}).then((function(){r.$api.msg("领取成功"),r.maskState=0})).catch((function(t){r.maskState=0,console.log(t)}));case 7:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),toEvaluateList:function(){t.navigateTo({url:"/pages/evaluation/list?comment_num=".concat(this.productDetail.comment_num,"&evaluateStat=").concat(JSON.stringify(this.productDetail.evaluateStat))})},numberChange:function(t){this.cartCount=t.number},toggleMask:function(t){var e=this,n="show"===t?10:300,a="show"===t?1:0;this.maskState=2,setTimeout((function(){e.maskState=a}),n)},initData:function(){var e=g(a.default.mark((function e(n){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.token=t.getStorageSync("accessToken"),e.next=3,this.getProductDetail(n);case 3:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),getProductDetail:function(){var e=g(a.default.mark((function e(n){var i=this;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"加载中..."}),e.next=3,this.$get("".concat(r.productDetail),{id:n}).then(function(){var t=g(a.default.mark((function t(e){var n;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i.isShowProduct=!0,i.productDetail=e.data,t.next=4,e.data.evaluate;case 4:i.evaluateList=t.sent,i.favorite=!!i.productDetail.myCollect,i.specList=i.productDetail.base_attribute_format,i.specList.forEach((function(t){i.specChildList=[].concat(l(i.specChildList),l(t.value))})),i.specSelected=[],e.data.base_attribute_format.forEach((function(t){t.value[0].selected=!0,i.specSelected.push(t.value[0])})),n=[],i.specSelected.forEach((function(t){n.push(t.base_spec_value_id)})),i.productDetail.sku.forEach((function(t){t.data!==n.join("-")||(i.currentStock=t.stock)}));case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){i.isShowProduct=!1,console.log(t)}));case 3:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),toggleSpec:function(){var e=this;if("show"===this.specClass){if(!this.token)return this.specClass="none",void t.showModal({content:"会话已过期，是否跳转登录页面？",success:function(e){e.confirm&&(t.clearStorage(),t.reLaunch({url:"/pages/public/login"}))}});if(this.specSelected.length<this.productDetail.base_attribute_format.length)return void this.$api.msg("请先选择规格");"cart"===this.cartType?(this.cartType=null,this.handleCartItemCreate()):"buy"===this.cartType&&(this.cartType=null,this.buy()),this.specClass="hide",setTimeout((function(){e.specClass="none"}),250)}else"none"===this.specClass&&(this.specClass="show")},hideSpec:function(){var t=this;this.specClass="hide",setTimeout((function(){t.specClass="none"}),250)},handleCartItemCreate:function(){var e=g(a.default.mark((function e(){var n,i,c=this;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=null,1!==this.productDetail.sku.length){e.next=5;break}n=this.productDetail.sku[0].id,e.next=31;break;case 5:if(1!==this.productDetail.base_attribute_format.length){e.next=14;break}if(!(this.specSelected.length<1)){e.next=11;break}return this.$api.msg("请先选择规格"),e.abrupt("return");case 11:i="".concat(this.specSelected[0].base_spec_value_id);case 12:e.next=30;break;case 14:if(2!==this.productDetail.base_attribute_format.length){e.next=23;break}if(!(this.specSelected.length<2)){e.next=20;break}return this.$api.msg("请先选择规格"),e.abrupt("return");case 20:i="".concat(this.specSelected[0].base_spec_value_id,"-").concat(this.specSelected[2].base_spec_value_id);case 21:e.next=30;break;case 23:if(3!==this.productDetail.base_attribute_format.length){e.next=30;break}if(!(this.specSelected.length<3)){e.next=29;break}return this.$api.msg("请先选择规格"),e.abrupt("return");case 29:i="".concat(this.specSelected[0].base_spec_value_id,"-").concat(this.specSelected[1].base_spec_value_id,"-").concat(this.specSelected[2].base_spec_value_id);case 30:this.productDetail&&this.productDetail.sku.forEach((function(t){t.data!==i||(n=t.id)}));case 31:return t.showLoading({title:"正在将商品添加至购物车..."}),e.next=34,this.$post("".concat(r.cartItemCreate),{sku_id:n,num:this.cartCount}).then(function(){var e=g(a.default.mark((function e(n){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.$get("".concat(r.cartItemCount)).then((function(e){t.setStorageSync("cartNum",e.data)}));case 2:c.$api.msg("添加成功，在购物车等");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){console.log(t)}));case 34:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),shareProduct:function(){},selectSpec:function(t,e,n){var a=this,r=this.specChildList;r.forEach((function(t){t.base_spec_id===e&&a.$set(t,"selected",!1)})),3===parseInt(n,10)&&(this.showTypeImage=r[t].data),2===parseInt(n,10)&&(this.styleObject={color:r[t].data}),this.$set(r[t],"selected",!0),this.specSelected=[],r.forEach((function(t){!0===t.selected&&a.specSelected.push(t)}));var i=[];this.specSelected.forEach((function(t){i.push(t.base_spec_value_id)})),this.productDetail.sku.forEach((function(t){t.data!==i.join("-")||(a.currentStock=t.stock)}))},share:function(t){return"button"===t.from&&console.log(t.target),{title:"自定义分享标题",path:"/pages/test/test?id=123"}},toFavorite:function(){var e=g(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.token){e.next=4;break}return this.specClass="none",t.showModal({content:"会话已过期，是否跳转登录页面？",success:function(e){e.confirm&&(t.clearStorage(),t.reLaunch({url:"/pages/public/login"}))}}),e.abrupt("return");case 4:this.favorite?this.handleCollectDel():this.handleCollectCreate();case 5:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),handleCollectCreate:function(){var e=g(a.default.mark((function e(){var n=this;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"正在收藏..."}),e.next=3,this.$post("".concat(i.collectCreate),{topic_id:this.product_id,topic_type:"product"}).then((function(t){n.favorite=!n.favorite,n.$api.msg("收藏成功")})).catch((function(t){console.log(t)}));case 3:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),handleCollectDel:function(){var e=g(a.default.mark((function e(){var n=this;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"加载中"}),e.next=3,this.$del("".concat(i.collectDel,"?id=").concat(this.productDetail.myCollect.id)).then((function(t){n.favorite=!n.favorite,n.$api.msg("取消收藏成功")})).catch((function(t){console.log(t)}));case 3:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),buy:function(){var e=g(a.default.mark((function e(){var n,r,i,c;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(1!==this.productDetail.sku.length){e.next=4;break}n=this.productDetail.sku[0].id,e.next=33;break;case 4:if(1!==this.productDetail.base_attribute_format.length){e.next=14;break}if(!(this.specSelected.length<1)){e.next=10;break}return this.$api.msg("请先选择规格"),e.abrupt("return");case 10:r="".concat(this.specSelected[0].base_spec_value_id),"".concat(this.specSelected[0].title);case 12:e.next=32;break;case 14:if(2!==this.productDetail.base_attribute_format.length){e.next=24;break}if(!(this.specSelected.length<2)){e.next=20;break}return this.$api.msg("请先选择规格"),e.abrupt("return");case 20:r="".concat(this.specSelected[0].base_spec_value_id,"-").concat(this.specSelected[2].base_spec_value_id),"".concat(this.specSelected[0].title," ").concat(this.specSelected[2].title);case 22:e.next=32;break;case 24:if(3!==this.productDetail.base_attribute_format.length){e.next=32;break}if(!(this.specSelected.length<3)){e.next=30;break}return this.$api.msg("请先选择规格"),e.abrupt("return");case 30:r="".concat(this.specSelected[0].base_spec_value_id,"-").concat(this.specSelected[1].base_spec_value_id,"-").concat(this.specSelected[2].base_spec_value_id),"".concat(this.specSelected[0].title," ").concat(this.specSelected[1].title," ").concat(this.specSelected[2].title);case 32:this.productDetail&&this.productDetail.sku.forEach((function(t){t.data!==r||(n=t.id)}));case 33:i={},c={},c.sku_id=n,c.num=this.cartCount,2==this.productDetail.point_exchange_type||4==this.productDetail.point_exchange_type?i.type="point_exchange":i.type="buy_now",i.data=JSON.stringify(c),t.navigateTo({url:"/pages/order/createOrder?data=".concat(JSON.stringify(i))});case 40:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),addCart:function(t){this.specClass="show",this.cartType=t},stopPrevent:function(){}}};e.default=y}).call(this,n("a821")["default"])},"71d9":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t._f("maxBuyFilter")(t.productDetail.max_buy)),a=t._f("pointExchangeTypeFilter")(t.productDetail.point_exchange_type),r=t._f("integralGiveTypeFilter")(t.productDetail.integral_give_type),i=t._f("givePointFilter")(t.productDetail),c=t.__map(t.productDetail.ladderPreferential,(function(e,n){var a=parseInt(e.type,10),r=parseInt(e.type,10),i=parseInt(e.price,10);return{$orig:t.__get_orig(e),m0:a,m1:r,m2:i}})),s=t._f("time")(t.productDetail.evaluate&&t.productDetail.evaluate[0]&&t.productDetail.evaluate[0].created_at),o=t._f("formatRichText")(t.productDetail.intro),u=t.__map(t.productDetail.ladderPreferential,(function(e,n){var a=parseInt(e.type,10),r=parseInt(e.type,10),i=parseInt(e.price,10);return{$orig:t.__get_orig(e),m3:a,m4:r,m5:i}})),l=t.__map(t.specList,(function(e,n){var a=parseInt(e.show_type),r=parseInt(e.show_type),i=parseInt(e.show_type),c=parseInt(e.show_type);return{$orig:t.__get_orig(e),m6:a,m7:r,m8:i,m9:c}})),p=parseInt(t.currentStock||t.productDetail.stock,10),h=t.__map(t.productDetail.canReceiveCoupon,(function(e,n){var a=parseInt(e.term_of_validity_type,10),r=t._f("time")(e.start_time),i=t._f("time")(e.end_time),c=parseInt(e.range_type,10);return{$orig:t.__get_orig(e),m11:a,f6:r,f7:i,m12:c}}));t.$mp.data=Object.assign({},{$root:{f0:n,f1:a,f2:r,f3:i,l0:c,f4:s,f5:o,l1:u,l2:l,m10:p,l3:h}})},r=[];n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}))},c2aa:function(t,e,n){"use strict";(function(t){n("6cdc"),n("921b");a(n("66fd"));var e=a(n("ee53"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("a821")["createPage"])},d93b:function(t,e,n){},dfd6:function(t,e,n){"use strict";n.r(e);var a=n("2718"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},ee53:function(t,e,n){"use strict";n.r(e);var a=n("71d9"),r=n("dfd6");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("26dd");var c=n("2877"),s=Object(c["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports}},[["c2aa","common/runtime","common/vendor"]]]);