const log = console.log.bind(console, '>>>')
const config = require('../../ku/js/config.js')
let time = function(z = new Date()) {
    let x = z.toString()
    let zh = '天一二三四五六'
    let Year = x.slice(11, 15)
    let Month = String(z.getMonth() + 1)
    let Day = x.slice(8, 10)
    let Hour = x.slice(16, 18)
    let Minute = x.slice(19, 21)
    let Second = x.slice(22, 24)
    let Week = zh[z.getDay()]
    if (Month.length === 1) {
        Month = '0' + Month
    }
    return `${Year}-${Month}-${Day} ${Hour}:${Minute} 星期${Week}`
}
Page({
    // 数据
    data: {
        arr: [
            {
                time: "09:41/10/08",
                content: "ndjhdjhajkds",
                name: "李梅梅",
                phone: "18494390349",
                imgurls: ['img/0.jpg', 'img/1.jpg', 'img/2.jpg'],
                location: {
                    name: "四川省成都市武侯区益州大道1800号",
                }
            },
            {
                time: "09:41/10/08",
                content: "张飞张飞张飞张飞张飞",
                name: "张飞",
                phone: "123124",
                imgurls: ['img/0.jpg', 'img/1.jpg', 'img/2.jpg'],
                location: {
                    name: "区益州大道1800号",
                }
            },
        ],
    },
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
        let user = wx.getStorageSync('user')
        wx.request({
            url: config.url + '/events',
            data: {
                page: 0
            },
            method: 'POST',
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                "ucloudtech_3rd_key": user.session_key
            },
            success: function(res) {
                console.log(res)
            },
            fail: function(res) {
                console.log(res)
            },
            complete: function() {
                console.log('123123123')
            }
        })
    },
    bindPhone(e) {
        wx.makePhoneCall({
            phoneNumber: e.target.dataset.phone,
            success: function() {
                console.log("拨打电话成功！")
            },
            fail: function() {
                console.log("拨打电话失败！")
            }
        })
    },
})
