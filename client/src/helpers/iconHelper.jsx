import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"
import FlagIcon from "@mui/icons-material/Flag"
import GarageIcon from "@mui/icons-material/Garage"
import GroupsSharpIcon from "@mui/icons-material/GroupsSharp"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import LanguageIcon from "@mui/icons-material/Language"
import LeaderboardIcon from "@mui/icons-material/Leaderboard"
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined"
import SearchIcon from "@mui/icons-material/Search"
import SettingsIcon from "@mui/icons-material/Settings"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined"
import SportsMotorsportsOutlinedIcon from "@mui/icons-material/SportsMotorsportsOutlined"
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined"
import SupportAgentIcon from "@mui/icons-material/SupportAgent"
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave"
import VideocamIcon from "@mui/icons-material/Videocam"
import WalletIcon from "@mui/icons-material/Wallet"
import WarningRoundedIcon from "@mui/icons-material/WarningRounded"
import WaterDropIcon from "@mui/icons-material/WaterDrop"

export function getIcon(icon) {
	let display
	switch(icon) {
		case "ai":
			display = <SmartToyOutlinedIcon fontSize="medium" />
			break
		case "calendar":
			display = <CalendarMonthIcon fontSize="medium" />
			break
		case "flag":
			display = <FlagIcon fontSize="medium" />
			break
		case "forum":
			display = <QuestionAnswerOutlinedIcon fontSize="medium" />
			break
		case "garage":
			display = <GarageIcon fontSize="medium" />
			break
		case "giftcard":
			display = <CreditCardIcon fontSize="medium" />
			break
		case "helmet":
			display = <SportsMotorsportsOutlinedIcon fontSize="medium" />
			break
		case "help":
			display = <SupportAgentIcon fontSize="medium" />
			break
		case "home":
			display = <HomeOutlinedIcon fontSize="medium" />
			break
		case "league":
			display = <LeaderboardIcon fontSize="medium" />
			break
		case "paintdrop":
			display = <WaterDropIcon fontSize="medium" />
			break
		case "replay":
			display = <VideocamIcon fontSize="medium" />
			break
		case "search":
			display = <SearchIcon fontSize="medium" />
			break
		case "server":
			display = <StorageOutlinedIcon fontSize="medium" />
			break
		case "settings":
			display = <SettingsIcon fontSize="medium" />
			break
		case "store":
			display = <ShoppingBagIcon fontSize="medium" />
			break
		case "support":
			display = <LanguageIcon fontSize="medium" />
			break
		case "team":
			display = <GroupsSharpIcon fontSize="medium" />
			break
		case "trophy":
			display = <EmojiEventsIcon fontSize="medium" />
			break
		case "wallet":
			display = <WalletIcon fontSize="medium" />
			break
		case "warning":
			display = <WarningRoundedIcon fontSize="medium" />
			break
		case "wheel":
			display = <TimeToLeaveIcon fontSize="medium" />
			break
		default:
			display = null
			break
	}
	return display
}