<view class="serach"><view class="content" style="{{'border-radius:'+(radius+'px')+';'}}"><view data-event-opts="{{[['tap',[['getFocus',['$event']]]]]}}" class="{{['content-box',(mode===2)?'center':'']}}" bindtap="__e"><view class="yticon icon-sousuo"></view><input class="{{['input',(!active&&mode===2)?'center':'']}}" placeholder="{{placeholder}}" confirm-type="search" focus="{{isFocus}}" data-event-opts="{{[['input',[['__set_model',['','inputVal','$event',[]]],['inputChange',['$event']]]],['confirm',[['triggerConfirm',['$event']]]],['focus',[['focus',['$event']]]],['blur',[['blur',['$event']]]]]}}" value="{{inputVal}}" bindinput="__e" bindconfirm="__e" bindfocus="__e" bindblur="__e"/><block wx:if="{{isDelShow}}"><text data-event-opts="{{[['tap',[['clear',['$event']]]]]}}" class="icon icon-del" catchtap="__e"></text></block></view><view data-event-opts="{{[['tap',[['search',['$event']]]]]}}" hidden="{{!(active&&show&&button==='inside'||isDelShow&&button==='inside')}}" class="serachBtn" bindtap="__e">搜索</view></view><block wx:if="{{button==='outside'}}"><view data-event-opts="{{[['tap',[['search',['$event']]]]]}}" class="{{['button',(show||active)?'active':'']}}" bindtap="__e"><view class="button-item">{{!show?searchName:'搜索'}}</view></view></block></view>