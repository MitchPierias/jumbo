const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

/**
 * Root Path
 * @desc Constructs a valid path from the current project directory
 * @param args Path components
 * @returns Valid concatenated path
 */
const rootPath = (...args) => args.reduce((fullPath, pathComponent) => path.join(fullPath, pathComponent), __dirname);

/**
 * HTML Webpack Plugin
 * @desc Configuration for building the HTML page
 * @note Some props are injected and some are configuration (rendering) settings
 */
const htmlPlugin = new HtmlWebPackPlugin({
	title: "Movie Database",
	template: rootPath("assets", "index.html"),
	filename: "index.html",
	meta: {
		"viewport": "width=device-width, initial-scale=1, shrink-to-fit=no",
		"link": {
            "href":"https://fonts.googleapis.com/css?family=Lato",
            "rel":"stylesheet"
        }
	},
	minify: {
		collapseWhitespace: true,
		removeComments: true,
		removeRedundantAttributes: true,
		removeScriptTypeAttributes: true,
		removeStyleLinkTypeAttributes: true,
		useShortDoctype: true
	}
});

const hotModulePlugin = new webpack.HotModuleReplacementPlugin();

/**
 * Webpack Configuration
 */
module.exports = {
	entry: ['webpack/hot/dev-server', rootPath("src","index.tsx")],
	target: "web",
	output: {
		path: rootPath("dist"),
		publicPath: "/",
		filename: "[name]-bundle.js"
	},
	module: {
		rules: [
            {
				test: /\.jsx?$/,
				exclude: [
                    /node_modules/
				],
				use: "babel-loader"
			}, {
				test: /\.tsx?$/,
				use:"awesome-typescript-loader",
				exclude: [
					/node_modules/
				]
			}, {
				test: /\.css$/,
				use: [
					{
						loader:"style-loader"
					}, {
						loader:"css-loader"
					}
				]
			}
		]
	},
	plugins: [
		htmlPlugin,
		hotModulePlugin
	],
	resolve: {
		extensions: [".ts",".tsx",".js",".jsx"]
	},
	devServer: {
		publicPath:"http://localhost:8000",
		contentBase: rootPath("assets"),
		open: false,
		lazy: false,
		compress: true,
		historyApiFallback: true,
		port: 8000
	}
}