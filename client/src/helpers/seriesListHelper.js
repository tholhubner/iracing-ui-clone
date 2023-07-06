export const isSeriesFavorite = (favoriteSeries, series) => {
	if (favoriteSeries.indexOf(series) > -1) {
		return true
	}
	return false
}