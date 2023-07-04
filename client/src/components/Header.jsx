import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import moment from "moment"

import { setShowNavigation } from "../app/reducers/variousReducer"
import { getIcon } from "../helpers/iconHelper"
import LicenseCluster from "./LicenseCluster"
import ProfileButton from "./ProfileButton"

function Header() {
  const testingLicenses = {
    oval: {
      safetyRating: 3.34,
      iRating: 1234
    },
    road: {
      safetyRating: 3.23,
      iRating: 2341
    },
    dirtOval: {
      safetyRating: 2.54,
      iRating: 1355
    },
    dirtRoad: {
      safetyRating: 1.24,
      iRating: 1223
    }
  }

  const showNavigation = useSelector((state) => state.various.showNavigation)
  const [currentTime, setCurrentTime] = useState(moment())
  const [navState, setNavState] = useState(showNavigation)
  const [userLicenses, setUserLicenses] = useState(testingLicenses)
  const dispatch = useDispatch()

  const clockTimer = setTimeout(() => {
    setCurrentTime(moment())
  }, 1000)

  return (
    <header>
      <div className="header-left">
        <button className="btn btn-square" onClick={() => {
          setNavState(!navState) 
          dispatch(setShowNavigation(!navState))
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <img
          src="/src/assets/iracing-logo-header.png"
          className="header-logo mx-1"
        />
        <div className="badge badge-neutral pt-1 px-1 mx-1">WEEK 2/13</div>
        <div className="badge badge-neutral pt-1 px-1 mx-1">5,552,993,102 LAPS</div>
        <div className="badge badge-neutral pt-1 px-1 mx-1">10,000 ONLINE</div>
      </div>
      <div className="header-right">
        <div className="header-clock">{getIcon("clock")}{moment(currentTime).format("h:mm:ss a")}</div>
        <button className="header-button">{getIcon("balance")}<span className="pt-0.5">$20.00</span></button>
        <button className="header-button">{getIcon("speaker")}</button>
        <button className="header-button">{getIcon("display")}</button>
        <button className="header-button">{getIcon("connection")}</button>
        <button className="header-button-clear">{getIcon("updates")}</button>
        <button className="header-button-clear">{getIcon("subscriptions")}</button>
        <LicenseCluster userLicenses={userLicenses} />
        <ProfileButton
          username="Tyler Holhubner"
        />
      </div>
    </header>
  )
}

export { Header }
