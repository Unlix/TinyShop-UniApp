<view class="user data-v-73367e72"><view class="user-section data-v-73367e72"><image class="bg data-v-73367e72" src="/static/user-bg2.jpg"></image><view data-event-opts="{{[['tap',[['navTo',[userInfo?'/pages/userinfo/userinfo':'login']]]]]}}" class="user-info-box data-v-73367e72" bindtap="__e"><view class="portrait-box data-v-73367e72"><image class="portrait data-v-73367e72" src="{{userInfo&&userInfo.head_portrait||user_info.headimgurl||'/static/missing-face.png'}}"></image><text class="username data-v-73367e72">{{''+(userInfo&&(userInfo.nickname||userInfo.realname)||user_info.nickname||userInfo.username||'请先登录')+''}}</text></view></view><view class="vip-card-box data-v-73367e72"><image class="card-bg data-v-73367e72" src="/static/vip-card-bg.png" mode></image><view class="tit data-v-73367e72"><view class="iconfont iconiLinkapp- _i data-v-73367e72"></view>欢迎来到RageFrame微商城</view><text class="e-m data-v-73367e72">RageFrame 版权所有</text></view></view><view data-event-opts="{{[['touchstart',[['coverTouchstart',['$event']]]],['touchmove',[['coverTouchmove',['$event']]]],['touchend',[['coverTouchend',['$event']]]]]}}" class="cover-container data-v-73367e72" style="{{'transform:'+(coverTransform)+';'+('transition:'+(coverTransition)+';')}}" bindtouchstart="__e" bindtouchmove="__e" bindtouchend="__e"><image class="arc data-v-73367e72" src="/static/arc.png"></image><view class="tj-sction data-v-73367e72"><block wx:for="{{amountList}}" wx:for-item="item" wx:for-index="__i0__" wx:key="title"><view data-event-opts="{{[['tap',[['navTo',['$0'],[[['amountList','title',item.title,'url']]]]]]]}}" class="tj-item data-v-73367e72" bindtap="__e"><text class="{{['num data-v-73367e72',item.value>0?'red':'']}}">{{''+item.value+''}}</text><text class="data-v-73367e72">{{item.title}}</text></view></block></view><view class="order-section data-v-73367e72"><block wx:for="{{orderSectionList}}" wx:for-item="item" wx:for-index="__i1__" wx:key="title"><view class="order-item data-v-73367e72" hover-class="common-hover" hover-stay-time="{{50}}" data-event-opts="{{[['tap',[['navTo',['$0'],[[['orderSectionList','title',item.title,'url']]]]]]]}}" bindtap="__e"><view class="{{['iconfont _i data-v-73367e72',item.icon]}}"></view><text class="data-v-73367e72">{{item.title}}</text><rf-badge class="badge data-v-73367e72" vue-id="{{'1-'+__i1__}}" type="error" size="small" text="{{item.num}}" bind:__l="__l"></rf-badge></view></block></view><view class="history-section icon data-v-73367e72"><view data-event-opts="{{[['tap',[['navTo',['/pages/footprint/footprint']]]]]}}" class="sec-header data-v-73367e72" bindtap="__e"><view class="iconfont iconlishijilu _i data-v-73367e72"></view><text class="data-v-73367e72">我的足迹</text></view><block wx:if="{{token}}"><view class="data-v-73367e72"><block wx:if="{{footList.length>0}}"><scroll-view class="h-list data-v-73367e72" scroll-x><block wx:for="{{footList}}" wx:for-item="item" wx:for-index="__i2__" wx:key="id"><view class="h-item data-v-73367e72"><image class="h-item-img data-v-73367e72" src="{{item.product.picture}}" mode="aspectFill" data-event-opts="{{[['tap',[['navTo',['/pages/product/product?id='+item.product.id]]]]]}}" catchtap="__e"></image><text class="h-item-text data-v-73367e72">{{item.product.name}}</text></view></block></scroll-view></block><block wx:else><block wx:if="{{footList.length===0}}"><view data-event-opts="{{[['tap',[['navTo',['/pages/product/list']]]]]}}" class="no-foot-print data-v-73367e72" bindtap="__e"><view class="iconfont iconshare no-foot-print-icon _i data-v-73367e72"></view>先去浏览一些吧~</view></block></block></view></block><block wx:else><view data-event-opts="{{[['tap',[['navTo',['/pages/footprint/footprint']]]]]}}" class="no-foot-print data-v-73367e72" bindtap="__e"><view class="iconfont iconmima no-foot-print-icon _i data-v-73367e72"></view>登陆后查看</view></block><list-cell vue-id="2" icon="iconiconfontweixin" iconColor="#e07472" title="去领券中心" tips="速来领取大额优惠券" data-event-opts="{{[['^eventClick',[['directTo',['/pages/user/coupon-center']]]]]}}" bind:eventClick="__e" class="data-v-73367e72" bind:__l="__l"></list-cell><list-cell vue-id="3" icon="icondizhi" iconColor="#5fcda2" title="地址管理" tips="管理你的收货地址" data-event-opts="{{[['^eventClick',[['navTo',['/pages/address/address']]]]]}}" bind:eventClick="__e" class="data-v-73367e72" bind:__l="__l"></list-cell><list-cell vue-id="4" icon="iconshoucang_xuanzhongzhuangtai" iconColor="#54b4ef" title="我的收藏" tips="查看已收藏的宝贝" data-event-opts="{{[['^eventClick',[['navTo',['/pages/collection/collection']]]]]}}" bind:eventClick="__e" class="data-v-73367e72" bind:__l="__l"></list-cell><button class="share-btn data-v-73367e72" open-type="share"><list-cell vue-id="5" icon="iconshare" iconColor="#9789f7" title="分享" tips="将RageFrame分享给你的好友" class="data-v-73367e72" bind:__l="__l"></list-cell></button><list-cell vue-id="6" icon="iconshezhi1" iconColor="#e07472" title="设置" border data-event-opts="{{[['^eventClick',[['navTo',['/pages/set/set']]]]]}}" bind:eventClick="__e" class="data-v-73367e72" bind:__l="__l"></list-cell></view></view></view>