<view class="app"><view class="price-box"><text>支付金额</text><text class="price">{{money}}</text></view><view class="pay-type-list"><block wx:if="{{$root.m0===1}}"><view data-event-opts="{{[['tap',[['changePayType',[1]]]]]}}" class="type-item b-b" bindtap="__e"><view class="iconfont icon iconweixinzhifu _i"></view><view class="con"><text class="tit">微信支付</text><text>推荐使用微信支付</text></view><label class="radio"><radio value="" color="#fa436a" checked="{{payType==1}}"></radio></label></view></block><block wx:if="{{$root.m1===1}}"><view data-event-opts="{{[['tap',[['changePayType',[2]]]]]}}" class="type-item b-b" bindtap="__e"><view class="iconfont icon iconalipay _i"></view><view class="con"><text class="tit">支付宝支付</text></view><label class="radio"><radio value="" color="#fa436a" checked="{{payType==2}}"></radio></label></view></block><view data-event-opts="{{[['tap',[['changePayType',[5]]]]]}}" hidden="{{!($root.m2===1)}}" class="type-item" bindtap="__e"><view class="iconfont icon iconerjiye-yucunkuan _i"></view><view class="con"><text class="tit">预存款支付</text><text>{{"可用余额 "+(userInfo&&userInfo.account&&userInfo.account.user_money)}}</text></view><label class="radio"><radio value="" color="#fa436a" checked="{{payType===5}}"></radio></label></view></view><text data-event-opts="{{[['tap',[['confirm',['$event']]]]]}}" class="mix-btn" bindtap="__e">确认支付</text></view>