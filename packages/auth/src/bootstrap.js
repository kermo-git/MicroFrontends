import React from "react"
import ReactDOM from "react-dom"
import { createMemoryHistory, createBrowserHistory } from "history"

import App from "./App"

const mount = (element, { initialPath, onSignIn, onNavigate, defaultHistory }) => {
	const history = defaultHistory || createMemoryHistory({
		initialEntries: [initialPath]
	})
	
	if (onNavigate) {
		history.listen(onNavigate)
	}

	ReactDOM.render(
		<App onSignIn={onSignIn} history={history}/>,
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

if (process.env.NODE_ENV === "development") {
	const element = document.querySelector("#auth-dev-root")
	if (element) {
		mount(element, { defaultHistory: createBrowserHistory() })
	}
}

export { mount }