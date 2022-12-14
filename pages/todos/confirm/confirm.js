const syinit = require('../../../libs/syinit');
const app = getApp()

Component({
  options: {
    addGlobalClass: true
  },
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar
    },
    lifetimes: {
        attached: function () {
            let that = this;
            syinit.task_query_unconfirm(that);
        },
    }
})
