import React from 'react'
import { Link } from 'react-scroll';
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";

type Props = {

}

const Header: React.FC<Props> = () => {

  return (
    // <Reveal delay={700} animation={Animation.FadeIn}> 
    <div className="header">
      <div className="header__menu">
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
    // </Reveal>
  )
}

export default Header