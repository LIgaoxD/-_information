Page({
  data: {
    //省市区选择框初始值
    region: ['四川省', '成都市', '武侯区'],
    //快递标签
    mailLabel: [{
      id: 0,
      text: '易碎'
    },{
      id: 1,
      text: '贵重物品'
    },{
      id: 2,
      text: '禁止沾水'
    },{
      id: 3,
      text: '其他'
    }],
    //寄件人信息
    mailInfo: {
      name: null,
      phone: null,
      city: null,
      label: null
    },
    //收件人信息
    collectInfo: {
      name: null,
      phone: null,
      address: null,
    },
    //付款方式标识
    payCheck: null
  },
  onLoad() {},
  // 获取寄件人备注
  mailName (e) {
    this.data.mailInfo.name = e.detail.value
  },
  mailPhone  (e) {
    this.data.mailInfo.phone = e.detail.value
  },
  mailLabel (e) {
    this.data.mailInfo.label = e.detail.value
  },
  // 获取区域值
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value,
    })
    this.data.mailInfo.city = this.data.region;
  },
  // 收件人数据
  collectName (e) {
    this.data.collectInfo.name = e.detail.value
  },
  collectPhone (e) {
    this.data.collectInfo.phone = e.detail.value
  },
  collectAdress (e) {
    this.data.collectInfo.address = e.detail.value
  },
  submitBtn(){
    console.log(this.data)
    wx.showToast({
      title: '寄件成功',
      icon: 'success',
      duration: 2000
    })
  }
})
