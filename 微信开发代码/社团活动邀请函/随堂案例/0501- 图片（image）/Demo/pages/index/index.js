Page({
	data: {
		array:[{
			text:"缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素",
			mode:"scaleToFill"
		},{
			text:"缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。",
			mode:"aspectFit"
		},{
			text:"缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。",
			mode:"aspectFill"
		},{
			text:"缩放模式，宽度不变，高度自动变化，保持原图宽高比不变",
			mode:"widthFix"
		},{
			text:"缩放模式，高度不变，宽度自动变化，保持原图宽高比不变",
			mode:"heightFix"
		},{
			text:"裁剪模式，不缩放图片，只显示图片的顶部区域",
			mode:"top"
		},{
			text:"裁剪模式，不缩放图片，只显示图片的底部区域",
			mode:"bottom"
		},{
			text:"裁剪模式，不缩放图片，只显示图片的左边区域",
			mode:"left"
		},{
			text:"裁剪模式，不缩放图片，只显示图片的右边区域",
			mode:"right"
		},{
			text:"裁剪模式，不缩放图片，只显示图片的左上边区域",
			mode:"top left"
		},{
			text:"裁剪模式，不缩放图片，只显示图片的右上边区域",
			mode:"top right"
		},{
			text:"裁剪模式，不缩放图片，只显示图片的左下边区域",
			mode:"bottom left"
		},{
			text:"裁剪模式，不缩放图片，只显示图片的右下边区域",
			mode:"bottom right"
		},],
		src:"/img/img1.jpg"
	},
	
})
