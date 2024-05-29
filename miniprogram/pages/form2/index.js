Page({
  data: {
    imageUrl: '' // 用于存储随机图片的路径
  },
  onLoad: function (options) {
    var randomNumber = Math.floor(Math.random() * 10) + 1; // 生成随机数（1到10之间）
    var randomImageName = 'hx' + randomNumber; // 假设图片名称为image1、image2等
    var imageUrl = '/images/' + randomImageName + '.png'; // 图片路径
    this.setData({
      imageUrl: imageUrl
    });
  }
});
