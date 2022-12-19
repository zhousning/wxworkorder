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
        currentTask: null,
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
        },
        showModal(e) {
            var that = this;
            var openid = wx.getStorageSync('openId');
            var taskid = e.currentTarget.dataset.taskid;
            wx.request({
                url: app.globalData.config.routes.task_member,
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
                        currentTask: taskid,
                        members: res.data.data
                    })
                }
            })
            that.setData({
                modalName: e.currentTarget.dataset.target
            })
        },
        hideModal(e) {
            this.setData({
                modalName: null
            })
        },
        transferMember(e) {
            var that = this;
            var members = that.data.members
            var openid = wx.getStorageSync('openId');
            var taskid = that.data.currentTask;
            var sites = []
            for (var i = 0; i < members.length; i++) {
                if (members[i].checked) {
                    sites.push(members[i].dept)
                }
            }
            if (sites.length > 0) {
                wx.request({
                    url: app.globalData.config.routes.task_transfer,
                    method: 'POST',
                    header: {
                        'Accept': "*/*",
                        'content-type': 'application/json' // 默认值
                    },
                    data: {
                        id: openid,
                        taskid: taskid,
                        sites: sites
                    },
                    success: function (res) {
                        that.setData({
                            modalName: null
                        })
                        wx.navigateTo({
                            url: "/pages/todos/detail/detail?task_id=" + taskid,
                        })
                    }
                })
            }
        },
        checkboxChange(e) {
            const members = this.data.members
            const values = e.detail.value
            for (let i = 0, lenI = members.length; i < lenI; ++i) {
                members[i].checked = false
                for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
                    if (members[i].dept === values[j]) {
                        members[i].checked = true
                        break
                    }
                }
            }
            this.setData({
                members
            })
        },
    }
})