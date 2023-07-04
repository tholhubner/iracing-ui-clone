import Avatar from "boring-avatars"

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
			<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
				<li><a>Item 1</a></li>
				<li><a>Item 2</a></li>
			</ul>
		</div>
	)
}

export default ProfileButton
