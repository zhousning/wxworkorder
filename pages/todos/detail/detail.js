const syinit = require('../../../libs/syinit');

Page({
  options: {
    addGlobalClass: true
  },
  
  data: {
    taskid: null,
    workorder: {},
    rates: [],
    records: [],
  },

  onLoad: function (options) {
      console.log(options)
    this.setData({
        taskid: options.task_id
    })
  },
  onReady: function () {
    var that = this;
    syinit.task_query_info(that);
    syinit.task_query_rate(that);
    syinit.task_query_record(that);
  },
})