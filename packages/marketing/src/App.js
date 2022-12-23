import React from "react"
import { Switch, Route, Router } from "react-router-dom"
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles"

import Pricing from "./components/Pricing"
import Landing from "./components/Landing"

const generateClassName = createGenerateClassName({
	productionPrefix: "ma"
})

export default({ history }) => {
	return (
		<StylesProvider generateClassName={generateClassName}>
			<Router history={history}>
				<Switch>
					<Route exact path="/pricing" component={Pricing}/>
					<Route path="/" component={Landing}/>
				</Switch>
			</Router>
		</StylesProvider>
	)
}