import AccessTimeIcon from "@mui/icons-material/AccessTime"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import CampaignIcon from "@mui/icons-material/Campaign"
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import DirectionsIcon from "@mui/icons-material/Directions"
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"
import FlagIcon from "@mui/icons-material/Flag"
import GarageIcon from "@mui/icons-material/Garage"
import GroupsSharpIcon from "@mui/icons-material/GroupsSharp"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import LanIcon from "@mui/icons-material/Lan"
import LanguageIcon from "@mui/icons-material/Language"
import LeaderboardIcon from "@mui/icons-material/Leaderboard"
import LeakAddIcon from "@mui/icons-material/LeakAdd"
import MonitorIcon from "@mui/icons-material/Monitor"
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined"
import RefreshIcon from "@mui/icons-material/Refresh"
import SearchIcon from "@mui/icons-material/Search"
import SettingsIcon from "@mui/icons-material/Settings"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined"
import SportsMotorsportsOutlinedIcon from "@mui/icons-material/SportsMotorsportsOutlined"
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined"
import SupportAgentIcon from "@mui/icons-material/SupportAgent"
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt"
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave"
import TurnRightIcon from "@mui/icons-material/TurnRight"
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
		case "balance":
			display = <CreditCardIcon fontSize="small" />
			break
		case "calendar":
			display = <CalendarMonthIcon fontSize="medium" />
			break
		case "clock":
			display = <AccessTimeIcon fontSize="small" className="pr-1 pb-0.5" />
			break
		case "connection":
			display = <LanIcon fontSize="small" />
			break
		case "dirtoval":
			display = <ChangeCircleIcon fontSize="xs" />
			break
		case "dirtroad":
			display = <DirectionsIcon fontSize="xs" />
			break
		case "display":
			display = <MonitorIcon fontSize="small" />
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
		case "oval":
			display = <RefreshIcon fontSize="xs" />
			break
		case "paintdrop":
			display = <WaterDropIcon fontSize="medium" />
			break
		case "replay":
			display = <VideocamIcon fontSize="medium" />
			break
		case "road":
			display = <TurnRightIcon fontSize="small" className="pb-1" />
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
		case "speaker":
			display = <CampaignIcon fontSize="small" />
			break
		case "store":
			display = <ShoppingBagIcon fontSize="medium" />
			break
		case "subscriptions":
			display = <LeakAddIcon fontSize="small" />
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
		case "updates":
			display = <SystemUpdateAltIcon fontSize="small" />
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