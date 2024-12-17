const app = getApp();
var startX = 0;//手指触摸起始X坐标
var startY = 0;//手指触摸起始Y坐标
var curDrawArr = [];//手指经过的坐标点
var drawInfos = [];//用户绘制的每一个线条
var begin = false;//是否处于绘制状态
Page({
	data: {
		answer: "帅哥",
		hidden: true, // 是否隐藏生成海报的canvas
		bgColor: "white",//绘画板背景色
		currentColor: 'black',//画笔颜色
		windowWidth:0,//屏幕宽度
		avaliableColors: ["black", "red", "blue", "yellow"]//画笔可选颜色
	},
	/** 生命周期函数--监听页面加载*/
	onLoad() {
		this.setData({
			windowWidth:wx.getSystemInfoSync().windowWidth
		})
	},
	/*** 生命周期函数--监听页面初次渲染完成*/
	onReady() {
		
		this.context = wx.createCanvasContext("firstCanvas");
		// this.hiddenCanvasContext = wx.createCanvasContext("secondCanvas");
		this.init();
		this.fillBackground(this.context);
		this.context.draw();
	},
	// 初始化
	init() {
		this.context.setLineCap('round') // 让线条圆润
		this.context.strokeStyle = this.data.currentColor;
		this.setData({
			currentColor: this.data.currentColor
		});
	},
	// canvas上下文设置背景为白色
	fillBackground(context) {
		context.setFillStyle(this.data.bgColor);
		context.fillRect(0, 0, this.data.windowWidth, this.data.windowWidth); 
		context.fill();
	},
	
	/*---------------------------------- 绘制-------------------------*/
	
	// 绘制开始 手指开始按到屏幕上
	touchStart(e) {
		this.lineBegin(e.touches[0].x, e.touches[0].y);
		curDrawArr.push({
			x: e.touches[0].x,
			y: e.touches[0].y
		});
	},
	// 开始绘制线条
	lineBegin(x, y) {
		begin = true;
		this.context.beginPath();
		startX = x;
		startY = y;
		this.context.moveTo(startX, startY);
		this.lineAddPoint(x, y);
	},
	// 绘制线条中间添加点
	lineAddPoint(x, y) {
		this.context.moveTo(startX, startY);
		this.context.lineTo(x, y);
		this.context.stroke();
		startX = x;
		startY = y;
	},
	// 绘制中 手指在屏幕上移动
	touchMove(e) {
		if (begin) {
			this.lineAddPoint(e.touches[0].x, e.touches[0].y);
			this.context.draw(true);
			curDrawArr.push({
				x: e.touches[0].x,
				y: e.touches[0].y
			});
		}
	},
	// 绘制结束 手指抬起
	touchEnd() {
		drawInfos.push({
			drawArr: curDrawArr,
			color: this.data.currentColor
		});
		curDrawArr = [];
		// 绘制线条结束
		this.context.closePath();
		begin = false;
	},

	// 点击设置线条颜色
	clickChangeColor(e) {
		let color = e.currentTarget.dataset.color;
		this.data.currentColor = color;
		this.context.strokeStyle = color;
		this.setData({
			currentColor: color
		});
	},

	// 点击切换到擦除
	clickErase() {
		this.data.currentColor = this.data.bgColor;
		this.context.strokeStyle = this.data.bgColor;
		this.setData({
			currentColor: this.data.bgColor
		});
	},

	// 点击清空canvas
	clickClearAll() {
		this.fillBackground(this.context);
		this.context.draw();
		drawInfos = [];
		this.init();
	},

	// 点击撤销上一步
	clickFallback() {
		if (drawInfos.length >= 1) {
			drawInfos.pop();
		}
		// 根据保存的绘制信息重新绘制
		this.init();
		this.fillBackground(this.context);
		for (var i = 0; i < drawInfos.length; i++) {
			this.context.strokeStyle = drawInfos[i].color;
			this.context.setLineWidth(drawInfos[i].lineWidth);
			let drawArr = drawInfos[i].drawArr;
			this.lineBegin(drawArr[0].x, drawArr[0].y)
			for (var j = 1; j < drawArr.length; j++) {
				this.lineAddPoint(drawArr[j].x, drawArr[j].y);
			}
			// 绘制线条结束
			this.context.closePath();
			begin = false;
		}
		this.context.draw();
	},
	
	/*------------------ 点击分享 -------------------------*/

	clickShare() {
		// 截图用户绘制的canvaas
		wx.canvasToTempFilePath({
			x:0,
			y:0,
			height:this.data.windowWidth,
			width:this.data.windowWidth,
			destWidth: this.data.windowWidth,
			destHeight: this.data.windowWidth,
			canvasId: "firstCanvas",
			success: (res) => {
				// 分享
				wx.showShareImageMenu({
					path:res.tempFilePath
				})
			},
			fail: (res) => {
				console.log(res);
			}
		})
	},

	/*---------------------用户点击右上角分享-----------------------*/

	onShareAppMessage() {
		return {
			title: '来猜猜我画的是什么',
			success:(res)=> {
				// 转发成功
			},
			fail:(res)=>{
				// 转发失败
			}
		}
	},
})
