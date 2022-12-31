const app = getApp()

var init = {
    task_query_pend: function (that) {
        var openid = wx.getStorageSync('openId');
        wx.request({
            url: app.globalData.config.routes.task_query_pend,
            method: 'GET',
            header: {
                'Accept': "*/*",
                'content-type': 'application/json' // 默认值
            },
            data: {
                id: openid
            },
            success: function (res) {
                that.setData({
                    workorders: res.data
                })
            }
        })
    },
    task_query_process: function (that) {
        var openid = wx.getStorageSync('openId');
        wx.request({
            url: app.globalData.config.routes.task_query_process,
            method: 'GET',
            header: {
                'Accept': "*/*",
                'content-type': 'application/json' // 默认值
            },
            data: {
                id: openid
            },
            success: function (res) {
                that.setData({
                    workorders: res.data
                })
            }
        })
    },
    task_query_finish: function (that) {
        var openid = wx.getStorageSync('openId');
        wx.request({
            url: app.globalData.config.routes.task_query_finish,
            method: 'GET',
            header: {
                'Accept': "*/*",
                'content-type': 'application/json' // 默认值
            },
            data: {
                id: openid
            },
            success: function (res) {
                that.setData({
                    workorders: res.data
                })
            }
        })
    },
    task_query_unconfirm: function (that) {
        var openid = wx.getStorageSync('openId');
        wx.request({
            url: app.globalData.config.routes.task_query_unconfirm,
            method: 'GET',
            header: {
                'Accept': "*/*",
                'content-type': 'application/json' // 默认值
            },
            data: {
                id: openid
            },
            success: function (res) {
                that.setData({
                    workorders: res.data
                })
            }
        })
    },
    task_query_info: function (that) {
        var openid = wx.getStorageSync('openId');
        var taskid = that.data.taskid;
        wx.request({
            url: app.globalData.config.routes.task_query_info,
            method: 'GET',
            header: {
                'Accept': "*/*",
                'content-type': 'application/json' // 默认值
            },
            data: {
                id: openid,
                taskid: taskid
            },
            success: function (res) {
                var workorder = res.data;
                var wimgs = workorder.imgs == undefined ? [] : workorder.imgs;
                var imgs = [];
                for (var i=0; i < wimgs.length; i++){
                    imgs.push(app.globalData.config.routes.uhost + wimgs[i])
                }
                that.setData({
                    workorder: workorder,
                    imgs: imgs,
                    infoImgList: imgs,
                })
            }
        })
    },
    task_query_rate: function (that) {
        var openid = wx.getStorageSync('openId');
        var taskid = that.data.taskid;
        wx.request({
            url: app.globalData.config.routes.task_query_rate,
            method: 'GET',
            header: {
                'Accept': "*/*",
                'content-type': 'application/json' // 默认值
            },
            data: {
                id: openid,
                taskid: taskid
            },
            success: function (res) {
                that.setData({
                    rates: res.data
                })
            }
        })
    },
    task_query_record: function (that) {
        var openid = wx.getStorageSync('openId');
        var taskid = that.data.taskid;
        wx.request({
            url: app.globalData.config.routes.task_query_record,
            method: 'GET',
            header: {
                'Accept': "*/*",
                'content-type': 'application/json' // 默认值
            },
            data: {
                id: openid,
                taskid: taskid
            },
            success: function (res) {
                var records = res.data;
                var imgs = [];
                for (var i=0; i < records.length; i++){
                    var wimgs = records.imgs == undefined ? [] : records.imgs;
                    for (var j=0; j<wimgs.length; j++ ){
                        imgs.push(wimgs[j])
                    }
                }
                that.setData({
                    records: records,
                    recordImgList: imgs,
                })
            }
        })
    },
}

module.exports = init