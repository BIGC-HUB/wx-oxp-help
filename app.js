const log = console.log.bind(console, '>>>')
App({
    // onLaunch 全局登陆触发一次
    onLaunch() {
        // 引入 SDK
        require('./ku/js/sdk-v1.0.10.js')
        // 初始化 SDK
        wx.BaaS.init('a41833b2b79604d87d24')
        // 登陆 知晓云
        wx.BaaS.login().then((res) => {
            log(res, '知晓云登录成功')
        }, (err) => {
            log(err, '知晓云系统级错误')
        })
    },
})
