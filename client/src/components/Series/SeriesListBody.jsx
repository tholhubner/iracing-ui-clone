import { useMemo } from "react"
import { useSelector } from "react-redux"
import Avatar from "boring-avatars"
import { getIcon } from "../../helpers/iconHelper"
import { FavoriteButton } from "./FavoriteButton"
import { SeriesListButton } from "./SeriesListButton"
import { LicenseItem } from "../Licenses"
import { MultiCarDisplay } from "./MultiCarDisplay"
import { DriverCountDisplay } from "./DriverCountDisplay"
import { filterSeries } from "../../helpers/seriesListHelper"

function SeriesListBody() {
	const series = useSelector((state) => state.series)
	const licenses = useSelector((state) => state.user.licenses)
	const cachedSeries = useMemo(() => filterSeries(licenses, series), [licenses, series])

	return (
		<tbody>
			{cachedSeries.map(
				(item, index) => (
					<tr key={item.guid} className={
						[
							"series-table-item",
							index % 2 !== 0 && "series-table-item-alt"
						].filter(Boolean).join(" ")
					}>
						<FavoriteButton title={item.title} />
						<td></td>
						<td className="series-table-item-license">
							<DriverCountDisplay />
						</td>
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
						<td className="series-table-header-long">
							{ item.cars.length > 1 ?
								<MultiCarDisplay carCount={item.cars.length} /> 
							: 
								item.cars[0]
							}
						</td>
						<td className="series-table-header-long">{item.track}</td>
						<td>{item.teamEvent ? getIcon("team") : getIcon("empty")}</td>
						<td>{item.fixed ? getIcon("fixed") : getIcon("empty")}</td>
						<td>{item.mpr === "low" ? getIcon("check-blue") : getIcon("check")}</td>
						<td>{item.official ? getIcon(`mpr-${item.mpr}`) : getIcon("empty")}</td>
						<SeriesListButton mpr={item.mpr} />
					</tr>
				)
			)}
		</tbody>
	)
}

export { SeriesListBody }
