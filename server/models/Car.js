const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Car = new Schema(
	{
		name: { type: String, required: true },
		horsepower: { type: Number, required: true },
		torque: { type: Number, required: true },
		class: { type: String, required: true },
	},
	{ timeseries: true }
)

module.exports = mongoose.model("cars", Car)
