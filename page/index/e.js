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
            log('登陆成功', res)
        }, (err) => {
            log('登陆失败', err)
        })
    },
})
