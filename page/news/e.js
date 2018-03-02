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
    // if (Month.length === 1) {
    //     Month = '0' + Month
    // }
    return `${Year}年${Month}月${Day}日 ${Hour}:${Minute}`
}
Page({
    // 数据
    data: {
        arr: []
    },
    // 刷新
    onPullDownRefresh() {
        this.onLoad()
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
        let that = this
        let user = wx.getStorageSync('user')
        wx.request({
            url: config.url + '/events',
            data: {
                page: 0
            },
            method: 'POST',
            header: {
                "Content-Type": "application/x-www-form-urlencoded",
                "ucloudtechkey": user.session_key
            },
            success: that.init,
            fail(err) {
                log(err)
            }
        })
    },
    init(res) {
        let temp = []
        if (res.data.code === 200) {
            let arr = res.data.data
            for (let e of arr) {
                let tips = []
                for (let i of e.types) {
                    for (let i2 of i.arr) {
                        if (i2.checked) {
                            tips.push(i2.text)
                        }
                    }
                }
                let o = {
                    tips: tips,
                    time: time(new Date(Number(e.date))),
                    content: e.content,
                    name: e.name,
                    phone: e.phone,
                    imgurls: e.imgurls,
                    location:  e.location,
                    user: e.user,
                }
                temp.push(o)
            }
        }
        this.setData({
            arr: temp
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
