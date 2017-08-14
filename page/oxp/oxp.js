//index.js
//获取应用实例
let app = getApp()
let key = "596dd24a8218732e287d7c1c"
key = "599131525ceb95a07617c426";
let host = "https://wxapp.ucloudtech.com:1337";
// host = "https://192.168.1.126:1337";

Page({
    data: {
        url: '',
    },
    // 允许权限 用户登录
    loginAccess: function(cb) {
        let that = this
        wx.login({
            success: function(res) {
                let code = res.code
                wx.getUserInfo({
                    success: function(res) {
                        console.log(res.rawData)
                        wx.request({
                            url: host + '/login/access',
                            data: {
                                wxcode: code,
                                rawdata: res.rawData,
                            },
                            method: "POST",
                            header: {
                                "Content-Type": "application/x-www-form-urlencoded",
                            },
                            success: function(res) {
                                console.log(res)
                            },
                            fail: function(res) {
                                console.log(res)
                            },
                            complete: function() {
                                // complete
                            }
                        });
                    }
                })
            }
        })
    },
    // 拒绝权限 用户登录
    loginReject: function(cb) {
        let that = this
        wx.login({
            success: function(res) {
                let code = res.code
                wx.getUserInfo({
                    success: function(res) {
                        console.log(res.rawData)
                        wx.request({
                            url: host + '/login/reject',
                            data: {},
                            method: "POST",
                            header: {
                                "Content-Type": "application/x-www-form-urlencoded",
                            },
                            success: function(res) {
                                console.log(res)
                            },
                            fail: function(res) {
                                console.log(res)
                            },
                            complete: function() {
                                // complete
                            }
                        });
                    }
                })
            }
        })
    },
    // 用户上报
    reports: function(cb) {
        let data = {
            types: " 1",
            location: JSON.stringify({a:123}),
            date: String( Date.now() ),
            name: "name",
            content: "ndjhdjhajkds",
            phone: '1273748',
            idcard: "12367478589475846",
            imgurls: JSON.stringify([{a:455}])
        }
        wx.request({
            url: host + '/report',
            data: data,
            method: 'POST',
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                "ucloudtech_3rd_key": key
            },
            success: function(res) {
                console.log(res)
            },
            fail: function(res) {
                console.log(res)
            },
            complete: function() {
                // complete
            }
        })
    },
    //事件查看
    event: function(cb) {
        wx.request({
            url: host + '/events',
            data: {
                page: 0
            },
            method: 'POST',
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                "ucloudtech_3rd_key": key
            },
            success: function(res) {
                console.log(JSON.stringify( res.data.data["0"]) )
            },
            fail: function(res) {
                console.log(res)
            },
            complete: function() {
                // complete
            }
        })
    },
})
