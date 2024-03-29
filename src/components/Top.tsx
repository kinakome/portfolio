import {
  faGithubSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBook, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";
import { Link } from "react-scroll";

type Props = {};

const Top: React.FC<Props> = () => {
  const barTime = 700;
  const titleTime = 1200;
  const contentsTime = 1600;
  const buttonTime = 0;

  const iconStyle: React.CSSProperties = { padding: 10, fontSize: 50 };

  return (
    <div className="top">
      <div className="top__left">
        <Reveal delay={barTime} animation={Animation.SlideInLeft}>
          <div className="top__left--line" />
        </Reveal>
        <Reveal delay={titleTime} animation={Animation.FadeIn}>
          <div className="top__left--title">Profile</div>
        </Reveal>
      </div>
      <Reveal delay={contentsTime} animation={Animation.SlideInRight}>
        <div className="top__right">
          <div className="top__contents">
            <div className="top__contents--name">松岡 諒</div>
            <div className="top__contents--age">1994年生まれ 27歳</div>
            <div className="top__contents--history">
              大学2年生でプログラミングを始めました。在学中はサークルおよび個人でのアプリケーション開発の他に、
              プログラミングスクールでインターンを1年半ほど行っていました。現在はアプリケーション開発やデザイン業務を行っています。
            </div>
            <div className="top__contents--link">
              <div className="icon">
                <a
                  href="https://github.com/kinakome"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    style={iconStyle}
                    icon={faGithubSquare}
                    className="hover-elm"
                  />
                  <p>GitHub</p>
                </a>
              </div>
              <div className="icon">
                <a
                  href="https://training.cocoda.design/kinakome"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    style={iconStyle}
                    icon={faBook}
                    className="hover-elm"
                  />
                  <p>デザインポートフォリオ</p>
                </a>
              </div>
              <div className="icon">
                <a
                  href="https://www.instagram.com/47logos/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    style={iconStyle}
                    icon={faInstagram}
                    className="hover-elm"
                  />
                  <p>47 LOGOS (Instagram)</p>
                </a>
              </div>
              <div className="icon">
                <a
                  href="https://qiita.com/kinakome/items/a598b9d60862e2aad16a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    style={iconStyle}
                    icon={faSearch}
                    className="hover-elm"
                  />
                  <p>Qiita</p>
                </a>
              </div>
            </div>
            <Reveal delay={buttonTime} animation={Animation.FadeIn}>
              <Link activeClass="active" to="skill" spy smooth duration={800}>
                <div className="top__button hover-elm">
                  <div className="top__button--arrow" />
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Top;
