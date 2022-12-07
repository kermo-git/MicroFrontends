const { merge } = require("webpack-merge")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

const commonConfig = require("./webpack.common.js")
const packageJson = require("../package.json")

const prodConfig = {
	mode: "production",

	plugins: [
		new ModuleFederationPlugin({
			name: "marketing",
			filename: "remoteEntry.js",
			exposes: {
				"./MarketingApp": "./src/bootstrap"
			},
			shared: packageJson.dependencies
		})
	]
}

module.exports = merge(commonConfig, prodConfig)