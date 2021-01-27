// pages/music/music.js


const MAX_LIMIT = 15
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [{
      url:'http://p1.music.126.net/nVUH7O5ZNMG1OQ1kE-tq9g==/109951165665595417.jpg?imageView&quality=89'
    },
    {
      url:'http://p1.music.126.net/C9I9GxpvRX7nCZyXNBeqOw==/109951165664694558.jpg?imageView&quality=89'
    },
    {
      url:'http://p1.music.126.net/q5rKcBx9Y0V37DsUSaQKXg==/109951165664695730.jpg?imageView&quality=89'
    },
    {
      url:'http://p1.music.126.net/WOoIZuva_umxxzYOvWINLA==/109951165664707565.jpg?imageView&quality=89'
    },
    {
      url:'http://p1.music.126.net/SLfispSeeEnb6Ezs0cNjBw==/109951165666128356.jpg?imageView&quality=89'
    },
    {
      url:'http://p1.music.126.net/UdSM2BmqY_h_t9HAOzb5dQ==/109951165664710664.jpg?imageView&quality=89'
    },
    {
      url:'http://p1.music.126.net/vAjwukVm-H0LOqzy4FTJXA==/109951165664851877.jpg?imageView&quality=89'
    },
    {
      url:'http://p1.music.126.net/9Ayx-EeCnuLRWKTcIhGB6g==/109951165664742856.jpg?imageView&quality=89'
    }
  ],
  playlist: []
//   playlist: [{
//     "id": "1001",
//     "playCount": 1.4641238e+06,
//     "name": "劲♂ 夫 ♀ 处 刑 曲",
//     "picUrl": "http://p4.music.126.net/klQ-QH6R73Z7LdLkNvl78A==/109951165374086761.jpg?param=140y140"
//   },
//   {
//     "id": "1002",
//     "playCount": 622822.6,
//     "name": "你一定要在自己热爱的世界里闪闪发亮啊",
//     "picUrl": "http://p3.music.126.net/uesfHcJmZ23S3er_1mpeaw==/109951165621856219.jpg?param=140y140"
//   },
//   {
//     "id": "1003",
//     "playCount": 1.785097e+06,
//     "name": "无论吃了多少瓜，依旧忠于自己热爱生活",
//     "picUrl": "http://p2.music.126.net/oILIciXGa_33JWkk1MOtnA==/109951165650557478.jpg?param=140y140"
//   },
//   {
//     "id": "1004",
//     "playCount": 7.719329e+06,
//     "name": "你明目张胆的偏爱就是救赎",
//     "picUrl": "http://p3.music.126.net/7DthZlysMRwZY4_oG84VFQ==/109951165542744632.jpg?param=140y140"
//   },
//   {
//     "id": "1005",
//     "playCount": 1.06749088e+08,
//     "name": "2021年全网最流行宝藏新歌",
//     "picUrl": "http://p4.music.126.net/vMiQiZ1PRtkdacqJaruQVg==/109951165611860486.jpg?param=140y140"
//   },
//   {
//     "id": "1006",
//     "playCount": 1.5742008e+06,
//     "name": "大赦天下 条子 蹦迪抖腿",
//     "picUrl": "http://p4.music.126.net/RN8w_qrmZH8atCkGHmsKLg==/109951165474251886.jpg?param=140y140"
//   },
//   {
//     "id": "1007",
//     "playCount": 1.1042008e+06,
//     "name": "想和你漫步雪中，听你哼唱我爱听的歌",
//     "picUrl": "http://p4.music.126.net/q3Xt_5fuORGktCRTMrVjlQ==/109951165627341690.jpg?param=140y140"
//   },
//   {
//     "id": "1008",
//     "playCount": 1.3242008e+06,
//     "name": "相遇，紧张，脸红，躲闪，自言自语",
//     "picUrl": "http://p3.music.126.net/FGq0zEGlFRfumV8n4zRzQg==/109951165643217212.jpg?param=140y140"
//   },
//   {
//     "id": "1009",
//     "playCount": 1.0742008e+06,
//     "name": "皮皮虾渡夕（BGM）",
//     "picUrl": "http://p4.music.126.net/Y4yCHC_COlb4P1upACm4cQ==/109951165532510984.jpg?param=140y140"
//   }
// ]
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getPlaylist()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
    _getPlaylist() {
      wx.showLoading({
        title: '加载中',
      })
      wx.cloud.callFunction({
        name: 'playlist'
      }).then((res) => {
        console.log(res)
        this.setData({
          playlist: res.result
        })
        wx.hideLoading()
      })
  },
})