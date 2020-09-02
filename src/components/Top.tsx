import React from 'react'
import Profile from './Top/Profile'
import Skill from './Skill'
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";

type Props = {

}

const Top: React.FC<Props> = () => {

  const delayTime = 700
  const monitorTime = 1300

  return (
    <div className="top">
      {/* <div className="top__index">
        <div className="top__index--line"></div>
        <div className="top__index--number">1</div>
      </div>   */}
      <Reveal delay={delayTime} animation={Animation.SlideInLeft}>
      <div className="top__box"> 
        <Reveal delay={monitorTime} animation={Animation.FadeIn}>
        <div className="top__box--content">
          <Profile />
        </div>
        </Reveal>
        <div className="top__box--bottom"></div> 
      </div>
      <div className="top__foot">    
        <div className="top__foot--up"></div>
        <div className="top__foot--bottom"></div>
      </div>
      </Reveal>
    </div>  
  )
}

export default Top