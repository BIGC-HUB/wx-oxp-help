const data = [
    {
        teamPhone: '400 600 9958',
        teamName: "蓝天救援队",
        teamIcon: "img/blue_sky.png",
    },
    {
        teamPhone: '12301',
        teamName: "国家旅游服务",
        teamIcon: "img/12301.png"
    },
    {
        teamPhone: '0837-7739529',
        teamName: "九寨沟管理局24小时",
        teamIcon: ""
    },
]

Page({
    data: {
        teamData: data,
    },
    callPhone(cb) {
        wx.makePhoneCall({
            phoneNumber: data[cb.target.dataset.id].teamPhone,
            success: function() {
                console.log("拨打电话成功！")
            },
            fail: function() {
                console.log("拨打电话失败！")
            }
        })
    }
})
