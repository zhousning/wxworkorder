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
                that.setData({
                    workorder: res.data
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
                that.setData({
                    records: res.data
                })
            }
        })
    },
}

module.exports = init