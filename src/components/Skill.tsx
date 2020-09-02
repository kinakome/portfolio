import React from 'react'
import { ProfileIcon, SkillIcon } from './SvgReader'
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";

type Props = {

}

const Skill: React.FC<Props> = () => {
  const delayTime = 1000
  return (
    <Reveal delay={delayTime} animation={Animation.FadeIn}>
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
    </Reveal>
  )
}

export default Skill