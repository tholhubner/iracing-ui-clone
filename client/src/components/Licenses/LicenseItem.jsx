import { getIcon } from "../../helpers/iconHelper"

function LicenseItem({ licenseType, license={}, listItem=false, licenseLevel=null }) {
	const {
		level,
		safetyRating,
		iRating,
	} = license
	const getLicenseString = (type) => {
		switch(type) {
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

	if (listItem) {
		return (
			<div className={`license-item license-${String(licenseLevel)}`}>
				{getIcon(licenseType)}
				<span className="license-class-text">
					{getLicenseString(licenseLevel)}
				</span>
			</div>
		)
	} else {
		return (
			<div className={`license-item license-${String(level)}`}>
				{getIcon(licenseType)}
				<span className="safety-rating-text-road">
					{safetyRating}
				</span>
				{iRating}
			</div>
		)
	}
}

export { LicenseItem }
