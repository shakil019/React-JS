import './header.css';
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FaLaptopCode } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useState } from 'react';


  
function Header() {

    const [navVisible, setNavVisible] = useState(false);


    const toggleNav = () => {
        setNavVisible(!navVisible);
      };
    
      const navStyle = {
        display: navVisible ? 'block' : 'none'
      };
    

    return (
      <div>
        <header>
            <div className="container inner">
                <div className="logo">
                    <img src="/src/assets/images/London24.png" alt="Logo"/>
                </div>
                <div className="mobileMenu" onClick={toggleNav}>{ <FaBars/> }</div>
                <div className="nav" style={navStyle}>
                    <ul className="menuBar">
                        <li><a href="#"> {<FaHome />} Home</a></li>
                        <li><a href="#">{<FcAbout />} About Me</a></li>
                        <li><a href="#">{<FaLaptopCode />} Services and Skills</a></li>
                        <li><a href="#"><FaEnvelope /> Contact</a></li>
                    </ul>
                </div>
                <div className="desktopNav">
                    <ul className="menuBar">
                        <li><a href="#"> {<FaHome />} Home</a></li>
                        <li><a href="#">{<FcAbout />} About Me</a></li>
                        <li><a href="#">{<FaLaptopCode />} Services and Skills</a></li>
                        <li><a href="#"><FaEnvelope /> Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
      </div>
      
    )
  }
  
  export default Header
