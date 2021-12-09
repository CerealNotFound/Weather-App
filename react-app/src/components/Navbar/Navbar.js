import { React } from "react";
import "../../styles/css/Navbar.css";
import weather from "../../scripts/weather"

const Navbar = () => {
  return(
    <nav>
      <input placeholder="Enter your city!" type="search" defaultValue="Faridabad" id="search-bar" onKeyPress={(event) => {
          if(event.key === 'Enter') {
            weather()
          }
        }}
      />
      <select id="units-menu">
        <option>Metric</option>
        <option>Standard</option>
        <option>Imperial</option>
      </select>
    </nav>
  )
}

export default Navbar;