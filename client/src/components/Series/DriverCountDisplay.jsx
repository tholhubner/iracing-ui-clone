import { getIcon } from "../../helpers/iconHelper"

function DriverCountDisplay() {
	const driverCount = Math.floor(Math.random() * 100)
	return (
		<>
			{driverCount === 0 ? (
				<>
					{getIcon("empty")}
				</>
			) : (
				<div className="driver-count-container">
					{getIcon("helmet-filled")}
					<span className="driver-count-text">{Math.floor(Math.random() * 100)}</span>
				</div>
			)}
		</>
	)
}

export { DriverCountDisplay }