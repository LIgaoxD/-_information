Page({
	onLoad() {
		//屏幕可用高度-50(自定义导航栏)=可滚动容器高度
		let scrollHeight = wx.getSystemInfoSync().windowHeight - 50
		this.setData({
			scrollHeight,
			list:this.data.data[this.data.index]
		})
	},
	data: {
		index:0,
		// 场地信息数据
		data: [
			[{
				img: "../../images/icon/classroom.jpg",
				id:"A01",
				name: "小型教室",
				capacity: "30",
				equipment: "座椅、黑板",
				num: "20/40间"
			}, {
				img: "../../images/icon/classroom.jpg",
				id:"A02",
				name: "大型教室",
				capacity: "80",
				equipment: "座椅、黑板",
				num: "20/40间"
			}, {
				img: "../../images/icon/classroom.jpg",
				id:"A03",
				name: "多媒体教室",
				capacity: "60",
				equipment: "桌椅、黑板、电脑",
				num: "20/40间"
			}, {
				img: "../../images/icon/classroom.jpg",
				id:"A04",
				name: "美术教室",
				capacity: "30",
				equipment: "桌椅、黑板、画板、雕塑",
				num: "20/40间"
			}, {
				img: "../../images/icon/classroom.jpg",
				id:"A05",
				name: "舞蹈教室",
				capacity: "50",
				equipment: "镜子、音响",
				num: "20/40间"
			} ],
			 [{
				img: "../../images/icon/classroom.jpg",
				id:"B01",
				name: "自习室",
				capacity: "30",
				equipment: "座椅",
				num: "100/240位"
			}, {
				img: "../../images/icon/classroom.jpg",
				id:"B02",
				name: "展厅",
				capacity: "80",
				equipment: "桌椅、屏幕",
				num: "1/3间"
			} ],
			 [{
				img: "../../images/icon/classroom.jpg",
				id:"C01",
				name: "小型会议室",
				capacity: "10",
				equipment: "座椅、黑板",
				num: "5/10间"
			}, {
				img: "../../images/icon/classroom.jpg",
				id:"C02",
				name: "大型会议室",
				capacity: "80",
				equipment: "座椅、黑板、电脑、投影仪",
				num: "1/2间"
			}],
			 [{
				img: "../../images/icon/classroom.jpg",
				id:"D01",
				name: "足球场",
				capacity: "3000",
				equipment: "草地，足球门",
				num: "1/1座"
			}, {
				img: "../../images/icon/classroom.jpg",
				id:"D02",
				name: "篮球场",
				capacity: "30",
				equipment: "篮球架",
				num: "8/10座"
			}, {
				img: "../../images/icon/classroom.jpg",
				id:"D03",
				name: "游泳馆",
				capacity: "300",
				equipment: "泳池",
				num: "1/1座"
			}, {
				img: "../../images/icon/classroom.jpg",
				id:"D04",
				name: "乒乓球台",
				capacity: "30",
				equipment: "乒乓球桌",
				num: "3/20间"
			} ]
		]
	},
	change(e){
		this.setData({
			index:e.currentTarget.dataset.index
		})
	}
})
