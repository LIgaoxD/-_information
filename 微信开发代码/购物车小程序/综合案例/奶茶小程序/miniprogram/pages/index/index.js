Page({
  onShow: function (options) {
    wx.cloud.callFunction({
      // 云函数名称
      name: 'add',
      // 传给云函数的参数
      data: {
        a: 1,
        b: 2,
      },
      success: function(res) {
        console.log(res.result) // 3
      },
      fail: console.error
    })
  }
})