Page({
  data: {
    check1:false
  },
  //事件处理函数
  change:function(e){
		wx.showToast({
			title:"您选择了"+e.detail.value.join(','),
			icon:'none'
		});
	}
})
