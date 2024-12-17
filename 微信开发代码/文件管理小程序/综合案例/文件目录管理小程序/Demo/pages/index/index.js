var fs;//文件对象
var dirPath;//要操作的目录路径
var filePath;//要操作的文件路径
Page({
	data: {
		list: [],//页面渲染的文件目录列表
		inputValue: '',//用户输入要操作的目录名
		inputfileValue: '',//用户输入要操作的文件名
		inputContent: ''//用户输入要操作的文本
	},
	onLoad() {
		fs = wx.getFileSystemManager();
	},
	//用户输入目录名
	changeInputValue(e) {
		dirPath=wx.env.USER_DATA_PATH + "/" + e.detail.value;
		this.setData({
			inputValue: e.detail.value
		})
	},
	//用户输入文件名
	changeInputfileValue(e) {
		filePath = wx.env.USER_DATA_PATH + "/" +  e.detail.value;
		this.setData({
			inputfileValue: e.detail.value
		})
	},
	//用户输入文本
	changeInputContent(e) {
		this.setData({
			inputContent: e.detail.value
		})
	},
	//清空输入框
	clearInput() {
		filePath='';
		dirPath='';
		this.setData({
			inputValue: '',
			inputfileValue: '',
			inputContent:''
		})
	},
	//添加目录
	addDir() { 
		fs.mkdir({
			dirPath: dirPath,
			success: data => {
				this.getList()
				this.clearInput()
			},
			fail: res => {
				this.show("创建失败")
			}
		})
	},
	//删除目录 
	rmDir() { 
		this.check(dirPath,()=>{
			fs.rmdir({
				dirPath: dirPath,
				success: data => {
					this.getList()
					this.clearInput()
				},
				fail: res => {
					this.show("删除失败")
				}
			})
		})
	},
		//获取当前文件列表
		getList() { 
			fs.readdir({
				dirPath: wx.env.USER_DATA_PATH,
				success: res => {
					this.setData({
						list: res.files
					})
				}
			})
		},
	//得到文件信息
	getFileInfo() { 
		this.check(filePath, ()=>{
			wx.getFileInfo({
				filePath: filePath,
				success: (res)=> {
					this.show("文件大小:" + res.size);
					console.log("文件大小:" + res.size);
					console.log("文件摘要:" + res.digest);	
				},
				fail: (res)=> {
					this.show("获取文件信息失败")
				}
			})
		})
	},
//添加文件
	addFile() { 
	// 选择文件获取临时地址
		wx.chooseMessageFile({
			success: (res) => {
				const name = res.tempFiles[0].name;
				// 将文件保存至本地
				fs.saveFile({
					tempFilePath: res.tempFiles[0].path,
					filePath: "http://store/",
					success: (res) => {
						// 重命名
						fs.rename({
							oldPath: res.savedFilePath,
							newPath: wx.env.USER_DATA_PATH + "/" + name,
							success: (res) => {
								this.getList()
								this.show("文件添加成功")
							},
							fail: (res) => {
								this.show("文件添加失败")
							}
						})
					},
					fail: (res) => {
						this.show("文件添加失败")
					}
				})
			}
		})
	},
	//读取文件
	readFile() {
		this.check(filePath,()=>{
			fs.readFile({
				filePath: filePath,
				encoding: "utf-8",
				success:(res)=> {
					this.setData({
						list:[res.data]
					})
					this.show("内容读取成功")
				},
				fail:(res)=> {
					this.show("内容读取失败")
				}
			})
		})
	},
	//向文件追加内容
	writeFile() {
		this.check(filePath,()=>{
			fs.appendFile({
				filePath: filePath,
				data: this.data.inputContent,
				encoding: "utf-8",
				success:(res) =>{
					this.readFile()
					this.show("内容添加成功")
				},
				fail:(res)=> {
					this.show("内容添加失败")
				}
			})
		})
	},
	
	//检测路径是否正确
	check(path, callback) {
		fs.access({
			path: path,
			success: (res) => {
				if (typeof callback == 'function') {
					callback()
				}
			},
			fail: (res) => {
				//路径不存在提示用户
				console.log(path)
				this.show("路径不存在")
			}
		})
	},
	// 提示用户
	show(title){
		wx.showToast({
			title: title,
			icon: "none"
		})
	}
})
