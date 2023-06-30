const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Series = new Schema(
	{
		title: { type: String, required: true },
	},
	{ timeseries: true }
)

module.exports = mongoose.model("series", Series)
