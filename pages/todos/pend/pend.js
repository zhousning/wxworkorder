const syinit = require('../../../libs/syinit');
const app = getApp();

Component({
    options: {
        addGlobalClass: true
    },
    data: {
        StatusBar: app.globalData.StatusBar,
        CustomBar: app.globalData.CustomBar,
        workorders: []
    },
    lifetimes: {
        attached: function () {
            let that = this;
            var data = [{
                id: 1,
                number: 234234,
                infos: ['报修人员：周宁', '故障原因：水表坏了']
            }]
            that.setData({
                workorders: data
            })
            syinit.task_query_pend(that);
        },
    }
})