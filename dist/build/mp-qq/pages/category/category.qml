<view id="category" class="data-v-26b500c0"><rf-search-bar vue-id="1" icon="iconxiatubiao--copy" title="主页" headerShow="{{headerShow}}" placeholder="{{hotSearchDefault}}" data-event-opts="{{[['^link',[['toIndex']]],['^search',[['toSearch']]]]}}" bind:link="__e" bind:search="__e" class="data-v-26b500c0" bind:__l="__l"></rf-search-bar><view class="category-list data-v-26b500c0"><scroll-view class="left data-v-26b500c0" scroll-y="true"><block wx:for="{{categoryList}}" wx:for-item="m" wx:for-index="index" wx:key="id"><block wx:if="{{m.child.length>0}}"><view data-event-opts="{{[['tap',[['showCategory',[index]]]]]}}" class="{{['row data-v-26b500c0',index==showCategoryIndex?'on':'']}}" bindtap="__e"><view class="text data-v-26b500c0"><view class="block data-v-26b500c0"></view>{{''+m.title+''}}</view></view></block></block></scroll-view><scroll-view class="right data-v-26b500c0" scroll-y="true"><block wx:for="{{categoryList}}" wx:for-item="n" wx:for-index="index" wx:key="id"><block wx:if="{{n.child.length>0}}"><view hidden="{{!(index==showCategoryIndex)}}" class="category data-v-26b500c0"><view data-event-opts="{{[['tap',[['indexTopToDetailPage',['$0','$1'],['cateTop.jump_type','cateTop.jump_link']]]]]}}" class="banner data-v-26b500c0" bindtap="__e"><image src="{{cateTop&&cateTop.cover}}" mode="aspectFill" class="data-v-26b500c0"></image></view><block wx:for="{{n.child}}" wx:for-item="o" wx:for-index="i" wx:key="i"><view data-event-opts="{{[['tap',[['navToList',['$0'],[[['categoryList','id',n.id],['child','',i,'id']]]]]]]}}" class="box data-v-26b500c0" bindtap="__e"><view class="text data-v-26b500c0">{{o.title}}</view><block wx:if="{{o.child.length>0}}"><view class="list data-v-26b500c0"><block wx:for="{{o.child}}" wx:for-item="p" wx:for-index="i" wx:key="i"><view data-event-opts="{{[['tap',[['navToList',['$0'],[[['categoryList','id',n.id],['child','',i],['child','',i,'id']]]]]]]}}" class="box data-v-26b500c0" catchtap="__e"><image src="{{p.cover}}" class="data-v-26b500c0"></image><view class="text data-v-26b500c0">{{p.title}}</view></view></block></view></block><block wx:else><view class="no-data data-v-26b500c0">该栏目暂无分类~</view></block></view></block></view></block></block></scroll-view></view></view>