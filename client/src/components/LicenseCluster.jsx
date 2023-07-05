import { useState } from "react"
import { useSelector } from "react-redux"
import { getIcon } from "../helpers/iconHelper"

function LicenseCluster() {
	const {
		dirtOval,
		dirtRoad,
		oval,
		road,
	} = useSelector((state) => state.user.licenses)
	return (
		<div className="license-group">
			<div className="license-col">
				<div className={`license-item license-${oval.class}`}>
					{getIcon("oval")}
					<span className="safety-rating-text">
						{oval.safetyRating}
					</span>
					{oval.iRating}
				</div>
				<div className={`license-item license-${dirtOval.class}`}>
					{getIcon("dirtoval")}
					<span className="safety-rating-text">
						{dirtOval.safetyRating}
					</span>
					{dirtOval.iRating}
				</div>
			</div>
			<div className="license-col">
				<div className={`license-item license-${road.class}`}>
					{getIcon("road")}
					<span className="safety-rating-text-road">
						{road.safetyRating}
					</span>
					{road.iRating}
				</div>
				<div className={`license-item license-${dirtRoad.class}`}>
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
