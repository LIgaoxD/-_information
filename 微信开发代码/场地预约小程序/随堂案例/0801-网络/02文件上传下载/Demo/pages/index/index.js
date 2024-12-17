Page({
	data: {
		path: '',
		list: [],
		inputValue:''
	},
	change(e){
		this.setData({
			inputValue:e.detail.value
		})
	},
	getInfo() {//下载文件并读取内容
		wx.downloadFile({
			url: "https://www.zhonghuiqh.com/user.txt",
			success: data=>{
				let arr = wx.getFileSystemManager().readFileSync(data.tempFilePath, "utf-8").split(",");
				this.setData({
					list: arr
				})
			}
		})
	},
	addInfo() {//添加数据并写入本地文件
		let arr=this.data.list
		let num=this.data.list.length+1
		arr.push(num+"."+this.data.inputValue)
		this.setData({
			list:arr
		})
		let str=this.data.list.toString()
		let fsm = wx.getFileSystemManager();
		fsm.writeFile({
			filePath: wx.env.USER_DATA_PATH + '/user.txt',
			data: str,
			encoding: 'utf8',
			success: res => {
				console.info(res)
				console.log(fsm.readFileSync(wx.env.USER_DATA_PATH + '/user.txt', "utf-8"))
			},
			fail: res => {
				console.info(res)
			}
		})
		this.setData({
			inputValue:''
		})
	},
	postInfo(){
		wx.uploadFile({
			url:"https://www.zhonghuiqh.com/test.php",//此接口会将上传的文件保存并覆盖掉原有的user.txt
			filePath:wx.env.USER_DATA_PATH + '/user.txt',
			name:"file",
			success:function(res){
				console.log(res)
				if(res.statusCode===200){
					wx.showToast({
						title:res.data
					})
				}
			},
			fail:function(res){
				console.log(res)
				wx.showToast({
					title:"上传失败"
				})
			}
		})
	},
	clear(){
		this.setData({
			list:[]
		})
	}
})
