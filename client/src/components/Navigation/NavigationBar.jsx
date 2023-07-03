import { useEffect, useState } from "react"
import { getIcon } from "../../helpers/iconHelper"
import { bottomNavigation, topNavigation } from "../../testData/navigation"
import { NavigationItem } from "./NavigationItem"
import { useDispatch, useSelector } from "react-redux"

function NavigationBar() {
	const showNavigation = useSelector((state) => state.various.showNavigation)
  const [navState, setNavState] = useState(showNavigation)
  const dispatch = useDispatch()

	useEffect(() => {
		console.log("show navigation", showNavigation)
		setNavState(showNavigation)
	}, [showNavigation])

  return (
		<div className={[
			"navigation",
			!navState && "navigation-hidden"
		].filter(Boolean).join(" ")}>
			<div className="top-nav">
				{topNavigation
					.map((item, index) => (
						<NavigationItem
							key={index}
							title={item.title}
							icon={item.icon}
							content={item.content}
						/>
					))}
			</div>
			<div className="bottom-nav">
				{bottomNavigation
					.map((item, index) => (
						<NavigationItem
							key={index}
							title={item.title}
							icon={item.icon}
							content={item.content}
						/>
					))}
			</div>
		</div>
  )
}

export { NavigationBar }
