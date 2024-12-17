const db = wx.cloud.database()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    address_list: [],
    uId: ''
  },
  // 前往添加新地址页面
  goAddNewAddress () {
    wx.navigateTo({
      url: '../../pages/newAddress/newAddress',
    })
  },
  // 单选框按钮勾选
  checkAddress (e) {
    const index = e.detail.value
    const data = this.data.address_list;
    var item = '';
    for(let i=0;i<data.length;i++){
      if(data[i]._id == index){
        item = data[i];
        break
      }
    }
    console.log(item)
    console.log(this.data.uId)
    db.collection('bill-list').doc(this.data.uId).update({
      data: {
        addressDetail: [item]
      },
      success: function(res){
        console.log(更新成功)
      }
    })
    wx.navigateTo({
      url: '../settlement/settlement'
    })
  },
  // 删除对应地址
  deleteItem (e) {
    var index = e.currentTarget.dataset.index;
    var data = this.data.address_list;
    var targetIndex = '';
    for(let i=0;i<data.length;i++){
      if(data[i]._id == index) {
        targetIndex = i;
      }
    }
    data.splice(targetIndex,1);
    this.setData({
      address_list: data
    })
    db.collection('address').doc(index).remove({
      success: function(res){
        console.log('删除成功');
      }
    })
    wx.showToast({
      title: '删除成功',
      icon: 'success',
      duration: 1500
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    db.collection('address').where({_openid: 'oFDcs5OzrHM3u_rYotRb5J9GmasY'}).get({
      success: function(res){
        _this.setData({
          address_list: res.data
        })
      }
    })
    const eventChannel = _this.getOpenerEventChannel()
    eventChannel.on('postBillId', function(data) {
      console.log(data)
      _this.setData({
        uId: data
      })
    })
  }
})