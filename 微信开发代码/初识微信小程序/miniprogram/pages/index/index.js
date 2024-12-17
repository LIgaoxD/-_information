Page({
  data: {
    text: "这是修改前的内容"
  },
  onLoad: function (options) {
    //页面创建时执行
  },
  //事件响应函数
  buttontap: function () {
    this.setData({
      text: "这是修改后的内容"
    })
  }
})

/*
Component({
  data:{
    text:'修改之前的内容'
  },
  methods:{
    onLoad:function(options){
      //页面创建时执行

    },
    //事件响应函数
    buttontap:function(){
      this.setData({
        text:"这是修改后的内容"
      })
    }
  }
})



*/



