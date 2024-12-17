//app.js
App({
	onLaunch: function() {
		// 通过wx.login获取code
		wx.login({
			success:res=>{
				if(res.code){
						//调用服务端api通过code换取openid（openid在实际开发中可存入服务端）
						wx.request({
							url:"https://www.zhonghuiqh.com/school/login.php?code="+res.code,
							success:res=>{
								this.globalData.openid=res.data.openid
							}
						});
						console.log(this.globalData.openid);
				}
        else{
					console.log("登录失败");
				}
			}
		})
		// 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.userInfo" 这个 scope
		wx.getSetting({
			success:(res)=> {
				if (res.authSetting['scope.userInfo']) {
					//通过wx.getUserInfo获取用户信息
					wx.getUserInfo({
						success: res => {
							this.globalData.userInfo = res.userInfo
						}
					})
				} else {
					wx.redirectTo({
						url: "/pages/authorize/authorize"
					})
				}
			}
		})
	},
	globalData: {
		userInfo: null,//用户信息
		openid:null//openid（实际开发中服务端可传递一个token开代替，openid保存于服务端即可）
	}
})
