import Menu from "./Menu"
import ProfileInfo from "./ProfileInfo"

const Sidebar = (props) => {
  const sidebarClass = `sidebar ${props.sidebarClass}`

  return (
    <nav className={sidebarClass}>
      <header>
        <ProfileInfo
          nama="Arif Nof"
          role="Admin"
        />

        <i
          className="bx bx-chevron-right toggle"
          onClick={props.onToggleSidebar}
        ></i>
      </header>

      <div className="menu-bar">
        <Menu
          onSearchBoxClick={props.onSearchBoxClick}
          selectedMenu={props.selectedMenu}
        />

        <div className="bottom-content">
          <li className="">
            <a href="#">
              <i className="bx bx-log-out icon"></i>
              <span className="text nav-text">Logout</span>
            </a>
          </li>

          <li className="mode">
            <div className="sun-moon">
              <i className="bx bx-moon icon moon"></i>
              <i className="bx bx-sun icon sun"></i>
            </div>
            <span className="mode-text text">
              {props.darkMode ? "Light" : "Dark"} mode
            </span>

            <div className="toggle-switch">
              <span
                className="switch"
                onClick={props.onSwitchDarkMode}
              ></span>
            </div>
          </li>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
