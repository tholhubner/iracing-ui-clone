import { useState } from "react"
import { useSelector } from "react-redux"
import { getIcon } from "../helpers/iconHelper"
import LicenseItem from "./LicenseItem"

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
				<LicenseItem license={oval} licenseType="oval" />
				<LicenseItem license={dirtOval} licenseType="dirtOval" />
			</div>
			<div className="license-col">
				<LicenseItem license={road} licenseType="road" />
				<LicenseItem license={dirtRoad} licenseType="dirtRoad" />
			</div>
		</div>
	)
}

export default LicenseCluster
