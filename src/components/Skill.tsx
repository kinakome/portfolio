import React from 'react'
import { SkillIcon } from './SvgReader'
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";

type Props = {

}

const Skill: React.FC<Props> = () => {
  const delayTime = 600
  return (
    <Reveal delay={delayTime} animation={Animation.FadeIn}>
    <div className="skill">
      <div className="skill__header">
        <SkillIcon />
        <div className="skill__header--title">Skill</div>
      </div>
    </div>
    </Reveal>
  )
}

export default Skill