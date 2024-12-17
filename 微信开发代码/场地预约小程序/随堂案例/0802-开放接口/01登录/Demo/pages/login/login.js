Page({
	data: {
		userName: '',
		password: '',
	},
	setName(e) {
		this.setData({
			userName: e.detail.value
		})
	},
	setPw(e) {
		this.setData({
			password: e.detail.value
		})
	},
	login() {
		wx.login({
			success:res=> {
				if (res.code) {
					//发起网络请求
					wx.request({
						url: 'https://www.zhonghuiqh.com/login.php',
						data: {
							code: res.code,
							userName:this.data.userName,
							passWord:this.data.password,
						},
						success:data=>{
							console.log(data)
							if(data.data==""){
								wx.showToast({
									title:"用户名或密码错误",
									icon:"none"
								})
								return;
							}
							wx.navigateTo({
								url:"/pages/index/index"
							})
						}
					})
				} else {
					console.log('登录失败！' + res.errMsg)
				}
			}
		})
	}
})
