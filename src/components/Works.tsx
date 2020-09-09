import React from 'react'
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";
import { DnIcon, PortfolioIcon, BplusIcon, IllustChatIcon, TameruIcon, OtherIcon } from './SvgReader'
import {Animated} from "react-animated-css";


const Works: React.FC = () => {
  const lineTime = 700
  const centerTime = 1300
  const titleTime = 1600
  const workTime = 200


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
      <div className="works__contents">
        <Reveal delay={workTime} animation={Animation.FadeInUp}>
          <div className="work">
            <DnIcon />
            <div className="work__detail">
              <div className="work__detail--title">Daily Necessities</div>
              <div className="work__detail--explanation">現在地近辺のちょっと便利な情報を表示</div>
              <div className="work__detail--tech"></div>
            </div>  
          </div>
        </Reveal>
        <Reveal delay={workTime} animation={Animation.FadeInUp}>
          <div className="work">
            <PortfolioIcon />
          </div>
        </Reveal>
        <Reveal delay={workTime} animation={Animation.FadeInUp}>
          <div className="work">
            <IllustChatIcon />
          </div>
        </Reveal>
        <Reveal delay={workTime} animation={Animation.FadeInUp}>
          <div className="work">
            <BplusIcon />
          </div>
        </Reveal>
        <Reveal delay={workTime} animation={Animation.FadeInUp}>
          <div className="work">
            <TameruIcon />
          </div>
        </Reveal>
        <Reveal delay={workTime} animation={Animation.FadeInUp}>
          <div className="work">
            <OtherIcon />
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Works