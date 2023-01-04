import { createApp } from "vue"
import Dashboard from "./components/Dashboard.vue"

const mount = (element) => {
	const app = createApp(Dashboard)
	app.mount(element)
}

if (process.env.NODE_ENV === "development") {
	const element = document.querySelector("#dashboard-dev-root")
	if (element) {
		mount(element)
	}
}

export { mount }