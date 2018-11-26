const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
	mode: 'none',
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist')
	},
	plugins: [
		new VueLoaderPlugin()
	],
	module: {
		rules: [{
			test: /.vue$/,
			loader: 'vue-loader'
		}]
	}
}
