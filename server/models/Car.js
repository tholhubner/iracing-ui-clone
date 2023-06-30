const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Car = new Schema(
	{
		name: { type: String, required: true },
		description: { type: Blob, required: true },
		horsepower: { type: Number, required: true },
		torque: { type: Number, required: true },
		class: { type: String, required: true },
		carLength: { type: Number, required: true },
		carWidth: { type: Number, required: true },
		carHeight: { type: Number, required: true },
		wheelbase: { type: Number, required: true },
		carWeight: { type: Number, required: true },
		engine: { type: String, required: true },
		fuelCapacity: { type: Number, required: true },
		gearbox: { type: String, required: true },
		aerodynamics: { type: String, required: true },
		suspension: { type: String, required: true },
		lubrication: { type: String, required: true },
		cooling: { type: String, required: true },
		brakes: { type: String, required: true },
		wheels: { type: String, required: true }
	},
	{ timeseries: true }
)

module.exports = mongoose.model("cars", Car)
