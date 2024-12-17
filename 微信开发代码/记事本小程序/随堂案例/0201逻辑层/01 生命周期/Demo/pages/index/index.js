Page({
	// 页面生命周期函数——监听页面加载
	onLoad(){
		console.log("page onLoad");
		const appInstance = getApp()
		console.log("————"+appInstance.globalData)
		console.log("————————"+this.data.userName)
	},
	// 页面生命周期函数——监听页面初次渲染完成
	onReady(){
		console.log("page onReady");
	},
	// 页面生命周期函数——监听页面显示
	onShow(){
		console.log("page onShow");
	},
	// 页面生命周期函数——监听页面隐藏
	onHide(){
		console.log("page onHide");
	},
	// 页面生命周期函数——监听页面卸载
	onUnload(){
		console.log("page onUnload");
	},
	data:{
		userName:"张三"
	}
})
