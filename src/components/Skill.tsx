import React from 'react'
import { SkillIcon } from './SvgReader'
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";

type Props = {

}

const Skill: React.FC<Props> = () => {
  const barTime = 700
  const titleTime = 1200
  const contentsTime = 1400
  const skillTime = 100


  return (
    <div className="skill">
      <div className="skill__header">
        <Reveal delay={barTime} animation={Animation.SlideInLeft}>
          <div className="skill__header--line"></div>
        </Reveal>
        <Reveal delay={titleTime} animation={Animation.FadeIn}>
          <div className="skill__header--title">Skill</div>
        </Reveal>
      </div>
      <Reveal delay={contentsTime} animation={Animation.FadeInUp}>
        <div className="skill__contents">
          <div className="skill-type">
            <div className="skill-type__side-box--left"></div>
            <div className="skill-type__center-box"></div>
            <div className="skill-type__side-box--right"></div>
            <span className="skill-type__title">Frontend</span>
          </div>
          <div className="skill-detail">
          <Reveal delay={skillTime} animation={Animation.FadeInUp}>
          <div className="skill-detail__box"></div>
          </Reveal>
          <Reveal delay={skillTime} animation={Animation.FadeInUp}>
          <div className="skill-detail__box"></div>
          </Reveal>
          <Reveal delay={skillTime} animation={Animation.FadeInUp}>
          <div className="skill-detail__box"></div>
          </Reveal>
          <Reveal delay={skillTime} animation={Animation.FadeInUp}>
          <div className="skill-detail__box"></div>
          </Reveal>
          <Reveal delay={skillTime} animation={Animation.FadeInUp}>
          <div className="skill-detail__box"></div>
          </Reveal>
          <Reveal delay={skillTime} animation={Animation.FadeInUp}>
          <div className="skill-detail__box"></div>
          </Reveal>
          <Reveal delay={skillTime} animation={Animation.FadeInUp}>
          <div className="skill-detail__box"></div>
          </Reveal>
          <Reveal delay={skillTime} animation={Animation.FadeInUp}>
          <div className="skill-detail__box"></div>
          </Reveal>
          </div>
        </div>
      </Reveal>
    </div>
  )
}

export default Skill