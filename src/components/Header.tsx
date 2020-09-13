import React from 'react'
import { Link } from 'react-scroll';
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";
import { HamburgerVortex } from 'react-animated-burgers'


type Props = {

}

const Header: React.FC<Props> = () => {

  const [isActive,setIsActive] = React.useState(false);
  const toggleButton = () => {
    setIsActive(!isActive)
  }
  return (
    <div className="header">
      <div className="header__menu">
        <div className="header__menu--hamburger">
          <HamburgerVortex isActive={isActive} toggleButton={toggleButton} className="header__menu--hamburger"/>
        </div>  
        <ul className="header__menu--list">
          <Link
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration= {800}
            >
            <li className="hover-elm">Profile</li>
          </Link>
          <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            duration= {800}
          >
            <li className="hover-elm">Skill</li>
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            duration= {800}
          >
            <li className="hover-elm">Works</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header