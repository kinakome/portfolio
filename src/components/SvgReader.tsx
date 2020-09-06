import PCImg from '../images/pc.svg'
import CameraImg from '../images/camera.svg'
import LogoSvg from '../images/entrance/logo.svg'
import TitleSvg from '../images/entrance/title.svg'
import ButtonSvg from '../images/entrance/button.svg'


import React from 'react'

export const PCIcon: React.FC = () => {
  return <img src={PCImg}  alt="camera" />
}

export const CameraIcon: React.FC = () => {
  return <img src={CameraImg}  alt="camera" />
}

export const Logo: React.FC = () => {
  return <img src={LogoSvg}  alt="logo"  className="entrance__contents--logo"/>
}

export const Title: React.FC = () => {
  return <img src={TitleSvg}  alt="title" className="entrance__contents--title"/>
}

export const Button: React.FC = () => {
  return (
  <img src={ButtonSvg}  alt="button" className="entrance__contents--button"/>)
}