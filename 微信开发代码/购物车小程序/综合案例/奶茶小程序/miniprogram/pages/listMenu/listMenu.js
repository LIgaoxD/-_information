var db = wx.cloud.database()
Page({
  data: {
    currentTab: 0,
    flag: 0,
    // 购物车数据集合
    car_list: [],
    car_list_number: 0,
    project_list: []
  },
  switchNav: function(e){
    var page = this;
    var id = e.target.id;
    if(this.data.currentTab == id){
      return false;
    }else{
      page.setData({currentTab:id});
    }
    page.setData({flag:id});
  },
  changeIndex: function (e){
    var page = this;
    var id = e.detail.current;
    page.setData({flag: id});
  },
  getNumberIndex: function (e){
    var that = this;
    var f_index = parseInt(e.target.dataset.firstindex),
        l_index = parseInt(e.target.dataset.lastindex);
    // console.log(that.data.project_list[f_index].project[l_index]);
    var newCarList = [f_index,l_index];
    var old_list = that.data.car_list;
    var new_list = old_list.push(newCarList);
    that.setData({
      car_list_number: new_list
    });
  },
  goCar () {
    var carListIndex = this.data.car_list;
    var sumData = this.data.project_list;
    for(let i=0;i<carListIndex.length;i++){
      // console.log(carListIndex[i]);// 第一个数据代表所在行，第二个数据代表所在列表
      for(let d=0;d<sumData.length;d++){
        if(sumData[d].id == carListIndex[i][0]){
          for(let r=0;r<sumData[d].project.length;r++){
            if(sumData[d].project[r].id == carListIndex[i][1]){
              db.collection('shopping-car').add({
                data: {
                  id: sumData[d].project[r].id,
                  img_url: sumData[d].project[r].img_url,
                  info: sumData[d].project[r].info,
                  price: sumData[d].project[r].price,
                  title: sumData[d].project[r].title,
                  number: 1
                }
              })
              break
            }
          }
        }
      }
    }
    wx.navigateTo({
      url: '../../pages/shoppingCart/shoppingCart',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      height: wx.getSystemInfoSync().windowHeight,
      width: wx.getSystemInfoSync().windowWidth,
      car_list_number: this.data.car_list.length
    })
    // 获取云端commodity-list集合里面的所有数据
    db.collection('commodity-list').get({
      success: function(res) {
        console.log(res);
        that.setData({
          project_list: res.data
        })
      }
    })
  }
})