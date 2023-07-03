import { getIcon } from "../helpers/iconHelper"

function LicenseCluster({ userLicenses }) {
	const {
		oval,
		dirtOval,
		road,
		dirtRoad,
	} = userLicenses
	return (
		<div className="license-group">
			<div className="license-col">
				<div className="license-item license-a">
					{getIcon("oval")}
					<span className="safety-rating-text">
						{oval.safetyRating}
					</span>
					{oval.iRating}
				</div>
				<div className="license-item license-b">
					{getIcon("dirtoval")}
					<span className="safety-rating-text">
						{dirtOval.safetyRating}
					</span>
					{dirtOval.iRating}
				</div>
			</div>
			<div className="license-col">
				<div className="license-item license-c">
					{getIcon("road")}
					<span className="safety-rating-text-road">
						{road.safetyRating}
					</span>
					{road.iRating}
				</div>
				<div className="license-item license-d">
					{getIcon("dirtroad")}
					<span className="safety-rating-text">
						{dirtRoad.safetyRating}
					</span>
					{dirtRoad.iRating}
				</div>
			</div>
		</div>
	)
}

export default LicenseCluster
