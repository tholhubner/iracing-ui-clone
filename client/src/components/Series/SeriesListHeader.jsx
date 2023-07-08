import { getIcon } from "../../helpers/iconHelper"

function SeriesListHeader({}) {
	return (
		<thead className="series-table-header">
			<tr>
				<th>{getIcon("favorite-header")}</th>
				<th>{getIcon("timer")}</th>
				<th className="series-table-header-drivers">{getIcon("helmet")}</th>
				<th className="series-table-header-license">License</th>
				<th className="series-table-header-logo">Logo</th>
				<th className="series-table-header-long">Series</th>
				<th className="series-table-header-long">Car(s)</th>
				<th className="series-table-header-long">Track</th>
				<th>Team</th>
				<th>Fixed</th>
				<th>{getIcon("check-header")}</th>
				<th>MPR</th>
				<th></th>
			</tr>
		</thead>
	)
}

export { SeriesListHeader }