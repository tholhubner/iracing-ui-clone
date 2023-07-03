import { getIcon } from "../helpers/iconHelper"

function LicenseCluster() {
	return (
		<div className="license-group">
			<div className="license-col">
				<div className="license-item license-a">{getIcon("oval")}<span className="safety-rating-text">3.54</span>1234</div>
				<div className="license-item license-b">{getIcon("dirtoval")}<span className="safety-rating-text">3.34</span>1234</div>
			</div>
			<div className="license-col">
				<div className="license-item license-c">{getIcon("road")}<span className="safety-rating-text-road">3.12</span>1234</div>
				<div className="license-item license-d">{getIcon("dirtroad")}<span className="safety-rating-text">3.33</span>1234</div>
			</div>
		</div>
	)
}

export default LicenseCluster