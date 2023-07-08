import { useDispatch, useSelector } from "react-redux"
import Avatar from "boring-avatars"
import { getIcon } from "../../helpers/iconHelper"
import { useEffect, useMemo, useState } from "react"
import { meetsMPR } from "../../helpers/licenseHelper"
import { LicenseItem } from "../Licenses"
import { MultiCarDisplay } from "./MultiCarDisplay"
import { addSeriesToFavorites, removeSeriesFromFavorites } from "../../app/reducers/userReducer"
import { filterSeries, isSeriesFavorite } from "../../helpers/seriesListHelper"
import { DriverCountDisplay } from "./DriverCountDisplay"

function SeriesList() {
	const series = useSelector((state) => state.series)
	const {
		favoriteSeries,
		licenses
	} = useSelector((state) => state.user)
	const cachedSeries = useMemo(() => filterSeries(licenses, series), [licenses, series])

	return (
		<div className="overflow-x-auto p-20">
			<h1 className="text-4xl p-1">Series List</h1>
			<div className="standard-divider" />
			<table className="series-table">
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
				<tbody>
					{cachedSeries
						.map((item, index) => {
							console.log(item)
							return (
								<tr key={index} className={
									[
										"series-table-item",
										index % 2 !== 0 && "series-table-item-alt"
									].filter(Boolean).join(" ")
								}>
									<td>
										<div onClick={() => {
											if (isSeriesFavorite(favoriteSeries, item.title)) dispatch(removeSeriesFromFavorites(item.title))
											else dispatch(addSeriesToFavorites(item.title))
										}}>
											{isSeriesFavorite(favoriteSeries, item.title) ? getIcon("favorite") : getIcon("favorite-empty") }
										</div>
									</td>
									<td></td>
									<td className="series-table-item-license"><DriverCountDisplay /></td>
									<td className="series-table-item-license">
										<LicenseItem
											licenseType={item.licenseType}
											licenseLevel={item.license}
											listItem
										/>	
									</td>
									<td className="series-table-item-logo">
										<Avatar
											size={25}
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
									<td>
										{item.mpr === "low" ? (
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
								</tr>
							)
						})}
				</tbody>
			</table>
		</div>
	)
}

export { SeriesList }
