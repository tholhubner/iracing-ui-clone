import AccessTimeIcon from "@mui/icons-material/AccessTime"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import CampaignIcon from "@mui/icons-material/Campaign"
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle"
import CheckRoundedIcon from "@mui/icons-material/CheckRounded"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import DirectionsIcon from "@mui/icons-material/Directions"
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded"
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"
import FlagIcon from "@mui/icons-material/Flag"
import GarageIcon from "@mui/icons-material/Garage"
import GroupsSharpIcon from "@mui/icons-material/GroupsSharp"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import KeyIcon from "@mui/icons-material/Key"
import LanIcon from "@mui/icons-material/Lan"
import LanguageIcon from "@mui/icons-material/Language"
import LeaderboardIcon from "@mui/icons-material/Leaderboard"
import LeakAddIcon from "@mui/icons-material/LeakAdd"
import LockRoundedIcon from "@mui/icons-material/LockRounded"
import LoginIcon from "@mui/icons-material/Login"
import MonitorIcon from "@mui/icons-material/Monitor"
import PersonIcon from "@mui/icons-material/Person"
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew"
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined"
import RefreshIcon from "@mui/icons-material/Refresh"
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded"
import SearchIcon from "@mui/icons-material/Search"
import SettingsIcon from "@mui/icons-material/Settings"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined"
import SportsMotorsportsOutlinedIcon from "@mui/icons-material/SportsMotorsportsOutlined"
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded"
import StarRoundedIcon from "@mui/icons-material/StarRounded"
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined"
import SupportAgentIcon from "@mui/icons-material/SupportAgent"
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt"
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined"
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave"
import TripOriginIcon from "@mui/icons-material/TripOrigin"
import TurnRightIcon from "@mui/icons-material/TurnRight"
import VideocamIcon from "@mui/icons-material/Videocam"
import WalletIcon from "@mui/icons-material/Wallet"
import WarningRoundedIcon from "@mui/icons-material/WarningRounded"
import WaterDropIcon from "@mui/icons-material/WaterDrop"
import WhatshotIcon from "@mui/icons-material/Whatshot"

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
		case "cars":
			display = <DirectionsCarIcon fontSize="small" className="pb-1 pr-1" />
			break
		case "cart":
			display = <ShoppingCartRoundedIcon fontSize="small" sx={{ color: "#FF8533" }}/>
			break
		case "check":
			display = <CheckRoundedIcon fontSize="small" sx={{ color: "#84DF66" }} />
			break
		case "check-dark":
			display = <CheckRoundedIcon fontSize="small" sx={{ color: "#0E2D0D", paddingTop: "3px" }} />
			break
		case "check-blue":
			display = <CheckRoundedIcon fontSize="small" sx={{ color: "#799AC8"}} />
			break
		case "check-header":
			display = <CheckRoundedIcon fontSize="small" />
			break 
		case "clock":
			display = <AccessTimeIcon fontSize="small" className="pr-1 pb-0.5" />
			break
		case "connection":
			display = <LanIcon fontSize="small" />
			break
		case "dirtOval":
			display = <ChangeCircleIcon fontSize="xs" className="mr-1" />
			break
		case "dirtRoad":
			display = <DirectionsIcon fontSize="xs" className="mr-1" />
			break
		case "display":
			display = <MonitorIcon fontSize="small" />
			break
		case "empty":
			display = <RemoveRoundedIcon fontSize="small" />
			break
		case "favorite":
			display = <StarRoundedIcon fontSize="small" sx={{ color: "#FFE066" }} />
			break
		case "favorite-empty":
			display = <StarBorderRoundedIcon fontSize="small" />
			break
		case "favorite-header":
			display = <StarRoundedIcon fontSize="small" />
			break
		case "fire":
			display = <WhatshotIcon fontSize="medium" className="mx-2" />
			break
		case "fixed":
			display = <LockRoundedIcon fontSize="small" />
			break
		case "flag":
			display = <FlagIcon fontSize="medium" />
			break
		case "flag-small":
			display = <FlagIcon fontSize="small" className="pt-1" />
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
		case "key":
			display = <KeyIcon fontSize="small" />
			break
		case "league":
			display = <LeaderboardIcon fontSize="medium" />
			break
		case "logout":
			display = <LoginIcon fontSize="small" className="rotate-180" />
			break
		case "membersite":
			display = <LanguageIcon fontSize="small" />
			break
		case "mpr-low":
			display = <div style={{ fontSize: 18, fontWeight: "bold", color: "#FF8533" }}>=</div>
			break
		case "mpr-met":
			display = <div style={{ fontSize: 18, fontWeight: "bold"}}>=</div>
			break
		case "mpr-up":
			display = <DoubleArrowRoundedIcon fontSize="small" className="-rotate-90" sx={{ color: "#85E066" }} />
			break
		case "offline":
			display = <TripOriginIcon fontSize="xs" className="mr-1.5" />
			break
		case "oval":
			display = <RefreshIcon fontSize="xs" className="mr-1" />
			break
		case "paintdrop":
			display = <WaterDropIcon fontSize="medium" />
			break
		case "profile":
			display = <PersonIcon fontSize="small" />
			break
		case "quit":
			display = <PowerSettingsNewIcon fontSize="small" />
			break
		case "replay":
			display = <VideocamIcon fontSize="medium" />
			break
		case "road":
			display = <TurnRightIcon fontSize="xs" className="mb-0.5 mr-1" />
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
		case "timer":
			display = <TimerOutlinedIcon fontSize="small" />
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