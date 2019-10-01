module.exports = function babelConfiguration(api) {
	api.cache(true);

	return {
		presets: [
			["@babel/preset-env", {
				"targets": {
					"browsers": ["last 2 Chrome versions"]
				},
			}]
		]
	};
};
