var webpack = require('webpack');


module.exports = {
	entry: './app/main',
	output: {
		path: __dirname,
		filename: './dist/bundle.js'
	},
    resolve: {
        extensions: ['', '.js', '.ts']
    },
	module: {
		loaders: [
			{test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/},
			{test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
			{test: /\.styl$/, loader: 'style!css!stylus', exclude: /node_modules/},
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			ON_TEST: process.env.NODE_ENV === 'test'
		})
	],
}
