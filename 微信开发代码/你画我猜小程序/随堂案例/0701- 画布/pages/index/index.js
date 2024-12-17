// index.js
Page({
	onReady() {
     const ctx=wx.createCanvasContext('customCanvas');
     ctx.setFillStyle('yellow');
     ctx.fillRect(30,30,100,50);
     ctx.draw();
	}
})
