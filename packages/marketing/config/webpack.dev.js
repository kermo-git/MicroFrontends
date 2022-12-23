const { merge } = require("webpack-merge")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const HtmlWebPackPlugin = require("html-webpack-plugin")

const commonConfig = require("./webpack.common.js")
const packageJson = require("../package.json")

const devConfig = {
	mode: "development",

	devtool: "eval-source-map",
	devServer: {
		port: 8081,
		historyApiFallback: true
	},

	plugins: [
		new ModuleFederationPlugin({
			name: "marketing",
			filename: "remoteEntry.js",
			exposes: {
				"./MarketingApp": "./src/bootstrap"
			},
			shared: packageJson.dependencies
		}),
		new HtmlWebPackPlugin({
			template: "./public/index.html"
		})
	]
}

module.exports = merge(commonConfig, devConfig)