const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Driver = new Schema(
	{
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
	},
	{ timeseries: true }
)

module.exports = mongoose.model("drivers", Driver)
