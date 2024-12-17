Page({
	data: {
		autoplay: false,//是否自动切换,默认为false
		num:1//同时显示滑块数量,默认为1
	},
	changeAutoplay() {
		this.setData({
			autoplay: !this.data.autoplay
		})
	},
	changeNum(e) {
		var n;
		console.log(e.detail.value)
		if(e.detail.value==true){
			n=2;
		}else{
			n=1;
		}
		console.log(n)
		this.setData({
			num:n
		})
	},
})
