import React from "react"
import ReactDOM from "react-dom"
import { createMemoryHistory, createBrowserHistory } from "history"

import App from "./App"

const mount = (element, { onNavigate, defaultHistory }) => {
	const history = defaultHistory || createMemoryHistory()
	
	if (onNavigate) {
		history.listen(onNavigate)
	}

	ReactDOM.render(
		<App history={history}/>,
		element
	)

	return {
		onParentNavigate: ({ pathname: nextPath }) => {
			const currentPath = history.location.pathname
			if (currentPath != nextPath) {
				history.push(nextPath)
			}
		}
	}
}

/*
 * Check if we are running the microfrontend in isolation. 
 * In this case we should render immediately.
 * Only the local index.html should have a div with id="marketing-dev-root"
 * We assume that the host microfrontend doesn't have it inside its index.html.
 */
if (process.env.NODE_ENV === "development") {
	const element = document.querySelector("#marketing-dev-root")
	if (element) {
		mount(element, { defaultHistory: createBrowserHistory() })
	}
}

/*
 * We export the mount function so that the container can use it
 * whenever it wants to render the products.
 */
export { mount }