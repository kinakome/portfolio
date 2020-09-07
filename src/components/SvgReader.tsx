import PCImg from '../images/pc.svg'
import CameraImg from '../images/camera.svg'
import LogoSvg from '../images/entrance/logo.svg'
import TitleSvg from '../images/entrance/title.svg'
import ButtonSvg from '../images/entrance/button.svg'
import Dn from '../images/works/dn.svg'
import Portfolio from '../images/works/portfolio.svg'
import Bplus from '../images/works/b-plus.svg'
import IllustChat from '../images/works/illustya.svg'
import Tameru from '../images/works/tameru.svg'
import Other from '../images/works/other.svg'




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

export const PortfolioIcon: React.FC = () => {
  return (
  <img src={Portfolio}  alt="portfolio" />)
}

export const BplusIcon: React.FC = () => {
  return (
  <img src={Bplus}  alt="bplus" />)
}

export const DnIcon: React.FC = () => {
  return (
  <img src={Dn}  alt="dn" />)
}

export const IllustChatIcon: React.FC = () => {
  return (
  <img src={IllustChat}  alt="illustChat" />)
}

export const TameruIcon: React.FC = () => {
  return (
  <img src={Tameru}  alt="tameru" />)
}

export const OtherIcon: React.FC = () => {
  return (
  <img src={Other}  alt="other" />)
}