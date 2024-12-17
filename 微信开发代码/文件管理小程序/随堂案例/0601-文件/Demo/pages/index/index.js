Page({
	data: {
		list: [],
		inputValue: ''
	},
	change(e){
		this.setData({
			inputValue:e.detail.value
		})
	},
	clearInput(){
		this.setData({
			inputValue:''
		})
	},
	getList(){//获取当前文件列表
		let fs = wx.getFileSystemManager();
		fs.readdir({
			dirPath: wx.env.USER_DATA_PATH,
			success: res => {
				console.log(res.files)
				this.setData({
					list: res.files
				})
			}
		})
	},
	addDir() { //添加目录
		let fs = wx.getFileSystemManager();
		fs.mkdir({
			dirPath: wx.env.USER_DATA_PATH + "/" +this.data.inputValue,
			success: data => {
				this.getList()
				this.clearInput()
			},
			fail: res => {
				console.log(res)
				wx.showToast({
					title:"创建失败",
					icon:'none'
				})
			}
		})
	},
	rmDir() { //删除目录
		let fs = wx.getFileSystemManager();
		fs.rmdir({
			dirPath: wx.env.USER_DATA_PATH + "/" +this.data.inputValue,
			success: data => {
				this.getList()
				this.clearInput()
			},
			fail: res => {
				console.log(res)
				wx.showToast({
					title:"删除失败",
					icon:'none'
				})
			}
		})
	},

})


