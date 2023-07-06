import { getIcon } from "../helpers/iconHelper"

function LicenseItem({ license, licenseType, listItem=false }) {
	const {
		level,
		safetyRating,
		iRating,
	} = license
	const getLicenseString = (licenseType) => {
		switch(level) {
			case 0:
				return "Rookie"
			case 1:
				return "Class D"
			case 2:
				return "Class C"
			case 3:
				return "Class B"
			case 4:
				return "Class A"
		}
	}

	console.log(license.prototype)

	return (
		<div className={`license-item license-${String(level)}`}>
			{getIcon(licenseType)}
			{ listItem === true ? (
				<div>{getLicenseString(licenseType)}</div>
			) : (
				<>
					<span className="safety-rating-text-road">
						{safetyRating}
					</span>
					{iRating}
				</>
			)}
		</div>
	)
}

export default LicenseItem
