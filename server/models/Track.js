const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Track = new Schema(
	{
		name: { type: String, required: true },
		description: { type: Blob, required: true },
		location: { type: String, required: true },
		configLength: { type: Number, required: true },
		nightLights: { type: Boolean, required: true },
		configsAvailable: {type: Number, required: true },
	},
	{ timeseries: true }
)

module.exports = mongoose.model("tracks", Track)
