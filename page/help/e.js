const log = console.log.bind(console, '>>>')
const config = require('../../ku/js/config.js')
const co = function(func) {
    return new Promise(function(resolve, reject) {
        func(resolve, reject)
    })
}
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
                max: 60,
                type: 'text',
                name: '个人姓名',
                key: 'name',
                val: '',
                placeholder: '必填',
            },
            {
                max: 11,
                type: 'number',
                name: '手机号码',
                key: 'phone',
                val: '',
                placeholder: '必填',
            },
            {
                max: 18,
                type: 'idcard',
                name: '身份证号',
                key: 'idcard',
                val: '',
                placeholder: '',
            },
        ],
        user: {},
        focus: {
            content: false,
            name: false,
            idcard: false,
            phone: false,
        },
        leftNumber: 0,
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
        // 读取本地数据
        let data = wx.getStorageSync('helpData')
        if (data) {
            this.setData({
                info: [
                    {
                        max: 60,
                        type: 'text',
                        name: '个人姓名',
                        key: 'name',
                        val: data.name,
                        placeholder: '必填',
                    },
                    {
                        max: 11,
                        type: 'number',
                        name: '手机号码',
                        key: 'phone',
                        val: data.phone,
                        placeholder: '必填',
                    },
                    {
                        max: 18,
                        type: 'idcard',
                        name: '身份证号',
                        key: 'idcard',
                        val: data.idcard,
                        placeholder: '',
                    },
                ]
            })
        }
    },
    onReady() {
        //
    },
    onShow() {
        // 位置
        let that = this
        wx.getLocation({
            type: "gcj02",
            success(res) {
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
                        location.city = res.data.regeocode.addressComponent.city
                        location.district = res.data.regeocode.addressComponent.district
                        location.street = res.data.regeocode.addressComponent.township
                        location.address = location.city + location.district + location.street
                        that.setData({
                            location: location
                        })
                    },
                    fail: err => {
                        log(err)
                    }
                })
            },
            fail(err) {
                log(err)
            }
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
            success(res) {
                let code = res.code
                wx.getUserInfo({
                    success(res) {
                        wx.request({
                            url: config.url + '/login/access',
                            data: {
                                wxcode: code,
                                rawdata: res.rawData,
                            },
                            method: "POST",
                            header: {
                                "Content-Type": "application/x-www-form-urlencoded",
                            },
                            success: callback,
                            fail(res) {
                                console.log(res)
                            },
                        })
                    },
                    fail(err) {
                        log(err)
                    }
                })
            },
            fail(err) {
                log(err)
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
            count: 4, // 默认9
            sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
            // sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success(res) {
                new Promise(function(成功, 失败) {
                    let arr = res.tempFilePaths
                    let temp = []
                    for (let e of arr) {
                        wx.uploadFile({
                            url: config.url + '/upload',
                            filePath: e,
                            name: 'file',
                            header: {
                                "Content-Type": "multipart/form-data",
                                "ucloudtechkey": that.data.user.session_key
                            },
                            success(res) {
                                if (res.statusCode === 200) {
                                    let data = JSON.parse(res.data)
                                    temp.push(data.path)
                                    if (arr.length === temp.length) {
                                        成功(temp)

                                    }
                                }
                            },
                        })
                    }
                }).then(function(res) {
                    log(res)
                    that.setData({
                        imgs: res
                    })
                })
            }
        })
    },
    bindInputWords(e) {
        let val = e.detail.value
        this.setData({
            leftNumber: val.length
        })
    },
    formSubmit(event) {
        let that = this
        let o = event.detail.value
        let e = that.data
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
        let focus = that.data.focus
        // 检查必填
        let bool = true
        for (let i of ['content','name', 'phone']) {
            if (o[i] === '') {
                focus[i] = true
                that.setData({
                    focus: focus
                })
                bool = false
                break
            } else {
                if (i === 'phone') {
                    if ( !/^1[34578]\d{9}$/.test(o[i]) ) {
                        bool = false
                        wx.showModal({
                            title: '请输入正确的手机号',
                            content: '格式为13位数字',
                            showCancel: false,
                            confirmText: "知道了",
                            confirmColor: "#7878FF",
                        })
                        break
                    }
                }
                else if (i === 'idcard') {
                    if ( !/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/.test(o[i]) ) {
                        bool = false
                        wx.showModal({
                            title: '请输入正确的身份证号',
                            content: '格式为18位数字',
                            showCancel: false,
                            confirmText: "知道了",
                            confirmColor: "#7878FF",
                        })
                        break
                    }
                }
                focus[i] = false
            }
        }
        if (bool) {
            co(function(成功) {
                wx.showModal({
                    title: "确认发布吗？",
                    content: "责任说明：我将对此发布的信息保证其真实可靠并承担相应的法律责任。",
                    cancelColor: "#9B9B9B",
                    confirmColor: "#FF633D",
                    success(res) {
                        if (res.confirm) {
                            成功(res)
                        } else if (res.cancel) {
                            log('取消')
                        }
                    },
                })
            }).then(function(res) {
                return co(成功 => {
                    wx.request({
                        url: config.url + '/report',
                        data: data,
                        method: 'POST',
                        header: {
                            "Content-Type": "application/x-www-form-urlencoded",
                            "ucloudtechkey": e.user.session_key
                        },
                        success: function(res) {
                            成功(res)
                        },
                        fail: err => {
                            log(err)
                        }
                    })
                })
            }).then(function(res) {
                return co(成功 => {
                    if (res.data.code === 200) {
                        wx.setStorageSync('helpData', data)
                        wx.showModal({
                            title: '恭喜您，发布成功！',
                            content: '感谢您的支持，期待给您更好的服务☺',
                            showCancel: false,
                            confirmText: "知道了",
                            confirmColor: "#7878FF",
                            success: function(res) {
                                成功(res)
                            }
                        })
                    }
                })
            }).then(function(res) {
                if (res.confirm) {
                    wx.reLaunch({
                        url: "../news/e"
                    })
                }
            })
        }
    },
})
