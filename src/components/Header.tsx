import React from 'react'
import { ProfileIcon, SkillIcon } from './SvgReader'
import { Link } from 'react-scroll';

type Props = {

}

const Header: React.FC<Props> = () => {

  return (
    <div className="header">
      <div className="header__menu">
        <ul className="header__menu__list">
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
          <li>Works</li>
        </ul>
      </div>
    </div>
  )
}

export default Header