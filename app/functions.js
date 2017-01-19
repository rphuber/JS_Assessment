exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
		// es2015
		// return fn(...arr)
		// es5
		return fn.apply(null, arr)
  },

  speak : function(fn, obj) {
		return fn.apply(obj)
  },

  functionFunction : function(str) {
		return function(str2) {
			return `${str}, ${str2}`
		}
  },

  makeClosures : function(arr, fn) {
		return arr.map(x => {
			return () => fn(x)
		})
  },

  partial : function(fn, str1, str2) {
		return fn.bind(null, str1, str2)
  },

  useArguments : function() {
		// es2015
		// return [...arguments].reduce((x, y) => x + y)
		// es5
		return Array.from(arguments).reduce((x, y) => x + y)
  },

  callIt : function(fn) {
		return fn.apply(null, Array.from(arguments).slice(1))
  },

  partialUsingArguments : function(fn) {
		let params = Array.from(arguments).slice(1)
		return function () {
			params = [...params, ...Array.from(arguments)]
			return fn.apply(this, params)
		}
  },

  curryIt : function(fn) {
		return function (x) {
			return function (y) {
				return function (z) {
					return fn(x,y,z)
				}
			}
		}
  }
};
