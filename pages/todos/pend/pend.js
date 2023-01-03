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
        ready: function () {
            let that = this;
            let privicy = wx.getStorageSync('privicy');
            if (app.globalData.hasUserInfo) {
                wx.getSetting({
                    withSubscriptions: true,
                    success: function (res) {
                        if (res.subscriptionsSetting.mainSwitch) { // 需要先打开订阅消息总开关，才能执行消息订阅
                            if (res.subscriptionsSetting.itemSettings != null) {
                                let moIdState = res.subscriptionsSetting.itemSettings['nPjUxdiDpXX09e_K3dWUiYp7gSQ_fU50gr6WcQOLwxU'];
                                if (moIdState === 'accept') {
                                    console.log('接受了消息推送');
                                } else if (moIdState === 'reject') {
                                    setTimeout(() => {
                                        wx.navigateTo({
                                            url: '/pages/todos/auth/auth',
                                        })
                                    }, 500)
                                } else if (moIdState === 'ban') {
                                    console.log("已被后台封禁");
                                }
                            } else {
                                that.subInfo();
                            }

                        } else {
                            setTimeout(() => {
                                wx.navigateTo({
                                    url: '/pages/todos/auth/auth',
                                })
                            }, 500)
                        }
                    },
                    fail: function (error) {
                        console.log(error);
                    },
                })

                if (!privicy) {
                    that.setData({
                        modalShow: 'show'
                    })
                }
            }
        }
    },
    methods: {
        subInfo: function () {
            wx.showModal({
                title: '提示',
                content: '请授权开通服务通知',
                showCancel: true,
                success: function (ress) {
                    if (ress.confirm) {
                        wx.requestSubscribeMessage({ // 调起消息订阅界面,拒绝/总是之后该界面将不会被调用
                            tmplIds: ['nPjUxdiDpXX09e_K3dWUiYp7gSQ_fU50gr6WcQOLwxU']
                        })
                    }
                }
            })
        },
        privicyConfirm: function (e) {
            let that = this;
            wx.setStorageSync("privicy", e.detail.value)
            setTimeout(function () {
                that.setData({
                    modalShow: ''
                })
            }, 1000)
        },
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