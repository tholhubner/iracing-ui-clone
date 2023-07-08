import { getIcon } from "../../helpers/iconHelper"

function SeriesListButton({ mpr }) {
	return (
		<td>
			{mpr === "low" ? (
				<button className="view-series-button">
					{getIcon("flag-small")}
					<p className="nav-item-button-text">View Series</p>
				</button>
			) : (
				<button className="register-button">
					{getIcon("check-dark")}
					<p className="nav-item-button-text">Register</p>
				</button>
				)}
		</td>
	)
}

export { SeriesListButton }
