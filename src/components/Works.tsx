import React, { useState } from 'react'
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";
import { DnIcon, PortfolioIcon, BplusIcon, IllustChatIcon, TameruIcon, OtherIcon } from './SvgReader'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt, faImages } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slideshow from './Slideshow'
import Modal from 'react-modal'

const Works: React.FC = () => {
  const lineTime = 700
  const centerTime = 1300
  const titleTime = 1600
  const workTime = 200
  const iconStyle: React.CSSProperties = {  };
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };  
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const openModal = ()  => {
      setIsOpen(true);
  }

  const closeModal = () => {
      setIsOpen(false);
  }

  return (
    <div className="works">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="works__modal">
          <button className="mr-2" onClick={closeModal}>close</button>
          <Slideshow />
        </div>
      </Modal> 
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
                  <div className="tech">
                    <div className="tech__title">Frontend</div>
                    <div className="tech__detail">Nuxt.js + Vue.js</div>
                  </div>
                  <div className="tech">
                    <div className="tech__title">Deploy</div>
                    <div className="tech__detail">CircleCI + Firebase</div>
                  </div>
                </div>
                <div className="work__detail--link">
                  <div className="icons">
                    <a href="https://daily-necessities-4adfb.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon style={iconStyle} icon={faExternalLinkAlt} className="hover-elm" />
                    </a>
                    <FontAwesomeIcon style={iconStyle} icon={faImages} className="hover-elm" onClick={openModal} />
                  </div>
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
                  <div className="tech">
                    <div className="tech__title">Frontend</div>
                    <div className="tech__detail">React.js</div>
                  </div>
                  <div className="tech">
                    <div className="tech__title">Deploy</div>
                    <div className="tech__detail">Netlify</div>
                  </div>
                </div>
                <div className="work__detail--link">
                  <div className="icons">
                    <a href="https://github.com/kinakome/portfolio" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon style={iconStyle} icon={faGithubSquare} className="hover-elm" />
                    </a>
                    <FontAwesomeIcon style={iconStyle} icon={faImages} className="hover-elm" onClick={openModal}/>
                  </div>
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
                  <div className="tech">
                    <div className="tech__title">Frontend</div>
                    <div className="tech__detail">jQuery</div>
                  </div>
                  <div className="tech">
                    <div className="tech__title">Backend</div>
                    <div className="tech__detail">Express + websocket</div>
                  </div>
                  <div className="tech">
                    <div className="tech__title">Deploy</div>
                    <div className="tech__detail">Amazon EC2</div>
                  </div>
                </div>
                <div className="work__detail--link">
                  <div className="icons">
                    <a href="https://github.com/kinakome/illustya" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon style={iconStyle} icon={faGithubSquare} className="hover-elm" />
                    </a>
                    <FontAwesomeIcon style={iconStyle} icon={faImages} className="hover-elm" onClick={openModal} />
                  </div>
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
                  <div className="tech">
                    <div className="tech__title">Frontend</div>
                    <div className="tech__detail">jQuery</div>
                  </div>
                  <div className="tech">
                    <div className="tech__title">Backend</div>
                    <div className="tech__detail">Ruby on Rails</div>
                  </div>
                  <div className="tech">
                    <div className="tech__title">Deploy</div>
                    <div className="tech__detail">heroku</div>
                  </div>
                </div>
                <div className="work__detail--link">
                  <div className="icons icons--single">
                    <FontAwesomeIcon style={iconStyle} icon={faImages} className="hover-elm" onClick={openModal} />
                  </div>
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
                <div className="tech">
                  <div className="work__detail--title">tameru</div>
                  <div className="work__detail--explanation">技術書管理アプリケーション<p>※現在開発中</p></div>
                </div>
                <div className="tech">
                  <div className="work__detail--tech">
                  <div className="tech">
                    <div className="tech__title--tameru">Frontend・Backend</div>
                      <div className="tech__detail">Flutter</div>
                    </div>
                  </div>
                </div>
                <div className="work__detail--link">
                  <div className="icons icons--single">
                    <FontAwesomeIcon style={iconStyle} icon={faImages} className="hover-elm" onClick={openModal} />
                  </div>
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
                <div className="work__detail--title">Other</div>
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