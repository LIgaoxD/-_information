Page({
	data:{
		// 数据
		arr:[{
			title:"相聚",
			time:"2010-1-31",
			src:"https://www.zhonghuiqh.com/invite/video/video1.mp4"
		},
		{
			title:"团结",
			time:"2016-2-19",
			src:"https://www.zhonghuiqh.com/invite/video/video2.mp4"
		},
		{
			title:"友爱",
			time:"2019-3-12",
			src:"https://www.zhonghuiqh.com/invite/video/video3.mp4"
		}],
		// 屏幕可用高度
		windowHeight:0
	},
	onLoad(){
		// 获取屏幕可用高度
		let windowHeight=wx.getSystemInfoSync().windowHeight
		this.setData({
			windowHeight
		})
	}
})
