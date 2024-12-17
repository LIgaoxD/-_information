Page({
  data: {
    backgroundImg: "../../images/bg/x2.jpg"
  },
  onShow: function () {
    this.fadeInBackground();
    setInterval(this.fadeInBackground, 10000); // Run the animation every 10 seconds  发现小程序好像不支持动画
  },
  fadeInBackground: function () {
    const animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    });
    animation.opacity(1).step();
    this.setData({
      backgroundImg: "../../images/bg/x2.jpg",
      backgroundAnimation: animation.export()
    });
  }
});
