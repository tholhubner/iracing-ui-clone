import { getIcon } from "../../helpers/iconHelper";

function NavigationItem({
	title,
	icon,
	content,
}) {
	return (
		<div className={content ? "nav-item collapse collapse-arrow" : "nav-item"}>
			{content && <input type="radio" name="my-accordion-3" />}
			<div className="title-with-icon collapse-title font-medium ">
				{ getIcon(icon) }
				<p
					className="nav-title-text"
				>
					{title}
				</p>
			</div>
			<div className="collapse-content text-sm"> 
				{content && content
					.map((item, index) => (
						<button
							key={index}
							className={["navigation-button", `${item.type}-button`].join(" ")}
							onClick={item.action}
						>
							{item.icon && getIcon(item.icon)}
							<p
								className={
									item.icon ?
									"nav-item-button-text-icon" :
									"nav-item-button-text"
								}
							>
								{item.title}
							</p>
						</button>
					))}
			</div>
		</div>
	)
}

export { NavigationItem }