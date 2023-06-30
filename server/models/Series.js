const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Series = new Schema(
	{
		title: { type: String, required: true },
		information: { type: String, required: true },
		car: { type: String, required: true },
		seriesType: { type: String, required: true },
		maxLicense: { type: String, required: true },
		minLicense: { type: String, required: true },
		fixedSeries: { type: Boolean, required: true },
		minDrivers: { type: Number, required: true },
		maxDrivers: { type: Number, required: true },
	},
	{ timeseries: true }
)

module.exports = mongoose.model("series", Series)
