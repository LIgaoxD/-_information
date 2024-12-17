Page({
	data:{
		//屏幕高度
		windowHeight:0,
		// 地图经纬度
		longitude:121.580715,
		latitude:38.887158,
		// 标记点
		markers:[{
			longitude:121.596234,
			latitude:38.877950,
			iconPath:"../../images/icon/map.png",
			width:50,
			height:50,
		}]
	},
	onLoad(){//获取屏幕可用高度
		let windowHeight=wx.getSystemInfoSync().windowHeight
		this.setData({
			windowHeight
		})
	},
	
})
