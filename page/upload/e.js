const log = console.log.bind(console, '>>>')
const theTableID = 622;
Page({
    // 数据
    data: {},
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
            wx.BaaS.getUserInfo({userID: uid}).then(res => {
                log('用户数据:', res)
            })
        }, (err) => {log(err)})
    },
    addData() {
      let tableID = theTableID
      let data = {
        location: '"{"note":"","book":[{"arr":[{"name":"网易云音乐","url":"music.163.com/#/user/home?id=36825881","color":"#F40A01"},{"name":"500px","color":"","url":"500px.com/popular"},{"name":"知乎收藏夹","url":"www.zhihu.com/collections","color":"#08C"},{"name":"仙班门票","url":"space.bilibili.com/51399004/#!/favlist?fid=73165150","color":""},{"color":"","url":"wx6f09e524bab076df","name":"oxp"}],"name":"常用"},{"arr":[{"name":"虚拟主机","url":"myhostadmin.net","color":"#004F87"},{"color":"#0382AD","url":"caibaojian.com/css3/rules/@import.htm","name":"CSS样式"},{"name":"FLEX","url":"www.ruanyifeng.com/blog/2015/07/flex-examples.html","color":""},{"color":"","url":"bigc.cc/md","name":"笔记"},{"color":"","url":"www.sojson.com/jshtml.html","name":"网页压缩"},{"color":"","url":"www.jquery123.com","name":"JQ"},{"name":"正则表达式","url":"regexr.com","color":""},{"color":"","url":"bigc.cc/tool/jsbeautifier","name":"美化代码"},{"name":"文件存储","url":"www.qcloud.com/document/product/436/6053","color":""},{"color":"","url":"www.sioe.cn/yingyong/yanse-rgb-16/","name":"RGB"}],"name":"编程"},{"arr":[{"name":"好奇心日报","url":"www.qdaily.com","color":""},{"name":"澎湃新闻","url":"www.thepaper.cn","color":""},{"name":"博客","url":"note.bigc.cc","color":""}],"name":"新闻"},{"arr":[{"name":"TEAM","url":"www.teambition.com","color":""},{"name":"高德地图","url":"lbs.amap.com/api/wx","color":""},{"name":"腾讯地图","url":"lbs.qq.com/tool/component-marker.html","color":""},{"name":"小程序文档","url":"mp.weixin.qq.com/debug/wxadoc/dev/component/","color":"#1AAD19"},{"name":"知晓云","url":"ifanr.gitbooks.io/baas-js-sdk/content/ready/%E7%BB%91%E5%AE%9A%E5%B0%8F%E7%A8%8B%E5%BA%8F.html","color":""}],"name":"工作"}],"sou":[{"name":"综合","arr":[{"icon":"dahai","color":"#037DD8","wap":"wap.sogou.com/web/searchList.jsp?keyword=","url":"www.sogou.com/web?ie={inputEncoding}&query=","name":"大海"},{"icon":"sogou","color":"#FD6853","wap":"wap.sogou.com/web/searchList.jsp?keyword=","url":"www.sogou.com/web?ie={inputEncoding}&query=","name":"搜狗"},{"icon":"bing","color":"#FFB900","url":"cn.bing.com/search?q=","wap":"","name":"必应"},{"wap":"","icon":"zhihu","color":"#0F88EB","url":"www.zhihu.com/search?type=content&q=","name":"知乎"},{"icon":"weixin","color":"#00BC0C","wap":"weixin.sogou.com/weixinwap?type=2&query=","url":"weixin.sogou.com/weixin?type=2&query=","name":"微信"},{"color":"#ed4403","icon":"taobao","wap":"s.m.taobao.com/h5?q=","url":"s.taobao.com/search?q=","name":"淘宝"}]},{"name":"编程","arr":[{"icon":"","color":"#900B09","wap":"","url":"cn.bing.com/search?q=site:www.w3school.com.cn+","name":"w3school"},{"icon":"","color":"#000","wap":"","url":"cn.bing.com/search?q=site:ruanyifeng.com+","name":"阮一峰"},{"icon":"","color":"#558ABB","wap":"","url":"cn.bing.com/search?q=site:developer.mozilla.org/zh-CN+","name":"MDN"},{"icon":"","color":"#239DFE","wap":"","url":"npm.taobao.org/browse/keyword/","name":"NPM"},{"wap":"","icon":"","color":"","url":"www.jq22.com/search?seo=","name":"JQ插件"},{"wap":"","icon":"","color":"#4EAA4C","url":"cn.bing.com/search?q=site:www.bootcdn.cn+","name":"bootCDN"},{"wap":"","icon":"","color":"#18569D","url":"aspx.sc.chinaz.com/query.aspx?classid=835&keyWord=","name":"站长素材"},{"icon":"","color":"","wap":"","url":"github.com/search?utf8=✓&q=","name":"Github"}]},{"name":"认知","arr":[{"icon":"","color":"","wap":"","url":"cn.bing.com/search?q=site:zybuluo.com+","name":"作业部落"},{"icon":"","color":"#EA6F5A","wap":"","url":"www.jianshu.com/search?q=","name":"简书"},{"icon":"","color":"#38F","wap":"","url":"baike.baidu.com/search/word?word=","name":"百度百科"},{"icon":"","color":"","wap":"wap.zdic.net/s?q=","url":"www.zdic.net/sousuo?tp=tp1&q=","name":"漢典"},{"wap":"","icon":"","color":"","url":"m.guokr.com/search/all/?wd=","name":"果壳"}]},{"name":"图片","arr":[{"icon":"huaban","color":"#DF4751","url":"huaban.com/search/?q=","wap":"","name":"花瓣"},{"icon":"","color":"#FD6853","wap":"","url":"pic.sogou.com/pics?query=","name":"搜狗图片"},{"icon":"","color":"#38F","wap":"","url":"image.baidu.com/search/index?tn=baiduimage&fm=result&ie=utf-8&word=","name":"百度图片"},{"color":"#FC6B96","url":"www.topit.me/items/search?query=","icon":"","wap":"","name":"Topit.me"}]},{"name":"新闻","arr":[{"color":"#E73137","icon":"sina","url":"s.weibo.com/weibo/","wap":"","name":"新浪微博"},{"name":"今日头条","url":"www.toutiao.com/search/?keyword=","color":"#ED4040","icon":"","wap":"m.toutiao.com/search/?keyword="},{"name":"国搜","url":"news.chinaso.com/search?wd=","color":"red","icon":"","wap":"m.chinaso.com/news/search.htm?keys="},{"icon":"","color":"#38F","wap":"","url":"wenku.baidu.com/search?word=","name":"百度文库"},{"icon":"baidu","color":"#38F","wap":"","url":"www.baidu.com/s?wd=","name":"百度"},{"icon":"","color":"#FD6853","wap":"","url":"news.sogou.com/news?query=","name":"搜狗新闻"},{"icon":"","color":"","wap":"","url":"cn.bing.com/search?q=site:lol.qq.com+","name":"英雄联盟"},{"name":"雷锋网","url":"www.leiphone.com/search?s=","color":"#ee5b2e","icon":"","wap":""},{"name":"我的世界","url":"cn.bing.com/search?q=site:mc.netease.com+","color":"","icon":"","wap":""}]},{"name":"网购","arr":[{"name":"京东","url":"search.jd.com/Search?&enc=utf-8&keyword=","color":"#B1191A","icon":"","wap":"so.m.jd.com/ware/search.action?keyword="},{"name":"亚马逊","url":"www.amazon.cn/s/ref=nb_sb_noss?field-keywords=","color":"#333","icon":"","wap":"www.amazon.cn/gp/aw/s/ref=nb_sb_noss?k="},{"name":"小米商城","url":"search.mi.com/search_","color":"#ff6700","icon":"","wap":""},{"name":"天猫","url":"list.tmall.com/search_product.htm?q=","color":"#FF0036","icon":"","wap":""}]},{"name":"翻译","arr":[{"name":"谷歌翻译","url":"translate.google.cn/m/translate#auto/en/","color":"","icon":"","wap":""},{"name":"必应词典","url":"cn.bing.com/dict/search?q=","color":"#FFB900","icon":"","wap":""},{"icon":"","color":"#E31333","wap":"m.youdao.com/dict?q=","url":"www.youdao.com/w/","name":"有道词典"},{"name":"百度翻译","url":"fanyi.baidu.com/#zh/en/","color":"#38F","icon":"","wap":""}]},{"name":"地图","arr":[{"color":"#4C90F9","icon":"amap","wap":"m.amap.com/search/mapview/keywords=","url":"ditu.amap.com/search?city=100000&query=","name":"高德地图"},{"icon":"","color":"#38F","wap":"","url":"map.baidu.com/mobile/webapp/search/search/qt=s&wd=","name":"百度地图"}]},{"name":"音乐","arr":[{"color":"#2CA2F9","url":"m.kugou.com/search?keyword=","icon":"","wap":"","name":"酷狗音乐"},{"name":"虾米音乐","url":"www.xiami.com/search?key=","color":"#FF6F32","icon":"","wap":"h.xiami.com/#!/search/result/?key="},{"color":"#FECA2E","url":"m.kuwo.cn/?key=","icon":"","wap":"","name":"酷我音乐"},{"color":"#F40A01","icon":"cloud-music","url":"music.163.com/#/search/m/?s=","wap":"","name":"网易云音乐"},{"color":"#EF5619","wap":"m.ximalaya.com/search/","url":"www.ximalaya.com/search/","icon":"","name":"喜马拉雅"}]},{"name":"视频","arr":[{"name":"豆瓣电影","color":"#2E963D","url":"movie.douban.com/subject_search?search_text=","icon":"","wap":""},{"name":"搜库","url":"www.soku.com/search_video/q_","color":"#52b7f4","icon":"","wap":""},{"name":"哔哩哔哩","url":"search.bilibili.com/all?keyword=","color":"#F25D8E","icon":"","wap":"www.bilibili.com/mobile/search.html?keyword="},{"name":"嘀哩嘀哩","url":"www.sogou.com/web?ie={inputEncoding}&query=site:www.dilidili.wang+","color":"#50b3c5","icon":"","wap":""},{"color":"#3860BB","url":"pianyuan.net/search?q=","icon":"","wap":"","name":"片源网"},{"name":"腾讯视频","url":"v.qq.com/x/search/?q=","color":"#FF920B","icon":"","wap":"m.v.qq.com/search.html?keyWord="}]},{"name":"墙外","arr":[{"name":"维基百科","url":"zh.wikipedia.org/w/index.php?search=","color":"#54595d","icon":"","wap":""},{"name":"谷歌学术","url":"scholar.google.com/scholar?q=","color":"#4285F4","icon":"","wap":""},{"name":"DuckDuck","url":"duckduckgo.com/?q=","color":"#DE5833","icon":"","wap":""},{"name":"Twitter","url":"twitter.com/search?q=","color":"#1DA1F2","icon":"","wap":""},{"name":"Facebook","url":"www.facebook.com/search/top/?q=","color":"#365899","icon":"","wap":""},{"name":"Google","url":"www.google.com.hk/#safe=strict&q=","color":"","icon":"","wap":""}]}],"topic":"Something bigger than your self."}"',
        'type': '"{"note":"","book":[{"arr":[{"name":"网易云音乐","url":"music.163.com/#/user/home?id=36825881","color":"#F40A01"},{"name":"500px","color":"","url":"500px.com/popular"},{"name":"知乎收藏夹","url":"www.zhihu.com/collections","color":"#08C"},{"name":"仙班门票","url":"space.bilibili.com/51399004/#!/favlist?fid=73165150","color":""},{"color":"","url":"wx6f09e524bab076df","name":"oxp"}],"name":"常用"},{"arr":[{"name":"虚拟主机","url":"myhostadmin.net","color":"#004F87"},{"color":"#0382AD","url":"caibaojian.com/css3/rules/@import.htm","name":"CSS样式"},{"name":"FLEX","url":"www.ruanyifeng.com/blog/2015/07/flex-examples.html","color":""},{"color":"","url":"bigc.cc/md","name":"笔记"},{"color":"","url":"www.sojson.com/jshtml.html","name":"网页压缩"},{"color":"","url":"www.jquery123.com","name":"JQ"},{"name":"正则表达式","url":"regexr.com","color":""},{"color":"","url":"bigc.cc/tool/jsbeautifier","name":"美化代码"},{"name":"文件存储","url":"www.qcloud.com/document/product/436/6053","color":""},{"color":"","url":"www.sioe.cn/yingyong/yanse-rgb-16/","name":"RGB"}],"name":"编程"},{"arr":[{"name":"好奇心日报","url":"www.qdaily.com","color":""},{"name":"澎湃新闻","url":"www.thepaper.cn","color":""},{"name":"博客","url":"note.bigc.cc","color":""}],"name":"新闻"},{"arr":[{"name":"TEAM","url":"www.teambition.com","color":""},{"name":"高德地图","url":"lbs.amap.com/api/wx","color":""},{"name":"腾讯地图","url":"lbs.qq.com/tool/component-marker.html","color":""},{"name":"小程序文档","url":"mp.weixin.qq.com/debug/wxadoc/dev/component/","color":"#1AAD19"},{"name":"知晓云","url":"ifanr.gitbooks.io/baas-js-sdk/content/ready/%E7%BB%91%E5%AE%9A%E5%B0%8F%E7%A8%8B%E5%BA%8F.html","color":""}],"name":"工作"}],"sou":[{"name":"综合","arr":[{"icon":"dahai","color":"#037DD8","wap":"wap.sogou.com/web/searchList.jsp?keyword=","url":"www.sogou.com/web?ie={inputEncoding}&query=","name":"大海"},{"icon":"sogou","color":"#FD6853","wap":"wap.sogou.com/web/searchList.jsp?keyword=","url":"www.sogou.com/web?ie={inputEncoding}&query=","name":"搜狗"},{"icon":"bing","color":"#FFB900","url":"cn.bing.com/search?q=","wap":"","name":"必应"},{"wap":"","icon":"zhihu","color":"#0F88EB","url":"www.zhihu.com/search?type=content&q=","name":"知乎"},{"icon":"weixin","color":"#00BC0C","wap":"weixin.sogou.com/weixinwap?type=2&query=","url":"weixin.sogou.com/weixin?type=2&query=","name":"微信"},{"color":"#ed4403","icon":"taobao","wap":"s.m.taobao.com/h5?q=","url":"s.taobao.com/search?q=","name":"淘宝"}]},{"name":"编程","arr":[{"icon":"","color":"#900B09","wap":"","url":"cn.bing.com/search?q=site:www.w3school.com.cn+","name":"w3school"},{"icon":"","color":"#000","wap":"","url":"cn.bing.com/search?q=site:ruanyifeng.com+","name":"阮一峰"},{"icon":"","color":"#558ABB","wap":"","url":"cn.bing.com/search?q=site:developer.mozilla.org/zh-CN+","name":"MDN"},{"icon":"","color":"#239DFE","wap":"","url":"npm.taobao.org/browse/keyword/","name":"NPM"},{"wap":"","icon":"","color":"","url":"www.jq22.com/search?seo=","name":"JQ插件"},{"wap":"","icon":"","color":"#4EAA4C","url":"cn.bing.com/search?q=site:www.bootcdn.cn+","name":"bootCDN"},{"wap":"","icon":"","color":"#18569D","url":"aspx.sc.chinaz.com/query.aspx?classid=835&keyWord=","name":"站长素材"},{"icon":"","color":"","wap":"","url":"github.com/search?utf8=✓&q=","name":"Github"}]},{"name":"认知","arr":[{"icon":"","color":"","wap":"","url":"cn.bing.com/search?q=site:zybuluo.com+","name":"作业部落"},{"icon":"","color":"#EA6F5A","wap":"","url":"www.jianshu.com/search?q=","name":"简书"},{"icon":"","color":"#38F","wap":"","url":"baike.baidu.com/search/word?word=","name":"百度百科"},{"icon":"","color":"","wap":"wap.zdic.net/s?q=","url":"www.zdic.net/sousuo?tp=tp1&q=","name":"漢典"},{"wap":"","icon":"","color":"","url":"m.guokr.com/search/all/?wd=","name":"果壳"}]},{"name":"图片","arr":[{"icon":"huaban","color":"#DF4751","url":"huaban.com/search/?q=","wap":"","name":"花瓣"},{"icon":"","color":"#FD6853","wap":"","url":"pic.sogou.com/pics?query=","name":"搜狗图片"},{"icon":"","color":"#38F","wap":"","url":"image.baidu.com/search/index?tn=baiduimage&fm=result&ie=utf-8&word=","name":"百度图片"},{"color":"#FC6B96","url":"www.topit.me/items/search?query=","icon":"","wap":"","name":"Topit.me"}]},{"name":"新闻","arr":[{"color":"#E73137","icon":"sina","url":"s.weibo.com/weibo/","wap":"","name":"新浪微博"},{"name":"今日头条","url":"www.toutiao.com/search/?keyword=","color":"#ED4040","icon":"","wap":"m.toutiao.com/search/?keyword="},{"name":"国搜","url":"news.chinaso.com/search?wd=","color":"red","icon":"","wap":"m.chinaso.com/news/search.htm?keys="},{"icon":"","color":"#38F","wap":"","url":"wenku.baidu.com/search?word=","name":"百度文库"},{"icon":"baidu","color":"#38F","wap":"","url":"www.baidu.com/s?wd=","name":"百度"},{"icon":"","color":"#FD6853","wap":"","url":"news.sogou.com/news?query=","name":"搜狗新闻"},{"icon":"","color":"","wap":"","url":"cn.bing.com/search?q=site:lol.qq.com+","name":"英雄联盟"},{"name":"雷锋网","url":"www.leiphone.com/search?s=","color":"#ee5b2e","icon":"","wap":""},{"name":"我的世界","url":"cn.bing.com/search?q=site:mc.netease.com+","color":"","icon":"","wap":""}]},{"name":"网购","arr":[{"name":"京东","url":"search.jd.com/Search?&enc=utf-8&keyword=","color":"#B1191A","icon":"","wap":"so.m.jd.com/ware/search.action?keyword="},{"name":"亚马逊","url":"www.amazon.cn/s/ref=nb_sb_noss?field-keywords=","color":"#333","icon":"","wap":"www.amazon.cn/gp/aw/s/ref=nb_sb_noss?k="},{"name":"小米商城","url":"search.mi.com/search_","color":"#ff6700","icon":"","wap":""},{"name":"天猫","url":"list.tmall.com/search_product.htm?q=","color":"#FF0036","icon":"","wap":""}]},{"name":"翻译","arr":[{"name":"谷歌翻译","url":"translate.google.cn/m/translate#auto/en/","color":"","icon":"","wap":""},{"name":"必应词典","url":"cn.bing.com/dict/search?q=","color":"#FFB900","icon":"","wap":""},{"icon":"","color":"#E31333","wap":"m.youdao.com/dict?q=","url":"www.youdao.com/w/","name":"有道词典"},{"name":"百度翻译","url":"fanyi.baidu.com/#zh/en/","color":"#38F","icon":"","wap":""}]},{"name":"地图","arr":[{"color":"#4C90F9","icon":"amap","wap":"m.amap.com/search/mapview/keywords=","url":"ditu.amap.com/search?city=100000&query=","name":"高德地图"},{"icon":"","color":"#38F","wap":"","url":"map.baidu.com/mobile/webapp/search/search/qt=s&wd=","name":"百度地图"}]},{"name":"音乐","arr":[{"color":"#2CA2F9","url":"m.kugou.com/search?keyword=","icon":"","wap":"","name":"酷狗音乐"},{"name":"虾米音乐","url":"www.xiami.com/search?key=","color":"#FF6F32","icon":"","wap":"h.xiami.com/#!/search/result/?key="},{"color":"#FECA2E","url":"m.kuwo.cn/?key=","icon":"","wap":"","name":"酷我音乐"},{"color":"#F40A01","icon":"cloud-music","url":"music.163.com/#/search/m/?s=","wap":"","name":"网易云音乐"},{"color":"#EF5619","wap":"m.ximalaya.com/search/","url":"www.ximalaya.com/search/","icon":"","name":"喜马拉雅"}]},{"name":"视频","arr":[{"name":"豆瓣电影","color":"#2E963D","url":"movie.douban.com/subject_search?search_text=","icon":"","wap":""},{"name":"搜库","url":"www.soku.com/search_video/q_","color":"#52b7f4","icon":"","wap":""},{"name":"哔哩哔哩","url":"search.bilibili.com/all?keyword=","color":"#F25D8E","icon":"","wap":"www.bilibili.com/mobile/search.html?keyword="},{"name":"嘀哩嘀哩","url":"www.sogou.com/web?ie={inputEncoding}&query=site:www.dilidili.wang+","color":"#50b3c5","icon":"","wap":""},{"color":"#3860BB","url":"pianyuan.net/search?q=","icon":"","wap":"","name":"片源网"},{"name":"腾讯视频","url":"v.qq.com/x/search/?q=","color":"#FF920B","icon":"","wap":"m.v.qq.com/search.html?keyWord="}]},{"name":"墙外","arr":[{"name":"维基百科","url":"zh.wikipedia.org/w/index.php?search=","color":"#54595d","icon":"","wap":""},{"name":"谷歌学术","url":"scholar.google.com/scholar?q=","color":"#4285F4","icon":"","wap":""},{"name":"DuckDuck","url":"duckduckgo.com/?q=","color":"#DE5833","icon":"","wap":""},{"name":"Twitter","url":"twitter.com/search?q=","color":"#1DA1F2","icon":"","wap":""},{"name":"Facebook","url":"www.facebook.com/search/top/?q=","color":"#365899","icon":"","wap":""},{"name":"Google","url":"www.google.com.hk/#safe=strict&q=","color":"","icon":"","wap":""}]}],"topic":"Something bigger than your self."}"',
        'date': Date.now()+"",
        imgurl: [
          "LRpq",
          "HGLa"
        ],
        user:"uusussu",
        phone:"123343542",
        name:"asdyuaysduiyuiweyruywe",
        idcard:"1264716347864895728453768435",
        content:"gruyer781y37456iehyrf7qw6435iuhy4e7ryiuwqyh5ri4q735hiwu8yrtf8wye4587"
      }
      let objects = {
        tableID,
        data
      }
      wx.BaaS.createRecord(objects).then((res) => {
        // success
        log('新增数据:', res)
      }, (err) => {
        // err
        log('新增数据err:', res)
      })
    },
    useTable() {
      let tableID = theTableID
      let params = { tableID }

      wx.BaaS.getTable(
        params).then((res) => {
          log(res)
        }, (err) => {
          // err
          log(res)
        })

    },
    getRecordList() {
      let tableID = theTableID
      let objects = { tableID }
      wx.BaaS.getRecordList(objects).then((res) => {
        // success
        log(res)
      }, (err) => {
        // err
        log(res)
      })
    },
    getRecord() {
      let tableID = theTableID
      let recordID = '598eafc23b82122bba1872fb'
      let objects = {
        tableID,
        recordID
      };
      wx.BaaS.getRecord(objects).then((res) => {
        // success
        log(res)
      }, (err) => {
        // err
        log(res)
      })
    },
    deletRecord() {
      let tableID = theTableID
      let recordID = '598eafc23b82122bba1872fb'
      let objects = {
        tableID,
        recordID
      }
      wx.BaaS.deleteRecord(objects).then((res) => {
        // success
        log(res)
      }, (err) => {
        // err
        log(res)
      })
    },
    updateRecord() {
      let tableID = theTableID
      let recordID = "598eab9fc4a9ca6e61668acc";
      let data = {
        name: "改名字了"
      }
      let objects = {
        tableID,
        recordID,
        data
      };
      wx.BaaS.updateRecord(objects).then((res) => {
        // success
        log(res)
      }, (err) => {
        // err
        log(res)
      });
    },
    exactQuery() {
      let objects = {
        tableID: theTableID,
        created_by: 36149631,
        name: 'eyruyw'
      };
      wx.BaaS.getRecordList(objects).then((res) => {
        log(res)
      }, (err) => {
        // err
        log(res)
      });
    },
    fuzzyQuery(){
      let objects = {
        tableID: theTableID,
        name__contains: 'eyruyw',
      };
      wx.BaaS.getRecordList(objects).then((res) => {
        log(res)
      }, (err) => {
        // err
        log(res)
      });
    },
    MultinomialMatching() {
      let objects = {
        tableID: theTableID,
        created_by__range: '0,1',
      };
      wx.BaaS.getRecordList(objects).then((res) => {
        log(res)
      }, (err) => {
        // err
        log(res)
      });
    },
    greaterThan() {
      let objects = {
        tableID: theTableID,
        recordID__gte: '"598ec3fc3b8212336dfbcf95"',
      };
      wx.BaaS.getRecordList(objects).then((res) => {
        log(res)
      }, (err) => {
        // err
        log(res)
      });
    },
    lessThan(){
      let objects = {
        tableID: theTableID,
        recordID__gte: '598eab9fc4a9ca6e61668acc',
        price__lt: 1000
      };
      wx.BaaS.getRecordList(objects).then((res) => {
        log(res)
      }, (err) => {
        // err
        log(res)
      });
    },
    reverseSorting() {
      let objects = {
        tableID: theTableID,
        order_by: '-created_at',
      };
      wx.BaaS.getRecordList(objects).then((res) => {
        log(res)
      }, (err) => {
        // err
        log(res)
      });
    },
    positiveSequenceSorting(){
      let objects = {
        tableID: theTableID,
        order_by: 'created_at',
      };
      wx.BaaS.getRecordList(objects).then((res) => {
        log(res)
      }, (err) => {
        // err
        log(res)
      });
    },
    limitRequest() {
      let pageNum = 3; // 页码
      let limit = 16; //指定该请求返回的结果个数
      let offset = limit * (pageNum - 1);//指定该请求返回的结果的起始位置（offset 从 0 开始算起）

      let objects = {
        tableID: theTableID,
        limit,
        offset
      };
      wx.BaaS.getRecordList(objects).then((res) => {
        log(res)
      }, (err) => {
        // err
        log(res)
      });
    },
    uploadFile(){
      // 文件上传示例代码
      let params = {}
      params.formData = {} // 可选的 formData

      wx.chooseImage({
        success: function (res) {
          let tempFilePaths = res.tempFilePaths
          params.filePath = tempFilePaths[0]

          wx.BaaS.uploadFile(params).then((res) => {
            // success. 服务器成功响应
            /* 注: 只要是服务器有响应的情况都会进入 success, 即便是 4xx，5xx 都会进入
              这是微信的处理方式与 BaaS 服务(器)无关
              如果上传成功则会返回资源远程地址
              如果上传失败则会返回失败信息
            */
            log(res)
            // 目前开发者工具上传文件功能有 bug, 请务必使用设备进行操作，同时打开 console 观察结果
          }, (err) => {
            // 微信自身系统级别错误
            log(res)
          })
        }
      })
    }


})
