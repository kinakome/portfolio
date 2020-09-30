import React from "react";
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";

type Props = {
  name: string;
  period: string;
  icon: string;
  width: string;
};

const SkillBox: React.FC<Props> = ({ name, period, icon, width }) => {
  const skillTime = 100;
  const chartTime = 300;

  const styles = {
    width,
  };

  return (
    <Reveal delay={skillTime} animation={Animation.FadeInUp}>
      <div className="skill-box">
        <div className="skill-box__left">
          <div className="skill-box__left--image">
            <img src={icon} alt="camera" />
          </div>
        </div>
        <div className="skill-box__right">
          <div className="skill-box__right--name">{name}</div>
          <div className="skill-box__right--period">{period}</div>
          <div className="skill-box__right--chart">
            <Reveal delay={chartTime} animation={Animation.SlideInLeft}>
              <div className="skill-box__right--length" style={styles} />
            </Reveal>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default SkillBox;
