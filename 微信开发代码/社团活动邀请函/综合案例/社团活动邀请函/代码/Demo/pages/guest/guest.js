Page({
	data:{
		windowHeight:0,
		checkName:true,
		checkPhone:true,
		animation:''
	},
	onLoad(){
		// 获取屏幕可用高度
		let windowHeight=wx.getSystemInfoSync().windowHeight
		this.setData({
			windowHeight
		})
	},
	onShow(){
		this.animationMiddleHeaderItem()
	},
	// 提交表单
	formSubmit(e){
		if((e.detail.value.name.length>0 && e.detail.value.phone.length>0) && (this.data.checkName==true && this.data.checkPhone==true)){
			this.show("提交成功")
		}else{
			this.show("请输入正确的姓名和手机号码")
		}
	},
	// 用户提示
	show(msg){
		wx.showToast({
			title:msg,
			icon:'none'
		})
	},
	//检测姓名格式
	checkName(e){
		var reg=/^[\u4E00-\u9FA5A-Za-z]+$/
		if(!reg.test(e.detail.value)){
			this.show("姓名输入错误")
			this.setData({
				checkName:false
			})
		}else{
			this.setData({
				checkName:true
			})
		}
	},
	//检测手机号码格式
	checkPhone(e){
		var reg=/^(((13)|(15)|(17)|(18))\d{9})$/
		if(!reg.test(e.detail.value)){
			this.show("手机号码格式错误")
			this.setData({
				checkPhone:false
			})
		}else{
			this.setData({
				checkPhone:true
			})
		}
	},
	// 动画
	animationMiddleHeaderItem() {
		var circleCount = 0;
		// 外框动画  
		var animation = wx.createAnimation({
			duration: 1000, // 以毫秒为单位  
			timingFunction: 'linear',
			delay: 100,
			transformOrigin: '50% 50%',
			success: function(res) {}
		});
		setInterval(function() {
			if (circleCount % 2 == 0) {
				animation.scale(1.1).step();
			} else {
				animation.scale(1.0).step();
			}
			this.setData({
				animation: animation.export() //输出动画
			});
			circleCount++;
			if (circleCount == 1000) {
				circleCount = 0;
			}
		}.bind(this), 1000);
	}
	
})
