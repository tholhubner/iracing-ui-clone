import { useState } from "react"
import moment from "moment"
import { getIcon } from "../../helpers/iconHelper"

function ClockDisplay() {
	const [currentTime, setCurrentTime] = useState(() => moment().format("h:mm:ss a"))

	const clockTimer = setTimeout(() => {
    setCurrentTime(moment().format("h:mm:ss a"))
		clearTimeout(clockTimer)
  }, 1000)

	return (
		<div className="header-clock">{getIcon("clock")}
			{currentTime}
		</div>
	)
}

export { ClockDisplay }
