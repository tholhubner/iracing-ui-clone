import { meetsMPR } from "./licenseHelper"

export const isSeriesFavorite = (favoriteSeries, series) => {
	if (favoriteSeries.indexOf(series) > -1) {
		return true
	}
	return false
}

export const filterSeries = (licenses, series) => {
	const length = series.length
	const tempArray = []
	for (let i = 0; i < length; i++) {
		const item = {...series[i]}
		item.mpr = meetsMPR(series[i].license, licenses[series[i].licenseType].level)
		tempArray.push(item)
	}
	return tempArray
}