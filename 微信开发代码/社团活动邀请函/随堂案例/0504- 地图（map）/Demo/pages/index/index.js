Page({
	data: {
		longitude:110,
		latitude:40,
		//标记信息
		markers:[{
			id:1,
			longitude:116.397915,
			latitude:39.903679,
			callout:{
				content:"天安门"
			}
		},{
			id:2,
			longitude:121.588011,
			latitude:38.881880,
			callout:{
				content:"星海广场"
			}
		}]
	},
	change1:function(){
		this.setData({
			longitude:116.397915,
			latitude:39.903679,
		})
	},
	change2:function(){
		this.setData({
			longitude:121.588011,
			latitude:38.881880,
		})
	}
})
