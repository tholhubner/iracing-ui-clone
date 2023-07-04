import { getIcon } from "../helpers/iconHelper"

function QuickAccess({}) {
	return (
		<div className="quick-access-container">
			<div className="quick-access-text">
				{getIcon("fire")}Quick Access <span className="quick-access-text-light">Get out there!</span>
			</div>
			<div className="quick-access-actions">
				<button className="quick-access-button">{getIcon("helmet")}<span className="quick-access-button-text">Test Drive</span></button>
				<button className="quick-access-button-green">{getIcon("flag")}<span className="quick-access-button-text">Race Now</span></button>
			</div>
		</div>
	)
}

export default QuickAccess
