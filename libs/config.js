var configs = {
  wxtemplate: ['nPjUxdiDpXX09e_K3dWUiYp7gSQ_fU50gr6WcQOLwxU'],
  routes: {
    /*getUserId: 'https://www.bafangjie.cn/wx_users/get_userid',
    updateUser: 'https://www.bafangjie.cn/wx_users/',
    getUserId: 'https://nwqdxt.swgysw.com:9418/wx_users/get_userid',*/
    //host: 'https://nwqdxt.swgysw.com:9418/',
    //getUserId: 'https://nwqdxt.swgysw.com:9418/wx_users/get_userid',
    //updateUser: 'https://nwqdxt.swgysw.com:9418/wx_users/',
    //getUserInfo: 'https://nwqdxt.swgysw.com:9418/wx_users/get_user_info',
    //fcts: 'https://nwqdxt.swgysw.com:9418/wx_users/fcts',
    //devices: 'https://nwqdxt.swgysw.com:9418/wx_users/areas',
    //streets: 'https://nwqdxt.swgysw.com:9418/wx_users/streets',
    //sites: 'https://nwqdxt.swgysw.com:9418/wx_users/sites',
    //status: 'https://nwqdxt.swgysw.com:9418/wx_users/status',
    //identity: 'https://nwqdxt.swgysw.com:9418/wx_users/identity',
    //set_fct: 'https://nwqdxt.swgysw.com:9418/wx_users/set_fct',
    //img_upload: 'https://nwqdxt.swgysw.com:9418/wx_resources/img_upload',
    //task_query_all: 'https://nwqdxt.swgysw.com:9418/wx_tasks/query_all',
    //task_query_finish: 'https://nwqdxt.swgysw.com:9418/wx_tasks/query_finish',
    //task_query_plan: 'https://nwqdxt.swgysw.com:9418/wx_tasks/query_plan',
    //task_basic_card: 'https://nwqdxt.swgysw.com:9418/wx_tasks/basic_card',
    //task_info: 'https://nwqdxt.swgysw.com:9418/wx_tasks/task_info',
    //task_start: 'https://nwqdxt.swgysw.com:9418/wx_task_logs/task_start',
    //task_end: 'https://nwqdxt.swgysw.com:9418/wx_task_logs/task_end',
    //task_report_create: 'https://nwqdxt.swgysw.com:9418/wx_tasks/report_create',
    //task_accept_points: 'https://nwqdxt.swgysw.com:9418/wx_task_logs/accept_points',
    //auth_process: 'https://nwqdxt.swgysw.com:9418/wx_auths/auth_process',
    host: 'http://192.168.100.108:3000/',
    getUserId: 'http://192.168.100.108:3000/wx_users/get_userid',
    updateUser: 'http://192.168.100.108:3000/wx_users/',
    getUserInfo: 'http://192.168.100.108:3000/wx_users/get_user_info',
    fcts: 'http://192.168.100.108:3000/wx_users/fcts',
    devices: 'http://192.168.100.108:3000/wx_users/areas',
    streets: 'http://192.168.100.108:3000/wx_users/streets',
    sites: 'http://192.168.100.108:3000/wx_users/sites',
    status: 'http://192.168.100.108:3000/wx_users/status',
    identity: 'http://192.168.100.108:3000/wx_users/identity',
    set_fct: 'http://192.168.100.108:3000/wx_users/set_fct',
    img_upload: 'http://192.168.100.108:3000/wx_resources/img_upload',
    task_query_pend: 'http://192.168.100.108:3000/wx_tasks/query_pend',
    task_query_info: 'http://192.168.100.108:3000/wx_tasks/query_info',
    task_query_rate: 'http://192.168.100.108:3000/wx_tasks/query_rate',
    task_query_record: 'http://192.168.100.108:3000/wx_tasks/query_record',
    task_query_process: 'http://192.168.100.108:3000/wx_tasks/query_process',
    task_query_unconfirm: 'http://192.168.100.108:3000/wx_tasks/query_unconfirm',
    task_query_finish: 'http://192.168.100.108:3000/wx_tasks/query_finish',
    task_query_all: 'http://192.168.100.108:3000/wx_tasks/query_all',
    task_query_plan: 'http://192.168.100.108:3000/wx_tasks/query_plan',
    task_basic_card: 'http://192.168.100.108:3000/wx_tasks/basic_card',
    task_report_create: 'http://192.168.100.108:3000/wx_tasks/report_create',
    auth_process: 'http://192.168.100.108:3000/wx_auths/auth_process',
  },
  getNetwork() {
    return new Promise((resolve, reject) => {
      wx.getNetworkType({
        success(res) {
          const networkType = res.networkType
          if (res.networkType === 'none') {
            reject()
          } else {
            resolve()
          }
        }
      })
    })
  },
}

module.exports = configs