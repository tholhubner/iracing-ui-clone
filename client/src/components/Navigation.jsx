import React from "react"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import FlagIcon from "@mui/icons-material/Flag"
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined"

function Navigation() {
  return (
		<nav>
			<div className="nav-item collapse collapse-arrow">
				<input type="radio" name="my-accordion-3" />
				<div className="title-with-icon collapse-title font-medium ">
					<HomeOutlinedIcon fontSize="medium" /><p className="nav-title-text">Home</p>
				</div>
				<div className="collapse-content text-sm"> 
					<p>hello</p>
				</div>
			</div>
			<div className="nav-item collapse collapse-arrow">
				<input type="radio" name="my-accordion-3" /> 
				<div className="title-with-icon collapse-title font-medium">
					<FlagIcon fontSize="medium" /><p className="nav-title-text">Go Racing</p>
				</div>
				<div className="collapse-content text-sm"> 
					<p>hello</p>
				</div>
			</div>
			<div className="nav-item collapse collapse-arrow">
				<input type="radio" name="my-accordion-3" /> 
				<div className="title-with-icon collapse-title font-medium">
					<SmartToyOutlinedIcon fontSize="medium" /><p className="nav-title-text">AI Racing</p>
				</div>
				<div className="collapse-content text-sm"> 
					<p>hello</p>
				</div>
			</div>
		</nav>
  )
}

export { Navigation }
