import { useDispatch, useSelector } from "react-redux"
import Avatar from "boring-avatars"
import { getIcon } from "../../helpers/iconHelper"
import LicenseItem from "../LicenseItem"
import { useEffect, useState } from "react"
import { setSeriesMPR } from "../../app/reducers/seriesReducer"
import { meetsMPR } from "../../helpers/licenseHelper"

function SeriesList() {
	const series = useSelector((state) => state.series)
	const favoriteSeries = useSelector((state) => state.user.favoriteSeries)
	const licenses = useSelector((state) => state.user.licenses)
	const [localSeries, setLocalSeries] = useState([])
	const dispatch = useDispatch()

	const isSeriesFavorite = (series) => {
		if (favoriteSeries.indexOf(series) > -1) {
			return true
		}
		return false
	}
	useEffect(() => {
		const length = series.length
		const tempSeries = series
		const tempArray = []
		for (let i = 0; i < length; i++) {
			dispatch(setSeriesMPR({index: i, mprValue: meetsMPR(series[i].license, licenses[series[i].licenseType].level)}))
		}
	}, [series])
	return (
		<div className="overflow-x-auto">
			<table className="table table-zebra">
				<thead>
					<tr>
						<th>{getIcon("favorite-header")}</th>
						<th>{getIcon("timer")}</th>
						<th>{getIcon("helmet")}</th>
						<th>License</th>
						<th>Logo</th>
						<th>Series</th>
						<th>Car(s)</th>
						<th>Track</th>
						<th>Team</th>
						<th>Fixed</th>
						<th>{getIcon("check-header")}</th>
						<th>MPR</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{series
						.map((item, index) => {
							console.log(item)
							return (
								<tr>
									<td>{isSeriesFavorite(item.title) ? getIcon("favorite") : getIcon("favorite-empty") }</td>
									<td></td>
									<td></td>
									<td><LicenseItem licenseType={item.licenseType} licenseLevel={item.license} listItem /></td>
									<td>
										<Avatar
											name={item.title}
											square
											variant="pixel"
										/>
									</td>
									<td>{item.title}</td>
									<td>{item.cars.length > 1 ? `${item.cars.length} Cars` : item.cars[0]}</td>
									<td>{item.track}</td>
									<td>{item.teamEvent ? getIcon("team") : getIcon("empty")}</td>
									<td>{item.fixed ? getIcon("fixed") : getIcon("empty")}</td>
									<td>{item.mpr === "low" ? getIcon("check-blue") : getIcon("check")}</td>
									<td>{item.official ? getIcon(`mpr-${item.mpr}`) : getIcon("empty")}</td>
									<td></td>
								</tr>
							)
						})}
				</tbody>
			</table>
		</div>
	)
}

export { SeriesList }
