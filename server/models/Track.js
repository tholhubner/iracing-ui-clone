const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Track = new Schema(
	{
		name: { type: String, required: true },
	},
	{ timeseries: true }
)

module.exports = mongoose.model("tracks", Track)
