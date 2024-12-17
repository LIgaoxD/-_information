Page({
	data: {
		text:''
	},
	//事件处理函数
	changeText:function(e){
		this.setData({
			text:e.detail.value
		})
	},
	
	formSubmit: function(e) {
		wx.showToast({
    title:"用户名:"+e.detail.value.text+"密码:"+e.detail.value.password,
    icon:'none'
		});
	}
})
