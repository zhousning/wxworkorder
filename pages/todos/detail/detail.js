const syinit = require('../../../libs/syinit');

Page({
  options: {
    addGlobalClass: true
  },
  /**
   * 页面的初始数据
   */
  data: {
    taskid: null,
    workorder: {},
    rates: [],
    records: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
        taskid: options.task_id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    //syinit.task_query_info(that);
    //syinit.task_query_rate(that);
    //syinit.task_query_record(that);
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
})