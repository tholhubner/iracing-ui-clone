import { useDispatch, useSelector } from "react-redux"
import { setShowNavigation } from "../app/reducers/variousReducer"
import { useState } from "react"

function Header() {
  const showNavigation = useSelector((state) => state.various.showNavigation)
  const [navState, setNavState] = useState(showNavigation)
  const dispatch = useDispatch()

  return (
    <header>
      <div className="flex-none">
        <button className="btn btn-square" onClick={() => {
          setNavState(!navState)
          dispatch(setShowNavigation(!navState))
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <h1>iRacing UI</h1>
    </header>
  )
}

export { Header }
