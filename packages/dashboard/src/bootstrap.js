import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

const mount = (element) => {
	ReactDOM.render(
		<App/>,
		element
	)
}

if (process.env.NODE_ENV === "development") {
	const element = document.querySelector("#dashboard-dev-root")
	if (element) {
		mount(element)
	}
}

export { mount }