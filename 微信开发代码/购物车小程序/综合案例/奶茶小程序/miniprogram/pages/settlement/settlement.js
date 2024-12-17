const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address_selected: null,
    addressDetail: {},
    commodityList: [],
    totalPrice: 0,
    bId: null
  },
  // 单击地址添加实现
  selectAddress () {
    var id = this.data.bId;
    wx.navigateTo({
      url: '../../pages/address/address',
      success: function(res){
        res.eventChannel.emit('postBillId', id)
      }
    })
  },
  // 确认账单并支付按钮
  payBtn () {
    var _this = this;
    wx.showToast({
      title: '支付成功',
      icon: 'success',
      duration: 2000
    })
    db.collection('bill-list').add({
      data: {
        addressDetail: _this.data.addressDetail,
        commodityList: _this.data.commodityList,
        totalPrice: _this.data.totalPrice
      }
    })
    db.collection('bill-list').doc(this.data._id).update({
      data:{
        addressSelect: _this.data.address_selected,
        addressDetail: _this.data.addressDetail
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    db.collection('bill-list').where({
      _openid: 'oFDcs5OzrHM3u_rYotRb5J9GmasY'
    }).get({
      success: function(res){
        var data = res.data;
        _this.setData({
          addressDetail: data[0].addressDetail[0],
          address_selected: data[0].addressSelect,
          commodityList: data[0].commodityList,
          totalPrice: data[0].totalPrice,
          bId: data[0]._id
        })
        if(data[0].addressDetail.length == 0){
          _this.setData({
            address_selected: false
          })
        }else{
          _this.setData({
            address_selected: true
          })
        }
      } 
    })
    console.log(_this.data);
  }
})