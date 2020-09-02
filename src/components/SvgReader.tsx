import ProfileImg from '../images/profile.svg'
import PCImg from '../images/pc.svg'
import CameraImg from '../images/camera.svg'
import SkillImg from '../images/skill-black.svg'
import { useSpring, animated } from "react-spring";


import React from 'react'

export const ProfileIcon: React.FC = () => {
  return <img src={ProfileImg}  alt="プロフィール" />
}

export const PCIcon: React.FC = () => {
  // const props = useSpring({ x: 100, from: { x: 0 } })
  // return(
  //   <animated.svg strokeDashoffset={props.x}       width="288"
  //   height="175"
  //   viewBox="0 0 288 175"
  //   fill="none"
  //   xmlns="http://www.w3.org/2000/svg">
  //           <path
  //       d="M1 143.5C28.6 143.1 42.5 143.333 46 143.5C52.3333 128.834 70.2 108.3 91 143.5H109L113.5 174.5L133.5 1L159.5 174.5L167 143.5H201C208.167 134.5 227.5 121.9 247.5 143.5H287.5"
  //       stroke="white"
  //     />
  //   </animated.svg>
  // // <img src={PCImg}  alt="pc" />
  // ) 
  return <img src={PCImg}  alt="camera" />
}

export const CameraIcon: React.FC = () => {
  return <img src={CameraImg}  alt="camera" />
}

export const SkillIcon: React.FC = () => {
  return <img src={SkillImg}  alt="skill" />
}