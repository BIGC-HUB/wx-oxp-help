const log = console.log.bind(console, '>>>')
App({
    // onLaunch 全局登陆触发一次
    onLaunch() {
        // 引入 SDK
        require('./ku/js/sdk-v1.0.10.js')
        // 初始化 SDK
        wx.BaaS.init('75aa00dad5cd3ab6c0a0')
    },
})
