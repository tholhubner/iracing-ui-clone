import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { setShowNavigation } from "../../app/reducers/variousReducer"
import { getIcon } from "../../helpers/iconHelper"
import { LicenseCluster } from "../Licenses"
import { ProfileButton } from "./ProfileButton"
import { ClockDisplay } from "./ClockDispaly"

function HeaderBar() {
  const { walletBallance } = useSelector((state) => state.user.details)
  const showNavigation = useSelector((state) => state.various.showNavigation)
  const dispatch = useDispatch()

  return (
    <header>
      <div className="header-left">
        <button className="btn btn-square" onClick={() => {
          dispatch(setShowNavigation(!showNavigation))
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
        <ClockDisplay />
        <button className="header-button">{getIcon("balance")}<span className="pt-0.5">{walletBallance}</span></button>
        <button className="header-button">{getIcon("speaker")}</button>
        <button className="header-button">{getIcon("display")}</button>
        <button className="header-button">{getIcon("connection")}</button>
        <button className="header-button-clear">{getIcon("updates")}</button>
        <button className="header-button-clear">{getIcon("subscriptions")}</button>
        <LicenseCluster />
        <ProfileButton />
      </div>
    </header>
  )
}

export { HeaderBar }
