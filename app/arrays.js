exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item)
  },

  sum : function(arr) {
    return arr.reduce((x,y) => x + y);
  },

  remove : function(arr, item) {
    return arr.filter(element => element !== item)
  },

  removeWithoutCopy : function(arr, item) {
    if (arr.indexOf(item) !== -1) {
      arr.splice(arr.indexOf(item), 1)
      this.removeWithoutCopy(arr, item)
    }
    return arr
  },

  append : function(arr, item) {
    // es2015 (no mutation)
    // return [...arr, item]
    arr.push(item)
    return arr
  },

  truncate : function(arr) {
    // no mutation
    // return arr.slice(0, arr.length - 1)
    arr.pop()
    return arr
  },

  prepend : function(arr, item) {
    //  es2015 (no mutation)
    // return [item, ...arr]
    arr.unshift(item)
    return arr
  },

  curtail : function(arr) {
    // no mutation
    // return arr.slice(1)
    arr.shift()
    return arr
  },

  concat : function(arr1, arr2) {
    // es2015
    // return [...arr1, ...arr2]
    // es5
    return arr1.concat(arr2)
  },

  insert : function(arr, item, index) {
    // es2015
    // return [...arr.slice(0,index), item, ...arr.slice(index)]
    // es5
    arr.splice(index, 0, item)
    return arr
  },

  count : function(arr, item) {
    return arr.filter(e => e === item).length
  },

  duplicates : function(arr) {
    let dupes = []
    arr.sort().filter((element, index) => {
      const next = arr[index + 1]
      if (element === next) {
        if (dupes.indexOf(element) === -1) {
          dupes.push(element)
        }
      }
    })
    return dupes
  },

  square : function(arr) {
    return arr.map(element => element * element)
  },

  findAllOccurrences : function(arr, target) {
    const indices = []
    arr.filter((element, index) => {
      if (element === target) {
        indices.push(index)
      }
    })
    return indices
  }
};
