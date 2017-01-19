exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
		return fn.apply(obj)

  },

  alterObjects : function(constructor, greeting) {
		constructor.prototype.greeting = greeting
  },

  iterate : function(obj) {
		let results = []
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				results.push(`${key}: ${obj[key]}`)
			}
		}
		return results
  }
};
