const path = require('path');
//node모듈
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	//시작점표현 entry
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				//정규식표현 .css로 끝나면 true-> use
				use: ['style-loader', 'css-loader']
			//	실행순서: css-loader -> style-loader
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin()
	]
};