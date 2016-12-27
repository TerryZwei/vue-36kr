const _filters = {
  caculateTime (time) {
    const _time = new Date(time).getTime()
    const _ctime = new Date().getTime()
    const _disTime = _ctime - _time
    if (_disTime > 24 * 60 * 60 * 1000) {
      return ~~(_disTime / (24 * 60 * 60 * 1000)) + '天前'
    } else if (_disTime > 60 * 60 * 1000) {
      return ~~(_disTime / (60 * 60 * 1000)) + '小时前'
    } else if (_disTime > 60 * 1000) {
      return ~~(_disTime / (60 * 1000)) + '分钟前'
    } else if (_disTime > 1000) {
      return ~~(_disTime / 1000) + '秒钟前'
    } else {
      return '1天前'
    }
  },
  toFixCount (viewCount, val) {
    return (+viewCount / 10000).toFixed(val)
  }
}

export default (Vue) => {
  Object.keys(_filters).forEach(key => {
    Vue.filter(key, _filters[key])
  })
}
