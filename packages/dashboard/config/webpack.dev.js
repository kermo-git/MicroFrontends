const { merge } = require("webpack-merge")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const HtmlWebPackPlugin = require("html-webpack-plugin")

const commonConfig = require("./webpack.common.js")
const packageJson = require("../package.json")

const PORT = 8083

const devConfig = {
	mode: "development",

	devtool: "eval-source-map",

	output: {
		publicPath: `http://localhost:${PORT}/`
	},
	devServer: {
		port: PORT,
		historyApiFallback: true,
		headers: {
			"Access-Control-Allow-Origin": "*"
		}
	},

	plugins: [
		new ModuleFederationPlugin({
			name: "dashboard",
			filename: "remoteEntry.js",
			exposes: {
				"./DashboardApp": "./src/bootstrap"
			},
			shared: packageJson.dependencies
		}),
		new HtmlWebPackPlugin({
			template: "./public/index.html"
		})
	]
}

module.exports = merge(commonConfig, devConfig)