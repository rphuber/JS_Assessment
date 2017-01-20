exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(
      (resolve, reject) => {
        resolve(value)
      }
    )
  },

  manipulateRemoteData : function(url) {
    return new Promise(
      (resolve, reject) => {
        $.get(url, (data) => {
          let arr = Array.from(data.people).map(item => item.name).sort()
          resolve(arr)
        })
      }
    )
  }
};
