import React from "react"
import {
  Header,
  Navigation
} from "./components"

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <Navigation />
        <main>Series List</main>
      </div>
    </div>
  )
}

export default App
