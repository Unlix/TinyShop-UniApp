(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/category"],{"1c9b":function(t,e,a){"use strict";var n=a("a587"),r=a.n(n);r.a},"461a":function(t,e,a){"use strict";a.r(e);var n=a("642c"),r=a("475c");for(var c in r)"default"!==c&&function(t){a.d(e,t,(function(){return r[t]}))}(c);a("1c9b");var o=a("2877"),i=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,"072ece9c",null);e["default"]=i.exports},"475c":function(t,e,a){"use strict";a.r(e);var n=a("d397"),r=a.n(n);for(var c in n)"default"!==c&&function(t){a.d(e,t,(function(){return n[t]}))}(c);e["default"]=r.a},"642c":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},r=[];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}))},a587:function(t,e,a){},d397:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(a("a34a")),r=a("c4c8"),c=a("2b74");function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e,a,n,r,c,o){try{var i=t[c](o),u=i.value}catch(s){return void a(s)}i.done?e(u):Promise.resolve(u).then(n,r)}function u(t){return function(){var e=this,a=arguments;return new Promise((function(n,r){var c=t.apply(e,a);function o(t){i(c,n,r,o,u,"next",t)}function u(t){i(c,n,r,o,u,"throw",t)}o(void 0)}))}}var s=function(){return Promise.all([a.e("common/vendor"),a.e("components/rf-search-bar/rf-search-bar")]).then(a.bind(null,"9f3a"))},d={components:{rfSearchBar:s},data:function(){return{headerShow:!0,hotSearchDefault:"请输入关键字",fList:[],sList:[],tList:[],showCategoryIndex:0,categoryList:[],search:"",cateTop:{}}},onShow:function(){this.initData()},methods:{navToList:function(e){t.navigateTo({url:"/pages/product/list?cate_id=".concat(e)})},initData:function(){var e=u(n.default.mark((function e(){return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.search=t.getStorageSync("search"),this.hotSearchDefault="请输入关键字 "+(this.search.hot_search_default?"如: "+this.search.hot_search_default:""),this.getProductCate(),!t.getStorageSync("accessToken")||!t.getStorageSync("cartNum")){e.next=8;break}if(0!=t.getStorageSync("cartNum")){e.next=7;break}return t.removeTabBarBadge({index:2}),e.abrupt("return");case 7:t.setTabBarBadge({index:2,text:t.getStorageSync("cartNum").toString()});case 8:case"end":return e.stop()}}),e,this)})));function a(){return e.apply(this,arguments)}return a}(),getProductCate:function(){var e=u(n.default.mark((function e(){var a=this;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.fList=[],this.sList=[],this.tList=[],t.showLoading({title:"加载中..."}),e.next=6,this.$get("".concat(r.productCate)).then((function(e){a.cateTop=t.getStorageSync("cateTop"),a.cateTop||a.getAdvList(),a.categoryList=e.data;for(var n=0;n<e.data.length;n++)if(e.data[n].child.length>0){a.showCategoryIndex=n;break}}));case 6:case"end":return e.stop()}}),e,this)})));function a(){return e.apply(this,arguments)}return a}(),getAdvList:function(){var e=u(n.default.mark((function e(){var a=this;return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"加载中..."}),e.next=3,this.$get("".concat(c.advList),{location:"cate_top"}).then((function(e){a.cateTop=e.data.cate_top[0],t.setStorageSync("cateTop",e.data.cate_top[0])}));case 3:case"end":return e.stop()}}),e,this)})));function a(){return e.apply(this,arguments)}return a}(),showCategory:function(t){this.showCategoryIndex=t},toSearch:function(){t.navigateTo({url:"/pages/search/search?search=".concat(JSON.stringify(this.search))})},toIndex:function(){t.reLaunch({url:"/pages/index/index"})},indexTopToDetailPage:function(e,a){switch(e){case"product_view":a="/pages/product/product?id=".concat(a);break;case"article_view":this.$api.msg("article_view");break;case"coupon_view":a="/pages/coupon/detail?id=".concat(a);break;case"helper_view":this.$api.msg("helper_view");break;case"product_list_for_cate":a="/pages/product/list?cate_id=".concat(a);break;default:break}a&&t.navigateTo({url:a})}}};e.default=d}).call(this,a("6e42")["default"])},d7ed:function(t,e,a){"use strict";(function(t){a("6cdc"),a("921b");n(a("66fd"));var e=n(a("461a"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])}},[["d7ed","common/runtime","common/vendor"]]]);