Page({

  /**
   * 页面的初始数据
   */
  data: {
    ItemList: [{
      id: 0,
      text: '学习Vue的uniApp制作跨端小程序（一）',
      time: '2021/02/06 00:53:29',
      handle: false
    },{
      id: 1,
      text: '学习Vue的uniApp制作跨端小程序（二）',
      time: '2021/02/06 00:53:29',
      handle: false
    },{
      id: 2,
      text: '下午三点学习Vue的uniApp制作跨端小程序（三）',
      time: '2021/02/06 00:53:29',
      handle: false
    }]
  },
  // 显示操作菜单
  handleItem (e) {
    var iten_id = e.currentTarget.dataset.index,
        u_data = this.data.ItemList;
    for(let i=0; i<u_data.length; i++){
      if(u_data[i].id == iten_id){
        u_data[i].handle = true
      }else{
        u_data[i].handle = false
      }
    }
    // console.log(u_data[0])
    this.setData({
      ItemList: u_data
    })
  },
  // 删除删除按钮
  deleteItem(e){
    var s_id = e.currentTarget.dataset.index;
    var data = this.data.ItemList;
    var n = 0;
    for(let i=0;i<data.length;i++){
      if(data[i].id == s_id){
        n = i
        break
      }
    }
    data.splice(n,1)
    this.setData({
      ItemList: data
    })
  },
  // 更新按钮
  upItem(e){
    var s_id = e.currentTarget.dataset.index;
    var data = this.data.ItemList;
    var n = 0;
    var item = [];
    for(let i=0;i<data.length;i++){
      if(data[i].id == s_id){
        n = i
      }
    }
    item = data[n]
    wx.navigateTo({
      url: '../detail/detail?id=' + item.id,
      success: function(res) {
        res.eventChannel.emit('postData', item)
      }
    })
  },
  // 取消按钮
  cancelBtn (e) {
    var data = this.data.ItemList;
    for(let i=0;i<data.length;i++){
      data[i].handle = false
    }
    this.setData({
      ItemList: data
    })
  },
  // 添加新的事物列表
  addItem(){
    var item = []
    wx.navigateTo({
      url: '../detail/detail?id='+this.data.ItemList.length,
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('postData', item)
      }
    })
  },
  /*生命周期函数--监听页面加载*/
  onLoad: function (options) {
    var data = this.data.ItemList;
    var newData = '';
    if(options.pass != undefined){
      const eventChannel = this.getOpenerEventChannel()
      eventChannel.on('newData', function(data) {
        // console.log(data)
        newData = data
      })
      // 判断是否新增数据
      if(newData.id == data.length){
        data.push(newData)
      }else{
        data[newData.id] = newData
      }
      // console.log(data)
      this.setData({
        ItemList: data
      })
    }
  }
})