import React from 'react'
import { ProfileIcon, SkillIcon } from './SvgReader'

type Props = {

}

const Header: React.FC<Props> = () => {

  return (
    <div className="header">
      <div className="header__menu">
        <ul className="header__menu__list">
          <li>Profile</li>
          <li>Skill</li>
          <li>Works</li>
        </ul>
      </div>
    </div>
  )
}

export default Header