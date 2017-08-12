const log = console.log.bind(console, '>>>')
Page({
    // 数据
    data: {},
    // 刷新
    onPullDownRefresh() {
        wx.stopPullDownRefresh()
    },
    // 分享
    onShareAppMessage() {
        //
    },
    onReachBottom() {
        //
    },
    onLoad() {
        // 登陆
        wx.BaaS.login().then((res) => {
            let uid = wx.BaaS.storage.get('uid')
            wx.BaaS.getUserInfo({userID: uid}).then(res => {
                // log('用户数据:', res)
            })
        }, (err) => {log(err)})
    },
})
