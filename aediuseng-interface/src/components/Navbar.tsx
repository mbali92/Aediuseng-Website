import { useState } from "react";
import logo from "../assets/new-logo.jpg"

function Navbar() {
  const [engineeringDropdown, setEngineeringDropdown] = useState(0);

  const toogleDropDown=()=>{
    engineeringDropdown == 0 ? setEngineeringDropdown(110) : setEngineeringDropdown(0);
  }

  return (
    <nav className="page-navigation" id='site-nav'>
        <div className="container">
            <div className="page_row">
                <img src={logo} alt=""/>
                <div className="nav-link-content" >
                    <a className="top-nav-links" href="home.php"  id="firsttop-nav-link">Home</a>
                    <a className="top-nav-links" href="About.tsx">About us</a>
                    <a href="#" id="srv-navlink"> 
                        <span onClick={toogleDropDown} className="top-nav-links">Engineering</span>
                        <div style={{height:engineeringDropdown + "px"}} className="srv-dropdown" id="srv-dropdown">
                            <span className="srv-droplink">Engineering</span>
                            <span className="srv-droplink">Simulation</span>
                            <span className="srv-droplink">Project management</span>
                        </div>
                    </a>
                    <a className="top-nav-links" href="project.php"  id='pro-link'>Technologies</a>   
                    <a className="top-nav-links" href="contact.php">Contact</a>
                    <a className="" href="qoute.php" id="qoute-btn" >request a qoute</a>
                </div>
                <span className="nav-menu fa fa-bars" id='nav-menu'></span>
            </div>
        </div>
        <div className="mobile-navbox" id="mobile-navbox">
            <div className="container">
                <a className="mobi-nav-links" href="home.php">Home</a>
                <a className="mobi-nav-links" href="about.php">About Us</a>
                <a  className="mobi-nav-links" id='menu-svr-link' href="">Services  <span className='fa fa-plus'></span> </a>
                <div id='mobi-svrlinkBox'>
                    <span className="mobi-svr-navlinks">Engineering</span>
                    <span className="mobi-svr-navlinks">Simulation</span>
                    <span className="mobi-svr-navlinks">Technology</span>
                </div>
                <a className="mobi-nav-links projects" href="">project</a>
                <a className="mobi-nav-links" href="contact.html">contact</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar