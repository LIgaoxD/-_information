const app=getApp();
Page({
	onLoad(){
		if(app.globalData.userInfo==null){
			wx.redirectTo({
				url:"/pages/authorize/authorize"
			})
		}else{
			this.setData({
				userInfo:app.globalData.userInfo
			})
		}
	}
})