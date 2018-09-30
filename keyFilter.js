module.exports = 
	Object.prototype.keyFilter = 
		function(keys = []) {
			return Object.assign({}, ...keyFind(this, keys));

			function keyFind(object, keys) {
				return Object.entries(object)
						.filter(([key]) => keys.includes(key))
						.map(([key, value]) => ({ [key]: value }));
			}
	}