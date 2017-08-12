const log = console.log.bind(console, '>>>')
App({
    // onLaunch 全局登陆触发一次
    onLaunch() {
        // 引入 SDK
        require('./ku/js/sdk-v1.0.10.js')
        // 初始化 SDK
        wx.BaaS.init('a41833b2b79604d87d24')
    },
})
