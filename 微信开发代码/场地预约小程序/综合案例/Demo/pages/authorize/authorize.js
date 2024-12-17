const app =getApp()
Page({
	authorize(e){
		// 授权成功后获取用户信息
		app.globalData.userInfo = e.detail.userInfo
		wx.switchTab({
			url:'/pages/index/index'
		})
	}
})