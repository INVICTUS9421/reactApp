import React from "react"
import logo from '../Assets/logo.png'
import notification from '../Assets/notification.png'
import './NavBar.css'
const NavBar = () => {
    return (
      <div className="navbar">
        <div className="navlogo">
            <img src={logo} alt="logo" />
            <p>GamerX</p>
        </div> 
        <ul className="navmenu">
          <li>Latest News<hr/></li>
          <li>Upcoming Games<hr/></li>
          <li>Top Rated<hr/></li>
        </ul>
        <div className="navlogin">
          <img src={notification} alt="notification icon"/>
          <div className="navNotiCounter">0</div>
          <button>Login</button>
        </div>
      </div>
    );
}

export default NavBar;