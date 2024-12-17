var util = require('../../utils/util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: '',
    time: null,
    addId: null
  },
  /*页面加载*/
  onLoad: function (options) {
    var time = util.formatTime(new Date()),
        item = null,
        newId = null;
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('postData', function(data) {
      item = data
    })
    if(item.id == undefined){
      newId = options.id;
      console.log("新增记录")
    }else{
      newId = item.id;
      console.log("修改记录")
    }
    this.setData({
      item: item,
      time: time,
      addId: newId
    });
  },
  // 获取输入框值
  textBox(e){
    console.log(e)
    this.setData(
      {
        item:e.detail.value
      }
    )
    console.log(this.data.item)
  },
  submitBtn(){
    var item = {
      id: this.data.addId,
      text: this.data.item,
      time: this.data.time,
      handle: false
    }
    console.log(item.text)
    console.log(this.data.item)
    console.log(this.data.item.length)
    console.log(this.data.item.text)
    console.log(item);
    wx.navigateTo({
      url: '../index/index?pass=1',
      success: function(res) {
        res.eventChannel.emit('newData', item)
        console.log(item)
      }
    })
  }
  
})