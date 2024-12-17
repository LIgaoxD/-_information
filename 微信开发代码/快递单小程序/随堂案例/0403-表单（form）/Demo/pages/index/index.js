Page({
	data: {
		
	},
	//事件处理函数
	formRest: function() {
		wx.showToast({
			title: "表单已重置",
			icon: 'success'
		});
	},
	formSubmit: function(e) {
		console.log(e);
		wx.showToast({
			// 将获取到的参数转化成字符串
			title: "您要提交的是"+e.detail.value.check.join(','),
			icon: 'none'
		});
	}
})
