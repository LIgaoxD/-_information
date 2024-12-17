// app.js
App({
 //微信小程序生命周期函数  监听小程序初始化
 onLaunch(){
   console.log("app 运行");
 },
//监听小程序显示
onShow(){
  console.log("app 显示");
},
//监听小程序隐藏
onHide(){
  console.log("app 隐藏");
},
//监听小程序错误
onError(){
  console.log("app 错误");
  },
  globalData:"hello"

});
