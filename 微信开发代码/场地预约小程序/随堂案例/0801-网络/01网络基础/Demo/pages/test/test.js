// pages/test/test.js
Page({
  data:{
    telphonenum:'',  //存储手机号码
    result:{}       //接受接口返回数据
  },
  change:function(e){
      this.setData({
        telphonenum:e.detail.value
      })
  },
  btntap:function(){ //点击查询按钮后，访问数据接口，若访问成功，则返回查询数据
    var that=this;
    wx.request({
      url: 'https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel='+this.data.telphonenum,
      method:'GET',
      dataType:'json',
      success:function(res){
          that.setData({
             result:res.data
          });
          console.log(that.data.result)
      }
    })
  }
})