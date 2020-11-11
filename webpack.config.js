const path = require("path"),
	CopyPlugin = require('copy-webpack-plugin'),
	webpack = require("webpack");

module.exports = {
	entry: "./src/index.js",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				options: { presets: ["@babel/env", "@babel/preset-react"], plugins: ["@babel/plugin-transform-runtime"] }
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	resolve: { extensions: ["*", ".js", ".jsx"] },
	output: {
		path: path.resolve(__dirname, "public/"),
		filename: "bundle.js"
	},
	plugins: [
		new CopyPlugin(
			{patterns: [{from: '**/*.html', context: './src'}]},
		)
	]
};