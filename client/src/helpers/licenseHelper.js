export const meetsMPR = (seriesLevel, userLevel) => {
	console.log(seriesLevel, userLevel)
	if (seriesLevel === userLevel) return "up"
	else if (userLevel < seriesLevel) return "low"
	else return "met"
}
