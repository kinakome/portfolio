import React, { useState } from 'react'
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";
import { DnIcon, PortfolioIcon, BplusIcon, IllustChatIcon, TameruIcon, OtherIcon } from './SvgReader'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";


const Works: React.FC = () => {
  const lineTime = 700
  const centerTime = 1300
  const titleTime = 1600
  const workTime = 200
  const iconStyle: React.CSSProperties = { padding: 5, fontSize: 35 };

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
            {/* <Reveal delay={expTime} animation={Animation.FadeInRight}> */}
              <div className="work__detail">
                <div className="work__detail--title">Daily Necessities</div>
                <div className="work__detail--explanation">現在地近辺のちょっと便利な情報を表示<p>※現在開発中</p></div>
                <div className="work__detail--tech">
                  <div className="tech--title">Frontend</div>
                  <div className="tech--detail">Nuxt.js + Vue.js</div>
                  <div className="tech--title">Deploy</div>
                  <div className="tech--detail">CircleCI + Firebase</div>
                </div>
                <div className="work__detail--link">
                  {/* <a href="https://github.com/kinakome" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon style={iconStyle} icon={faGithubSquare} className="hover-elm" />
                  </a> */}
                  <a href="https://daily-necessities-4adfb.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon style={iconStyle} icon={faExternalLinkAlt} className="hover-elm" />
                  </a>
                </div>
              </div>  
            {/* </Reveal> */}
          </div>
        </Reveal>
        <Reveal delay={workTime} animation={Animation.FadeInUp}>
          <div className="work">
            <PortfolioIcon />
            {/* <Reveal delay={expTime} animation={Animation.FadeInRight}> */}
              <div className="work__detail">
                <div className="work__detail--title">Portfolio</div>
                <div className="work__detail--explanation">ポートフォリオサイト</div>
                <div className="work__detail--tech">
                  <div className="tech--title">Frontend</div>
                  <div className="tech--detail">React.js</div>
                  <div className="tech--title">Deploy</div>
                  <div className="tech--detail">Netlify</div>
                </div>
                <div className="work__detail--link">
                  <a href="https://github.com/kinakome/portfolio" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon style={iconStyle} icon={faGithubSquare} className="hover-elm" />
                  </a>
                </div>
              </div>  
            {/* </Reveal> */}
          </div>
        </Reveal>
        <Reveal delay={workTime} animation={Animation.FadeInUp}>
          <div className="work">
            <IllustChatIcon />
            {/* <Reveal delay={expTime} animation={Animation.FadeInRight}> */}
              <div className="work__detail">
                <div className="work__detail--title">illust chat</div>
                <div className="work__detail--explanation">いらすとやのイラストをストック・交換するチャットアプリ<p>※現在停止中</p></div>
                <div className="work__detail--tech">
                  <div className="tech--title">Frontend</div>
                  <div className="tech--detail">jQuery</div>
                  <div className="tech--title">Backend</div>
                  <div className="tech--detail">Express + websocket</div>
                  <div className="tech--title">Deploy</div>
                  <div className="tech--detail">Amazon EC2</div>
                </div>
                <div className="work__detail--link">
                  <a href="https://github.com/kinakome/illustya" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon style={iconStyle} icon={faGithubSquare} className="hover-elm" />
                  </a>
                </div>
              </div>  
            {/* </Reveal> */}
          </div>
        </Reveal>
        <Reveal delay={workTime} animation={Animation.FadeInUp}>
          <div className="work">
            <BplusIcon />
            {/* <Reveal delay={expTime} animation={Animation.FadeInRight}> */}
              <div className="work__detail">
                <div className="work__detail--title">B-plus</div>
                <div className="work__detail--explanation">学バスの時刻表アプリケーション<p>※現在停止中</p></div>
                <div className="work__detail--tech">
                  <div className="tech--title">Frontend</div>
                  <div className="tech--detail">jQuery</div>
                  <div className="tech--title">Backend</div>
                  <div className="tech--detail">Ruby on Rails</div>
                  <div className="tech--title">Deploy</div>
                  <div className="tech--detail">heroku</div>
                </div>
              </div>  
            {/* </Reveal> */}
          </div>
        </Reveal>
        <Reveal delay={workTime} animation={Animation.FadeInUp}>
          <div className="work">
            <TameruIcon />
            {/* <Reveal delay={expTime} animation={Animation.FadeInRight}> */}
              <div className="work__detail">
                <div className="work__detail--title">tameru</div>
                <div className="work__detail--explanation">技術書管理アプリケーション<p>※現在開発中</p></div>
                <div className="work__detail--tech">
                <div className="tech--title">Frontend・Backend</div>
                  <div className="tech--detail">Flutter</div>
                </div>
              </div>
            {/* </Reveal> */}
          </div>
        </Reveal>
        <Reveal delay={workTime} animation={Animation.FadeInUp}>
          <div className="work">
            <OtherIcon />
            {/* <Reveal delay={expTime} animation={Animation.FadeInRight}> */}
              <div className="work__detail">
                <div className="work__detail--title">Daily Necessities</div>
                <div className="work__detail--explanation">現在地近辺のちょっと便利な情報を表示</div>
                <div className="work__detail--tech">使用技術</div>
              </div>  
            {/* </Reveal> */}
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Works