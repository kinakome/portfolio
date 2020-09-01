import React from 'react'
import { ProfileIcon, SkillIcon } from '../SvgReader'

type Props = {

}

const Skill: React.FC<Props> = () => {

  return (
    <div className="skill">
      <div className="skill__left">
        <ProfileIcon />
      </div>
      <div className="skill__right">
        <div className="skill__right__icon">
          <SkillIcon />
          <div className="skill__right__icon--title">skill</div>
        </div>
      </div>
    </div>
  )
}

export default Skill