(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cart/cart"],{"030f":function(t,e,s){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=c(s("a34a")),r=s("c4c8");function c(t){return t&&t.__esModule?t:{default:t}}function a(t){return l(t)||o(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function l(t){if(Array.isArray(t)){for(var e=0,s=new Array(t.length);e<t.length;e++)s[e]=t[e];return s}}function h(t,e,s,i,n,r,c){try{var a=t[r](c),u=a.value}catch(o){return void s(o)}a.done?e(u):Promise.resolve(u).then(i,n)}function d(t){return function(){var e=this,s=arguments;return new Promise((function(i,n){var r=t.apply(e,s);function c(t){h(r,i,n,c,a,"next",t)}function a(t){h(r,i,n,c,a,"throw",t)}c(void 0)}))}}var f={data:function(){return{sumPrice:"0.00",headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,selectedList:[],isAllselected:!1,theIndex:null,oldIndex:null,isStop:!1,cartList:[],token:null,oldDiscount:0,footerbottom:0,specClass:"none",showTypeImage:null,productDetail:{},specSelected:[],specChildList:[],specList:[],currentStock:0,currentSkuPrice:0,cartCount:0,currentSkuId:null,currentNewSkuId:null,styleObject:{}}},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onPullDownRefresh:function(){this.selectedList.length=0,this.isAllselected=!1,this.sumPrice=0,this.getCartItemList("refresh")},onShow:function(){this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight(),this.initData()},methods:{toggleSpec:function(t){var e=this;if("show"===this.specClass){if(!this.token)return this.specClass="none",void this.$api.msg("请您先登录！");if(this.specSelected.length<this.productDetail.base_attribute_format.length)return void this.$api.msg("请先选择规格");this.handleCartItemUpdateSku(this.currentSkuId,this.currentNewSkuId),this.specClass="hide",setTimeout((function(){e.specClass="none"}),250)}else"none"===this.specClass&&(this.specClass="show",t&&(this.specChildList=[],this.cartCount=t.number,this.getProductDetail(t)))},selectSpec:function(t,e,s){var i=this,n=this.specChildList;n.forEach((function(t){t.base_spec_id===e&&i.$set(t,"selected",!1)})),3===parseInt(s,10)&&(this.showTypeImage=n[t].data),2===parseInt(s,10)&&(this.styleObject={color:n[t].data}),this.$set(n[t],"selected",!0),this.specSelected=[],n.forEach((function(t){!0===t.selected&&i.specSelected.push(t)}));var r=[];this.specSelected.forEach((function(t){r.push(t.base_spec_value_id)})),this.productDetail.sku.forEach((function(t){if(t.data===r.join("-"))return i.currentStock=t.stock,i.currentSkuPrice=t.price,void(i.currentNewSkuId=t.id)}))},getProductDetail:function(){var e=d(n.default.mark((function e(s){var c=this;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.currentSkuId=s.sku_id,this.currentNewSkuId=s.sku_id,t.showLoading({title:"加载中..."}),e.next=5,this.$get("".concat(r.productDetail),{id:s.product_id}).then(function(){var t=d(n.default.mark((function t(e){var i;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:c.productDetail=e.data,c.specList=c.productDetail.base_attribute_format,c.specList.forEach((function(t){c.specChildList=[].concat(a(c.specChildList),a(t.value))})),c.specSelected=[],c.specChildList.forEach((function(t){-1!==s.sku_name.indexOf(t.title)&&(t.selected=!0,c.specSelected.push(t))})),i=[],c.specSelected.forEach((function(t){i.push(t.base_spec_value_id)})),c.productDetail.sku.forEach((function(t){if(t.data===i.join("-"))return c.currentStock=t.stock,void(c.currentSkuPrice=t.price)}));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){console.log(i(t," at pages/cart/cart.vue:312"))}));case 5:case"end":return e.stop()}}),e,this)})));function s(t){return e.apply(this,arguments)}return s}(),hideSpec:function(){var t=this;this.specClass="hide",setTimeout((function(){t.specClass="none"}),250)},stopPrevent:function(){},deleteCartItem:function(){var e=d(n.default.mark((function e(s,c){var a,u,o=this;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=[],c)a.push(parseInt(s,10));else for(u=0;u<this.cartList.length;u++)this.cartList[u].selected&&a.push(parseInt(this.cartList[u].sku_id,10));return t.showLoading({title:"正在将商品从购物车移除..."}),e.next=5,this.$post("".concat(r.cartItemDel),{sku_ids:JSON.stringify(a)}).then((function(t){o.selectedList.length=0,o.isAllselected=!1,o.sumPrice=0,o.getCartItemList(),o.oldIndex=null,o.theIndex=null})).catch((function(t){console.log(i(t," at pages/cart/cart.vue:346"))}));case 5:case"end":return e.stop()}}),e,this)})));function s(t,s){return e.apply(this,arguments)}return s}(),handleCartItemUpdateSku:function(){var e=d(n.default.mark((function e(s,c){var a=this;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"正在修改购物车商品sku..."}),e.next=3,this.$post("".concat(r.cartItemUpdateSku),{sku_id:s,new_sku_id:c}).then((function(){a.selectedList.length=0,a.isAllselected=!1,a.sumPrice=0,a.getCartItemList()})).catch((function(t){console.log(i(t," at pages/cart/cart.vue:361"))}));case 3:case"end":return e.stop()}}),e,this)})));function s(t,s){return e.apply(this,arguments)}return s}(),initData:function(){this.token=t.getStorageSync("accessToken")||void 0,this.token?(this.selectedList.length=0,this.isAllselected=!1,this.sumPrice=0,this.getCartItemList()):this.selectedList.length=0},navTo:function(e){t.navigateTo({url:e})},getCartItemList:function(){var e=d(n.default.mark((function e(s){var c=this;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"加载中..."}),e.next=3,this.$get("".concat(r.cartItemList),{},{},this).then((function(e){"refresh"===s&&t.stopPullDownRefresh(),c.cartList=e.data,t.setStorageSync("cartNum",e.data.length),0!=e.data.length?t.setTabBarBadge({index:2,text:e.data.length.toString()}):t.removeTabBarBadge({index:2})})).catch((function(t){console.log(i(t," at pages/cart/cart.vue:400"))}));case 3:case"end":return e.stop()}}),e,this)})));function s(t){return e.apply(this,arguments)}return s}(),clearCart:function(){var e=this;t.showModal({content:"清空购物车？",success:function(){var s=d(n.default.mark((function s(c){return n.default.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(!c.confirm){s.next=4;break}return t.showLoading({title:"正在清空购物车..."}),s.next=4,e.$post("".concat(r.cartItemClear)).then((function(t){e.selectedList.length=0,e.isAllselected=!1,e.sumPrice=0,e.getCartItemList()})).catch((function(t){console.log(i(t," at pages/cart/cart.vue:416"))}));case 4:case"end":return s.stop()}}),s)})));function c(t){return s.apply(this,arguments)}return c}()})},touchStart:function(t,e){e.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[e.touches[0].pageX,e.touches[0].pageY])},touchMove:function(t,e){var s=this;if(e.touches.length>1)this.isStop=!0;else{var i=e.touches[0].pageX-this.initXY[0],n=e.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(i)<5||(Math.abs(n)>Math.abs(i)?this.isStop=!0:i<0?(this.theIndex=t,this.isStop=!0):i>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout((function(){s.oldIndex=null}),150)))}},touchEnd:function(t,e){this.isStop=!1},selected:function(t){this.cartList[t].selected=!this.cartList[t].selected;var e=this.selectedList.indexOf(this.cartList[t].id);e>-1?this.selectedList.splice(e,1):this.selectedList.push(this.cartList[t].id),this.isAllselected=this.selectedList.length==this.cartList.length,this.sum()},allSelect:function(){for(var t=this.cartList.length,e=[],s=0;s<t;s++)this.cartList[s].selected=!this.isAllselected,e.push(this.cartList[s].id);this.selectedList=this.isAllselected?[]:e,this.isAllselected=!this.isAllselected&&0!=this.cartList.length,this.sum()},sub:function(t,e){this.cartList[e].number<=1||(this.cartList[e].number--,this.numberChange(t))},add:function(t,e){this.cartList[e].number++,this.numberChange(t,void 0,e,"add")},discard:function(){},numberChange:function(){var e=d(n.default.mark((function e(s,c,a,u){var o=this;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c&&(this.cartList[a].number=c.detail.value),t.showLoading({title:"加载中..."}),e.next=4,this.$post("".concat(r.cartItemUpdateNum),{sku_id:s.sku_id,num:s.number}).then((function(t){200===t.code?o.sum():("add"===u&&o.cartList[a].number--,o.$api.msg(t.message))})).catch((function(t){"add"===u&&o.cartList[a].number--,console.log(i(t," at pages/cart/cart.vue:527"))}));case 4:case"end":return e.stop()}}),e,this)})));function s(t,s,i,n){return e.apply(this,arguments)}return s}(),createOrder:function(){var t=d(n.default.mark((function t(){var e,s,i,r;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==this.selectedList.length){t.next=2;break}return t.abrupt("return");case 2:for(e={},s=[],i=this.cartList.length,r=0;r<i;r++)this.cartList[r].selected&&s.push(parseInt(this.cartList[r].id,10));e.type="cart",e.data=s.join(","),this.selectedList.length=0,this.isAllselected=!1,this.sumPrice=0,this.navTo("/pages/order/createOrder?data=".concat(JSON.stringify(e)));case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),sum:function(){this.sumPrice=0;for(var t=this.cartList.length,e=[],s=0;s<t;s++)this.cartList[s].selected&&(e.push(this.cartList[s]),this.sumPrice=this.arrSort(e));this.sumPrice=this.sumPrice.toFixed(2)},floor:function(t){return Math.floor(100*t)/100},arrSort:function(t){for(var e=this,s={},i=[],n=0;n<t.length;n++){var r=t[n];if(s[r.product.id])for(var c=0;c<i.length;c++){var a=i[c];if(a.data[0].product.id===r.product.id){a.data.push(r);break}}else i.push({id:r.product.id,num:0,price:0,data:[r]}),s[r.product.id]=r}var u=[];i.forEach((function(t){t.data.forEach((function(e){t.num+=parseInt(e.number,10),t.price+=parseInt(e.number,10)*e.price}));for(var e=t.data[0].ladderPreferential,s=0;s<e.length;s++)if(t.num>=parseInt(e[s].quantity,10)){e[s].num=t.num,e[s].itemPrice=t.data[0].price,e[s].totalPrice=t.price,u.push(e[s]);break}}));var o=0,l=0;return u.forEach((function(t){1===parseInt(t.type,10)?l+=t.price*t.num:l+=t.totalPrice-e.floor(t.itemPrice*t.price/100)*t.num})),i.forEach((function(t){o+=t.price})),o-l}}};e.default=f}).call(this,s("6e42")["default"],s("0de9")["default"])},"0e29":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=(t._self._c,t.__map(t.specList,(function(e,s){var i=parseInt(e.show_type),n=parseInt(e.show_type),r=parseInt(e.show_type),c=parseInt(e.show_type);return{$orig:t.__get_orig(e),m0:i,m1:n,m2:r,m3:c}})));t.$mp.data=Object.assign({},{$root:{l0:s}})},n=[];s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return n}))},"2c90":function(t,e,s){"use strict";s.r(e);var i=s("030f"),n=s.n(i);for(var r in i)"default"!==r&&function(t){s.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"587c":function(t,e,s){"use strict";(function(t){s("6cdc"),s("921b");i(s("66fd"));var e=i(s("bf12"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,s("6e42")["createPage"])},a07f:function(t,e,s){},bf12:function(t,e,s){"use strict";s.r(e);var i=s("0e29"),n=s("2c90");for(var r in n)"default"!==r&&function(t){s.d(e,t,(function(){return n[t]}))}(r);s("d18b");var c=s("2877"),a=Object(c["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=a.exports},d18b:function(t,e,s){"use strict";var i=s("a07f"),n=s.n(i);n.a}},[["587c","common/runtime","common/vendor"]]]);