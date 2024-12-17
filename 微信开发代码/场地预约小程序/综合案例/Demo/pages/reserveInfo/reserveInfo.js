var util = require("../../utils/util.js");
const app=getApp();
Page({
	onLoad: function(options) {
		// 获取参数
		let name = options.name
		let id = options.id
		this.setData({
			name,
			id,
			dateStart: util.formatDate(new Date()),
			dateEnd: util.formatDate(new Date())
		})
	},
	data: {
		dateStart: '2020-1-1',
		dateEnd: '2020-1-1'
	},
	dateStartChange: function(e) {
		this.setData({
			dateStart: e.detail.value
		})
	},
	dateEndChange: function(e) {
		this.setData({
			dateEnd: e.detail.value
		})
	},
	//用户提示窗口
	show(msg) {
		wx.showToast({
			title: msg,
			icon: 'none'
		})
	},
	//日期验证
	isDate(d1, d2) {
		return ((new Date(d1.replace(/-/g, "\/"))) <= (new Date(d2.replace(/-/g, "\/"))));
		//传入值，如果第一个值晚于第二个值则返回true，否则返回false
	},
	//电话验证
	isPoneAvailable(telephone) {
		var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
		if (!myreg.test(telephone)) {
			return false;
		} else {
			return true;
		}
	},
	submit(e) {
		console.log(e.detail.value)
		const data = e.detail.value
		if(data.name==''||data.explain==''||data.class==''||data.certificates==''){
			this.show("请提交完整的申请表")
			return
		}
		if (!this.isPoneAvailable(data.phone)) {
			this.show("重新输入手机号")
			return
		}
		if (!this.isDate(data.dateStart, data.dateEnd)) {
			this.show("请检测申请日期")
			return
		}
		// 消息订阅授权
		wx.requestSubscribeMessage({
			tmplIds:[''],
			success:res=>{
				// 授权成功后提交数据,服务端验证数据并调用微信服务端api发送预约消息给用户
				wx.request({
					url:"https://www.zhonghuiqh.com/school/form.php",
					data:{
						openid:app.globalData.openid,
						name:data.name,
						date1:data.dateStart,
						date2:data.dateEnd,
						place:this.data.name
					},
					header:{
						"content-type":"application/x-www-form-urlencoded"
					},
					method:"POST",
					success:(res)=>{
						this.show("提交成功")
					},
					fail:(res)=>{
						this.show(res.errMsg)
					}
				})
			}
		})
	}
})
