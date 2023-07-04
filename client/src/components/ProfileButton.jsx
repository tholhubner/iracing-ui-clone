import Avatar from "boring-avatars"
import { getIcon } from "../helpers/iconHelper"

function ProfileButton({
	username
}) {
	return (
		<div className="dropdown dropdown-end">
			<label tabIndex={0} className="btn profile-button">
				<Avatar
					name={username}
					variant="beam"
					tabIndex={0}
				/>
			</label>
			<ul tabIndex={0} className="dropdown-content z-[1] menu shadow w-60">
				<li><a>{getIcon("profile")}{username}</a></li>
				<li><a>{getIcon("key")}Account</a></li>
				<div className="profile-divider" />
				<li><a>{getIcon("offline")}Appear Offline</a></li>
				<div className="profile-divider" />
				<li><a>{getIcon("membersite")}Classic Member Website</a></li>
				<li><a>{getIcon("logout")}Sign Out</a></li>
				<li><a>{getIcon("quit")}Quit</a></li>
			</ul>
		</div>
	)
}

export default ProfileButton
