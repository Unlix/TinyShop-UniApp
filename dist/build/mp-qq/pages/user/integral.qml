<view class="integral data-v-07fde2f4"><view class="header data-v-07fde2f4"><view class="title data-v-07fde2f4">当前积分</view><text class="num data-v-07fde2f4">{{''+(userInfo&&userInfo.account&&userInfo.account.user_integral||'0')+''}}</text><view class="line data-v-07fde2f4"></view><view class="nav data-v-07fde2f4"><view class="item data-v-07fde2f4"><text class="num data-v-07fde2f4">{{''+(userInfo&&userInfo.account&&userInfo.account.accumulate_integral||'0')+''}}</text><text class="title data-v-07fde2f4">累计积分</text></view><view class="item _div data-v-07fde2f4"><text class="num data-v-07fde2f4">{{''+(-(userInfo&&userInfo.account&&userInfo.account.consume_integral)||'0')+''}}</text><text class="title data-v-07fde2f4">累计消费</text></view><view class="item _div data-v-07fde2f4"><text class="num data-v-07fde2f4">{{''+(userInfo&&userInfo.frozen_integral&&userInfo.account.frozen_integral||'0')+''}}</text><text class="title data-v-07fde2f4">冻结积分</text></view></view><view class="tab _div data-v-07fde2f4"><block wx:for="{{navList}}" wx:for-item="item" wx:for-index="index" wx:key="index"><view data-event-opts="{{[['tap',[['nav',[index]]]]]}}" class="{{['item _div data-v-07fde2f4',current===index?'on':'']}}" bindtap="__e">{{''+item.name+''}}</view></block></view></view><view class="wrapper data-v-07fde2f4"><view class="list1 data-v-07fde2f4" hidden="{{current!==0}}"><view class="tip acea-row row-middle data-v-07fde2f4"><label class="iconfont icon-shuoming _span data-v-07fde2f4"></label>提示：积分数值的高低会直接影响您的会员等级</view><block wx:for="{{$root.l0}}" wx:for-item="item" wx:for-index="index" wx:key="index"><view class="list b-b data-v-07fde2f4"><view class="wrapper data-v-07fde2f4"><view class="address-box data-v-07fde2f4">{{''+item.$orig.remark+''}}</view><view class="u-box data-v-07fde2f4">{{''+item.f0+''}}</view></view><text class="{{['change-num data-v-07fde2f4',item.m0>=0?'change-num-add':'change-num-reduce']}}">{{item.f1}}</text></view></block><rf-load-more class="load-more data-v-07fde2f4" vue-id="1" status="{{loadingType}}" bind:__l="__l"></rf-load-more></view><view class="list2 data-v-07fde2f4" hidden="{{current!==1}}"><view class="item data-v-07fde2f4"><view class="pictrue data-v-07fde2f4"><image src="/static/score.png" mode="aspectFill" class="data-v-07fde2f4"></image></view><text class="name data-v-07fde2f4">购买商品可获得积分奖励</text><view data-event-opts="{{[['tap',[['toCategory',['$event']]]]]}}" class="earn data-v-07fde2f4" bindtap="__e">赚积分</view></view></view></view></view>