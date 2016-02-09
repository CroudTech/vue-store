var store = require('localstorage');

module.exports = {
	install: function (Vue) {
		Object.defineProperties(Vue.prototype, {
			$store: {
				get: function() {
					return Vue.store.bind(this);
				},
			},
		});

		Vue.store = function() {
			return store;
		}
	},
};
