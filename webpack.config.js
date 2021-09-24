/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	// Where files should be sent once they are bundled
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'index.bundle.js',
		publicPath: '/',
	},
	// webpack 5 comes with devServer which Tools failed to load source map: Could not load content floads in development mode
	devServer: {
		port: 3000,
		watchContentBase: true,
		historyApiFallback: true,
	},
	// Rules of how webpack will take our files, complie & bundle them for the browser
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: {
					loader: 'ts-loader',
				},
			},
			{
				test: /\.(s*)css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/index.html' }),
		new MiniCssExtractPlugin(),
	],
	resolve: {
		extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
	},
};
