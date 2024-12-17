//app.js
App({
	// 小程序生命周期函数——监听小程序初始化
	onLaunch() {
		console.log("app onLaunch");
	},
	// 小程序生命周期函数——监听小程显示
	onShow() {
		console.log("app onShow");
	},
	// 小程序生命周期函数——监听小程隐藏
	onHide() {
		console.log("app onHide");
	},
	// 小程序生命周期函数——监听小程错误
	onError() {
		console.log("app onError");
	},
	globalData: 'hello'
})
