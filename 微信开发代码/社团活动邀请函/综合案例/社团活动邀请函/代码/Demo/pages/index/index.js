Page({
	onLoad(){
		let bgm = wx.getBackgroundAudioManager()
		bgm.title = 'MARRY ME';
		bgm.src = "https://www.zhonghuiqh.com/invite/music/bgm.mp3"
		this.setData({
			bgm
		})
	},
	onShow() {//开启背景音乐与动画
		this.data.bgm.play()
	},
	onHide(){//关闭背景音乐
		this.data.bgm.pause()
	},
	data: {
		bgm:''
	},
})
