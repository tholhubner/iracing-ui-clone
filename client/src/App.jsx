import { store } from './app/store'
import { Provider } from 'react-redux'

import {
  HeaderBar,
} from "./components/Header"
import { NavigationBar } from "./components/Navigation"
import QuickAccess from "./components/QuickAccess"
import { SeriesList } from "./components/Series"

function App() {
  return (
    <Provider store={store}>
      <div>
        <HeaderBar />
        <div className="content">
          <NavigationBar />
          <main>
            <QuickAccess />
            <SeriesList />
          </main>
        </div>
      </div>
    </Provider>
  )
}

export default App
