import React from 'react'
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";

const Works: React.FC = () => {
  const lineTime = 700
  const centerTime = 1300
  const titleTime = 1700


  return (
    <div className="works">
      <div className="works__header">
        <Reveal delay={lineTime} animation={Animation.SlideInLeft}>
          <div className="works__header--line"></div>
        </Reveal>
        <Reveal delay={centerTime} animation={Animation.FadeIn}>
          <div className="works__header--center">
            <Reveal delay={titleTime} animation={Animation.FadeIn}>
              <div className="works__header--title">Works</div>
            </Reveal>
          </div>
        </Reveal>
      </div>
      <div className="works__contents"></div>
    </div>
  )
}

export default Works