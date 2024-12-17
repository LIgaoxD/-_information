Page({
	data: {
		//轮播图数据
		imgArr: [{
				src: "../../image/1683254090272.jpg"
			},
			{
				src: "../../image/1683254090274.jpg"
			},
			{
				src: "../../image/1683254090277.jpg"
			},
			{
				src: "../../image/1683255895738.jpg"
			}
		],
		//新闻数据
		newsArr: [{
				id: 1,
				type: 1, //新闻类型
				title: "大学生为家乡带货超20亿元",
				author: "校园记者",
				time: "2020-01-14",
				image: "../../image/1683254090272.jpg"
			},
			{
				id: 2,
				type: 2,
				title: "南昌民营企业发展成果摄影展开幕",
				author: "校园记者",
				time: "2020-01-14",
				image: "../../image/1683254090274.jpg"
			},
			{
				id: 3,
				type: 1,
				title: "大学生何时能接种新冠疫苗？",
				author: "校园记者",
				time: "2020-01-14",
				image: "../../image/1683254090277.jpg"
			},
			{
				id: 4,
				type: 1,
				title: "众志成城,抗击疫情",
				author: "校园记者",
				time: "2020-01-14",
				image: "../../image/1683255895738.jpg"
			},
			{
				id: 5,
				type: 2,
				title: "江西规范校外培训机构设置标准",
				author: "校园记者",
				time: "2020-01-14",
				image: "../../image/1683254090272.jpg"
			}
		],
		//指定scroll-view滚动指定位置
		scrollIntoId: '',
		//scroll-view组件可用高度
		windowHeight: 0
	},
	onLoad() {
		//获取屏幕可用高度
		this.setData({
			windowHeight: wx.getSystemInfoSync().windowHeight
		})
	},
	//悬浮按钮点击事件处理函数
	backTop: function () {
		//回到顶部
		this.setData({
			scrollIntoId: "top"
		})
	}

})