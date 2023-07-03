import { store } from './app/store'
import { Provider } from 'react-redux'

import {
  Header,
} from "./components"
import { NavigationBar } from "./components/Navigation"

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <div className="content">
          <NavigationBar />
          <main>Series List</main>
        </div>
      </div>
    </Provider>
  )
}

export default App
