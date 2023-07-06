import { getIcon } from "../../helpers/iconHelper"

function MultiCarDisplay({ carCount }) {
	return (
		<div className="multi-car-counter">
			{getIcon("cars")}{carCount} Cars
		</div>
	)
}

export { MultiCarDisplay }
