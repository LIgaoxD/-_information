Page({
	data:{
		flexData:[{
			title:"flex-direction",
			arr:[" row ","row-reverse "," column "," column-reverse"]
		},{
			title:"flex-wrap",
			arr:[" nowrap "," wrap "," wrap-reverse"]
		},{
			title:"justify-content",
			arr:[" flex-start "," flex-end "," center "," space-between "," space-around"]
		},{
			title:"align-items",
			arr:[" flex-start "," flex-end "," center "," baseline "," stretch"]
		},{
			title:"align-content",
			arr:[" flex-start "," flex-end "," center "," space-between "," space-around"," stretch"]
		}],
		flex:'flex-direction',
		flexValue:''
	},
	change:function(e){
		//改变当前的flexValue
		console.log(e.currentTarget.dataset.info)
		this.setData({
			flexValue:e.currentTarget.dataset.info
		})
	},
	getFlex:function(e){
		//改变当前的flex
		console.log(e.currentTarget.dataset.info)
		this.setData({
			flex:e.currentTarget.dataset.info
		})
	}
})
