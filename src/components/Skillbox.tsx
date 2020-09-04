import React from 'react'
import { SkillIcon } from './SvgReader'
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";


type Props = {
  name: string
  period: string
  icon: string
}

const SkillBox: React.FC<Props> = ({name, period, icon}) => {
  const skillTime = 100


  return (
    <div className="skill-box">
      <div className="skill-box__left">
      </div>
      <div className="skill-box__right">
        <div className="skill-box__right--name">{name}</div>
        <div className="skill-box__right--period">{period}</div> 
        <div className="skill-box__right--chart"></div>
      </div>
    </div>
  )
}

export default SkillBox