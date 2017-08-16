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
    return `${Hour}:${Minute}/${Day}/${Month}/${Year}`
}
Page({
    // 数据
    data: {
        // 日期
        location: {
            address: '正在定位…',
        },
        date: {
            text: time(),
            time: String( Date.now() ),
        },
        tips: [],
        imgs: [
            // '../news/img/0.jpg',
            // '../news/img/1.jpg',
            // '../news/img/2.jpg',
        ],
        choose: [
            {
                now: true,
                checked: '',
                name: '医疗急救',
                arr: [
                    {
                        text: '出血',
                        checked: ''
                    },
                    {
                        text: '骨折',
                        checked: ''
                    },
                    {
                        text: '有人受伤',
                        checked: ''
                    },
                    {
                        text: '被压',
                        checked: ''
                    },
                    {
                        text: '无法行动',
                        checked: ''
                    },
                    {
                        text: '意识不清',
                        checked: ''
                    },
                    {
                        text: '生命危机',
                        checked: ''
                    },
                    {
                        text: '有人失踪',
                        checked: ''
                    },
                ],
            },
            {
                checked: '',
                name: '物资需要',
                arr: [
                    {
                        text: '饮用水',
                        checked: ''
                    },
                    {
                        text: '食物',
                        checked: ''
                    },
                    {
                        text: '毛毯',
                        checked: ''
                    },
                    {
                        text: '帐篷',
                        checked: ''
                    },
                    {
                        text: '衣服',
                        checked: ''
                    },
                ],
            },
            {
                checked: '',
                name: '人员被困',
                arr: [
                    {
                        text: '道路中断',
                        checked: ''
                    },
                    {
                        text: '有落石',
                        checked: ''
                    },
                    {
                        text: '车辆事故',
                        checked: ''
                    },
                    {
                        text: '桥梁坍塌',
                        checked: ''
                    },
                    {
                        text: '道路设施损坏',
                        checked: ''
                    },
                ],
            },
            {
                checked: '',
                name: '其他',
                arr: [
                    {
                        text: '需要人手',
                        checked: ''
                    },
                    {
                        text: '停电',
                        checked: ''
                    },
                    {
                        text: '停水',
                        checked: ''
                    },
                ],
            },
        ],
        info: [
            {
                type: 'text',
                name: '个人姓名',
                key: 'name',
                val: '',
            },
            {
                type: 'number',
                name: '手机号码',
                key: 'phone',
                val: '',
            },
            {
                type: 'idcard',
                name: '身份证号',
                key: 'idcard',
                val: '',
            },
        ],
        user: {},
        focus: {
            content: false,
            name: false,
            idcard: false,
            phone: false,
        }
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
        // 登陆 知晓云
        wx.BaaS.login().then((res) => {
            // log(res, '登录成功')
        }, (err) => {
            // log(err, '系统级错误')
        })
    },
    onShow() {
        // 位置
        let that = this
        wx.getLocation({
            type: "gcj02",
            success: function(res) {
                if (res.accuracy > 40) {
                    // showToast
                    log('当前GPS信号弱，请行驶到开阔地带')
                }
                let location = res
                location.now = [res.longitude, res.latitude].join(',')
                wx.request({
                    url: 'https://restapi.amap.com/v3/geocode/regeo?parameters',
                    data: {
                        key: config.web,
                        location: location.now,
                    },
                    method: "GET",
                    header: {
                        "Content-Type": "application/json",
                    },
                    success: function(res) {
                        location.address = res.data.regeocode.formatted_address
                        that.setData({
                            location: location
                        })
                    },
                    fail: (err) => { }
                })
            },
            fail: (err) => { }
        })
        // 登陆
        let callback = function(res) {
            // 本地存储
            wx.setStorageSync('user', res.data)
            that.setData({
                user: res.data
            })
        }
        wx.login({
            success: function(res) {
                let code = res.code
                let host = "https://wxapp.ucloudtech.com:1337"
                wx.getUserInfo({
                    success: function(res) {
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
                            success: callback,
                            fail: function(res) {
                                console.log(res)
                            },
                            complete: function() {
                                //
                            },
                        })
                    }
                })
            }
        })
    },
    bindType(e) {
        let id = e.currentTarget.dataset.id
        let choose = this.data.choose
        choose.forEach(function(e, i) {
            if (i === id) {
                if (e.checked === 'true') {
                    e.checked = ''
                } else {
                    e.checked = 'true'
                }
                e.now = true
            } else {
                e.now = false
            }
        })
        this.setData({
            choose: choose
        })
    },
    bindTip(e) {
        let name = e.target.dataset.name
        // tips
        let tips = this.data.tips
        let bool = true
        for(let i = 0; i < tips.length; i++) {
            let e = tips[i]
            if (e === name) {
                bool = false
                tips.splice(i, 1)
            }
        }
        if (bool) {
            tips.push(name)
        }
        // choose
        let choose = this.data.choose
        for (let i of choose) {
            if (i.now) {
                for (let e of i.arr) {
                    if (e.text === name) {
                        if (e.checked === '') {
                            e.checked = 'true'
                        } else {
                            e.checked = ''
                        }
                    }
                }
            }
        }
        this.setData({
            choose: choose,
            tips: tips,
        })
    },
    bindChooseImg() {
        let that = this
        wx.chooseImage({
            count: 3, // 默认9
            // sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            // sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function(res) {
                let arr = res.tempFilePaths
                let temp = []
                for (let e of arr) {
                    wx.BaaS.uploadFile({
                        filePath: e,
                    }).then((res) => {
                        temp.push(JSON.parse(res.data).path)
                        if (arr.length === temp.length) {
                            that.setData({
                                imgs: temp
                            })
                        }
                    }, (err) => {
                        // 微信自身系统级别错误
                        log(err, '图片上传请在手机端')
                    })
                }

            }
        })
    },
    formSubmit(event) {
        let o = event.detail.value
        let e = this.data
        log(e.imgs)
        let data = {
            types: JSON.stringify(e.choose),
            location: JSON.stringify(e.location),
            date: e.date.time,
            name: o.name,
            content: o.content,
            phone: o.phone,
            idcard: o.idcard,
            imgurls: JSON.stringify(e.imgs),
            user: JSON.stringify(e.user),
        }
        let focus = this.data.focus
        // 检查必填
        let bool = true
        for (let i of ['content','name', 'phone', 'idcard',]) {
            if (o[i] === '') {
                focus[i] = true
                this.setData({
                    focus: focus
                })
                bool = false
                break
            } else {
                focus[i] = false
            }
        }
        if (bool) {
            let callback = function(res) {
                if (res.confirm) {
                    wx.request({
                        url: config.url + '/report',
                        data: data,
                        method: 'POST',
                        header: {
                            "Content-Type": "application/x-www-form-urlencoded",
                            "ucloudtech_3rd_key": e.user.session_key
                        },
                        success: function(res) {
                            if (res.data.code === 200) {
                                wx.showModal({
                                    title: '恭喜您，发布成功！',
                                    content: '感谢您的支持，期待给您更好的服务☺',
                                    showCancel: false,
                                    confirmText: "知道了",
                                    confirmColor: "#7878FF",
                                    success: function(res) {
                                        if (res.confirm) {
                                            wx.reLaunch({
                                                url: "../news/e"
                                            })
                                        }
                                    }
                                })
                            }
                        }
                    })
                } else if (res.cancel) {
                    log('取消')
                }
            }
            wx.showModal({
                title: "确认发布吗？",
                content: "需勾选的责任说明",
                cancelColor: "#9B9B9B",
                confirmColor: "#FF633D",
                success: callback,
            })
        }
    },
})
