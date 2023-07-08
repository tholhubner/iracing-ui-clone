import { useState } from "react"
import { getIcon } from "../../helpers/iconHelper"
import { bottomNavigation, topNavigation } from "../../testData/navigation"
import { useDispatch, useSelector } from "react-redux"
import NavigationItem from "./NavigationItem"
import { setShowNavigation } from "../../app/reducers/variousReducer"

function NavigationBar() {
	const showNavigation = useSelector((state) => state.various.showNavigation)
  const dispatch = useDispatch()

  return (
		<div className={[
			"navigation",
			!showNavigation && "navigation-hidden"
		].filter(Boolean).join(" ")}>
			<div className="top-nav">
				{topNavigation
					.map((item, index) => (
						<NavigationItem
							key={`${item.title}${index}`}
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
							key={`${item.title}${index}`}
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
