import ProfileImg from '../images/profile.svg'
import PCImg from '../images/pc.svg'
import CameraImg from '../images/camera.svg'
import SkillImg from '../images/skill.svg'


import React from 'react'

export const ProfileIcon: React.FC = () => {
  return <img src={ProfileImg}  alt="プロフィール" />
}

export const PCIcon: React.FC = () => {
  return <img src={PCImg}  alt="pc" />
}

export const CameraIcon: React.FC = () => {
  return <img src={CameraImg}  alt="camera" />
}

export const SkillIcon: React.FC = () => {
  return <img src={SkillImg}  alt="skill" />
}