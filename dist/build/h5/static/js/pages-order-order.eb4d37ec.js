(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-order"],{1969:function(e,t,i){var a=i("aa59");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("2717a88e",a,!0,{sourceMap:!1,shadowMode:!1})},"37dc":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"navbar"},e._l(e.navList,(function(t,a){return i("v-uni-view",{key:a,staticClass:"nav-item",class:{current:e.tabCurrentIndex===a},on:{click:function(t){t=e.$handleEvent(t),e.tabClick(a)}}},[e._v(e._s(t.text))])})),1),i("v-uni-swiper",{staticClass:"swiper-box",attrs:{current:e.tabCurrentIndex,duration:"300"},on:{change:function(t){t=e.$handleEvent(t),e.changeTab(t)}}},e._l(e.navList,(function(t,a){return i("v-uni-swiper-item",{key:a,staticClass:"tab-content"},[i("v-uni-scroll-view",{staticClass:"list-scroll-content",attrs:{"scroll-y":""},on:{scrolltolower:function(t){t=e.$handleEvent(t),e.getMoreOrderList(t)}}},[0===e.orderList.length?i("empty",{attrs:{info:"快去商城逛逛吧"}}):e._e(),e._l(e.orderList,(function(t,a){return i("v-uni-view",{key:a,staticClass:"order-item"},[i("v-uni-view",{staticClass:"i-top b-b"},[i("v-uni-text",{staticClass:"time in1line"},[e._v("订单号："+e._s(t.order_sn))]),0!==parseInt(t.order_status,10)?i("v-uni-text",{staticClass:"state"},[e._v(e._s(e._f("orderStatusFilter")(t.order_status)))]):i("v-uni-view",{staticClass:"example-body"},[i("rf-count-down",{attrs:{"show-day":!1,second:e.second(t.created_at),color:"#FFFFFF","background-color":"#fa436a","border-color":"#fa436a"},on:{timeup:function(i){i=e.$handleEvent(i),e.timeUp(t)}}})],1)],1),t&&t.product&&t.product.length>1?i("v-uni-scroll-view",{staticClass:"goods-box",attrs:{"scroll-x":""},on:{click:function(i){i=e.$handleEvent(i),e.toOrderDetail(t.id)}}},e._l(t.product,(function(t,a){return i("v-uni-view",{key:a,staticClass:"goods-item"},[i("v-uni-image",{staticClass:"goods-img",attrs:{src:t.product_picture,mode:"aspectFill"}}),i("v-uni-text",{staticClass:"goods-title in2line"},[e._v(e._s(t.product_name))])],1)})),1):e._e(),e._l(t.product,(function(a,n){return t.product&&1===t.product.length?i("v-uni-view",{key:n,staticClass:"goods-box-single",on:{click:function(i){i=e.$handleEvent(i),e.toOrderDetail(t.id)}}},[i("v-uni-image",{staticClass:"goods-img",attrs:{src:a.product_picture,mode:"aspectFill"}}),i("v-uni-view",{staticClass:"right"},[i("v-uni-text",{staticClass:"title in2line"},[e._v(e._s(a.product_name))]),i("v-uni-text",{staticClass:"attr-box"},[e._v(e._s(a.sku_name||"基础版"))]),i("v-uni-text",{staticClass:"price"},[e._v(e._s(a.price)+"  x "+e._s(a.num))])],1)],1):e._e()})),i("v-uni-view",{staticClass:"price-box"},[e._v("共"),i("v-uni-text",{staticClass:"num"},[e._v(e._s(t.product_count))]),e._v("件商品 实付款"),i("v-uni-text",{staticClass:"price"},[e._v(e._s(t.pay_money))])],1),i("v-uni-view",{staticClass:"action-box b-t"},[i("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:0==t.order_status,expression:"item.order_status == 0"}],staticClass:"action-btn",on:{click:function(i){i=e.$handleEvent(i),e.handleOrderOperation(t,"close")}}},[e._v("取消订单")]),i("v-uni-button",{staticClass:"action-btn",on:{click:function(i){i=e.$handleEvent(i),e.handleOrderOperation(t,"detail")}}},[e._v("订单详情")]),i("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:0==t.order_status,expression:"item.order_status == 0"}],staticClass:"action-btn recom",on:{click:function(i){i=e.$handleEvent(i),e.handlePayment(t)}}},[e._v("立即支付")]),i("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:1==t.order_status,expression:"item.order_status == 1"}],staticClass:"action-btn recom",on:{click:function(i){i=e.$handleEvent(i),e.handleOrderOperation(t,"refund",1)}}},[e._v("申请退款")]),i("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:4==t.order_status||2==t.order_status,expression:"item.order_status == 4 || item.order_status == 2"}],staticClass:"action-btn",on:{click:function(i){i=e.$handleEvent(i),e.handleOrderOperation(t,"shipping")}}},[e._v("查看物流")]),i("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:4==t.order_status,expression:"item.order_status == 4"}],staticClass:"action-btn recom",on:{click:function(i){i=e.$handleEvent(i),e.handleOrderOperation(t,"refund",3)}}},[e._v("订单售后")]),i("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:2==t.order_status,expression:"item.order_status == 2"}],staticClass:"action-btn recom",on:{click:function(i){i=e.$handleEvent(i),e.handleOrderOperation(t,"refund",2)}}},[e._v("申请退货")]),i("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:2==t.order_status,expression:"item.order_status == 2"}],staticClass:"action-btn recom",on:{click:function(i){i=e.$handleEvent(i),e.handleOrderOperation(t,"delivery")}}},[e._v("确认收货")]),i("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:4==t.order_status,expression:"item.order_status == 4"}],staticClass:"action-btn recom",on:{click:function(i){i=e.$handleEvent(i),e.handleOrderOperation(t,"evaluation")}}},[e._v("我要评价")]),i("v-uni-button",{directives:[{name:"show",rawName:"v-show",value:-4==t.order_status,expression:"item.order_status == -4"}],staticClass:"action-btn recom",on:{click:function(i){i=e.$handleEvent(i),e.handleOrderOperation(t,"delete")}}},[e._v("删除订单")])],1)],2)})),i("rf-load-more",{attrs:{status:e.loadingType}})],2)],1)})),1)],1)},n=[];i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return n}))},"8cce":function(e,t,i){"use strict";var a=i("1969"),n=i.n(a);n.a},aa59:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'.content[data-v-6510e93b],uni-page-body[data-v-6510e93b]{background:#f8f8f8;height:100%}.swiper-box[data-v-6510e93b]{height:calc(100% - 40px)}.list-scroll-content[data-v-6510e93b]{height:100%}.navbar[data-v-6510e93b]{display:-webkit-box;display:-webkit-flex;display:flex;height:40px;padding:0 5px;background:#fff;box-shadow:0 1px 5px rgba(0,0,0,.06);position:relative;z-index:10}.navbar .nav-item[data-v-6510e93b]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;font-size:15px;color:#303133;position:relative}.navbar .nav-item.current[data-v-6510e93b]{color:#fa436a}.navbar .nav-item.current[data-v-6510e93b]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:44px;height:0;border-bottom:2px solid #fa436a}.uni-swiper-item[data-v-6510e93b]{height:auto}.order-item[data-v-6510e93b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding-left:%?30?%;background:#fff;margin-top:%?16?%}.order-item .i-top[data-v-6510e93b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;padding-right:%?30?%;font-size:%?28?%;color:#303133;position:relative}.order-item .i-top .time[data-v-6510e93b]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.order-item .i-top .state[data-v-6510e93b]{color:#fa436a}.order-item .i-top .del-btn[data-v-6510e93b]{padding:%?10?% 0 %?10?% %?36?%;font-size:%?32?%;color:#909399;position:relative}.order-item .i-top .del-btn[data-v-6510e93b]:after{content:"";width:0;height:%?30?%;border-left:1px solid #dcdfe6;position:absolute;left:%?20?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.order-item .goods-box[data-v-6510e93b]{padding-top:%?10?%;height:%?220?%}.order-item .goods-box .goods-item[data-v-6510e93b]{overflow:hidden;height:100%;width:%?160?%;margin-right:%?16?%;display:inline-block}.order-item .goods-box .goods-item .goods-img[data-v-6510e93b]{display:block;width:100%;height:%?140?%}.order-item .goods-box .goods-item .goods-title[data-v-6510e93b]{font-size:%?22?%;line-height:%?32?%}.order-item .goods-box-single[data-v-6510e93b]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?10?% 0}.order-item .goods-box-single .goods-img[data-v-6510e93b]{display:block;width:%?180?%;height:%?140?%}.order-item .goods-box-single .right[data-v-6510e93b]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:0 %?30?% 0 %?24?%;overflow:hidden}.order-item .goods-box-single .right .title[data-v-6510e93b]{font-size:%?24?%;line-height:%?32?%;color:#303133}.order-item .goods-box-single .right .attr-box[data-v-6510e93b]{font-size:%?24?%;color:#909399}.order-item .goods-box-single .right .price[data-v-6510e93b]{font-size:%?26?%;color:#303133}.order-item .goods-box-single .right .price[data-v-6510e93b]:before{content:"￥";font-size:%?24?%}.order-item .price-box[data-v-6510e93b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;padding:%?15?% %?30?%;font-size:%?26?%;color:#909399}.order-item .price-box .num[data-v-6510e93b]{margin:0 %?8?%;color:#303133}.order-item .price-box .price[data-v-6510e93b]{font-size:%?32?%;color:#303133}.order-item .price-box .price[data-v-6510e93b]:before{content:"￥";font-size:%?24?%;margin:0 %?2?% 0 %?8?%}.order-item .action-box[data-v-6510e93b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?100?%;position:relative;padding-right:%?30?%}.order-item .action-btn[data-v-6510e93b]{width:%?160?%;height:%?60?%;margin:0;margin-left:%?24?%;padding:0;text-align:center;line-height:%?60?%;font-size:%?26?%;color:#303133;background:#fff;border-radius:100px;border:1px solid rgba(0,0,0,.05)}.order-item .action-btn[data-v-6510e93b]:after{border-radius:100px}.order-item .action-btn.recom[data-v-6510e93b]{background:#fff9f9;color:#fa436a}.order-item .action-btn.recom[data-v-6510e93b]:after{border-color:#f7bcc8}.load1[data-v-6510e93b],.load2[data-v-6510e93b],.load3[data-v-6510e93b]{height:24px;width:24px}.load2[data-v-6510e93b]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-6510e93b]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-6510e93b]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-6510e93b]:first-child{-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-6510e93b]:first-child{-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-6510e93b]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-6510e93b]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-6510e93b]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-6510e93b]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-6510e93b]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-6510e93b]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-6510e93b]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-6510e93b]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-6510e93b]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-6510e93b{0%{opacity:1}to{opacity:.2}}body.?%PAGE?%[data-v-6510e93b]{background:#f8f8f8}',""]),e.exports=t},e8b3:function(e,t,i){"use strict";i.r(t);var a=i("f6aa"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},ebc4:function(e,t,i){"use strict";i.r(t);var a=i("37dc"),n=i("e8b3");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("8cce");var o=i("2877"),s=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"6510e93b",null);t["default"]=s.exports},f6aa:function(e,t,i){"use strict";var a=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("8e6e"),i("ac6a"),i("456d");var n=a(i("75fc")),r=a(i("bd86"));i("96cf");var o=a(i("3b8d")),s=a(i("f97d")),d=a(i("d138")),l=a(i("8f09")),c=i("802d"),u=a(i("71e5")),b=i("c4c8");function v(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function f(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?v(Object(i),!0).forEach((function(t){(0,r.default)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var h={components:{rfLoadMore:s.default,empty:d.default,rfCountDown:u.default},data:function(){return{tabCurrentIndex:0,loadingType:"more",navList:[{state:void 0,text:"全部"},{state:0,text:"待付款"},{state:1,text:"待发货"},{state:2,text:"待收货"},{state:3,text:"评价"}],orderList:[],page:1}},computed:{second:function(){return function(e){return Math.floor(900-(new Date/1e3-e))}}},filters:{time:function(e){return(0,l.default)(1e3*e).format("YYYY-MM-DD HH:mm:ss")},orderStatusFilter:function(e){var t=null,i=[{key:0,value:"待付款"},{key:1,value:"待发货"},{key:2,value:"已发货"},{key:3,value:"已收货"},{key:4,value:"待评价"},{key:-1,value:"退货申请"},{key:-2,value:"退款中"},{key:-3,value:"退款完成"},{key:-4,value:"已关闭"},{key:-5,value:"撤销申请"}];return i.forEach((function(i){i.key==e&&(t=i.value)})),t}},onShow:function(){this.page=1,this.orderList.length=0,this.initData()},onLoad:function(e){this.tabCurrentIndex=+e.state+1},onPullDownRefresh:function(){this.page=1,this.orderList.length=0,this.getOrderList("refresh")},onReachBottom:function(){this.page++,this.getOrderList()},methods:{timeUp:function(e){this.handleOrderClose(e.id)},handleOrderOperation:function(e,t,i){switch(t){case"detail":this.navTo("/pages/order/detail?id=".concat(e.id));break;case"evaluation":this.handleOrderEvaluation(e,"evaluation");break;case"close":this.handleOrderClose(e.id);break;case"delete":this.handleOrderDelete(e.id);break;case"shipping":this.navTo("/pages/order/shipping?id=".concat(e.id));break;case"refund":this.handleOrderEvaluation(e,"refund",i);break;case"delivery":this.handleOrderTakeDelivery(e.id);break}},handleOrderEvaluation:function(e,t,i){uni.navigateTo({url:"/pages/order/orderItem?id=".concat(e.id)})},navTo:function(e){uni.navigateTo({url:e})},handleOrderClose:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(t){var i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading({title:"加载中..."}),e.next=3,this.$get("".concat(b.orderClose),{id:t}).then((function(){i.page=1,i.orderList.length=0,i.getOrderList()}));case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleOrderDelete:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(t){var i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading({title:"加载中..."}),e.next=3,this.$del("".concat(c.orderDelete,"?id=").concat(t),{}).then((function(){i.$api.msg("订单删除成功"),setTimeout((function(){i.page=1,i.orderList.length=0,i.getOrderList()}),500)}));case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleOrderTakeDelivery:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(t){var i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading({title:"加载中..."}),e.next=3,this.$get("".concat(c.orderTakeDelivery),{id:t}).then((function(){i.page=1,i.orderList.length=0,i.getOrderList()}));case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handlePayment:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.navigateTo({url:"/pages/money/pay?id=".concat(t.id)});case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),initData:function(){this.getOrderList()},getOrderList:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(t){var i,a,r,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=this.tabCurrentIndex,a=this.navList[i],r={},(a.state||0===a.state)&&(r.synthesize_status=a.state),r.page=this.page,uni.showLoading({title:"加载中..."}),e.next=8,this.$get("".concat(c.orderList),f({},r)).then((function(e){"refresh"===t&&uni.stopPullDownRefresh(),o.loadingType=10===e.data.length?"more":"nomore",o.orderList=[].concat((0,n.default)(o.orderList),(0,n.default)(e.data))}));case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),changeTab:function(e){this.page=1,this.orderList.length=0,this.tabCurrentIndex=e.target.current,this.getOrderList()},tabClick:function(e){this.page=1,this.orderList.length=0,this.tabCurrentIndex=e},getMoreOrderList:function(){this.page++,this.getOrderList()}}};t.default=h}}]);