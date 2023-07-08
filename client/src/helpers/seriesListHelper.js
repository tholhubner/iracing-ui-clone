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
		item.guid = createGUID()
		tempArray.push(item)
	}
	return tempArray
}

export const createGUID = () => {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		const random = Math.random() * 16 | 0, value = c == 'x' ? random : (random & 0x3 | 0x8)
		return value.toString(16)
	})
}