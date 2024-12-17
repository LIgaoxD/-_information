const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['四川省', '成都市', '武侯区'],
    customItem: '全部',
    address: null,
    user_name: null,
    user_phone: null,
    gender: null
  },
  // 选择地区
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  // 获取详细地址
  detailAddress(e){
    var data = this.data.region
    var region = '';
    for(let i=0;i<data.length;i++){
      region += data[i];
    }
    // console.log(region)
    this.setData({
      address: region + e.detail.value
    })
  },
  // 获取用户名称
  userName (e) {
    this.setData({
      user_name: e.detail.value
    })
  },
  // 获取用户性别
  userGender (e){
    var genderSuffix = '';
    if(e.detail.value == "男"){
      genderSuffix = "先生"
    }else{
      genderSuffix = "女士"
    }
    // console.log(e.detail.value)
    this.setData({
      gender: genderSuffix
    })
  },
  // 获取用户电话号码
  userPhone (e) {
    this.setData({
      user_phone: e.detail.value
    })
  },
  // 保存地址
  preservation () {
    var _this = this;
    db.collection('address').add({
      data: {
        name: _this.data.user_name + _this.data.gender,
        phone: _this.data.user_phone,
        address: _this.data.address
      },
      success: function(res) {
        _this.setData({
          region: ['四川省', '成都市', '武侯区'],
          customItem: '全部',
          address: null,
          user_name: null,
          user_phone: null,
          gender: null
        })
        wx.navigateTo({
          url: '../address/address',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }
})