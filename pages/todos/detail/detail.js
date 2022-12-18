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
        infoImgList: [],
        recordImgList: [],
    },

    onLoad: function (options) {
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
    ViewInfoImage(e) {
        wx.previewImage({
            urls: this.data.infoImgList,
            current: e.currentTarget.dataset.url
        });
    },
    ViewRecordImage(e) {
        wx.previewImage({
            urls: this.data.recordImgList,
            current: e.currentTarget.dataset.url
        });
    },
})