import React, { useState } from 'react'
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";
import { DnIcon, PortfolioIcon, BplusIcon, IllustChatIcon, TameruIcon, OtherIcon } from './SvgReader'


const Works: React.FC = () => {
  const lineTime = 700
  const centerTime = 1300
  const titleTime = 1600
  const workTime = 200
  const expTime = 400
  const [animeFlg, setFlg] = useState(false);

  // const 


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
            <Reveal delay={expTime} animation={Animation.FadeInRight}>
              <div className="work__detail">
                <div className="work__detail--title">Daily Necessities</div>
                <div className="work__detail--explanation">現在地近辺のちょっと便利な情報を表示<p>※現在開発中</p></div>
                <div className="work__detail--tech"></div>
              </div>  
            </Reveal>
          </div>
        </Reveal>
        <Reveal delay={workTime} animation={Animation.FadeInUp}>
          <div className="work">
            <PortfolioIcon />
            <Reveal delay={expTime} animation={Animation.FadeInRight}>
              <div className="work__detail">
                <div className="work__detail--title">Portfolio</div>
                <div className="work__detail--explanation">ポートフォリオサイト</div>
                <div className="work__detail--tech"></div>
              </div>  
            </Reveal>
          </div>
        </Reveal>
        <Reveal delay={workTime} animation={Animation.FadeInUp}>
          <div className="work">
            <IllustChatIcon />
            <Reveal delay={expTime} animation={Animation.FadeInRight}>
              <div className="work__detail">
                <div className="work__detail--title">illust chat</div>
                <div className="work__detail--explanation">いらすとやのイラストをストック・交換するチャットアプリ<p>※現在停止中</p></div>
                <div className="work__detail--tech"></div>
              </div>  
            </Reveal>
          </div>
        </Reveal>
        <Reveal delay={workTime} animation={Animation.FadeInUp}>
          <div className="work">
            <BplusIcon />
            <Reveal delay={expTime} animation={Animation.FadeInRight}>
              <div className="work__detail">
                <div className="work__detail--title">B-plus</div>
                <div className="work__detail--explanation">学バスの時刻表アプリケーション<p>※現在停止中</p></div>
                <div className="work__detail--tech"></div>
              </div>  
            </Reveal>
          </div>
        </Reveal>
        <Reveal delay={workTime} animation={Animation.FadeInUp}>
          <div className="work">
            <TameruIcon />
            <Reveal delay={expTime} animation={Animation.FadeInRight}>
              <div className="work__detail">
                <div className="work__detail--title">tameru</div>
                <div className="work__detail--explanation">技術書管理アプリケーション<p>※現在開発中</p></div>
                <div className="work__detail--tech"></div>
              </div>  
            </Reveal>
          </div>
        </Reveal>
        <Reveal delay={workTime} animation={Animation.FadeInUp}>
          <div className="work">
            <OtherIcon />
            <Reveal delay={expTime} animation={Animation.FadeInRight}>
              <div className="work__detail">
                <div className="work__detail--title">Daily Necessities</div>
                <div className="work__detail--explanation">現在地近辺のちょっと便利な情報を表示</div>
                <div className="work__detail--tech"></div>
              </div>  
            </Reveal>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Works