import React from 'react'
import { Link } from 'react-scroll';

type Props = {

}

const Header: React.FC<Props> = () => {

  return (
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
            <li>Profile</li>
          </Link>
          <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            duration= {800}
          >
            <li>Skill</li>
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            duration= {800}
          >
            <li>Works</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header