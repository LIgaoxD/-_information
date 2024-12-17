const db = wx.cloud.database()
Page({
  /*页面的初始数据*/
  data: {
    width: null,
    height: null,
    orders: [],
    checkId: [0,1],
    checkItem: [],
    selected: true,
    selectedAll: true,
    totalPrice: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // 获取云端数据(通过用户openID)
    db.collection('shopping-car').where({
      _openid: 'oFDcs5OzrHM3u_rYotRb5J9GmasY'
    }).get({
      success: function(res){
        var data = res.data
        var price = 0
        var cid = []
        for(let i=0;i<data.length;i++){
          price += data[i].number * data[i].price
          cid.push(data[i]._id)
        }
        that.setData({
          orders: data,
          totalPrice: price,
          checkId: cid
        })
      }
    })
    that.setData({
      height: wx.getSystemInfoSync().windowHeight,
      width: wx.getSystemInfoSync().windowWidth
    })
  },
  // 勾选商品
  checkboxChange (e) {
    var ids = e.detail.value;
    var data = this.data.orders;
    // 判断全选
    if(ids.length == data.length){
      this.setData({selectedAll: true})
    }else{
      this.setData({selectedAll: false})
    }
    // 获取当前data里面的数组，根据当前勾选的value值进行查询，弹出对应数据，并组在新的数据，单击结算按钮提交传输数据
    // this.getBillNumber(ids,orders);
    // 判断勾选状态 
    if(ids.length == 0){
      this.setData({
        totalPrice: 0
      })
    }else{
      // 计算总价
      var ttprice = 0;
      for(let i=0;i<data.length;i++){
        for(let d=0;d<ids.length;d++){
            if(data[i]._id == ids[d]){
              ttprice = ttprice + data[i].number * data[i].price
              break
            }
        } 
      }
      this.setData({
        totalPrice: ttprice
      })
    }
    this.setData({
      checkId: ids
    })
  },
  // 数量减少
  reduceNumber (e) {
    // 计算数量
    var indexS = e.target.dataset.index;
    var data = this.data.orders;
    console.log(data);
    var n = 0;
    for(let i=0;i<data.length;i++){
      if(data[i]._id == indexS){
        n = data[i].number
        break;
      }
    }
    n--;
    // 云端更新
    this.upItem(indexS,n)
    // 计算总价
    this.getItem(this)
    var newData = this.data.orders
    console.log(newData);
    this.priceTottalFun(this,newData)
  },
  // 数量增加
  addNumber (e) {
    // 计算数量
    var indexS = e.target.dataset.index;
    var data = this.data.orders;
    var n = 0;
    // 获取当前下标对应数量
    for(let i=0;i<data.length;i++){
      if(data[i]._id == indexS){
        n = data[i].number
        break;
      }
    }
    n++;
    // 更新指定数据
    this.upItem(indexS,n)
    // 计算总价
    this.getItem(this)
    var newData = this.data.orders
    this.priceTottalFun(this,newData)
  },
  // 获取云端数据函数(传个this指向进函数)
  getItem (that) {
    db.collection('shopping-car').where({
      _openid: 'oFDcs5OzrHM3u_rYotRb5J9GmasY'
    }).get({
      success: function(res){
        that.setData({
          orders: res.data
        })
        console.log('成功获取')
      }
    })
  },
  // 云端更新数据(指定ID)
  upItem (id,number){
    db.collection('shopping-car').doc(id).update({
      data: {
        number: number
      }
    })
  },
  // 计算总价函数
  priceTottalFun (that,item) {
    var priceTottal = 0;
    for(let i=0;i<item.length;i++){
      priceTottal += item[i].number * item[i].price;
    };
    that.setData({
      totalPrice: priceTottal
    })
  },
  // 删除按钮
  deleteBtn (e){
    var index = e.target.dataset.index;
    var data = this.data.orders;
    var new_index = null;
    console.log(index);
    for(let i=0;i<data.length;i++){
      if(data[i]._id == index){
        new_index = i
        break;
      }
    }
    data.splice(new_index,1);
    // 计算总价
    var priceTottal = 0;
    for(let i=0;i<data.length;i++){
      priceTottal = priceTottal + data[i].number * data[i].price;
    };
    this.setData({
      orders: data,
      totalPrice: priceTottal
    })
    // 云端数据删除操作
    db.collection('shopping-car').doc(index).remove({
      success: function(res){
        console.log('删除成功');
      }
    })
  },
  // 获取当前页面数据
  getBillNumber (cId,arr) {
    var billList = new Array();
    for(let i=0;i<arr.length;i++){
      for(let d=0;d<cId.length;d++){
        if(arr[i].id == cId[d]){
          billList.push(arr[i]);
          break;
        }
      }
    }
    console.log(billList);
    this.setData({
      checkItem: billList
    })
  },
  // 前往结算账单页面
  goSettlement () {
    var data = this.data.orders,
        ids = this.data.checkId,
        commodityList = [];
    for(let i=0;i<data.length;i++){
      for(let d=0;d<ids.length;d++){
        if(data[i]._id == ids[d]){
          commodityList.push(data[i]);
        }
      }
    }
    // console.log(commodityList);
    db.collection('bill-list').add({
      data: {
        addressSelect: false,
        addressDetail: [],
        commodityList: commodityList,
        totalPrice: this.data.totalPrice
      }
    })
    wx.navigateTo({
      url: '../settlement/settlement'
    })
  }
})