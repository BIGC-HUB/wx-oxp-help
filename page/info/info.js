const data = [{
    teamPhone: '111111',
    teamName: "蓝天救援队",
    teamIcon: "img/add.png"
}, {
    teamPhone: '11111111111',
    teamName: "蓝天救援队",
    teamIcon: "img/add.png"
}]

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
