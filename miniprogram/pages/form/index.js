Page({
  data: {
    result: '', 
    inputValue: '' 
  },
  inputChange: function (e) {
    // 当输入框内容发生变化时触发
    this.setData({
      inputValue: e.detail.value // 将输入框的值存储在 data 中
    });
  },
  search: function () {
    // 点击搜索按钮时触发
    const inputValue = this.data.inputValue; // 获取输入框的值
    if (inputValue === 'cd') {
      // 如果输入值为 'cd'，展示"进入目录"的文字
      this.setData({
        result: '进入之后衔接的目录'
      });
    } else if (inputValue === 'pwd') {
     
      this.setData({
        result: '打印当前目录'
      });
    } else if (inputValue === '虹夏') {
    
      this.setData({
        result: '世界上最可爱的大天使' //虹夏老婆世界第一可爱捏！！！！
      });
    } else if (inputValue === 'ls') {
      
      this.setData({
        result: '展示当前目录下内容'
      });
    } else {
      // 其他情况，清空搜索结果
      this.setData({
        result: ''
      });
    }
  }
});
