const syinit = require('../../../libs/syinit');
const app = getApp();

Component({
    options: {
        addGlobalClass: true
    },
    data: {
        StatusBar: app.globalData.StatusBar,
        CustomBar: app.globalData.CustomBar,
        workorders: [],
    },
    lifetimes: {
        attached: function () {
            let that = this;
            syinit.task_query_pend(that);
        },
    },
    methods: {
        accept_task: function (e) {
            var that = this;
            wx.showModal({
                title: '温馨提示',
                content: '接单请合理安排时间',
                cancelText: '取消',
                confirmText: '立即接单',
                success: res => {
                    if (res.confirm) {
                        var openid = wx.getStorageSync('openId');
                        var taskid = e.currentTarget.dataset.taskid;
                        wx.request({
                            url: app.globalData.config.routes.task_accept,
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
                                if (res.data.state == 'success') {
                                    syinit.task_query_pend(that);
                                }
                            }
                        })
                    }
                }
            })
        }
    }
})