import React from 'react'
import Skill from './Skill'
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";
import { Link } from 'react-scroll';

type Props = {

}

const Top: React.FC<Props> = () => {

  const barTime = 700
  const titleTime = 1200
  const contentsTime = 1600
  const buttonTime = 1800

  return (
    <div className="top">
      <div className="top__left"> 
        <Reveal delay={barTime} animation={Animation.SlideInLeft}> 
        <div className="top__left--line"></div>
          </Reveal>
        <Reveal delay={titleTime} animation={Animation.FadeIn}> 
          <div className="top__left--title">Profile</div>
        </Reveal>
      </div>
      <Reveal delay={contentsTime} animation={Animation.SlideInRight}>
      <div className="top__right">   
        <div className="top__contents">
          <div className="top__contents--name">松岡 諒</div> 
          <div className="top__contents--age">1994年生まれ 26歳</div> 
          <div className="top__contents--history">
            大学2年生でプログラミングを始めました。在学中はサークルおよび個人でのアプリケーション開発の他に、
            プログラミングスクールでインターンを1年半ほど行っていました。現在はSIerにてAzureの構築やアプリケーション制作・
            製品導入に携わっており、空いた時間で個人開発を行っています。
          </div> 
        </div>
        <Reveal delay={buttonTime} animation={Animation.FadeIn}> 
          <Link
                activeClass="active"
                to="skill"
                spy={true}
                smooth={true}
                duration= {800}
              >
            <div className="top__button">
              <div className="top__button--arrow"></div>
            </div>
          </Link>
        </Reveal>
      </div>
      </Reveal>
    </div>  
  )
}

export default Top