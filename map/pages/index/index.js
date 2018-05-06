//index.js
//获取应用实例
const app = getApp()

Page({
  //数据绑定
  data: {
  latitude:39.914769,
  longitude:116.404556,
  scale:15
  },
  onReady:function(){
// 小程序提供了获取经纬的方法
wx.getLocation({
  type: 'gcj02',
  success: (res) => {
  console.log(res.latitude,res.longitude);
  this.setData({
    latitude:res.latitude,
  longtitude:res.longitude,
  scale:18

  });
   }
})
  }
})
