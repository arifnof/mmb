import React, { useState } from "react"
import "./assets/css/style.css"
import "./assets/css/table.css"
import "./assets/css/form.css"
import "./assets/css/modal.css"

import Sidebar from "./components/Sidebar"
import Home from "./components/Home"

function App() {
  const [darkMode, setDarkMode] = useState(false) // boolean : true / false
  const [sidebarClose, setSidebarClose] = useState(false)

  const classDiv = darkMode === true ? "dark" : ""
  const sidebarClass = sidebarClose === true ? "close" : ""

  const switchDarkModeHandler = () => {
    const modeBaru = darkMode === true ? false : true
    setDarkMode(modeBaru)
  }

  const toggleSidebarHandler = () => {
    const modeBaru = sidebarClose === true ? false : true
    setSidebarClose(modeBaru)
  }

  const searchBoxClickHandler = () => {
    setSidebarClose(false)
  }

  return (
    <div className="page">
      <div className={classDiv}>
        <Sidebar
          onSwitchDarkMode={switchDarkModeHandler}
          onToggleSidebar={toggleSidebarHandler}
          onSearchBoxClick={searchBoxClickHandler}
          sidebarClass={sidebarClass}
        />
        <Home />
      </div>
    </div>
  )
}

export default App
