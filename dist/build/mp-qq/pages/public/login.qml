<view class="container"><view data-event-opts="{{[['tap',[['navBack',['$event']]]]]}}" class="back-btn iconfont iconzuojiantou-up _i" bindtap="__e"></view><view class="right-top-sign"></view><view class="wrapper"><view class="left-top-sign">LOGIN</view><view class="welcome">欢迎回来！</view><view class="input-content"><form data-event-opts="{{[['submit',[['toLogin',['$event']]]]]}}" bindsubmit="__e"><view class="input-item"><text class="tit">手机号码</text><input type="number" name="mobile" placeholder="请输入手机号码" maxlength="11" data-event-opts="{{[['blur',[['blurMobileChange',['$event']]]]]}}" value="{{mobile}}" bindblur="__e"/></view><view hidden="{{!(loginByPass)}}" class="input-item"><text class="tit">密码</text><input name="password" type="password" placeholder="请输入密码" maxlength="20" value="{{password}}"/></view><view hidden="{{!(!loginByPass)}}" class="input-item input-item-sms-code"><text class="tit">验证码</text><input type="number" name="code" placeholder="请输入验证码" maxlength="6" data-key="mobile" value="{{code}}"/><button class="sms-code-btn" disabled="{{smsCodeBtnDisabled}}" data-event-opts="{{[['tap',[['getSmsCode']]]]}}" bindtap="__e"><block wx:if="{{!smsCodeBtnDisabled}}"><label class="btn _span">获取验证码</label></block><block wx:else><label class="sms-code-resend _span">{{'重新发送 ('+codeSeconds+')'}}</label></block></button></view><button class="confirm-btn" formType="submit" disabled="{{logining}}">登录</button></form></view><view data-event-opts="{{[['tap',[['showLoginBySmsCode',['$event']]]]]}}" class="forget-section" bindtap="__e">{{''+(loginByPass?"验证码登录":"密码登录")+''}}</view><view data-event-opts="{{[['tap',[['navTo',['/pages/public/password']]]]]}}" class="forget-section" bindtap="__e">忘记密码?</view></view><view class="register-section">还没有账号?<text data-event-opts="{{[['tap',[['navTo',['/pages/public/register']]]]]}}" bindtap="__e">马上注册</text>或者<text data-event-opts="{{[['tap',[['toHome',['$event']]]]]}}" bindtap="__e">返回主页</text></view></view>