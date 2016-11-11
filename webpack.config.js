module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js']
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel' },
			{ test: /\.css$/, loader: 'style!css?modules&localIdentName=[path][name]---[local]---[hash:base64:5]' }
		]
	}
}