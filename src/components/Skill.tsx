import React from 'react'
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";
import SkillBox from './Skillbox'
import Azure from '../images/skills/azure.svg'
import CSharp from '../images/skills/c-sharp.svg'
import CircleCI from '../images/skills/circleci.svg'
import Firebase from '../images/skills/firebase.svg'
import Html from '../images/skills/html.svg'
import Javascript from '../images/skills/javascript.svg'
import Jquery from '../images/skills/jquery.svg'
import Kubernetes from '../images/skills/kubernetes.svg'
import Node from '../images/skills/nodejs.svg'
import Nuxt from '../images/skills/nuxt.svg'
import Rails from '../images/skills/rails.svg'
import ReactI from '../images/skills/react.svg'
import Sass from '../images/skills/sass.svg'
import Typescript from '../images/skills/typescript.svg'
import Vue from '../images/skills/vue.svg'
import Illustrator from '../images/skills/illustrator.svg'
import Xd from '../images/skills/xd.svg'
import Java from '../images/skills/java.svg'
import { Link } from 'react-scroll';

type Props = {
}

const Skill: React.FC<Props> = () => {
  const barTime = 700
  const titleTime = 1200

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
      <div className="skill__contents">
        <div className="skill-type">
          <div className="skill-type__side-box--left"></div>
          <div className="skill-type__center-box"></div>
          <div className="skill-type__side-box--right"></div>
          <span className="skill-type__title">Frontend</span>
        </div>
        <div className="skill-detail">
          <SkillBox name="HTML CSS" period="4 years" icon={Html} width="95%" />
          <SkillBox name="Sass" period="3 years" icon={Sass} width="78.5%" />
          <SkillBox name="JavaScript" period="2.5 years" icon={Javascript} width="65.2%" />
          <SkillBox name="jQuery" period="2.5 years" icon={Jquery} width="65.2%" />
          <SkillBox name="Vue.js" period="6 month" icon={Vue} width="30%" />
          <SkillBox name="Nuxt.js" period="6 month" icon={Nuxt} width="30%" />
          <SkillBox name="React.js" period="2 month" icon={ReactI} width="10%" />
          <SkillBox name="TypeScript" period="2 month" icon={Typescript} width="10%" />
        </div>
        <div className="skill-type">
          <div className="skill-type__side-box--left"></div>
          <div className="skill-type__center-box"></div>
          <div className="skill-type__side-box--right"></div>
          <span className="skill-type__title--other">Other</span>
        </div>
        <div className="skill-detail">
          <SkillBox name="Ruby on Rails" period="1.3 years" icon={Rails} width="50%" />
          <SkillBox name="C# .NET" period="8 month" icon={CSharp} width="30%" />
          <SkillBox name="Azure" period="6 month" icon={Azure} width="25%" />
          <SkillBox name="Express" period="6 month" icon={Node} width="25%" />
          <SkillBox name="Java" period="4 month" icon={Java} width="20%" />
          <SkillBox name="Kubernetes" period="3 month" icon={Kubernetes} width="15%" />
          <SkillBox name="CircleCI" period="3 month" icon={CircleCI} width="15%" />
          <SkillBox name="Firebase" period="3 month" icon={Firebase} width="15%" />
          <SkillBox name="Illustrator" period="2 year" icon={Illustrator} width="50%" />
          <SkillBox name="Adobe XD" period="6 month" icon={Xd} width="30%" />
        </div>
        <Link
              activeClass="active"
              to="works"
              spy={true}
              smooth={true}
              duration= {800}
            >
          <div className="skill__button hover-elm">
            <div className="skill__button--arrow"></div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Skill