const log = console.log.bind(console, '>>>')
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
                types: 1,
                date: "1502691674345",
                content: "ndjhdjhajkds",
                name: "name",
                phone: "1273748",
                idcard: "12367478589475846",
                imgurls: [{
                    "a": 455
                }],
                location: {
                    "a": 123
                },
                user: {
                    "nicknam": "游客1502687570128"
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

    },
})
