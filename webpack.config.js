const path = require('path');

// module.exports = {
// 	entry: './src/index.js',
// 	output: {
// 		filename: 'main.js',
// 		path: path.resolve(__dirname, 'dist'),
// 	},
// };

// 載入轉存 css 檔案的套件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


var config = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.(scss|sass)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../'
						}
					},
					"css-loader",
					"sass-loader",
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							useRelativePath: false,
							outputPath: 'images/',
							name: '[name].[ext]'
						}
					}
				]
			}]
	},
	plugins: [
		new MiniCssExtractPlugin({
			// 指定輸出位置
			// [name] 為上方進入點設定的 "名稱"
			filename: "./[name].css"
		})
	],
};

module.exports = config;
