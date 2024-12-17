// 这段代码是一个使用 wx.request 方法请求 QQ 音乐相关接口

// 发起获取热门搜索的请求 
// 返回一个 Promise 对象，用于处理请求结果
const getHotSearch = () => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&jsonpCallback=hotSearchKeysmod_top_search&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0',
      data: {
        g_tk: 5381,
        jsonpCallback: 'hotSearchKeysmod_top_search',
        loginUin: 0,
        hostUin: 0,
        format: 'jsonp',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'yqq',
        needNewCode: 0
      },
      success: function (res) {
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}
// 发起搜索关键词的请求
// 返回一个 Promise 对象，用于处理请求结果
const search = (key) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg?is_xml=0&format=jsonp&key=${key}g_tk=5381&jsonpCallback=SmartboxKeysCallbackmod_top_search3847&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0`,
      data: {
        is_xml: 0,
        format: 'jsonp',
        key: key,
        g_tk: 5381,
        jsonpCallback: 'SmartboxKeysCallbackmod_top_search3847',
        loginUin: 0,
        hostUin: 0,
        format: 'jsonp',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'yqq',
        needNewCode: 0
      },
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}
// 发起获取歌曲详情的请求
// 返回一个 Promise 对象，用于处理请求结果
const getSongDetails = (mid) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `https://c.y.qq.com/v8/fcg-bin/fcg_play_single_song.fcg?songmid=${mid}&tpl=yqq_song_detail&format=jsonp&callback=getOneSongInfoCallback&g_tk=5381&jsonpCallback=getOneSongInfoCallback&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0`,
      data: {
        songmid: mid,
        tpl: 'yqq_song_detail',
        format: 'jsonp',
        callback: 'getOneSongInfoCallback',
        g_tk: 5381,
        jsonpCallback: 'getOneSongInfoCallback',
        loginUin: 0,
        hostUin: 0,
        format: 'jsonp',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: 0,
        platform: 'yqq',
        needNewCode: 0
      },
      success: function (res) {
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}
// 发起获取歌手歌曲列表的请求
// 返回一个 Promise 对象，用于处理请求结果
const getSingerSongs = (singermid, startIndex) => {
  wx.showLoading()
  return new Promise((resolve, reject) => {
    wx.request({
      url: `https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=5381&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&hostUin=0&needNewCode=0&platform=yqq&order=listen&begin=0&num=40&songstatus=1&singermid=${singermid}&jsonpCallback=callback`,
      data: {
        g_tk: 5381,
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        format: 'jsonp',
        hostUin: 0,
        needNewCode: 0,
        platform: 'yqq',
        order: 'listen',
        begin: startIndex,
        num: 40,
        songstatus: 1,
        singermid: singermid,
        jsonpCallback: 'callback'
      },
      success: function (res) {
        wx.hideLoading()
        resolve(res)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}
// 发起获取排行榜列表的请求
// 返回一个 Promise 对象，用于处理请求结果
const getTopList = () => {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&uin=0&needNewCode=1&platform=h5&jsonpCallback=jp1'
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      success: function (res) {
        resolve(res)
      }
    })
  })
}
// 发起获取排行榜音乐列表的请求
// 返回一个 Promise 对象，用于处理请求结果
const getTopMusicList = (topid) => {
  const url = `https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&topid=${topid}&needNewCode=1&uin=0&tpl=3&page=detail&type=top&platform=h5&jsonpCallback=jp1`
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      success: function (res) {
        resolve(res)
      }
    })
  })
}

module.exports = {
  getHotSearch: getHotSearch,
  search: search,
  getSongDetails: getSongDetails,
  getSingerSongs: getSingerSongs,
  getTopList: getTopList,
  getTopMusicList: getTopMusicList
}