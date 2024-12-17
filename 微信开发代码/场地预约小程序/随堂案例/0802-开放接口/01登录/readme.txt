登录接口练习
1.小程序端调用登录接口获取code
2.小程序端发送请求至服务端，传送获取到的code及用户信息
3，服务端验证用户信息，并发送请求至https://api.weixin.qq.com，获取openid、session_key（此为api演示demo，实际开发避免将登录信息发送至小程序端）
4.用户名和密码都为admin
注：server文件夹是服务端接口参考代码