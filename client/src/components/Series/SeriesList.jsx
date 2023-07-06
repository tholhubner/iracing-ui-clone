import { useDispatch, useSelector } from "react-redux"
import Avatar from "boring-avatars"
import { getIcon } from "../../helpers/iconHelper"
import { useEffect, useState } from "react"
import { setSeriesMPR } from "../../app/reducers/seriesReducer"
import { meetsMPR } from "../../helpers/licenseHelper"
import { LicenseItem } from "../Licenses"
import { MultiCarDisplay } from "./MultiCarDisplay"

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
		<div className="overflow-x-auto p-20">
			<h1 className="text-4xl p-1">Series List</h1>
			<div className="standard-divider" />
			<table className="series-table">
				<thead className="series-table-header">
					<tr>
						<th>{getIcon("favorite-header")}</th>
						<th>{getIcon("timer")}</th>
						<th>{getIcon("helmet")}</th>
						<th>License</th>
						<th align="center">Logo</th>
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
				<tbody>
					{series
						.map((item, index) => {
							console.log(item)
							return (
								<tr className={
									[
										"series-table-item",
										index % 2 !== 0 && "series-table-item-alt"
									].filter(Boolean).join(" ")
								}>
									<td>{isSeriesFavorite(item.title) ? getIcon("favorite") : getIcon("favorite-empty") }</td>
									<td></td>
									<td></td>
									<td className="series-table-item-license">
										<LicenseItem
											licenseType={item.licenseType}
											licenseLevel={item.license}
											listItem
										/>	
									</td>
									<td className="series-table-item-non-text">
										<Avatar
											size={30}
											name={item.title}
											square
											variant="pixel"
										/>
									</td>
									<td className="series-table-header-long">{item.title}</td>
									<td className="series-table-header-long">{item.cars.length > 1 ? <MultiCarDisplay carCount={item.cars.length} /> : item.cars[0]}</td>
									<td className="series-table-header-long">{item.track}</td>
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
