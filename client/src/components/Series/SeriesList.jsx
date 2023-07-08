import { SeriesListHeader } from "./SeriesListHeader"
import { SeriesListBody } from "./SeriesListBody"

function SeriesList() {
	return (
		<div className="overflow-x-auto p-20">
			<h1 className="text-4xl p-1">Series List</h1>
			<div className="standard-divider" />
			<table className="series-table">
				<SeriesListHeader />
				<SeriesListBody />
			</table>
		</div>
	)
}

export { SeriesList }
