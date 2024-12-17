//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  //事件处理函数
	top:function(){
		wx.showToast({
			title: '已滚动到最顶部',
			icon: 'success',
			duration: 2000
		})
	}
})
