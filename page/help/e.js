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
        // 日期
        location: '正在定位…',
        date: {
            text: time(),
            time: String( Date.now() ),
        },
        choose: [
            {
                name: '医疗急救',
                arr: ['出血', '骨折', '有人受伤', '被压', '无法行动', '意识不清', '生命危机'],
            },
            {
                name: '物资',
                arr: ['饮用水', '食物', '毛毯', '帐篷'],
            },
        ],
        tip: 0,
        info: [
            {
                name: '个人姓名',
                key: 'name',
                val: '李梅梅',
            },
            {
                name: '手机号码',
                key: 'phone',
                val: '18494390349',
            },
            {
                name: '身份证号',
                key: 'idcard',
                val: '511025199001012345',
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
        // 登陆
        wx.BaaS.login().then((res) => {
            let uid = wx.BaaS.storage.get('uid')
            wx.BaaS.getUserInfo({
                userID: uid
            }).then(res => {
                // log('用户数据:', res)
            })
        }, (err) => {
            log(err)
        })
    },
    formSubmit(e) {
        let o = e.detail.value
        o.date = this.data.date.time
        log(o)
        // wx.showModal({
        //     title: "确认发布吗？",
        //     content: "需勾选的责任说明",
        //     cancelColor: "#9B9B9B",
        //     confirmColor: "#FF633D",
        //     success: function(res) {
        //         if (res.confirm) {
        //             log('确认')
        //         } else if (res.cancel) {
        //             log('取消')
        //         }
        //     }
        // })
    },
    binType(e) {
        this.setData({
            tip: Number(e.currentTarget.dataset.id)
        })
    },
    bindTip(e) {
        log(e)
    },
})