import React, { useEffect, useRef } from "react"
import { useHistory } from "react-router-dom"

import { mount } from "marketing/MarketingApp"

export default() => {
	const ref = useRef(null)
	const history = useHistory()

	useEffect(() => {
		const { onParentNavigate } = mount(ref.current, {
			onNavigate: ({ pathname: nextPath }) => {
				const currentPath = history.location.pathname
				if (currentPath != nextPath) {
					history.push(nextPath)
				}
			}
		})
		history.listen(onParentNavigate)
	}, [])

	return <div ref = {ref}/>
}
