Page({
	onLoad(){//获取缓存中的用户信息
		wx.checkSession({
			success:res=>{
				const accountInfo = wx.getAccountInfoSync();
				this.setData({
					loginState:true,
					appId:accountInfo.miniProgram.appId
				});
				wx.getUserInfo({
					success: res=> {
						this.setData({
              nickname:res.userInfo.nickName
						})
					}
				});
				wx.authorize({
					scope: 'scope.record',
					success(){
						wx.startRecord()
					}
				})
			}
		})
	},
  data:{
		loginState:false,
		nickname:"",
		appId:""
	},
})
